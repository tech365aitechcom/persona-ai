"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="w-full absolute top-0 left-0 flex justify-between items-center px-6 py-4 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="PersonaAI Logo" width={40} height={40} />
          <span className="text-2xl font-bold font-asap">
            Persona <span className="text-sky-400">AI*</span>
          </span>
        </Link>
        <div className="hidden md:flex justify-end items-center gap-8 pr-8">
          <nav className="flex gap-12 text-white">
            <a
              href="/team"
              className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors"
            >
              Team
            </a>
            {/* <a href='#' className='hover:text-black'>
                Blog
              </a> */}
            <a
              href="#"
              className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors"
            >
              Litepaper
            </a>
          </nav>
          {/* <button className='bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full'>
              Explore the Platform
            </button> */}
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
            <a href="/team" className="text-black hover:text-sky-400">
              Team
            </a>
            {/* <a href='#' className='text-black hover:text-sky-400'>
              Blog
            </a> */}
            <a href="#" className="text-black hover:text-sky-400">
              Litepaper
            </a>
            {/* <button className='bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full mt-4 flex items-center gap-2'>
              Explore the Platform
              <ArrowRight className='w-5 h-5' />
            </button> */}
          </nav>

          {/* Social Icons */}
          <div className="w-full flex justify-center md:hidden gap-4 mt-16">
            <a
              href="https://x.com/PersonaAI_agent"
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* <a href='#' className='text-gray-500 hover:text-gray-700'>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>
            <a href='#' className='text-gray-500 hover:text-gray-700'>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </a> */}
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
  );
};

export default Header;
