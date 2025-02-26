import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Subscribe = () => {
  return (
    <section className="w-full">
      <div className="hidden md:flex justify-center items-center mx-8 pb-12">
        <div className="w-full bg-heading rounded-xl flex justify-between items-center relative overflow-hidden py-8 px-4">
          {/* Left circle - positioned absolutely to overlap with the edge */}
          <div className="absolute left-24 top-0 bottom-0 flex items-center">
            <Image
              src="/Ellipse31.png"
              alt="Decorative circle"
              width={200}
              height={400}
              className="transform -translate-x-1/2"
            />
          </div>

          {/* Center content */}
          <div className="flex justify-center items-center flex-col gap-6 z-10 mx-auto px-8">
            <h2 className="text-white font-bold text-lg md:text-2xl font-asap text-center">
              Join top crypto & Web2 businesses using PersonaAI to optimize
              marketing, product adoption, and governance strategies.
            </h2>

            <div className="text-center">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-[#333333] font-medium py-3 px-6 rounded-full inline-flex items-center">
                Start Your AI-Powered Market Research Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right circle - positioned absolutely to overlap with the edge */}
          <div className="absolute right-24 top-0 bottom-0 flex items-center">
            <Image
              src="/Ellipse 4.png"
              alt="Decorative circle"
              width={200}
              height={400}
              className="transform translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
