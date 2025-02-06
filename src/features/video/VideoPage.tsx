"use client";
import React, { useState } from "react";

import { VideoPlayer } from "@/features/video/sections/VideoPlayer";
import { LessonList } from "@/features/video/sections/LessonList";
import { CourseDescription } from "@/features/video/sections/CourseDescription";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header/header";
import { LESSONS_DATA, courseDescription } from "@/features/video/constants";

function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="flex flex-1 flex-col">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-800">Struktur Beton Bertulang - Level Dasar</h1>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <VideoPlayer
                  thumbnail="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  isPlaying={isPlaying}
                  onPlayPause={() => setIsPlaying(!isPlaying)}
                />
              </div>

              <LessonList lessons={LESSONS_DATA} />
            </div>

            <CourseDescription description={courseDescription} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default VideoPage;
