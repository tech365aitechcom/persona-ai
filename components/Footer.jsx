import { Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-gray-300 pt-16 pb-16 px-4 text-center">
      {/* Logo & Branding */}
      <div className="flex flex-col gap-2 items-center">
        <Image
          src="https://s3-alpha-sig.figma.com/img/99c3/6664/8abfa4838cbe2d98d3c96c9caa0fa6ba?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JM2I8gLE1ctra9Xl9cUqKzgxqE9yyycZvadvyKP0Ppn9vWzG7cWx6-GnzfjDCZEYc-9dpJb3JwJpU2X8-KNpJpqJZm~Tds7ehbnixGb0EpLWZ3zH~sA6jjRvcXSVNPWCy12hXyoUFZkcN71AQ-EUxwflYsKUVZWJWODqOErGvf409ycNN9f-QsRMG11LOMJRGsi1Q-sWLXzGMHjgW4u1Z6BlhOEm7FqCc4xQZm4aFnW2lL5yhna3E9onaXsnWXGPs2DmTMkS8sBECVjnS-WKF5FWFfodUGXg8H9zDuQun4vyMG-QqmEeMyGOYQ7LPjgTkgSBiSfjlpoS87QLiYr7Kg__"
          alt="Persona AI Logo"
          width={100}
          height={100}
          className="w-20 h-20"
        />
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
