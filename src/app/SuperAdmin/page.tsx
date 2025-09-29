
'use client';

import { useEffect, useState } from 'react';
import { FileText, Eye, Users, TrendingUp, Mail, FolderOpen } from 'lucide-react';

interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalViews: number;
  totalContacts: number;
  totalFundingApplications: number;
}

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalViews: 0,
    totalContacts: 0,
    totalFundingApplications: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('admin-token');
      
      // Fetch blog stats
      const blogResponse = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      // Fetch contact stats
      const contactResponse = await fetch('/api/contact');

      // Fetch funding application stats
      const fundingResponse = await fetch('/api/admin/funding-applications/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      let contactCount = 0;
      let fundingCount = 0;

      if (contactResponse.ok) {
        const contactData = await contactResponse.json();
        contactCount = contactData.stats?.total || 0;
      }
      if (fundingResponse.ok) {
        const fundingData = await fundingResponse.json();
        fundingCount = fundingData.stats?.total || 0;
      }

      if (blogResponse.ok) {
        const blogData = await blogResponse.json();
        setStats({
          ...blogData.stats,
          totalContacts: contactCount,
          totalFundingApplications: fundingCount,
        });
      }
    } catch {
      // Handle error silently
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      name: 'Total Blogs',
      value: stats.totalBlogs,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      name: 'Published',
      value: stats.publishedBlogs,
      icon: Eye,
      color: 'bg-green-500',
    },
    {
      name: 'Drafts',
      value: stats.draftBlogs,
      icon: Users,
      color: 'bg-yellow-500',
    },
    {
      name: 'Total Views',
      value: stats.totalViews,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      name: 'Contacts',
      value: stats.totalContacts,
      icon: Mail,
      color: 'bg-indigo-500',
    },
    {
      name: 'Funding Applications',
      value: stats.totalFundingApplications,
      icon: FolderOpen,
      color: 'bg-pink-500',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          Welcome to the SuperAdmin panel. Manage your blog content and monitor performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {statCards.map((stat) => (
          <div
            key={stat.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className={`absolute ${stat.color} rounded-md p-3`}>
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value.toLocaleString()}
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/SuperAdmin/blogs/new"
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-gray-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                  <FileText className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Create New Blog
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Write and publish a new blog post
                </p>
              </div>
            </a>

            <a
              href="/SuperAdmin/blogs"
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-gray-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
                  <Eye className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Manage Blogs
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  View, edit, and manage all blog posts
                </p>
              </div>
            </a>

            <a
              href="/SuperAdmin/contacts"
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-gray-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                  <Mail className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  View Contacts
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Manage contact form submissions
                </p>
              </div>
            </a>

            <a
              href="/SuperAdmin/funding-applications"
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 rounded-lg border border-gray-200 hover:border-gray-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-pink-50 text-pink-700 ring-4 ring-white">
                  <FolderOpen className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  View Funding Applications
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Review and manage funding application submissions
                </p>
              </div>
            </a>

            <a
              href="/SuperAdmin/settings"
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-gray-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                  <TrendingUp className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Settings
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Configure system settings and preferences
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}