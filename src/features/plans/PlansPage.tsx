"use client";

import { useParams } from "next/navigation";
import { PRICING_DATA } from "../home/constants";
import Navigation from "../home/sections/Navigation";
import HeroSection from "./HeroSection";
import BenefitCard from "./BenefitCard";
import PackageDetails from "./PackageDetails";
import PaymentMethods from "./PaymentMethods";
import UpsellSection from "./UpsellSection";
import { Shield, BookOpen, Award } from "lucide-react";
import Footer from "../home/sections/Footer";

interface Paket {
  nama: string;
  harga: string;
  durasi: string;
  fitur: string[];
  sudahBayar: boolean;
}

export default function PlansPage() {
  const { packageTitle } = useParams();
  const selectedPackage = PRICING_DATA.find(
    (p) => p.title === decodeURIComponent(packageTitle as string)
  );

  if (!selectedPackage) {
    return <div>Package not found</div>;
  }

  const paket: Paket = {
    nama: selectedPackage.title,
    harga: selectedPackage.price,
    durasi: "bulan",
    fitur: selectedPackage.features,
    sudahBayar: false,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-12 pt-32">
        <HeroSection paket={paket} />

        {/* Benefits Section */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <BenefitCard icon={Shield} title="Garansi 30 Hari" description="Jaminan uang kembali jika tidak puas" />
          <BenefitCard icon={BookOpen} title="Akses Dimana Saja" description="Belajar kapanpun dan dimanapun" />
          <BenefitCard icon={Award} title="Sertifikat Resmi" description="Dapatkan sertifikat kelulusan" />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <PackageDetails paket={paket} />
          </div>
          <div className="w-full space-y-6 lg:w-1/3">{!paket.sudahBayar && <PaymentMethods />}</div>
        </div>
        {(paket.nama === "Basic Plan" || paket.nama === "Quiz Plan") && <UpsellSection />}
      </main>
      <Footer />
    </div>
  );
}
