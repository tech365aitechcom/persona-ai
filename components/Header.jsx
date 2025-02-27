"use client";

import { avatars, userData } from "@/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProfileCarousel from "./ProfileCarousel";
import { ArrowRight, Menu, X, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import AvatarIcon from "./AvatarIcon";

const getPosition = (index) => {
  const positions = ["top-64 left-44", "top-36 right-20", "bottom-32 right-52"];
  return positions[index];
};

const Header = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % avatars.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [showPointer, setShowPointer] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPointer((prev) => !prev);
    }, 3000); // 1s animation + 2s hidden = 3s cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      <>
        <header className="w-full absolute top-0 left-0 flex justify-between items-center px-6 py-4 z-50">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="PersonaAI Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold font-asap">
              Persona <span className="text-sky-400">AI*</span>
            </span>
          </div>
          <div className="hidden md:flex justify-end items-center gap-8 pr-8">
            <nav className="flex gap-12 text-white">
              <a href="#" className="hover:text-black">
                Team
              </a>
              <a href="#" className="hover:text-black">
                Blog
              </a>
              <a href="#" className="hover:text-black">
                Litepaper
              </a>
            </nav>
            <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full">
              Explore the Platform
            </button>
          </div>
          <div className="md:hidden">
            <Menu className="cursor-pointer" onClick={toggleDrawer} />
          </div>
        </header>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/99c3/6664/8abfa4838cbe2d98d3c96c9caa0fa6ba?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JM2I8gLE1ctra9Xl9cUqKzgxqE9yyycZvadvyKP0Ppn9vWzG7cWx6-GnzfjDCZEYc-9dpJb3JwJpU2X8-KNpJpqJZm~Tds7ehbnixGb0EpLWZ3zH~sA6jjRvcXSVNPWCy12hXyoUFZkcN71AQ-EUxwflYsKUVZWJWODqOErGvf409ycNN9f-QsRMG11LOMJRGsi1Q-sWLXzGMHjgW4u1Z6BlhOEm7FqCc4xQZm4aFnW2lL5yhna3E9onaXsnWXGPs2DmTMkS8sBECVjnS-WKF5FWFfodUGXg8H9zDuQun4vyMG-QqmEeMyGOYQ7LPjgTkgSBiSfjlpoS87QLiYr7Kg__"
                  alt="PersonaAI Logo"
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
                <span className="text-2xl font-bold">
                  Persona <span className="text-sky-400">AI*</span>
                </span>
              </div>{" "}
              <X className="cursor-pointer" onClick={toggleDrawer} />
            </div>
            <nav className="flex flex-col justify-center items-center text-lg gap-6 mt-32">
              <a href="#" className="text-black hover:text-sky-400">
                Team
              </a>
              <a href="#" className="text-black hover:text-sky-400">
                Blog
              </a>
              <a href="#" className="text-black hover:text-sky-400">
                Litepaper
              </a>
              <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full mt-4 flex items-center gap-2">
                Explore the Platform
                <ArrowRight className="w-5 h-5" />
              </button>
            </nav>

            {/* Social Icons */}
            <div className="w-full flex justify-center md:hidden gap-4 mt-16">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleDrawer}
          />
        )}
      </>

      <div className="flex">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pl-8 pt-28 md:pt-44">
          {/* Top Branding */}
          <div className="flex justify-center md:justify-start items-center gap-1 mb-8">
            <Zap className="text-sky-400 w-5 h-5" />
            <span className="text-gray-600">Powered by:</span>
            <span className="text-sky-400">$PRSNA</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-asap md:text-6xl font-bold leading-tight text-center md:text-left">
            AI Powered <br />
            Qualitative Research | <br />
            <span className="relative">
              <span className="relative z-10 ">Simulated</span>
              <span className="absolute bottom-1 left-0 w-full rounded-full h-4 bg-yellow-300 -z-10"></span>
            </span>
            <span className="ml-4">
              Behavioral <br /> Insights at Scale
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mt-6 mb-8 max-w-xl px-4 md:px-0 text-center md:text-left">
            Our AI-driven personas simulate consumer,investor,and user
            behavior,allowing you to test ideas,optimize messaging,and predict
            market trends -with depth ,speed,and accuracy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
            <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-4 px-8 rounded-full flex items-center gap-2 text-sm md:text-base">
              Start Your Research Today <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-fit px-6 py-4 border border-sky-400 text-sky-400 rounded-full flex items-center justify-start space-x-2">
              Explore How PersonaAI Works
            </button>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4 mt-72">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Updated to match design */}
        <div className="relative w-1/2 hidden md:block">
          {/* Blue curved background */}
          <div className="absolute right-0">
            <Image
              src="/hero.png"
              alt=""
              width={800}
              height={800}
              className=""
            />
          </div>
          <div className="absolute right-28 top-1/2 -translate-y-1/2">
            <Image
              src="/spin.png"
              alt=""
              width={500}
              height={500}
              className="animate-spin-slow"
            />
          </div>
          <div className="absolute right-44 top-1/2 -translate-y-1/2">
            <div className="relative flex justify-center items-center">
              {/* Animated Pointer with Scaling Effect */}
              {showPointer && (
                <motion.div
                  initial={{ scale: 2, opacity: 1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 -translate-x-1/2 top-12 text-[#57BEFF]"
                >
                  <svg
                    width="68px"
                    height="68px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <title>cursor-hand-line</title>
                      <path
                        fill="#57BEFF"
                        stroke="#57BEFF"
                        strokeWidth="0"
                        d="M30.74,15.19a13.66,13.66,0,0,0-6.87-3.83A26,26,0,0,0,18,10.58V5.28A3.4,3.4,0,0,0,14.5,2,3.4,3.4,0,0,0,11,5.28v10L9.4,13.7a3.77,3.77,0,0,0-5.28,0A3.67,3.67,0,0,0,3,16.33a3.6,3.6,0,0,0,1,2.56l4.66,5.52a11.53,11.53,0,0,0,1.43,4,10.12,10.12,0,0,0,2,2.54v1.92a1.07,1.07,0,0,0,1,1.08H27a1.07,1.07,0,0,0,1-1.08v-2.7a12.81,12.81,0,0,0,3-8.36v-6A1,1,0,0,0,30.74,15.19ZM29,21.86a10.72,10.72,0,0,1-2.6,7.26,1.11,1.11,0,0,0-.4.72V32H14.14V30.52a1,1,0,0,0-.44-.83,7.26,7.26,0,0,1-1.82-2.23,9.14,9.14,0,0,1-1.2-3.52,1,1,0,0,0-.23-.59L5.53,17.53a1.7,1.7,0,0,1,0-2.42,1.76,1.76,0,0,1,2.47,0l3,3v3.14l2-1V5.28A1.42,1.42,0,0,1,14.5,4,1.42,1.42,0,0,1,16,5.28v11.8l2,.43V12.59a24.27,24.27,0,0,1,2.51.18V18l1.6.35V13c.41.08.83.17,1.26.28a14.88,14.88,0,0,1,1.53.49v5.15l1.6.35V14.5A11.06,11.06,0,0,1,29,16.23Z"
                      />
                    </g>
                  </svg>
                </motion.div>
              )}

              {/* Button */}
              <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-4 px-8 rounded-full flex items-center gap-2 text-sm md:text-base">
                Create AI-Generated Personas
              </button>
            </div>
          </div>
          {avatars.map((avatar, index) => (
            <motion.div
              key={avatar.id}
              className={`absolute ${getPosition(index)}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: activeCard === index ? 1 : 1,
                scale: activeCard === index ? 0.9 : 1.1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {activeCard === index ? (
                <ProfileCard {...avatar} />
              ) : (
                <AvatarIcon image={avatar.image} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full md:hidden">
        <ProfileCarousel data={userData} />
      </div>
    </section>
  );
};

export default Header;
