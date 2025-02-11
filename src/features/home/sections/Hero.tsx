import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => (
  <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Belajar Teknik Sipil dengan Mudah dan Terstruktur
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Platform pembelajaran online yang dirancang khusus untuk mahasiswa teknik sipil dan calon insinyur.
            Tingkatkan pemahaman Anda melalui kursus interaktif yang komprehensif.
          </p>
          <a
            href="#CTA"
            className="flex w-fit items-center rounded-lg bg-blue-600 px-8 py-4 text-white transition-colors hover:bg-blue-700"
          >
            Mulai Belajar Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div>
          <Image
            src="https://discovere.org/wp-content/uploads/2021/10/STEM_Careers_Civil_Engineering-scaled.jpg"
            alt="Civil Engineering"
            className="rounded-xl shadow-2xl"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
