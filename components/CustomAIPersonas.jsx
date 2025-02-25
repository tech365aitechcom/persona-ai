import Image from "next/image";
import React from "react";

export default function CustomAIPersonas() {
  return (
    <div className="py-52 w-full">
      <div className="text-center py-36 px-12 bg-gradient-to-r from-[#68c5ff1a] to-[#19e7e71a] relative">
        <div className="absolute left-72 top-1/2 -translate-y-1/2">
          <Image
            src="/image.png"
            alt="Ellipse"
            width={200}
            height={200}
            className="opacity-15 -rotate-45 hidden md:block"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-heading font-asap">
            <span className="relative">
              <span className="relative z-10">Custom</span>
              <span className="absolute bottom-0 left-0 w-full rounded-full h-3 bg-yellow-300 -z-10"></span>
            </span>
            <span> AI </span>Personas
          </h1>
          <p className="mt-4 text-[#222222] mx-auto text-2xl font-medium">
            Your Users, Simulated. Get custom AI personas tailored to your
            audience—use them for <br /> market research, product testing, and
            strategic planning over and over again.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all">
            Commission a Custom Persona
          </button>
        </div>
        <div className="absolute -right-12 -bottom-44">
          <Image
            src="/image.png"
            alt="Ellipse"
            width={400}
            height={350}
            className="opacity-15 -rotate-12 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
