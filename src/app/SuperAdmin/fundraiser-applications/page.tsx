'use client';

import React, { useEffect, useState } from 'react';
import { 
  User, 
  Building2, 
  DollarSign, 
  TrendingUp,
  Globe,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

interface FundraiserApplication {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  companyName: string;
  website?: string;
  industry: string;
  foundedYear: string;
  teamSize: string;
  fundingStage: string;
  fundingAmount: string;
  currentRevenue?: string;
  businessModel: string;
  targetMarket: string;
  competitiveAdvantage: string;
  useOfFunds: string;
  pitchDeck?: string;
  additionalNotes?: string;
  serviceType?: string;
  submittedAt: string;
  status?: string;
}

export default function FundraiserApplicationsPage() {
  const [applications, setApplications] = useState<FundraiserApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<FundraiserApplication | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/admin/fundraiser-applications');
      const data = await response.json();
      
      if (data.success) {
        setApplications(data.applications);
      } else {
        setError('Failed to load applications');
      }
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError('Failed to load applications');
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const response = await fetch('/api/admin/fundraiser-applications', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      });

      const data = await response.json();

      if (data.success) {
        // Update local state
        setApplications(prev =>
          prev.map(app =>
            app._id === id ? { ...app, status } : app
          )
        );
        setSelectedApp(prev => prev ? { ...prev, status } : null);
        alert(`Application ${status} successfully!`);
      } else {
        alert('Failed to update application status');
      }
    } catch (err) {
      console.error('Error updating application:', err);
      alert('An error occurred while updating the application');
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true;
    return app.status === filter;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-xl">Loading applications...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-6">Fundraiser Applications</h1>
        <div className="backdrop-blur-lg bg-red-500/10 border border-red-500/30 rounded-xl p-6">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Fundraiser Applications</h1>
          <p className="text-white/60">Manage and review fundraising applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Total Applications</p>
                <p className="text-3xl font-bold mt-1">{applications.length}</p>
              </div>
              <FileText className="h-10 w-10 text-white/40" />
            </div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Pending</p>
                <p className="text-3xl font-bold mt-1 text-yellow-400">
                  {applications.filter(a => a.status === 'pending' || !a.status).length}
                </p>
              </div>
              <Clock className="h-10 w-10 text-yellow-400/60" />
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Approved</p>
                <p className="text-3xl font-bold mt-1 text-green-400">
                  {applications.filter(a => a.status === 'approved').length}
                </p>
              </div>
              <CheckCircle className="h-10 w-10 text-green-400/60" />
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Rejected</p>
                <p className="text-3xl font-bold mt-1 text-red-400">
                  {applications.filter(a => a.status === 'rejected').length}
                </p>
              </div>
              <XCircle className="h-10 w-10 text-red-400/60" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === status
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredApplications.map((app) => (
            <div
              key={app._id}
              onClick={() => setSelectedApp(app)}
              className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-xl p-6 hover:bg-white/[0.12] transition-all duration-300 cursor-pointer hover:scale-[1.02] group relative"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

              <div className="relative z-10">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(app.status)}`}>
                    {getStatusIcon(app.status)}
                    <span className="text-xs font-medium capitalize">{app.status || 'pending'}</span>
                  </div>
                  <span className="text-xs text-white/40">
                    {new Date(app.submittedAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Company Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{app.companyName}</h3>
                  <p className="text-sm text-white/60">{app.industry}</p>
                </div>

                {/* Key Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-white/40" />
                    <span className="text-white/80">{app.fullName} - {app.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-white/40" />
                    <span className="text-white/80">{app.fundingAmount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-white/40" />
                    <span className="text-white/80 capitalize">{app.fundingStage.replace('-', ' ')}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-xl p-12 text-center">
            <FileText className="h-16 w-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60">No applications found</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedApp && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedApp.companyName}</h2>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(selectedApp.status)}`}>
                    {getStatusIcon(selectedApp.status)}
                    <span className="text-sm font-medium capitalize">{selectedApp.status || 'pending'}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </h3>
                  <div className="space-y-2 pl-7">
                    <div>
                      <p className="text-sm text-white/60">Full Name</p>
                      <p className="text-white">{selectedApp.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <p className="text-white">{selectedApp.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <p className="text-white">{selectedApp.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Role</p>
                      <p className="text-white">{selectedApp.role}</p>
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Company Information
                  </h3>
                  <div className="space-y-2 pl-7">
                    <div>
                      <p className="text-sm text-white/60">Industry</p>
                      <p className="text-white capitalize">{selectedApp.industry}</p>
                    </div>
                    {selectedApp.website && (
                      <div>
                        <p className="text-sm text-white/60">Website</p>
                        <a href={selectedApp.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                          {selectedApp.website}
                        </a>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-white/60">Founded Year</p>
                      <p className="text-white">{selectedApp.foundedYear}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Team Size</p>
                      <p className="text-white">{selectedApp.teamSize}</p>
                    </div>
                  </div>
                </div>

                {/* Fundraising Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Fundraising Details
                  </h3>
                  <div className="space-y-2 pl-7">
                    <div>
                      <p className="text-sm text-white/60">Funding Stage</p>
                      <p className="text-white capitalize">{selectedApp.fundingStage.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Funding Amount</p>
                      <p className="text-white">{selectedApp.fundingAmount}</p>
                    </div>
                    {selectedApp.currentRevenue && (
                      <div>
                        <p className="text-sm text-white/60">Current Revenue</p>
                        <p className="text-white">{selectedApp.currentRevenue}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Submission Details
                  </h3>
                  <div className="space-y-2 pl-7">
                    <div>
                      <p className="text-sm text-white/60">Submitted At</p>
                      <p className="text-white">{new Date(selectedApp.submittedAt).toLocaleString()}</p>
                    </div>
                    {selectedApp.serviceType && (
                      <div>
                        <p className="text-sm text-white/60">Service Type</p>
                        <p className="text-white">{selectedApp.serviceType}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Full Width Sections */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Business Model</h3>
                  <p className="text-white/80 bg-white/5 rounded-lg p-4 border border-white/10">
                    {selectedApp.businessModel}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Target Market</h3>
                  <p className="text-white/80 bg-white/5 rounded-lg p-4 border border-white/10">
                    {selectedApp.targetMarket}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Competitive Advantage</h3>
                  <p className="text-white/80 bg-white/5 rounded-lg p-4 border border-white/10">
                    {selectedApp.competitiveAdvantage}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Use of Funds</h3>
                  <p className="text-white/80 bg-white/5 rounded-lg p-4 border border-white/10">
                    {selectedApp.useOfFunds}
                  </p>
                </div>

                {selectedApp.pitchDeck && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Pitch Deck</h3>
                    <a
                      href={selectedApp.pitchDeck}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:underline"
                    >
                      <Globe className="h-4 w-4" />
                      View Pitch Deck
                    </a>
                  </div>
                )}

                {selectedApp.additionalNotes && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Additional Notes</h3>
                    <p className="text-white/80 bg-white/5 rounded-lg p-4 border border-white/10">
                      {selectedApp.additionalNotes}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={() => updateApplicationStatus(selectedApp._id, 'approved')}
                  className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Approve
                </button>
                <button 
                  onClick={() => updateApplicationStatus(selectedApp._id, 'rejected')}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}