"use client";
import React, { useState } from "react";
import { Header } from "@/components/layout/Header/header";
import { Sidebar } from "@/components/layout/Sidebar";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Structural Analysis Fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60",
    progress: 75,
    instructor: "Dr. Rina Wulandari",
    duration: "8 weeks",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Advanced Concrete Design",
    thumbnail: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&auto=format&fit=crop&q=60",
    progress: 100,
    instructor: "Prof. Ahmad Suryadi",
    duration: "12 weeks",
    status: "completed",
  },
  {
    id: 3,
    title: "Foundation Engineering",
    thumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=60",
    progress: 30,
    instructor: "Arief Widodo",
    duration: "10 weeks",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Steel Structure Design",
    thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&auto=format&fit=crop&q=60",
    progress: 0,
    instructor: "Dewi Purnama",
    duration: "10 weeks",
    status: "not-started",
  },
];

export default function CoursesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = courses.filter((course) => {
    if (activeTab === "all") return true;
    if (activeTab === "in-progress") return course.status === "in-progress";
    if (activeTab === "completed") return course.status === "completed";
    return true;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main>
          <div className="mx-auto max-w-7xl p-6">
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
              <p className="text-base text-gray-600">Track your progress and continue learning</p>
            </div>

            {/* Filter Tabs */}
            <div className="mb-8 flex gap-4 border-b border-gray-200">
              {[
                { id: "all", label: "All Courses" },
                { id: "in-progress", label: "In Progress" },
                { id: "completed", label: "Completed" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab.id
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{course.title}</h3>
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                      <span>{course.instructor}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                    </div>

                    <div className="mb-4">
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full bg-green-500 transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <button className="mb-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                      {course.progress === 0 ? "Start Course" : "Continue Learning"}
                    </button>

                    <a
                      href={`/courses/${course.id}`}
                      className="block text-center text-sm text-blue-600 hover:text-blue-700"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
