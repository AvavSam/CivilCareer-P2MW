import React from "react";
import { CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  icon: LucideIcon;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, icon: Icon }) => (
  <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="mb-4 text-xl font-bold text-black">{title}</h3>
    <p className="mb-6 text-3xl font-bold text-black">
      Rp {price}
      <span className="text-base font-normal text-gray-600">/bulan</span>
    </p>
    <ul className="mb-8 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-black">
          <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full rounded-lg bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700">
      Pilih Paket
    </button>
  </div>
);

export default PricingCard;
