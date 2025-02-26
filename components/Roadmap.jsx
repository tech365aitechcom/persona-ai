import { timeline } from "@/data";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <section className="bg-heading text-white p-4 md:pt-28 md:p-8 min-h-screen relative rounded-2xl md:radius lg:px-20 md:px-10 px-4">
      <div className="space-y-1 mb-12 text-center">
        <span className="text-sky-400 font-medium">Roadmap</span>
        <h2 className="text-5xl font-bold text-white font-asap">
          <span className="relative">
            <span className="">Our upcoming</span>
          </span>
          <span className="ml-2 relative">
            <span className="relative z-10">Plans</span>
            <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300"></span>
          </span>
        </h2>
      </div>
      <div className="flex flex-col justify-center gap-16 items-center md:flex-row w-full space-x-6">
        <div className="w-full md:w-1/4">
          {/* Foundation Card */}
          <div className="bg-[#57BEFF] rounded-3xl p-4 py-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-white text-blue-400 px-4 py-1 rounded-full text-sm">
                Phase 1
              </span>
              <span className="text-white">Q1 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Foundation</h3>
            <p className="text-white/90">
              Turpis cursus ut tristique accumsan lacus. Commodo nibh enim urna
              vulputate et sed augue tortor. Odio at elementum lacus orci sed.
            </p>
          </div>

          {/* Phase 2 Card */}
          <div className="bg-white rounded-3xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#57BEFF] text-white px-4 py-1 rounded-full text-sm">
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
              <span className="bg-[#57BEFF] text-white px-4 py-1 rounded-full text-sm">
                Phase 3
              </span>
              <span className="text-blue-900">Q3 2025</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900">Market Presence</h3>
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
      <div className="relative pt-16 text-center space-y-6 pb-28">
        <h3 className="text-5xl font-bold font-asap">
          Be the first to
          <span className="ml-2 relative">
            <span className="relative z-10">join</span>
            <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300"></span>
          </span>
          <br /> our platform
        </h3>
        <button className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
          Explore the Platform
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src="/ellipse3.png"
          alt="Ellipse"
          width={300}
          height={300}
          className="hidden md:block bottom-right-radius"
        />
        <Image
          src="/ellipse3.png"
          alt="Ellipse"
          width={100}
          height={100}
          className="md:hidden"
        />
      </div>
    </section>
  );
};

export default Roadmap;
