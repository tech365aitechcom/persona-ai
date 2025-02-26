"use client";
import { usesCases } from "@/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UseCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Small screens: 1 slide
      } else {
        setSlidesPerView(3); // Larger screens: 3 slides
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);
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

  return (
    <section className="py-12 md:py-32">
      {/* Title Section */}
      <div className="space-y-1 text-center mb-8">
        <span className="text-sky-400 font-medium">Use Cases</span>
        <h2 className="text-5xl font-bold text-heading font-asap">
          <span className="relative">
            <span className="relative z-10">Where</span>
            <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300 -z-10"></span>
          </span>
          <span className="ml-2 relative z-10">you can</span>
        </h2>
        <h2 className="text-5xl font-bold text-heading">use Persona AI</h2>
      </div>
      {/* Cards Container */}
      <div className="relative overflow-x-hidden pl-4">
        <div className="flex gap-4 transition-all duration-300 ease-in-out">
          {getVisibleCards().map((useCase, index) => (
            <div
              key={index + currentSlide * slidesPerView}
              className={`flex-none bg-[#e0f9fd] rounded-xl p-6 shadow-sm 
                            ${
                              slidesPerView === 1
                                ? "w-[calc(100%/1-28px)]"
                                : "w-[calc(100%/3-16px)]"
                            }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <Image src={useCase.icon} width={50} height={50} alt="icon" />
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {useCase.title}
                </h3>
              </div>{" "}
              <p className="text-gray-600 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation & Progress Bar */}
        <div className="flex items-center justify-center gap-4 m-8">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full border border-gray-200 hover:bg-sky-300 disabled:bg-sky-200 bg-sky-400 transition-colors"
            aria-label="Previous slide"
            disabled={currentSlide === 0}
          >
            <ArrowLeft className="w-6 h-6 text-white" />
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
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
