import { Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-gray-300 pt-16 pb-16 px-4 text-center">
      {/* Logo & Branding */}
      <div className="flex flex-col gap-2 items-center">
        <Image src="/logo.png" alt="Persona AI Logo" width={60} height={60} />
        <span className="text-3xl font-bold font-asap">
          Persona <span className="text-sky-400">AI*</span>
        </span>
        <p className="text-gray-400 font-asap">
          Transform Market Research with AI-Driven Insights
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="hover:text-white transition">
          <FaXTwitter className="w-8 h-8" />
        </a>
        <a href="#" className="hover:text-white transition">
          <Instagram className="w-8 h-8" />
        </a>
        <a href="#" className="hover:text-white transition">
          <FaFacebook className="w-8 h-8" />
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
        <a href="#" className="hover:text-white transition">
          Start Research Now
        </a>
        <a href="#" className="hover:text-white transition">
          Partner with Us
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
