"use client";
import { useEffect, useState } from "react";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import VideoSection from "./sections/VIdeoSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import { authUserSession } from "@/libs/auth-libs";
import { User } from "next-auth";

export default function LandingPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authUserSession();
      setUser(userData);
    };

    fetchUser();
  }, []);

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value for when elements should become visible

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    // Initial check for elements in view
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50 flex min-h-screen flex-col">
      <NavBar user={user} />

      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
