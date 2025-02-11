export type LearningPath = {
  title: string;
  description: string;
  progress: number;
  thumbnail: string;
  videos: Video[];
};

export type Video = {
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  description?: string;
};

export const LEARNING_PATHS_DATA: LearningPath[] = [
  {
    title: "Dasar Teknik Sipil",
    description: "Pelajari konsep dasar teknik sipil, material, dan struktur bangunan",
    progress: 60,
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400",
    videos: [
      {
        title: "Pengenalan Teknik Sipil",
        duration: "15:30",
        isCompleted: true,
        isLocked: false,
        description:
          "Pada video ini, kita akan membahas dasar-dasar teknik sipil dan perannya dalam pembangunan infrastruktur modern. Anda akan mempelajari sejarah singkat teknik sipil, bidang-bidang spesialisasi, dan prospek karir di industri konstruksi.",
      },
      {
        title: "Dasar Material Konstruksi",
        duration: "20:45",
        isCompleted: true,
        isLocked: false,
        description:
          "Membahas berbagai jenis material konstruksi yang umum digunakan dalam proyek teknik sipil, termasuk beton, baja, kayu, dan material komposit.",
      },
      {
        title: "Konsep Struktur Bangunan",
        duration: "25:15",
        isCompleted: false,
        isLocked: false,
        description:
          "Pengenalan tentang prinsip-prinsip dasar struktur bangunan, beban-beban yang bekerja pada struktur, dan konsep stabilitas.",
      },
      {
        title: "Mekanika Teknik Dasar",
        duration: "30:00",
        isCompleted: false,
        isLocked: true,
        description:
          "Pembelajaran tentang gaya-gaya yang bekerja pada struktur, konsep tegangan dan regangan, serta analisis struktur sederhana.",
      },
      {
        title: "Pengenalan Manajemen Proyek",
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
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
    videos: [
      {
        title: "Dasar AutoCAD",
        duration: "30:00",
        isCompleted: true,
        isLocked: false,
        description: "Pengenalan interface AutoCAD dan perintah-perintah dasar untuk menggambar.",
      },
      {
        title: "Menggambar Denah Bangunan",
        duration: "45:20",
        isCompleted: false,
        isLocked: false,
        description: "Praktik menggambar denah bangunan sederhana menggunakan AutoCAD.",
      },
      {
        title: "Pengenalan BIM",
        duration: "35:10",
        isCompleted: false,
        isLocked: true,
        description: "Dasar-dasar Building Information Modeling (BIM) dan penggunaannya dalam industri konstruksi.",
      },
      {
        title: "Perencanaan Struktur",
        duration: "40:00",
        isCompleted: false,
        isLocked: true,
        description: "Prinsip-prinsip perencanaan struktur bangunan dan analisis beban.",
      },
      {
        title: "Detail Engineering Design",
        duration: "50:15",
        isCompleted: false,
        isLocked: true,
        description: "Pembuatan detail engineering design untuk proyek konstruksi.",
      },
    ],
  },
  {
    title: "Pengantar Struktur Bangunan",
    description: "Pelajari konsep dasar struktur bangunan dan aplikasi praktisnya",
    progress: 75,
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
    videos: [
      {
        title: "Pengenalan Struktur Bangunan",
        duration: "20:30",
        isCompleted: true,
        isLocked: false,
        description:
          "Pada video ini, kita akan membahas konsep dasar struktur bangunan, jenis-jenis struktur, dan peranannya dalam proyek konstruksi.",
      },
      {
        title: "Analisis Beban dan Gaya",
        duration: "25:45",
        isCompleted: false,
        isLocked: true,
        description:
          "Membahas analisis beban yang bekerja pada struktur bangunan, perhitungan gaya dalam elemen struktur, dan penentuan reaksi.",
      },
    ],
  },
  {
    title: "AutoCAD untuk Teknik Sipil",
    description: "Pelajari teknik menggambar teknik sipil menggunakan AutoCAD",
    progress: 45,
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
    videos: [
      {
        title: "Pengenalan AutoCAD",
        duration: "30:00",
        isCompleted: true,
        isLocked: false,
        description: "Pengenalan interface AutoCAD dan perintah-perintah dasar untuk menggambar.",
      },
      {
        title: "Menggambar Denah Bangunan",
        duration: "45:20",
        isCompleted: false,
        isLocked: false,
        description: "Praktik menggambar denah bangunan sederhana menggunakan AutoCAD.",
      },
      {
        title: "Menggambar Detail Struktur",
        duration: "35:10",
        isCompleted: false,
        isLocked: true,
        description: "Menggambar detail struktur bangunan menggunakan AutoCAD.",
      },
    ],
  },
];
