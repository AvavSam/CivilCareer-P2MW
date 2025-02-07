import { Check } from "lucide-react";

interface PaketProps {
  nama: string;
}

const HeroSection = ({ paket }: { paket: PaketProps }) => {
  return (
    <div className="mb-12 text-center">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-blue-100 p-6 ring-4 ring-blue-200">
          <Check className="h-16 w-16 text-blue-600" />
        </div>
      </div>
      <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        Selamat! Anda telah memilih paket {paket.nama}
      </h1>
      <p className="mx-auto max-w-2xl text-xl text-gray-600">
        Nikmati akses penuh ke video pembelajaran, latihan soal, dan sesi mentoring eksklusif!
      </p>
    </div>
  );
};

export default HeroSection;
