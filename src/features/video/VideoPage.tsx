"use client";
import React, { useState } from "react";

import { VideoPlayer } from "@/features/video/sections/VideoPlayer";
import { LessonList } from "@/features/video/sections/LessonList";
import { CourseDescription } from "@/features/video/sections/CourseDescription";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header/header";
import { LESSONS_DATA, courseDescription } from "@/features/video/constants";
function VideoPage(data: any | undefined) {
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
                <VideoPlayer url="https://youtu.be/_fjhLOWbSqc?si=3xOVjuAz1nnZwOSJ" />
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
