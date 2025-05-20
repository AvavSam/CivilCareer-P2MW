import { Book, Video, Users, Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Video className="text-blue-800 h-10 w-10" />,
      title: "Materi Terstruktur oleh Praktisi",
      description: "Kurikulum yang dirancang dan disampaikan oleh praktisi aktif dan berpengalaman di industri.",
    },
    {
      icon: <Book className="text-blue-800 h-10 w-10" />,
      title: "Akses Video & Modul PDF",
      description: "Akses tidak terbatas ke semua materi video dan modul PDF untuk belajar kapan saja.",
    },
    {
      icon: <Users className="text-blue-800 h-10 w-10" />,
      title: "Sesi Mentoring & Forum Diskusi",
      description: "Dapatkan bimbingan dan diskusi langsung dengan mentor dan sesama pelajar.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="reveal mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-blue-800 mb-4 text-3xl font-bold md:text-4xl">Kenapa Memilih Career?</h2>
          <p className="text-gray-700 text-lg">
            Platform pembelajaran yang dirancang khusus untuk membantu kamu menguasai teknik sipil dengan metode yang
            terstruktur dan efektif.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-gray-100 reveal rounded-xl border bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-blue-800 mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 reveal mt-16 rounded-xl p-6 shadow-md md:p-8">
          <h3 className="text-blue-800 mb-6 text-center text-2xl font-semibold">Semua Yang Kamu Butuhkan</h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Materi struktur bangunan",
              "Manajemen proyek konstruksi",
              "Teknik fondasi lanjutan",
              "Analisis struktur",
              "Perencanaan infrastruktur",
              "Desain struktur beton bertulang",
              "Estimasi biaya konstruksi",
              "Teknologi bahan konstruksi",
              "Teknik pelaksanaan konstruksi",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="text-blue-800 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
