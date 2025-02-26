import React from "react";
import DecorativeShape from "./DecorativeShape";
import { ArrowRight } from "lucide-react";

export default function ResearchImpact() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="text-center py-10 md:py-16 lg:py-20 bg-[#E0F9FD] px-4 sm:px-6 md:px-8">
        <DecorativeShape className="hidden md:block absolute -top-24 -left-10 opacity-80" />
        <DecorativeShape className="hidden md:block absolute -bottom-28 -right-10 rotate-180 opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#222222] font-asap">
            Want to maximize your research impact?
          </h1>
          <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full inline-flex items-center text-sm sm:text-base transition-all duration-200">
              Explore $PRSNA Utility
              <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
