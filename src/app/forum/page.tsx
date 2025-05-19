"use client"

import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar'
import { Search, MessageSquare, Users, Tag, Filter, Plus, TrendingUp, Clock, Award, MessageCircle } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';

// Sample forum categories
const forumCategories = [
  { id: 'all', name: 'All Categories', count: 248 },
  { id: 'autocad', name: 'AutoCAD', count: 87 },
  { id: 'rab', name: 'Budget Planning (RAB)', count: 56 },
  { id: 'sap2000', name: 'SAP2000', count: 43 },
  { id: 'general', name: 'General Discussion', count: 62 }
];

// Sample discussion threads
const discussionThreads = [
  {
    id: 'thread1',
    title: 'How to create curved walls in AutoCAD?',
    category: 'autocad',
    author: {
      name: 'Agus Setiawan',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      badge: 'Intermediate'
    },
    replies: 24,
    views: 345,
    lastActivity: '12 minutes ago',
    isHot: true,
    isSticky: false,
    isSolved: true
  },
  {
    id: 'thread2',
    title: 'Material cost estimation best practices for commercial projects',
    category: 'rab',
    author: {
      name: 'Sri Wahyuni',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      badge: 'Advanced'
    },
    replies: 18,
    views: 203,
    lastActivity: '3 hours ago',
    isHot: false,
    isSticky: true,
    isSolved: false
  },
  {
    id: 'thread3',
    title: 'SAP2000 seismic analysis tutorial request',
    category: 'sap2000',
    author: {
      name: 'Eko Purnomo',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      badge: 'Beginner'
    },
    replies: 7,
    views: 128,
    lastActivity: '1 day ago',
    isHot: false,
    isSticky: false,
    isSolved: false
  },
  {
    id: 'thread4',
    title: 'Best practices for organizing layers in AutoCAD',
    category: 'autocad',
    author: {
      name: 'Ratna Dewi',
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
      badge: 'Expert'
    },
    replies: 35,
    views: 512,
    lastActivity: '2 days ago',
    isHot: true,
    isSticky: false,
    isSolved: true
  },
  {
    id: 'thread5',
    title: 'How to handle labor cost fluctuations in long-term projects?',
    category: 'rab',
    author: {
      name: 'Darmawan Putra',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      badge: 'Intermediate'
    },
    replies: 14,
    views: 187,
    lastActivity: '3 days ago',
    isHot: false,
    isSticky: false,
    isSolved: true
  }
];

export default function ForumPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // Filter threads based on category and search query
  const filteredThreads = discussionThreads.filter(thread => {
    const matchesCategory = selectedCategory === 'all' || thread.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      thread.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort threads based on selected sort option
  const sortedThreads = [...filteredThreads].sort((a, b) => {
    if (sortBy === 'recent') {
      // This is simplified - in a real app, you'd compare actual dates
      return a.lastActivity < b.lastActivity ? 1 : -1;
    } else if (sortBy === 'popular') {
      return b.views - a.views;
    } else {
      return 0;
    }
  });

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'autocad': return 'bg-blue-100 text-blue-800';
      case 'rab': return 'bg-green-100 text-green-800';
      case 'sap2000': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Engineering Forum</h1>
              <p className="text-gray-600">
                Ask questions, share knowledge, and connect with fellow engineers
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4 mr-1" />
              New Thread
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left sidebar - Categories */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h2 className="font-medium mb-3 flex items-center text-gray-700">
                  <Tag className="h-4 w-4 mr-2" />
                  Categories
                </h2>
                <div className="space-y-1">
                  {forumCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex justify-between items-center ${selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="font-medium mb-3 flex items-center text-gray-700">
                  <Users className="h-4 w-4 mr-2" />
                  Top Contributors
                </h2>
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?img=${i + 5}`} alt="User avatar" />
                      </div>
                      <div className="ml-2">
                        <div className="text-sm font-medium">User Name</div>
                        <div className="text-xs text-gray-500">125 posts</div>
                      </div>
                      <div className="ml-auto">
                        <Award className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1">
              {/* Search and filter */}
              <div className="mb-4 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <div className="flex gap-2">
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white flex items-center">
                    <Filter className="h-4 w-4 mr-1" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>

              {/* Thread list */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {sortedThreads.map((thread, index) => (
                  <Link
                    href={`/forum/${thread.id}`}
                    key={thread.id}
                    className={`block p-4 hover:bg-gray-50 transition-colors ${index !== sortedThreads.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 hidden sm:block">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img src={thread.author.avatarUrl} alt={thread.author.name} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1 flex-wrap gap-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeColor(thread.category)}`}>
                            {thread.category === 'autocad' ? 'AutoCAD' :
                              thread.category === 'rab' ? 'Budget Planning' :
                                thread.category === 'sap2000' ? 'SAP2000' : 'General'}
                          </span>
                          {thread.isSticky && (
                            <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-medium">
                              Pinned
                            </span>
                          )}
                          {thread.isHot && (
                            <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-medium flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Hot
                            </span>
                          )}
                          {thread.isSolved && (
                            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                              Solved
                            </span>
                          )}
                        </div>
                        <h3 className="font-medium text-lg mb-1">{thread.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2 flex-wrap">
                          <span className="mr-4">{thread.author.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs mr-4">
                            {thread.author.badge}
                          </span>
                          <span className="flex items-center mr-4">
                            <Clock className="h-3 w-3 mr-1" />
                            {thread.lastActivity}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="flex items-center mr-4">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            <span>{thread.replies} replies</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{thread.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
