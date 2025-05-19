"use client"

import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ArrowLeft, MessageSquare, ThumbsUp, MessageCircle, Share2, Flag, Clock, Award, CheckCircle, Tag } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample thread data
const threadData = {
  id: 'thread1',
  title: 'How to create curved walls in AutoCAD?',
  category: 'autocad',
  author: {
    name: 'Agus Setiawan',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    badge: 'Intermediate',
    joinDate: 'Jan 2022',
    posts: 124
  },
  createdAt: '2 days ago',
  content: `
    <p>I've been working on a residential floor plan, and I need to create curved walls for a rounded entryway. I've tried using the Arc tool followed by the Wall command, but I'm having trouble getting consistent results.</p>
    
    <p>What's the best approach for creating curved walls in AutoCAD? I'd appreciate any tips or step-by-step instructions.</p>
    
    <p>Here are the specific issues I'm encountering:</p>
    <ul>
      <li>Wall thickness isn't consistent around the curve</li>
      <li>Connecting the curved wall to straight walls creates gaps</li>
      <li>Dimensioning the curved walls accurately</li>
    </ul>
    
    <p>Thanks in advance for your help!</p>
  `,
  likes: 24,
  views: 345,
  replies: [
    {
      id: 'reply1',
      author: {
        name: 'Ratna Dewi',
        avatarUrl: 'https://i.pravatar.cc/150?img=4',
        badge: 'Expert',
        joinDate: 'Mar 2020',
        posts: 532
      },
      createdAt: '2 days ago',
      content: `
        <p>There are several approaches for creating curved walls in AutoCAD. Here's the method I find most reliable:</p>
        
        <ol>
          <li>First, create your curved path using the PLINE command with the Arc option (A)</li>
          <li>Then use the OFFSET command to create parallel curves at your desired wall thickness</li>
          <li>Connect the ends with straight lines or arcs as needed</li>
          <li>Finally, use the REGION command to create closed shapes, then subtract/union as needed</li>
        </ol>
        
        <p>For connecting to straight walls, make sure your endpoint snaps are enabled and consider using the FILLET command with an appropriate radius to create smooth transitions.</p>
        
        <p>Hope this helps!</p>
      `,
      likes: 18,
      isAcceptedAnswer: true
    },
    {
      id: 'reply2',
      author: {
        name: 'Eko Purnomo',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        badge: 'Beginner',
        joinDate: 'Oct 2022',
        posts: 37
      },
      createdAt: '1 day ago',
      content: `
        <p>I had the same issue and found that using the POLYLINE command with width options works well too. You can:</p>
        
        <ol>
          <li>Type PLINE in the command line</li>
          <li>Before drawing, type W and set your wall width</li>
          <li>Then draw your curved wall with arc segments</li>
        </ol>
        
        <p>One limitation is that the width is uniform, which may not work for all wall types.</p>
      `,
      likes: 7,
      isAcceptedAnswer: false
    },
    {
      id: 'reply3',
      author: {
        name: 'Sri Wahyuni',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
        badge: 'Advanced',
        joinDate: 'Apr 2021',
        posts: 283
      },
      createdAt: '12 hours ago',
      content: `
        <p>For architectural drawings specifically, I'd recommend using the AEC objects if you have AutoCAD Architecture:</p>
        
        <ol>
          <li>Use the Wall tool which has built-in support for curved walls</li>
          <li>You can set properties like width, height, and materials</li>
          <li>Curved walls will automatically clean up intersections with straight walls</li>
        </ol>
        
        <p>If you're using standard AutoCAD, Ratna's approach is definitely the way to go.</p>
        
        <p>@Agus - I'd be happy to share some example drawings if that would help. Just let me know!</p>
      `,
      likes: 12,
      isAcceptedAnswer: false
    }
  ],
  tags: ['autocad', 'architecture', 'walls', '2d-drawing']
};

export default function ThreadPage() {
  const params = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the reply to the server
    console.log('Submitting reply:', replyContent);
    setReplyContent('');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="container mx-auto p-4">
          <div className="mb-6">
            <Link href="/forum" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Forum
            </Link>
          </div>

          {/* Thread header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                  AutoCAD
                </span>
                {threadData.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl font-bold mb-4">{threadData.title}</h1>

              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src={threadData.author.avatarUrl} alt={threadData.author.name} />
                </div>
                <div>
                  <div className="font-medium">{threadData.author.name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <span className="mr-2">{threadData.author.badge}</span>
                    <span>Posted {threadData.createdAt}</span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: threadData.content }}></div>

              <div className="flex items-center text-sm text-gray-500 pt-4 border-t">
                <button className="flex items-center mr-4 hover:text-blue-600">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>{threadData.likes} Likes</span>
                </button>
                <div className="flex items-center mr-4">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span>{threadData.replies.length} Replies</span>
                </div>
                <button className="flex items-center mr-4 hover:text-blue-600">
                  <Share2 className="h-4 w-4 mr-1" />
                  <span>Share</span>
                </button>
                <button className="flex items-center text-red-500 hover:text-red-600">
                  <Flag className="h-4 w-4 mr-1" />
                  <span>Report</span>
                </button>
              </div>
            </div>
          </div>

          {/* Replies section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Replies ({threadData.replies.length})
            </h2>

            <div className="space-y-6">
              {threadData.replies.map(reply => (
                <div key={reply.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${reply.isAcceptedAnswer ? 'border-l-4 border-green-500' : ''}`}>
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="hidden sm:block mr-4">
                        <div className="h-10 w-10 rounded-full overflow-hidden mb-2">
                          <img src={reply.author.avatarUrl} alt={reply.author.name} />
                        </div>
                        <div className="text-center">
                          <button className="text-gray-400 hover:text-blue-500 block mx-auto">
                            <ThumbsUp className="h-5 w-5" />
                          </button>
                          <span className="text-sm">{reply.likes}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <div className="flex items-center">
                            <div className="sm:hidden mr-3">
                              <div className="h-8 w-8 rounded-full overflow-hidden">
                                <img src={reply.author.avatarUrl} alt={reply.author.name} />
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">{reply.author.name}</div>
                              <div className="text-xs text-gray-500 flex flex-wrap items-center gap-2">
                                <span className="px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                                  {reply.author.badge}
                                </span>
                                <span>Joined {reply.author.joinDate}</span>
                                <span>{reply.author.posts} posts</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center">
                            {reply.isAcceptedAnswer && (
                              <span className="flex items-center text-green-600 text-sm mr-3">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Accepted Answer
                              </span>
                            )}
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {reply.createdAt}
                            </span>
                          </div>
                        </div>

                        <div className="prose max-w-none mb-4" dangerouslySetInnerHTML={{ __html: reply.content }}></div>

                        <div className="flex items-center text-sm text-gray-500 sm:hidden">
                          <button className="flex items-center mr-3 hover:text-blue-600">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{reply.likes}</span>
                          </button>
                        </div>

                        <div className="flex items-center justify-end mt-2">
                          <button className="text-sm text-blue-600 hover:text-blue-800">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reply form */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Add Your Reply</h2>

              <form onSubmit={handleSubmitReply}>
                <div className="mb-4">
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                    placeholder="Share your knowledge or ask a follow-up question..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Post Reply
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Related threads */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Related Discussions</h2>

              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <Link href="#" className="font-medium hover:text-blue-600 block mb-1">
                      Another related AutoCAD question {i}
                    </Link>
                    <div className="flex text-sm text-gray-500">
                      <span className="mr-3">15 replies</span>
                      <span>2 days ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
