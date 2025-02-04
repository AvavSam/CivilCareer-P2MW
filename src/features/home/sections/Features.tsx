import { FEATURES_DATA } from "../constants";

const Features = () => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Mengapa Memilih Kami?</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Kami menyediakan kursus online interaktif yang dirancang untuk membantu mahasiswa teknik sipil belajar secara
          fleksibel, dari dasar hingga tingkat lanjut.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {FEATURES_DATA.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features;
