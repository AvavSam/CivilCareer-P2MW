import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="from-blue-800 to-blue-950 relative overflow-hidden bg-gradient-to-br">
      {/* Background pattern/overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: "url('/bgimg.jpg')"
        }}
      />

      <div className="section-padding container relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-10 w-full md:mb-0 md:w-1/2">
            <h1
              className="animate-fade-up mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              Raih Karier Impian di Bidang Sipil
            </h1>
            <p
              className="text-blue-100 animate-fade-up mb-8 text-lg md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Video pembelajaran, mentoring, dan kuis khusus teknik sipil untuk kemajuan kariermu
            </p>
            <Button
              size="lg"
              className="text-blue-700 hover:bg-blue-50 btn-hover animate-fade-up bg-white text-lg font-medium"
              style={{ animationDelay: "0.5s" }}
            >
              Mulai Belajar Sekarang
            </Button>
          </div>

          <div className="animate-fade-up w-full md:w-5/12" style={{ animationDelay: "0.7s" }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-white/30 blur-xl"></div>
              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
                alt=" Engineering Project"
                className="relative w-full rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div
          className="animate-fade-up mt-16 grid grid-cols-2 gap-4 text-center md:grid-cols-4"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">5,000+</p>
            <p className="text-blue-100">Siswa Aktif</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">200+</p>
            <p className="text-blue-100">Video Materi</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-blue-100">Mentor Ahli</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">98%</p>
            <p className="text-blue-100">Tingkat Kepuasan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
