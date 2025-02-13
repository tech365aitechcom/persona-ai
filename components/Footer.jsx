import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-gray-300 pt-16 md:pt-36 pb-16 px-4 text-center">
      {/* Logo & Branding */}
      <div className="flex flex-col gap-6 items-center">
        <img src="/logo.png" alt="Persona AI Logo" className="w-16 h-16" />
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Persona <span className="text-blue-400">AI*</span>
        </h2>
        <p className="text-gray-400">
          Transform Market Research with AI-Driven Insights
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="hover:text-white transition">
          <Twitter className="w-8 h-8" />
        </a>
        <a href="#" className="hover:text-white transition">
          <Instagram className="w-8 h-8" />
        </a>
        <a href="#" className="hover:text-white transition">
          <Facebook className="w-8 h-8" />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 mt-6 text-lg">
        <a href="#" className="hover:text-white transition">
          Team
        </a>
        <a href="#" className="hover:text-white transition">
          Blog
        </a>
        <a href="#" className="hover:text-white transition">
          Litepaper
        </a>
        <a href="#" className="hover:text-white transition">
          Explore the Platform
        </a>
      </nav>

      {/* Privacy Policy */}
      <div className="mt-8 text-gray-400">
        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
