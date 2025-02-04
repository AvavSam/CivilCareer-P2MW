"use client";
import React, { useState } from "react";
import {
  Home,
  BookOpen,
  FileQuestion,
  Users,
  MessageSquare,
  Settings,
  Search,
  Bell,
  // User,
  Play,
  Pause,
  Maximize2,
  CheckCircle,
  Circle,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`flex min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Sidebar */}
      <div
        className={`fixed h-full w-64 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } border-r ${isDarkMode ? "border-gray-700" : "border-gray-200"} p-4`}
      >
        <div className="mb-8 flex items-center">
          <BookOpen className={`h-8 w-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
          <span className={`ml-2 text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>CivilCareer</span>
        </div>

        <nav>
          {[
            { icon: <Home size={20} />, text: "Beranda" },
            { icon: <BookOpen size={20} />, text: "Kursus Saya" },
            { icon: <FileQuestion size={20} />, text: "Latihan Soal" },
            { icon: <Users size={20} />, text: "Mentor" },
            { icon: <MessageSquare size={20} />, text: "Forum Diskusi" },
            { icon: <Settings size={20} />, text: "Pengaturan" },
          ].map((item, index) => (
            <button
              key={index}
              className={`mb-2 flex w-full items-center rounded-lg p-3 ${
                index === 0
                  ? `${isDarkMode ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`
                  : `${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.text}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header
          className={`h-16 ${isDarkMode ? "bg-gray-800" : "bg-white"} border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } fixed z-10 flex w-[calc(100%-16rem)] items-center justify-between px-6`}
        >
          <div className="flex flex-1 items-center">
            <Search className={`h-5 w-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
            <input
              type="text"
              placeholder="Cari kursus atau latihan soal..."
              className={`ml-4 flex-1 ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-50"
              } rounded-lg border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`rounded-lg p-2 ${
                isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`rounded-lg p-2 ${
                isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Bell size={20} />
            </button>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </header>

        {/* Main Content Area */}
        <main className={`p-6 pt-16 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
          <div className="mx-auto mt-5 max-w-6xl">
            <h1 className="mb-6 text-2xl font-bold">Struktur Beton Bertulang - Level Dasar</h1>

            <div className="grid grid-cols-3 gap-6">
              {/* Video Player */}
              <div className="col-span-2">
                <div className={`aspect-video rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} relative`}>
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Course Preview"
                    className="h-full w-full rounded-lg object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <button onClick={() => setIsPlaying(!isPlaying)} className="rounded-full p-2 hover:bg-white/20">
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                      </button>
                      <button className="rounded-full p-2 hover:bg-white/20">
                        <Maximize2 size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} h-[400px] overflow-y-auto rounded-lg p-4`}>
                <h2 className="mb-4 font-semibold">Daftar Materi</h2>
                {[
                  {
                    title: "Pendahuluan Teknik Sipil",
                    duration: "5:20",
                    completed: true,
                  },
                  {
                    title: "Konsep Dasar Struktur",
                    duration: "12:45",
                    completed: false,
                  },
                  {
                    title: "Analisis Beban dan Gaya",
                    duration: "18:30",
                    completed: false,
                  },
                ].map((lesson, index) => (
                  <div
                    key={index}
                    className={`mb-2 flex items-center rounded-lg p-3 ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                    }`}
                  >
                    {lesson.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400" />
                    )}
                    <div className="ml-3 flex-1">
                      <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>{lesson.title}</p>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{lesson.duration}</p>
                    </div>
                    <ChevronRight className={`h-5 w-5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Course Description */}
            <div className={`mt-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg p-6`}>
              <h2 className="mb-4 text-xl font-semibold">Tentang Kursus</h2>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                Kursus ini akan membahas dasar-dasar struktur beton bertulang, mulai dari konsep dasar hingga aplikasi
                praktis dalam proyek konstruksi. Anda akan mempelajari perhitungan, analisis, dan desain struktur beton
                bertulang sesuai dengan standar yang berlaku.
              </p>
              <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                Mulai Latihan Soal
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
