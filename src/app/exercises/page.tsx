"use client"

import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar'
import React, { useState } from 'react'

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-50">
          <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

          <div className="flex-1 overflow-auto">
            <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <main>
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Exercises</h1>
                <p className="text-gray-600 mb-4">
                  Here you can find a list of exercises to practice your skills.
                </p>
              </div>
            </main>
          </div>
        </div>
  )
}
