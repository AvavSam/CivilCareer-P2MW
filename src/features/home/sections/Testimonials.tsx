import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIAL_DATA } from "../constants";

const Testimonials = () => (
  <section id="testimoni" className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Apa Kata Mereka?</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Dengarkan pengalaman dari pengguna yang telah merasakan manfaat belajar di platform kami
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIAL_DATA.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
