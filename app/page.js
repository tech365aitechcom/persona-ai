"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FileText,
  ArrowRight,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProfileCarousel from "@/components/ProfileCarousel";
import {
  chartData,
  features,
  process,
  userData,
  usesCases,
  avatars,
  timeline,
} from "@/data";
import Chart from "@/components/Chart";
import AvatarIcon from "@/components/AvatarIcon";
import ProfileCard from "@/components/ProfileCard";
import Testimonial from "@/components/Testimonial";
import { motion } from "framer-motion";

const getPosition = (index) => {
  const positions = [
    "top-60 left-2",
    "top-1/2 right-10 transform -translate-y-1/2",
    "bottom-32 left-48",
  ];
  return positions[index];
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [imageIndexes, setImageIndexes] = useState(
    Array(features.length).fill(0)
  );
  const [showImages, setShowImages] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const totalSlides = Math.ceil(usesCases.length / slidesPerView);

  const handlePrevious = () => {
    setCurrentSlide((current) => (current > 0 ? current - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlide((current) => (current < totalSlides - 1 ? current + 1 : 0));
  };

  const getVisibleCards = () => {
    const startIndex = currentSlide * slidesPerView;
    return usesCases.slice(startIndex, startIndex + slidesPerView);
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Small screens: 1 slide
      } else {
        setSlidesPerView(2); // Larger screens: 3 slides
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    // Show images after 5 seconds
    const initialTimer = setTimeout(() => {
      setShowImages(true);

      // Start rotating images every 5 seconds
      const interval = setInterval(() => {
        setImageIndexes((prevIndexes) =>
          prevIndexes.map((index, i) => (index + 1) % features[i].images.length)
        );
      }, 5000);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % avatars.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <section className="relative">
        {/* Header */}
        <header className="w-full absolute top-0 left-0 flex justify-between items-center px-6 py-4 z-50">
          <div className="flex items-center gap-2">
            {/* <img src="/logo.png" alt="PersonaAI Logo" className="w-10 h-10" /> */}
            <span className="text-xl md:text-2xl font-bold">
              Persona <span className="text-sky-400">AI*</span>
            </span>
          </div>
          <div className="hidden md:flex justify-end items-center gap-4">
            <nav className="flex gap-8 text-white">
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
            <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full ">
              Explore the Platform
            </button>
          </div>
        </header>

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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-left">
              Transform Market <br />
              Research with <br />
              <span className="relative">
                <span className="relative z-10">AI-Driven</span>
                <span className="absolute bottom-1 left-0 w-full rounded-full h-4 bg-yellow-300 -z-10"></span>
              </span>
              <span> Insights</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg mt-6 mb-8 max-w-xl px-4 md:px-0 text-center md:text-left">
              Welcome to PersonaAI, where cutting-edge AI meets blockchain to
              revolutionize market research.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-4 px-8 rounded-full flex items-center gap-2 text-sm md:text-base">
                Explore the Platform <ArrowRight className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Download Litepaper
              </button>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex gap-4 mt-16">
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
            <div className="absolute top-[-80px] right-0 w-full h-screen">
              <div className="relative w-full h-full bg-heading rounded-tl-full rounded-bl-full border-l-[30px] border-sky-200">
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
          </div>
        </div>
        <div className="w-full md:hidden">
          <ProfileCarousel data={userData} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-40 flex flex-col items-center">
        <div className="space-y-1 text-center">
          <span className="text-sky-400 font-medium">Features</span>
          <h2 className="text-5xl font-bold text-heading">
            <span className="relative">
              <span className="relative z-10">How</span>
              <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300 -z-10"></span>
            </span>
            <span className="ml-2 relative z-10">you can</span>
          </h2>
          <h2 className="text-5xl font-bold text-heading">use Persona AI</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-4 text-center md:max-w-sm mx-auto"
            >
              <div className="bg-blue-50 w-36 h-36 mx-auto rounded-2xl flex items-center justify-center">
                {showImages ? (
                  <Image
                    src={feature.images[imageIndexes[index]]}
                    width={90}
                    height={90}
                    alt={`Feature ${index + 1}`}
                  />
                ) : null}
              </div>
              <h3 className="font-semibold text-lg md:text-xl">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mx-auto max-w-xs text-left">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-heading text-white p-8 min-h-screen rounded-3xl relative">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-blue-400 mb-2">Some subtitle</p>
          <h2 className="text-5xl font-bold">How it works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 relative">
          {" "}
          {/* Added relative for positioning */}
          {process.map((feature, index) => (
            <div
              key={index}
              className="space-y-4 text-center md:max-w-sm mx-auto relative"
            >
              <div className="bg-blue-50 w-36 h-36 mx-auto rounded-full flex items-center justify-center relative z-10">
                <Image src={feature.img} width={90} height={90} alt="icon" />
              </div>
              <h3 className="font-semibold text-lg md:text-xl">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base mx-auto max-w-xs text-left">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="relative mt-12 text-center space-y-6">
          <h3 className="text-5xl font-bold">Join us CTA title</h3>
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
            Explore the Platform
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* Bottom Left Circle */}
        <div className="absolute bottom-2 left-2 w-96 h-9w-96 bg-[#1a94b9] rounded-full z-0"></div>
        {/* Added z-index */}
      </section>

      {/* Tokenomics Section */}
      <section className="max-w-7xl py-40 mx-auto">
        <div className="space-y-1 pb-6 text-center">
          <p className="text-sky-400 uppercase text-sm tracking-wide">
            TOKENOMICS
          </p>
          <h2 className="text-5xl font-bold text-heading">
            The{" "}
            <span className="relative">
              <span className="relative z-10">$PRSNA</span>
              <span className="absolute bottom-0 left-0 w-full rounded-full h-3 bg-yellow-300 -z-10"></span>
            </span>
          </h2>
          <h2 className="text-5xl font-bold text-heading">Token Ecosystem</h2>
        </div>

        {/* Token Distribution */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 bg-white">
          {/* Left Side: Token Distribution */}
          <div className="w-full md:w-1/3 text-left">
            <h2 className="text-xl font-bold">Token Distribution</h2>
            <ul className="mt-4 space-y-2">
              {chartData.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="font-medium">
                    {item.name}: <strong>{item.value}%</strong>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-bold text-lg">
              Total Supply:
              <br /> <span className="text-xl">1 billion tokens</span>
            </p>
          </div>

          {/* Center: Donut Chart */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Chart />
          </div>

          {/* Right Side: Description */}
          <div className="w-full md:w-1/3 text-left">
            <p className="text-gray-600">
              PersonaAI acknowledges the importance of ensuring token holders
              fully share in the platform’s success. PersonaAI’s tokenized
              economy is designed to incentivize participation, foster
              transparency, and ensure long-term growth.
            </p>
            <p className="mt-4 font-bold text-black">
              PersonaAI acknowledges the importance of ensuring token holders
              fully share in the platform's success. We also know that token
              price growth requires value to be represented in the token.
            </p>
            <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg flex items-center space-x-2">
              <span>📄</span>
              <span>Download Litepaper</span>
            </button>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-heading text-white p-4 md:p-8 min-h-screen rounded-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-blue-400 mb-2">Roadmap</p>
          <h2 className="text-5xl font-bold">Our upcoming plans</h2>
        </div>

        <div className="flex flex-col md:flex-row w-full space-x-6">
          <div className="w-full md:w-1/2 px-2">
            {/* Foundation Card */}
            <div className="bg-blue-400 rounded-3xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-white text-blue-400 px-4 py-1 rounded-full text-sm">
                  Phase 1
                </span>
                <span className="text-white">Q1 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Foundation</h3>
              <p className="text-white/90">
                Turpis cursus ut tristique accumsan lacus. Commodo nibh enim
                urna vulputate et sed augue tortor. Odio at elementum lacus orci
                sed.
              </p>
            </div>

            {/* Phase 2 Card */}
            <div className="bg-white rounded-3xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                  Phase 2
                </span>
                <span className="text-blue-900">Q2 2025</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900">
                Prototype Development
              </h3>
            </div>

            {/* Phase 3 Card */}
            <div className="bg-white rounded-3xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                  Phase 3
                </span>
                <span className="text-blue-900">Q3 2025</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900">
                Market Presence
              </h3>
            </div>

            {/* Download Litepaper */}
            <div className="mb-12 hidden md:flex justify-center items-center">
              <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <FileText className="w-5 h-5" />
                <span>Download Litepaper</span>
              </button>
            </div>
          </div>
          {/* Timeline Items */}
          <div className="space-y-8 mb-8 relative">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 items-center relative">
                {/* Circle */}
                <div className="flex flex-col items-center relative">
                  <div
                    className={`rounded-full ${
                      item.icon ? item.bgColor : "bg-white px-6"
                    } p-4`}
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                  >
                    {item.icon || (
                      <span className="text-blue-900 font-medium">
                        {item.number}
                      </span>
                    )}
                  </div>

                  {/* Vertical line */}
                  {index !== 7 && (
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-cyan-400 ${
                        index == 0 || index == 1 ? "opacity-100" : "opacity-20"
                      } h-full`}
                    ></div>
                  )}
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-blue-300 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Download Litepaper */}
          <div className="mb-2 md:hidden justify-center items-center">
            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <FileText className="w-5 h-5" />
              <span>Download Litepaper</span>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mt-12 text-center space-y-6">
          <h3 className="text-5xl font-bold">
            Be the first to
            <span className="relative">
              <span className="relative z-10"> join</span>
              <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300 -z-10"></span>
            </span>
            <br /> our platform
          </h3>
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
            Explore the Platform
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-16">
        {/* Title Section */}
        <div className="space-y-1 text-center mb-8">
          <span className="text-sky-400 font-medium">Use Cases</span>
          <h2 className="text-5xl font-bold text-heading">
            <span className="relative">
              <span className="relative z-10">Where</span>
              <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300 -z-10"></span>
            </span>
            <span className="ml-2 relative z-10">you can</span>
          </h2>
          <h2 className="text-5xl font-bold text-heading">use Persona AI</h2>
        </div>
        {/* Cards Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-all duration-300 ease-in-out">
              {getVisibleCards().map((useCase, index) => (
                <div
                  key={index + currentSlide * slidesPerView}
                  className={`flex-none bg-[#e0f9fd] rounded-xl p-6 mx-4 md:mx-0 shadow-sm 
                     ${slidesPerView === 1 ? "w-full" : "w-1/2"}`}
                >
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation & Progress Bar */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full border border-gray-200 hover:bg-sky-300 disabled:bg-sky-200 bg-sky-400 transition-colors"
              aria-label="Previous slide"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Progress Bar */}
            <div className="relative w-40 md:w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-sky-400 transition-all duration-300"
                style={{
                  left: `${
                    ((currentSlide * slidesPerView) / usesCases.length) * 100
                  }%`,
                  width: `${(slidesPerView / usesCases.length) * 100}%`,
                }}
              ></div>
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-200 hover:bg-sky-300 disabled:bg-sky-200 bg-sky-400 transition-colors"
              aria-label="Next slide"
              disabled={totalSlides === currentSlide + 1}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      <section className=" w-full bg-blue-50 min-h-screen relative">
        <Testimonial />
        <div className="w-full hidden md:flex justify-center items-center absolute left-0 bottom-[-80px]">
          <div className="w-full relative bg-heading rounded-3xl md:rounded-full pl-20 py-8 px-8 flex flex-wrap items-center gap-4">
            <h2 className="text-white font-bold text-lg md:text-2xl flex-1">
              Stay Updated on the Future <br /> of Market Research
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none text-gray-700 placeholder-gray-500 px-6 py-2 md:py-3 w-full md:w-96 rounded-full"
              />

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full rounded-full py-2">
                Subscribe <span className="ml-2">➜</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex md:hidden justify-center items-center ">
          <div className="w-full relative bg-heading md:rounded-full py-8 px-8 flex flex-wrap items-center gap-4">
            <h2 className="text-white font-bold text-xl md:text-2xl flex-1">
              Stay Updated on the Future <br /> of Market Research
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none text-gray-700 placeholder-gray-500 px-6 py-3 md:py-3 w-full md:w-96 rounded-full"
              />

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full rounded-full py-3">
                Subscribe <span className="ml-2">➜</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
