import Link from "next/link";
import React from "react";

const CTA = () => (
  <section id="CTA" className="bg-blue-600 py-20">
    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-white">Tingkatkan Keahlian Teknik Sipil Anda Sekarang!</h2>
      <Link
        href="/signup"
        className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-gray-100"
      >
        Daftar Sekarang
      </Link>
    </div>
  </section>
);

export default CTA;
