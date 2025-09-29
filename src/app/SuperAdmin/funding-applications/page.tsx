import React from 'react';
import connectDB from '@/lib/mongodb';
import FundingApplication from '@/models/FundingApplication';
import type { IFundingApplication } from '@/models/FundingApplication';

// Force dynamic rendering to avoid build-time MongoDB connection issues
export const dynamic = 'force-dynamic';

export default async function FundingApplicationsPage() {
  let applications: IFundingApplication[] = [];
  let error: string | null = null;

  try {
    await connectDB();
    applications = await FundingApplication.find().sort({ submittedAt: -1 }).lean() as unknown as IFundingApplication[];
  } catch (err) {
    console.error('Failed to fetch funding applications:', err);
    error = 'Failed to load funding applications. Please check your database connection.';
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Funding Applications</h1>
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Funding Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app: IFundingApplication) => (
          <div
            key={String(app._id)}
            className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl shadow-lg p-6 transition hover:scale-[1.03] hover:bg-white/30"
          >
            <h2 className="text-xl font-semibold mb-2">{app.companyName}</h2>
            <p className="text-sm text-gray-700 mb-1">Contact: {app.firstName} {app.lastName}</p>
            <p className="text-sm text-gray-700 mb-1">Email: {app.email}</p>
            <p className="text-sm text-gray-700 mb-1">Phone: {app.phone}</p>
            <p className="text-sm text-gray-700 mb-1">Funding Amount: {app.fundingAmount}</p>
            <p className="text-sm text-gray-700 mb-1">Submitted: {new Date(app.submittedAt).toLocaleString()}</p>
            {app.pitchDeckPath && (
              <a href={app.pitchDeckPath.replace(process.cwd(), '')} className="text-blue-600 underline mr-2" target="_blank" rel="noopener noreferrer">Pitch Deck</a>
            )}
            {app.businessPlanPath && (
              <a href={app.businessPlanPath.replace(process.cwd(), '')} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Business Plan</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
