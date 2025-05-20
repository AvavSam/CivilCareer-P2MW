import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "125.000",
      period: "/bulan",
      description: "Akses dasar ke materi pembelajaran",
      features: ["Video pembelajaran lengkap", "Latihan soal dasar", "Akses forum diskusi", "Sertifikat penyelesaian"],
      popular: false,
      buttonText: "Pilih Paket",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium Plan",
      price: "250.000",
      period: "/bulan",
      description: "Pengalaman belajar lengkap & personal",
      features: [
        "Semua fitur Basic Plan",
        "Sesi mentoring pribadi",
        "Proyek praktik dengan feedback",
        "Konsultasi karier pribadi",
        "Prioritas akses ke webinar",
      ],
      popular: true,
      buttonText: "Pilih Paket",
      buttonVariant: "default" as const,
    },
    {
      name: "Quiz Plan",
      price: "50.000",
      period: "/bulan",
      description: "Fokus pada latihan dan evaluasi",
      features: ["Bank soal lengkap", "Pembahasan detail setiap soal", "Progress tracking", "Analisis kemampuan"],
      popular: false,
      buttonText: "Pilih Paket",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="paket" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="reveal mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-blue-800 mb-4 text-3xl font-bold md:text-4xl">Pilih Paket Belajarmu</h2>
          <p className="text-gray-700 text-lg">
            Kami menawarkan paket yang fleksibel sesuai dengan kebutuhan dan tujuan belajarmu di bidang teknik sipil.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`reveal rounded-xl border p-6 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-300 relative transform bg-white shadow-xl hover:-translate-y-2"
                  : "border-gray-200 hover:border-blue-300 bg-white shadow-md hover:shadow-lg"
              } `}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="bg-blue-600 absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full px-3 py-1 text-xs font-medium text-white">
                  Paling Populer
                </div>
              )}

              <h3 className="text-blue-800 text-xl font-bold">{plan.name}</h3>

              <div className="mt-4">
                <div className="flex items-baseline">
                  <span className="text-blue-900 text-3xl font-bold">Rp {plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>
              </div>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="text-blue-600 mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full font-medium ${
                    plan.buttonVariant === "default"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "text-blue-600 border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
