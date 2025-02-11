import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CivilCareer",
  description:
    "Welcome to CivilCareer, the best civil engineering learning platform for the future of Indonesian construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Providers>
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </Providers>
    </html>
  );
}
