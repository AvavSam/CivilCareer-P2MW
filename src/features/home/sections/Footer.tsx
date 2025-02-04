import React from "react";
import { Building2 } from "lucide-react";
import { QUICK_LINKS, CONTACT_INFO, SOCIAL_MEDIA } from "../constants";

const Footer = () => (
  <footer id="kontak" className="bg-gray-900 py-12 text-gray-300">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center">
            <Building2 className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">CivilCareer</span>
          </div>
          <p className="text-sm">Platform pembelajaran teknik sipil terbaik untuk masa depan konstruksi Indonesia.</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-blue-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Kontak</h4>
          <ul className="space-y-2 text-sm">
            {CONTACT_INFO.map((contact, index) => (
              <li key={index}>{contact.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Social Media</h4>
          <div className="flex space-x-4">
            {SOCIAL_MEDIA.map((social, index) => (
              <a key={index} href={social.href} className="hover:text-blue-400">
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2024 CivilCareer. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
