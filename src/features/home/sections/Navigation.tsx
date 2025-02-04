import React from "react";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "../constants";

const Navigation = () => (
  <nav className="fixed z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CivilCareer</span>
            </div>
          </Link>
        </div>
        <div className="hidden items-center space-x-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 text-blue-600 hover:text-blue-700">
            Login
          </Link>
          <Link href="/signup" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
