export type LessonData = {
  title: string;
  duration: string;
  completed: boolean;
};

export const LESSONS_DATA: LessonData[] = [
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
  ];

export const courseDescription = `Kursus ini akan membahas dasar-dasar struktur beton bertulang, mulai dari konsep dasar hingga aplikasi praktis dalam proyek konstruksi. Anda akan mempelajari perhitungan, analisis, dan desain struktur beton bertulang sesuai dengan standar yang berlaku.`;
