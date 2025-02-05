"use client";
import React, { useState } from "react";

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header/header";
import { CourseCard } from "@/features/dashboard/sections/CourseCard";
import { LearningPathCard } from "@/features/dashboard/sections/LearningPathCard";
import { LearningPathModal } from "@/features/dashboard/sections/LearningPathModal";
import { COURSES_DATA, LEARNING_PATHS_DATA, LearningPath } from "./constants";

function DashboardPage() {
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="p-6">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Selamat Datang, P2MW! 👋</h1>

          {/* Current Courses */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Video Pembelajaran Terbaru</h2>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Lihat Semua
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {COURSES_DATA.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </section>

          {/* Learning Paths */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Learning Path yang Direkomendasikan</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {LEARNING_PATHS_DATA.map((path, index) => (
                <LearningPathCard key={index} path={path} onClick={setSelectedPath} />
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Modals */}
      {selectedPath && <LearningPathModal learningPath={selectedPath} onClose={() => setSelectedPath(null)} />}
    </div>
  );
}

export default DashboardPage;
