import React from "react";
import DecorativeShape from "./DecorativeShape";
import { ArrowRight } from "lucide-react";

export default function ResearchImpact() {
  return (
    <div className="w-full relative">
      <div className="text-center py-20 bg-[#E0F9FD] ">
        <DecorativeShape className="hidden md:block -top-24 left-0" />
        <DecorativeShape className="hidden md:block -bottom-28 right-0 rotate-180" />

        <div className="relative z-10">
          <h1 className="text-5xl font-medium text-[#222222] font-asap">
            Want to maximize your research impact?
          </h1>
          <div className="text-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-3 px-6 rounded-full inline-flex items-center">
              Explore $PRSNA Utility
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
