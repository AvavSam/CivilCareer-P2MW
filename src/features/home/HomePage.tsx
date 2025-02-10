// "use client";
import React from "react";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import { authUserSession } from "@/libs/auth-libs";
import { User } from "next-auth";
// import { useSession } from "next-auth/react";

export default async function HomePage() {
  const user: User | null = await authUserSession();
  // const { data: session } = useSession({
  // required: true,
  // refetchInterval: 0, // Pastikan tidak ada polling otomatis
  // refetchOnWindowFocus: false,
  // });
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation user={user} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
