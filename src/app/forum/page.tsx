"use client"

import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar'
import { Search, Users, Tag, Filter, Plus, TrendingUp, Clock, Award, MessageCircle } from 'lucide-react';
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
      avatarUrl: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
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
      avatarUrl: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
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
      avatarUrl: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
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
      avatarUrl: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
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
      avatarUrl: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
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
          <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
            <div>
              <h1 className="mb-1 text-2xl font-bold">Engineering Forum</h1>
              <p className="text-gray-600">Ask questions, share knowledge, and connect with fellow engineers</p>
            </div>
            <button className="mt-4 flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 md:mt-0">
              <Plus className="mr-1 h-4 w-4" />
              New Thread
            </button>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Left sidebar - Categories */}
            <div className="w-full flex-shrink-0 lg:w-64">
              <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
                <h2 className="mb-3 flex items-center font-medium text-gray-700">
                  <Tag className="mr-2 h-4 w-4" />
                  Categories
                </h2>
                <div className="space-y-1">
                  {forumCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        selectedCategory === category.id
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-md">
                <h2 className="mb-3 flex items-center font-medium text-gray-700">
                  <Users className="mr-2 h-4 w-4" />
                  Top Contributors
                </h2>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                        <img
                          src={`https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg`}
                          alt="User avatar"
                        />
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
              <div className="mb-4 flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <div className="flex gap-2">
                  <select
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2">
                    <Filter className="mr-1 h-4 w-4" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>

              {/* Thread list */}
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                {sortedThreads.map((thread, index) => (
                  <Link
                    href={`/forum/${thread.id}`}
                    key={thread.id}
                    className={`block p-4 transition-colors hover:bg-gray-50 ${
                      index !== sortedThreads.length - 1 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 hidden sm:block">
                        <div className="h-10 w-10 overflow-hidden rounded-full">
                          <img src={thread.author.avatarUrl} alt={thread.author.name} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${getCategoryBadgeColor(thread.category)}`}
                          >
                            {thread.category === "autocad"
                              ? "AutoCAD"
                              : thread.category === "rab"
                                ? "Budget Planning"
                                : thread.category === "sap2000"
                                  ? "SAP2000"
                                  : "General"}
                          </span>
                          {thread.isSticky && (
                            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
                              Pinned
                            </span>
                          )}
                          {thread.isHot && (
                            <span className="flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Hot
                            </span>
                          )}
                          {thread.isSolved && (
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                              Solved
                            </span>
                          )}
                        </div>
                        <h3 className="mb-1 text-lg font-medium">{thread.title}</h3>
                        <div className="mb-2 flex flex-wrap items-center text-sm text-gray-500">
                          <span className="mr-4">{thread.author.name}</span>
                          <span className="mr-4 rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                            {thread.author.badge}
                          </span>
                          <span className="mr-4 flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {thread.lastActivity}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="mr-4 flex items-center">
                            <MessageCircle className="mr-1 h-4 w-4" />
                            <span>{thread.replies} replies</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
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
  );
}
