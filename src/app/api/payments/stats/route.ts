import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Payment from '@/models/Payment';

export async function GET() {
  try {
    await connectDB();

    // Get total revenue
    const revenueResult = await Payment.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);
    const totalRevenue = revenueResult[0]?.total || 0;

    // Get total transactions
    const totalTransactions = await Payment.countDocuments({ status: 'completed' });

    // Get total customers (unique emails)
    const uniqueCustomers = await Payment.distinct('userEmail', { status: 'completed' });
    const totalCustomers = uniqueCustomers.length;

    // Get revenue by purchase type
    const revenueByType = await Payment.aggregate([
      { $match: { status: 'completed' } },
      {
        $group: {
          _id: '$purchaseType',
          total: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
    ]);

    // Get recent transactions
    const recentTransactions = await Payment.find({ status: 'completed' })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    // Get monthly revenue (last 12 months)
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const monthlyRevenue = await Payment.aggregate([
      {
        $match: {
          status: 'completed',
          createdAt: { $gte: twelveMonthsAgo },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
          },
          revenue: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } },
    ]);

    // Get top courses/items
    const topItems = await Payment.aggregate([
      { $match: { status: 'completed' } },
      {
        $group: {
          _id: '$itemName',
          revenue: { $sum: '$amount' },
          sales: { $sum: 1 },
        },
      },
      { $sort: { revenue: -1 } },
      { $limit: 10 },
    ]);

    return NextResponse.json({
      success: true,
      data: {
        overview: {
          totalRevenue,
          totalTransactions,
          totalCustomers,
          averageOrderValue: totalTransactions > 0 ? totalRevenue / totalTransactions : 0,
        },
        revenueByType,
        recentTransactions,
        monthlyRevenue,
        topItems,
      },
    });
  } catch (error) {
    console.error('Error fetching payment stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment statistics' },
      { status: 500 }
    );
  }
}