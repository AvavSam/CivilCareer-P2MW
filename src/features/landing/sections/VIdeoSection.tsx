const VideoSection = () => {
  return (
    <section id="produk" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="reveal mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800 md:text-4xl">Apa itu CivilCareer?</h2>
          <p className="text-lg text-gray-700">
            Civil Career adalah platform pembelajaran online yang dirancang khusus untuk mahasiswa dan profesional di
            bidang teknik sipil. Kami menyediakan materi pembelajaran berkualitas tinggi yang dibuat oleh para ahli
            industri.
          </p>
        </div>

        <div className="aspect-video reveal mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IlMUgEiiuVI?si=2AnfUo-p7618NmoN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="reveal mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="mb-2 font-bold text-blue-600">01</div>
            <h3 className="mb-2 text-xl font-semibold text-blue-800">Pembelajaran Interaktif</h3>
            <p className="text-gray-700">
              Akses video dengan konten terstruktur yang diajarkan oleh para profesional industri.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="mb-2 font-bold text-blue-600">02</div>
            <h3 className="mb-2 text-xl font-semibold text-blue-800">Mentoring Pribadi</h3>
            <p className="text-gray-700">
              Dapatkan bimbingan langsung dari profesional berpengalaman untuk mengembangkan keahlianmu.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="mb-2 font-bold text-blue-600">03</div>
            <h3 className="mb-2 text-xl font-semibold text-blue-800">Latihan & Kuis</h3>
            <p className="text-gray-700">
              Uji pemahaman konsep dan knowledge melalui latihan soal dan kuis interaktif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
