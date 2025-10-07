'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Save, Eye, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import MarkdownGuide from '@/components/admin/MarkdownGuide';

interface BlogFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  author: {
    name: string;
    avatar: string;
    bio: string;
    designation: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}

export default function EditBlogPage() {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    description: '',
    content: '',
    excerpt: '',
    category: '',
    tags: [],
    thumbnail: '',
    featured: false,
    status: 'draft',
    author: {
      name: '',
      avatar: '',
      bio: '',
      designation: '',
    },
    seo: {
      title: '',
      description: '',
      keywords: [],
    },
  });

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [tagInput, setTagInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;

  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      const token = localStorage.getItem('admin-token');
      const response = await fetch(`/api/blogs/${blogId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(data.data);
      } else {
        alert('Failed to fetch blog');
        router.push('/SuperAdmin/blogs');
      }
    } catch (error) {
      alert('Failed to fetch blog');
      router.push('/SuperAdmin/blogs');
    } finally {
      setInitialLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('admin-token');
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/SuperAdmin/blogs');
      } else {
        alert(data.error || 'Failed to update blog');
      }
    } catch (error) {
      alert('Failed to update blog');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof BlogFormData] as Record<string, unknown>),
          [child]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove),
    }));
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.seo.keywords.includes(keywordInput.trim())) {
      setFormData(prev => ({
        ...prev,
        seo: {
          ...prev.seo,
          keywords: [...prev.seo.keywords, keywordInput.trim()],
        },
      }));
      setKeywordInput('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      seo: {
        ...prev.seo,
        keywords: prev.seo.keywords.filter(keyword => keyword !== keywordToRemove),
      },
    }));
  };

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4">
          <Link
            href="/SuperAdmin/blogs"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Blogs
          </Link>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">Edit Blog</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                    Slug *
                  </label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.slug}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                    Excerpt *
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={2}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.excerpt}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Content * (Markdown Supported)
                  </label>
                  
                  {/* Markdown Guide Component */}
                  <div className="mt-2 mb-3">
                    <MarkdownGuide />
                  </div>
                  
                  <textarea
                    id="content"
                    name="content"
                    rows={20}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white font-mono"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Write your blog content here using Markdown formatting..."
                  />
                </div>
              </div>
            </div>

            {/* Author Information */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Author Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="author.name" className="block text-sm font-medium text-gray-700">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    id="author.name"
                    name="author.name"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.author.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="author.designation" className="block text-sm font-medium text-gray-700">
                    Designation *
                  </label>
                  <input
                    type="text"
                    id="author.designation"
                    name="author.designation"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.author.designation}
                    onChange={handleChange}
                    placeholder="Senior Content Writer"
                  />
                </div>

                <div>
                  <label htmlFor="author.avatar" className="block text-sm font-medium text-gray-700">
                    Profile Picture URL *
                  </label>
                  <p className="text-xs text-gray-500 mt-1">Recommended: 400x400px square image</p>
                  <input
                    type="url"
                    id="author.avatar"
                    name="author.avatar"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.author.avatar}
                    onChange={handleChange}
                    placeholder="https://example.com/profile.jpg"
                  />
                </div>

                <div>
                  <label htmlFor="author.bio" className="block text-sm font-medium text-gray-700">
                    Author Bio *
                  </label>
                  <textarea
                    id="author.bio"
                    name="author.bio"
                    rows={3}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.author.bio}
                    onChange={handleChange}
                    placeholder="Brief bio about the author..."
                  />
                </div>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="seo.title" className="block text-sm font-medium text-gray-700">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    id="seo.title"
                    name="seo.title"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.seo.title}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="seo.description" className="block text-sm font-medium text-gray-700">
                    SEO Description
                  </label>
                  <textarea
                    id="seo.description"
                    name="seo.description"
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.seo.description}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    SEO Keywords
                  </label>
                  <div className="mt-1 flex">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                      value={keywordInput}
                      onChange={(e) => setKeywordInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                      placeholder="Add keyword"
                    />
                    <button
                      type="button"
                      onClick={addKeyword}
                      className="px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      Add
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.seo.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {keyword}
                        <button
                          type="button"
                          onClick={() => removeKeyword(keyword)}
                          className="ml-1 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Publish Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    id="featured"
                    name="featured"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                    Featured Post
                  </label>
                </div>
              </div>
            </div>

            {/* Category & Tags */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Category & Tags</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Market Analysis">Market Analysis</option>
                    <option value="DeFi">DeFi</option>
                    <option value="Education">Education</option>
                    <option value="Technology">Technology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tags
                  </label>
                  <div className="mt-1 flex">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      placeholder="Add tag"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      Add
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 text-gray-600 hover:text-gray-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Image</h3>
              
              <div>
                <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
                  Image URL *
                </label>
                <p className="text-xs text-gray-500 mt-1">Recommended: 1200x630px for optimal display</p>
                <input
                  type="url"
                  id="thumbnail"
                  name="thumbnail"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 bg-white"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  {loading ? 'Updating...' : 'Update Blog'}
                </button>
                
                <Link
                  href={`/blog/${formData.slug}`}
                  target="_blank"
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}