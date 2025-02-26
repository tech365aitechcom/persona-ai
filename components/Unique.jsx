import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Unique = () => {
  return (
    <div className="w-full sm:px-8 md:px-12 md:pt-20">
      <div className="bg-heading radius p-4 sm:p-6 md:p-8 text-white z-50 relative">
        {/* Mobile view shows a simplified vertical layout that matches the image */}
        <div className="block md:hidden">
          <div className="space-y-1 my-6 text-center">
            <span className="text-sky-400 font-medium text-sm">
              Some Subtitle
            </span>
            <h2 className="text-2xl font-bold text-white font-asap">
              <span className="relative">
                What Makes PersonaAI Data
                <span className="relative ml-1">
                  <span className="relative z-10 ml-0">Unique</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 rounded-full bg-yellow-300"></span>
                </span>
                <span>?</span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-center mt-8 space-y-6">
            {/* Traditional Market Research section */}
            <div className="text-center px-4 mb-2">
              <h3 className="text-xl font-bold mb-2">
                Traditional Market Research- Most Market Data is Quantitative.
              </h3>
              <p className="mb-4 text-sm">
                Traditional market research relies on numerical surveys, price
                charts, and on-chain analytics, but these miss intent,
                reasoning, and sentiment.
              </p>
            </div>

            {/* Cards in vertical alignment */}
            <div className="bg-blue-200 flex flex-col justify-center gap-2 w-48 h-48 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm text-center">
              <div className="flex justify-center">
                <Image src="/web-site (2).png" height={40} width={40} alt="" />
              </div>
              <h3 className="font-medium text-lg">Surveys & On-Chain Data</h3>
            </div>

            <div className="bg-blue-200 flex flex-col justify-center gap-2 w-48 h-48 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm text-center">
              <div className="flex justify-center">
                <Image src="/Frame 71.png" height={40} width={40} alt="" />
              </div>
              <h3 className="font-medium text-lg">Numbers, Metrics</h3>
            </div>

            <div className="bg-blue-200 flex flex-col justify-center gap-2 w-48 h-48 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm text-center">
              <div className="flex justify-center">
                <Image src="/web-site (1).png" height={40} width={40} alt="" />
              </div>
              <h3 className="font-medium text-lg">What happened?</h3>
            </div>

            <div className="bg-blue-200 flex flex-col justify-center gap-2 w-48 h-48 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm text-center">
              <div className="flex justify-center">
                <Image src="/logo.png" height={40} width={40} alt="" />
              </div>
              <h3 className="font-medium text-lg">
                PersonaAI Produces Simulated Qualitative Data
              </h3>
            </div>

            <div className="bg-blue-200 flex flex-col justify-center gap-2 w-48 h-48 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm text-center">
              <div className="flex justify-center">
                <Image src="/brain.png" height={40} width={40} alt="" />
              </div>
              <h3 className="font-medium text-lg">
                Emotional & Behavioral Insights
              </h3>
            </div>

            <div className="bg-blue-200 flex flex-col justify-center gap-2 w-48 h-48 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm text-center">
              <div className="flex justify-center">
                <Image src="/creation.png" height={40} width={40} alt="" />
              </div>
              <h3 className="font-medium text-lg">
                AI-Powered Interviews & Focus Groups
              </h3>
            </div>

            <div className="bg-blue-200 flex flex-col justify-center gap-2 w-48 h-48 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm text-center">
              <div className="flex justify-center">
                <Image src="/web-site.png" height={40} width={40} alt="" />
              </div>
              <h3 className="font-medium text-lg">Why did it happened?</h3>
            </div>

            {/* CTA section */}
            <div className="text-center mt-6 pb-8 z-10">
              <h2 className="text-xl font-bold mb-6 font-asap px-2">
                Want access to exclusive AI-driven consumer sentiment research?
              </h2>
              <button className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop layout - unchanged from original */}
        <div className="hidden md:block container mx-auto px-4 md:px-6  lg:px-8 max-w-7xl">
          <div className="space-y-1 my-12 text-center">
            <span className="text-sky-400 font-medium">Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-asap">
              <span className="relative">
                <span className="">What Makes PersonaAI</span>
              </span>
              <span className="ml-2 relative">
                <span className="relative z-10">Data</span>
                <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300"></span>
              </span>
              <span className="relative">
                <span className=""> Unique?</span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 px-4 lg:px-14">
            {/* Left side content */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col relative mb-20 md:mb-36">
                <div className="text-6xl md:text-7xl text-cyan-200 font-bold opacity-50">
                  ?
                </div>
                <div className="absolute top-5 left-2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Traditional Market Research- Most Market Data is
                    Quantitative.
                  </h2>
                  <p className="mb-8 text-lg md:text-xl">
                    Traditional market research relies on numerical surveys,
                    price charts, and on-chain analytics, but these miss intent,
                    reasoning, and sentiment.
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative h-80">
                <div className="bg-blue-200 flex flex-col justify-center gap-2 w-36 md:w-40 h-40 md:h-44 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm absolute top-0 left-0">
                  <Image
                    src="/web-site (2).png"
                    height={40}
                    width={40}
                    alt=""
                  />
                  <h3 className="font-medium mb-1 text-base md:text-lg">
                    Surveys & On-Chain Data
                  </h3>
                </div>

                <div className="bg-blue-200 flex flex-col justify-center gap-2 w-36 md:w-40 h-40 md:h-44 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm z-10 absolute -bottom-14 left-0">
                  <Image
                    src="/web-site (1).png"
                    height={40}
                    width={40}
                    alt=""
                  />
                  <h3 className="font-medium mb-1 text-base md:text-lg">
                    What happened?
                  </h3>
                </div>

                <div className="absolute top-12 left-24 md:left-36">
                  <div className="bg-blue-200 flex flex-col justify-center gap-2 w-36 md:w-40 h-40 md:h-44 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm z-50">
                    <Image src="/Frame 71.png" height={30} width={30} alt="" />
                    <h3 className="font-medium mb-1 text-base md:text-lg">
                      Numbers, Metrics
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full lg:w-1/2 relative h-[550px] mt-20 lg:mt-0">
              {/* Top left card */}
              <div className="absolute top-4 left-4 bg-blue-200 flex flex-col justify-center gap-2 w-44 md:w-52 h-44 md:h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
                <Image src="/brain.png" height={40} width={40} alt="" />
                <h3 className="font-medium mb-1 text-white text-base md:text-lg">
                  Emotional & Behavioral Insights
                </h3>
              </div>

              {/* Top right card */}
              <div className="absolute top-4 right-4 md:right-8 bg-blue-200 flex flex-col justify-center gap-2 w-44 md:w-52 h-44 md:h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
                <Image src="/creation.png" height={40} width={40} alt="" />
                <h3 className="font-medium mb-1 text-white text-base md:text-lg">
                  AI-Powered Interviews & Focus Groups
                </h3>
              </div>

              {/* Center card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-200 flex flex-col items-center justify-center gap-2 w-64 md:w-80 h-36 md:h-40 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm z-10">
                <Image src="/logo.png" height={50} width={50} alt="" />
                <h3 className="font-medium mb-1 text-center text-white text-base md:text-lg">
                  PersonaAI Produces Simulated Qualitative Data
                </h3>
              </div>

              {/* Bottom left card */}
              <div className="absolute bottom-4 left-4 bg-blue-200 flex flex-col justify-center gap-2 w-44 md:w-52 h-44 md:h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
                <Image src="/brain.png" height={40} width={40} alt="" />
                <h3 className="font-medium mb-1 text-white text-base md:text-lg">
                  Emotional & Behavioral Insights
                </h3>
              </div>

              {/* Bottom right card */}
              <div className="absolute bottom-4 right-4 md:right-8 bg-blue-200 flex flex-col justify-center gap-2 w-44 md:w-52 h-44 md:h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
                <Image src="/web-site.png" height={40} width={40} alt="" />
                <h3 className="font-medium mb-1 text-white text-base md:text-lg">
                  Why did it happened?
                </h3>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center pt-16 md:mt-5 relative pb-20 z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-asap px-4">
              Want access to exclusive AI-driven
              <br className="hidden md:block" />
              consumer sentiment research?
            </h2>
            <button className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute left-0 bottom-0">
            <Image
              src="/Group 21.png"
              alt="Ellipse"
              width={300}
              height={300}
              className="hidden md:block radius"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
