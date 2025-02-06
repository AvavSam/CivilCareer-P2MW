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
// import { useSession } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";

export default async function HomePage() {
  const user = await authUserSession();
  console.log(user);
  // const { data: session } = useSession({
  // required: true,
  // refetchInterval: 0, // Pastikan tidak ada polling otomatis
  // refetchOnWindowFocus: false,
  // });
  const supabase = createClient(
    "https://lyyxsisymxucimveitvd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eXhzaXN5bXh1Y2ltdmVpdHZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3Mzg5ODUsImV4cCI6MjA1NDMxNDk4NX0.fazIQT8UFmBnSfB5lq5VL3yHvnOMp56UdjVPJYHE81w"
  );

  const { data } = supabase.storage.from("videos").getPublicUrl("videos/Suara kucing.mp4");
  console.log("url video: ", data);

  console.log(user);
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
