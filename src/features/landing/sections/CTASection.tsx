import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-950 py-16 md:py-20">
      <div className="reveal container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Seberapa siap kamu terjun ke dunia proyek di era digital?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Yuk, ukur kemampuanmu lewat quiz trial GRATIS dari kami! Cepat, ambil kesempatan ini dan buktikan skill-mu sekarang juga
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="btn-hover bg-white text-lg font-medium text-blue-800 hover:bg-blue-50">
              Coba Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
