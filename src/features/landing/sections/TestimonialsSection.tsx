import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adi Nugroho",
      position: "Site Engineer, PT. Konstruksi Jaya",
      image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      content:
        "CivilCareer membantu saya mempersiapkan ujian sertifikasi. Materi yang terstruktur dan lengkap membuat saya lebih percaya diri menghadapi ujian dan akhirnya lulus dengan nilai terbaik.",
    },
    {
      id: 2,
      name: "Dina Pratiwi",
      position: "Mahasiswa Teknik Sipil, Univ. Indonesia",
      image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      content:
        "Program mentoring di CivilCareer memberikan perspektif yang sangat berharga dari praktisi di industri. Saya jadi lebih memahami tantangan nyata di dunia kerja dan bagaimana menghadapinya.",
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "Project Manager, PT. Pembangunan Perumahan",
      image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      content:
        "Sebagai profesional yang ingin meningkatkan skill, CivilCareer menawarkan fleksibilitas belajar yang sangat saya butuhkan. Kualitas materinya luar biasa dan sangat relevan dengan pekerjaan saya.",
    },
    {
      id: 4,
      name: "Sari Indah",
      position: "Structural Engineer, CV Mitra Teknik",
      image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      content:
        "Bank soal di Quiz Plan sangat membantu saya mempersiapkan interview kerja. Pembahasan soalnya detail dan mudah dipahami. Berkat CivilCareer, saya berhasil mendapatkan posisi yang saya inginkan.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // For mobile we show 1, for tablet 2, for desktop 3
  const getVisibleTestimonials = () => {
    // Logic to determine how many testimonials to show based on screen size
    // For simplicity in the initial implementation:
    const visibleCount = testimonials.length;
    return testimonials
      .slice(currentIndex, currentIndex + visibleCount)
      .concat(testimonials.slice(0, Math.max(0, currentIndex + visibleCount - testimonials.length)));
  };

  return (
    <section id="testimoni" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="reveal mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-blue-800 mb-4 text-3xl font-bold md:text-4xl">Testimoni Siswa</h2>
          <p className="text-gray-700 text-lg">
            Simak apa yang dikatakan siswa kami tentang pengalaman belajar di Career
          </p>
        </div>

        {/* Mobile Testimonial Slider (1 card) */}
        <div className="reveal md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="mt-6 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet & Desktop Testimonial Grid */}
        <div className="reveal hidden md:block">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getVisibleTestimonials()
              .slice(0, 3)
              .map((testimonial) => (
                <div key={testimonial.id} className="w-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
          </div>

          {/* Navigation Arrows for Desktop */}
          <div className="mt-10 flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  content: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="border-gray-200 flex h-full flex-col rounded-xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex-grow">
        <p className="text-gray-700 mb-6">{testimonial.content}</p>
      </div>

      <div className="flex items-center">
        <Image width={48} height={48} src={testimonial.image} alt={testimonial.name} className="mr-4 h-12 w-12 rounded-full object-cover" />
        <div>
          <h4 className="text-blue-800 font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
