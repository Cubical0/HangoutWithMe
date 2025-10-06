'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  User, 
  Calendar, 
  MessageCircle, 
  RefreshCw, 
  Filter,
  BarChart3,
  Globe,
  GraduationCap,
  TrendingUp,
  FileText,
  Home
} from 'lucide-react';

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  source: string;
  category: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  createdAt: string;
}

interface ContactsResponse {
  success: boolean;
  data: Contact[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
  stats: {
    total: number;
    bySource: { [key: string]: number };
    byCategory: { [key: string]: number };
  };
}

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stats, setStats] = useState<Record<string, unknown>>({});
  const [filters, setFilters] = useState({
    source: '',
    category: '',
  });

  const fetchContacts = async (page: number = 1, filterSource = '', filterCategory = '') => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
      });
      
      if (filterSource) params.append('source', filterSource);
      if (filterCategory) params.append('category', filterCategory);

      const response = await fetch(`/api/contact?${params}`);
      const result: ContactsResponse = await response.json();

      if (result.success) {
        setContacts(result.data);
        setCurrentPage(result.pagination.page);
        setTotalPages(result.pagination.pages);
        setStats(result.stats);
        setError(null);
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (err) {
      setError('Error loading contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleFilterChange = (type: 'source' | 'category', value: string) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    fetchContacts(1, newFilters.source, newFilters.category);
  };

  const clearFilters = () => {
    setFilters({ source: '', category: '' });
    fetchContacts(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'home': return <Home className="w-4 h-4" />;
      case 'services': return <Globe className="w-4 h-4" />;
      case 'courses': return <GraduationCap className="w-4 h-4" />;
      case 'trading': return <TrendingUp className="w-4 h-4" />;
      case 'blog': return <FileText className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'home': return 'bg-blue-100 text-blue-800';
      case 'services': return 'bg-green-100 text-green-800';
      case 'courses': return 'bg-purple-100 text-purple-800';
      case 'trading': return 'bg-orange-100 text-orange-800';
      case 'blog': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading && contacts.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3 text-gray-600">
          <RefreshCw className="w-6 h-6 animate-spin" />
          <span>Loading contacts...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <Mail className="w-8 h-8 text-blue-600" />
          Contact Submissions
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage and view contact form submissions from all pages
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Contacts
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {(stats.total || 0).toString()}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Source Stats */}
        {Object.entries(stats.bySource || {}).map(([source, count]) => (
          <div key={source} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {getSourceIcon(source)}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate capitalize">
                      {source} Page
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {count as number}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Source
                </label>
                <select
                  value={filters.source}
                  onChange={(e) => handleFilterChange('source', e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">All Sources</option>
                  <option value="home">Home</option>
                  <option value="services">Services</option>
                  <option value="courses">Courses</option>
                  <option value="trading">Trading</option>
                  <option value="blog">Blog</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">All Categories</option>
                  <option value="general">General</option>
                  <option value="services">Services</option>
                  <option value="education">Education</option>
                  <option value="trading">Trading</option>
                  <option value="blog">Blog</option>
                  <option value="support">Support</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Filter className="w-4 h-4 mr-2" />
                Clear
              </button>
              <button
                onClick={() => fetchContacts(currentPage, filters.source, filters.category)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Contacts List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {contacts.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
            <p className="text-gray-500">
              {filters.source || filters.category 
                ? 'Try adjusting your filters or clear them to see all contacts'
                : 'Contact submissions will appear here'
              }
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {contacts.map((contact, index) => (
              <motion.li
                key={contact._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="w-5 h-5 text-gray-400" />
                      <p className="text-sm font-medium text-gray-900">
                        {contact.firstName} {contact.lastName}
                      </p>
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {contact.email}
                      </a>
                      <div className="flex gap-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSourceColor(contact.source)}`}>
                          {getSourceIcon(contact.source)}
                          <span className="ml-1 capitalize">{contact.source}</span>
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                          {contact.category}
                        </span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <p className="text-sm font-medium text-gray-700">Subject:</p>
                      <p className="text-sm text-gray-900">{contact.subject}</p>
                    </div>

                    {contact.phone && (
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700">Phone:</p>
                        <p className="text-sm text-gray-900">{contact.phone}</p>
                      </div>
                    )}

                    {contact.company && (
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700">Company:</p>
                        <p className="text-sm text-gray-900">{contact.company}</p>
                      </div>
                    )}

                    {contact.serviceInterest && (
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700">Service Interest:</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {contact.serviceInterest}
                        </span>
                      </div>
                    )}

                    <div className="mb-2">
                      <p className="text-sm font-medium text-gray-700">Message:</p>
                      <p className="text-sm text-gray-600 line-clamp-3">{contact.message}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {formatDate(contact.createdAt)}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => fetchContacts(page, filters.source, filters.category)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  page === currentPage
                    ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                } ${page === 1 ? 'rounded-l-md' : ''} ${page === totalPages ? 'rounded-r-md' : ''}`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}