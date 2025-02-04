"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Home,
  Users,
  MessageSquare,
  Settings,
  Search,
  Bell,
  ChevronRight,
  Play,
  GraduationCap,
  Building2,
  X,
  Lock,
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Bookmark,
  Download,
} from "lucide-react";
import Link from "next/link";

// Types
type MenuItem = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
};

type Course = {
  title: string;
  progress: number;
  thumbnail: string;
};

type Video = {
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  description?: string;
};

type LearningPath = {
  title: string;
  description: string;
  progress: number;
  image: string;
  videos: Video[];
};

function App() {
  const [menuItems] = useState<MenuItem[]>([
    { icon: Home, label: "Dashboard", active: true },
    { icon: BookOpen, label: "Kursus Saya" },
    { icon: GraduationCap, label: "Learning Path" },
    { icon: Users, label: "Mentor" },
    { icon: MessageSquare, label: "Forum Diskusi" },
    { icon: Settings, label: "Pengaturan" },
  ]);

  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{
    video: Video;
    index: number;
  } | null>(null);

  const courses: Course[] = [
    {
      title: "Pengantar Struktur Bangunan",
      progress: 75,
      thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "AutoCAD untuk Teknik Sipil",
      progress: 45,
      thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const learningPaths: LearningPath[] = [
    {
      title: "Dasar Teknik Sipil",
      description: "Pelajari konsep dasar teknik sipil, material, dan struktur bangunan",
      progress: 60,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400",
      videos: [
        {
          title: "1. Pengenalan Teknik Sipil",
          duration: "15:30",
          isCompleted: true,
          isLocked: false,
          description:
            "Pada video ini, kita akan membahas dasar-dasar teknik sipil dan perannya dalam pembangunan infrastruktur modern. Anda akan mempelajari sejarah singkat teknik sipil, bidang-bidang spesialisasi, dan prospek karir di industri konstruksi.",
        },
        {
          title: "2. Dasar Material Konstruksi",
          duration: "20:45",
          isCompleted: true,
          isLocked: false,
          description:
            "Membahas berbagai jenis material konstruksi yang umum digunakan dalam proyek teknik sipil, termasuk beton, baja, kayu, dan material komposit.",
        },
        {
          title: "3. Konsep Struktur Bangunan",
          duration: "25:15",
          isCompleted: false,
          isLocked: false,
          description:
            "Pengenalan tentang prinsip-prinsip dasar struktur bangunan, beban-beban yang bekerja pada struktur, dan konsep stabilitas.",
        },
        {
          title: "4. Mekanika Teknik Dasar",
          duration: "30:00",
          isCompleted: false,
          isLocked: true,
          description:
            "Pembelajaran tentang gaya-gaya yang bekerja pada struktur, konsep tegangan dan regangan, serta analisis struktur sederhana.",
        },
        {
          title: "5. Pengenalan Manajemen Proyek",
          duration: "22:30",
          isCompleted: false,
          isLocked: true,
          description:
            "Dasar-dasar manajemen proyek konstruksi, termasuk perencanaan, penjadwalan, dan pengendalian biaya.",
        },
      ],
    },
    {
      title: "Perencanaan & Desain",
      description: "Kuasai AutoCAD, BIM, dan perencanaan struktur bangunan",
      progress: 30,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
      videos: [
        {
          title: "1. Dasar AutoCAD",
          duration: "30:00",
          isCompleted: true,
          isLocked: false,
          description: "Pengenalan interface AutoCAD dan perintah-perintah dasar untuk menggambar.",
        },
        {
          title: "2. Menggambar Denah Bangunan",
          duration: "45:20",
          isCompleted: false,
          isLocked: false,
          description: "Praktik menggambar denah bangunan sederhana menggunakan AutoCAD.",
        },
        {
          title: "3. Pengenalan BIM",
          duration: "35:10",
          isCompleted: false,
          isLocked: true,
          description: "Dasar-dasar Building Information Modeling (BIM) dan penggunaannya dalam industri konstruksi.",
        },
        {
          title: "4. Perencanaan Struktur",
          duration: "40:00",
          isCompleted: false,
          isLocked: true,
          description: "Prinsip-prinsip perencanaan struktur bangunan dan analisis beban.",
        },
        {
          title: "5. Detail Engineering Design",
          duration: "50:15",
          isCompleted: false,
          isLocked: true,
          description: "Pembuatan detail engineering design untuk proyek konstruksi.",
        },
      ],
    },
  ];

  const handleBackToPath = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CivilCareer</span>
          </div>
        </div>
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center space-x-3 rounded-lg p-3 ${
                item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex w-96 items-center rounded-lg bg-gray-50">
              <Search className="ml-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari kursus atau materi..."
                className="flex-1 border-none bg-transparent px-3 py-2 focus:ring-0"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
                <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="font-medium text-gray-700">User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Selamat Datang, P2MW! 👋</h1>

          {/* Current Courses */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Video Pembelajaran Terbaru</h2>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
                Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {courses.map((course, index) => (
                <div key={index} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <div className="relative h-48">
                    <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
                      <Play className="h-12 w-12 text-white" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-semibold text-gray-800">{course.title}</h3>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-blue-600" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{course.progress}% selesai</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Paths */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Learning Path yang Direkomendasikan</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {learningPaths.map((path, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  onClick={() => setSelectedPath(path)}
                >
                  <div className="flex items-start space-x-4">
                    <img src={path.image} alt={path.title} className="h-24 w-24 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="mb-2 font-semibold text-gray-800">{path.title}</h3>
                      <p className="mb-3 text-sm text-gray-500">{path.description}</p>
                      <div className="mb-2 h-2 w-full rounded-full bg-gray-200">
                        <div className="h-2 rounded-full bg-blue-600" style={{ width: `${path.progress}%` }}></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{path.progress}% selesai</span>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Lanjutkan</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Learning Path Videos Modal */}
      {selectedPath && !selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="flex max-h-[80vh] w-full max-w-2xl flex-col rounded-xl bg-white">
            <div className="flex items-center justify-between border-b p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{selectedPath.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{selectedPath.description}</p>
              </div>
              <button onClick={() => setSelectedPath(null)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {selectedPath.videos.map((video, index) => (
                  <Link href={`/video/${video.title}`} key={index}>
                    <div
                      key={index}
                      className={`rounded-lg border p-4 ${
                        video.isLocked ? "cursor-not-allowed bg-gray-50" : "cursor-pointer hover:bg-blue-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {video.isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : video.isLocked ? (
                            <Lock className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Play className="h-5 w-5 text-blue-600" />
                          )}
                          <div>
                            <h4 className={`font-medium ${video.isLocked ? "text-gray-400" : "text-gray-800"}`}>
                              {video.title}
                            </h4>
                            <p className="text-sm text-gray-500">{video.duration}</p>
                          </div>
                        </div>
                        {video.isLocked && <span className="text-sm text-gray-400">Selesaikan video sebelumnya</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t bg-gray-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Progress Learning Path</p>
                  <p className="font-medium text-gray-800">{selectedPath.progress}% Selesai</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">
                  Lanjutkan Belajar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo && selectedPath && (
        <div className="fixed inset-0 flex flex-col bg-black bg-opacity-90">
          {/* Video Player Header */}
          <div className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <button onClick={handleBackToPath} className="flex items-center text-gray-600 hover:text-gray-800">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  <span>Kembali ke {selectedPath.title}</span>
                </button>
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-600 hover:text-gray-800">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="flex flex-1 flex-col">
            <div className="container mx-auto flex flex-1 flex-col px-6 py-8">
              {/* Video Container */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black">
                  <Play className="h-16 w-16 cursor-pointer text-white opacity-50 hover:opacity-100" />
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-6 rounded-lg bg-white p-6">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">{selectedVideo.video.title}</h2>
                <p className="mb-4 text-gray-500">{selectedVideo.video.duration}</p>
                <p className="text-gray-700">{selectedVideo.video.description}</p>

                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                  <button
                    className={`flex items-center rounded-lg px-4 py-2 ${
                      selectedVideo.index === 0
                        ? "cursor-not-allowed text-gray-400"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                    disabled={selectedVideo.index === 0}
                    onClick={() => {
                      if (selectedVideo.index > 0) {
                        const prevVideo = selectedPath.videos[selectedVideo.index - 1];
                        if (!prevVideo.isLocked) {
                          setSelectedVideo({
                            video: prevVideo,
                            index: selectedVideo.index - 1,
                          });
                        }
                      }
                    }}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Video Sebelumnya
                  </button>
                  <button
                    className={`flex items-center rounded-lg px-4 py-2 ${
                      selectedVideo.index === selectedPath.videos.length - 1 ||
                      selectedPath.videos[selectedVideo.index + 1].isLocked
                        ? "cursor-not-allowed text-gray-400"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                    disabled={
                      selectedVideo.index === selectedPath.videos.length - 1 ||
                      selectedPath.videos[selectedVideo.index + 1].isLocked
                    }
                    onClick={() => {
                      if (selectedVideo.index < selectedPath.videos.length - 1) {
                        const nextVideo = selectedPath.videos[selectedVideo.index + 1];
                        if (!nextVideo.isLocked) {
                          setSelectedVideo({
                            video: nextVideo,
                            index: selectedVideo.index + 1,
                          });
                        }
                      }
                    }}
                  >
                    Video Selanjutnya
                    <ArrowLeft className="ml-2 h-5 w-5 rotate-180 transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
