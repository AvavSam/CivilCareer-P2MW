import React from "react";
import PricingCard from "./PricingCard";
import { PRICING_DATA } from "../constants";

const Pricing = () => (
  <section id="pricing" className="bg-gray-50 py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Pilih Paket Belajar Anda</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Kami menyediakan berbagai paket yang dapat disesuaikan dengan kebutuhan belajar Anda
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {PRICING_DATA.map((pricing, index) => (
          <PricingCard key={index} {...pricing} />
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
