import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User as NextAuthUser } from "next-auth";
import Image from "next/image";
import Link from "next/link";

interface User extends NextAuthUser {
  emailVerified: Date | null;
  password: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

interface NavigationProps {
  user: User | null;
}

const NavBar: React.FC<NavigationProps> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-800">CivilCareer</h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <NavLinks />
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-blue-800 text-blue-800">
              Masuk
            </Button>
            <Button variant="default" size="sm" className="bg-blue-800 hover:bg-blue-700">
              Daftar
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="animate-fade-in absolute left-0 right-0 top-16 z-40 bg-white shadow-md md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="py-2 text-blue-800 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#produk" className="py-2 text-blue-800 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
                Produk
              </a>
              <a href="#paket" className="py-2 text-blue-800 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
                Paket
              </a>
              <a
                href="#testimoni"
                className="py-2 text-blue-800 hover:text-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimoni
              </a>
              <a href="#kontak" className="py-2 text-blue-800 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
                Kontak
              </a>
            </div>
            <div className="flex space-x-2 pt-2">
              {/* Conditional rendering based on user authentication */}
              {!user ? (
                <>
                  <Link href="/login" className="w-full border-blue-800 text-blue-800">
                    Masuk
                  </Link>
                  <Link href="/register" className="w-full bg-blue-800 hover:bg-blue-700">
                    Daftar
                  </Link>
                </>
              ) : (
                <>
                  <Image
                    src={user?.image || "/no-profile.webp"}
                    width={25}
                    height={25}
                    alt="Profile"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-700">{user.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// NavLinks component for reuse
const NavLinks = () => {
  return (
    <div className="flex space-x-8">
      <a href="#home" className="text-blue-800 hover:text-blue-800 transition-colors">
        Home
      </a>
      <a href="#produk" className="text-blue-800 hover:text-blue-800 transition-colors">
        Produk
      </a>
      <a href="#paket" className="text-blue-800 hover:text-blue-800 transition-colors">
        Paket
      </a>
      <a href="#testimoni" className="text-blue-800 hover:text-blue-800 transition-colors">
        Testimoni
      </a>
      <a href="#kontak" className="text-blue-800 hover:text-blue-800 transition-colors">
        Kontak
      </a>
    </div>
  );
};

export default NavBar;
