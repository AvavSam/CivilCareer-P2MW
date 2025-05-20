import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">Civil Career</h3>
            <p className="text-blue-100 mb-6">
              Platform pembelajaran teknik sipil terkemuka yang menghubungkan calon profesional dengan para ahli
              industri untuk pengembangan karier yang sukses.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-blue-100 transition-colors hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-100 transition-colors hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-100 transition-colors hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-100 transition-colors hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Video Pembelajaran
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Mentoring Pribadi
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Kuis & Latihan
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Webinar
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Konsultasi Karier
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Perusahaan</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Karier
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 transition-colors hover:text-white">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontak</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-100">Email:</span>
                <a href="mailto:info@career.com" className="ml-2 text-white hover:underline">
                  info@career.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-100">Phone:</span>
                <a href="tel:+6281234567890" className="ml-2 text-white hover:underline">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="text-blue-100">
                Jl. Teknik Sipil No. 123
                <br />
                Jakarta Selatan, 12345
                <br />
                Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-blue-900 text-blue-200 mt-10 border-t pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Civil Career. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
