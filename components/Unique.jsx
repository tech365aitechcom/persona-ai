import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Unique = () => {
  return (
    <div className="w-full px-12">
      <div className="bg-heading radius p-8 text-white z-50 relative">
        <div className="space-y-1 my-12 text-center">
          <span className="text-sky-400 font-medium">Roadmap</span>
          <h2 className="text-5xl font-bold text-white font-asap">
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

        <div className="px-14 flex w-full gap-12">
          <div className="h-fit w-full gap-10  md:w-1/2">
            <div className="flex flex-col relative mb-36">
              <div className="text-7xl text-cyan-200 font-bold opacity-50">
                ?
              </div>
              <div className="absolute top-5 left-2">
                <h2 className="text-3xl font-bold mb-2">
                  Traditional Market Research- Most Market Data is Quantitative.
                </h2>
                <p className="mb-8 text-xl">
                  Traditional market research relies on numerical surveys, price
                  charts, and on-chain analytics, but these miss intent,
                  reasoning, and sentiment.
                </p>
              </div>
            </div>

            <div className="space-y-4 relative">
              <div className="bg-blue-200 flex flex-col justify-center gap-2 w-40 h-44 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
                <Image src="/web-site (2).png" height={40} width={40} alt="" />
                <h3 className="font-medium mb-1 text-lg">
                  Surveys & On-Chain Data
                </h3>
              </div>

              <div className="bg-blue-200 flex flex-col justify-center gap-2 w-40 h-44 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm z-10">
                <Image src="/web-site (1).png" height={40} width={40} alt="" />
                <h3 className="font-medium mb-1 text-lg">What happened?</h3>
              </div>
              <div className="flex justify-center items-center absolute top-12 left-36">
                <div className="bg-blue-200 flex flex-col justify-center gap-2 w-40 h-44 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm z-50">
                  <Image src="/Frame 71.png" height={30} width={30} alt="" />
                  <h3 className="font-medium mb-1 text-lg">Numbers, Metrics</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="relative mx-auto">
            {/* Top left card - Emotional & Behavioral Insights */}
            <div className="absolute top-4 left-4 bg-blue-200 flex flex-col justify-center gap-2 w-52 h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
              <Image src="/creation.png" height={40} width={40} alt="" />
              <h3 className="font-medium mb-1 text-white text-lg">
                AI-Powered Interviews & Focus Groups
              </h3>
            </div>
            {/* Top right card - AI-Powered Interviews */}
            <div className="absolute top-4 right-8 bg-blue-200 flex flex-col justify-center gap-2 w-52 h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
              <Image src="/brain.png" height={40} width={40} alt="" />
              <h3 className="font-medium mb-1 text-white text-lg">
                Emotional & Behavioral Insights
              </h3>
            </div>
            {/* Center card - PersonaAI */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-200 flex flex-col items-center justify-center gap-2 w-80 h-40 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm z-10">
              <Image src="/logo.png" height={50} width={50} alt="" />
              <h3 className="font-medium mb-1 text-center text-white text-lg">
                PersonaAI Produces Simulated Qualitative Data
              </h3>
            </div>
            {/* Bottom left card - Emotional & Behavioral Insights */}
            <div className="absolute bottom-4 right-8 bg-blue-200 flex flex-col justify-center gap-2 w-52 h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
              <Image src="/brain.png" height={40} width={40} alt="" />
              <h3 className="font-medium mb-1 text-white text-lg">
                Emotional & Behavioral Insights
              </h3>
            </div>{" "}
            <div className="absolute bottom-4 left-4 bg-blue-200 flex flex-col justify-center gap-2 w-52 h-52 bg-opacity-30 p-4 rounded-2xl backdrop-blur-sm">
              <Image src="/web-site.png" height={40} width={40} alt="" />
              <h3 className="font-medium mb-1 text-white text-lg">
                Why did it happened?
              </h3>
            </div>
            {/* Bottom right card - Why did it happened? */}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-5 relative pb-20 z-10">
          <h2 className="text-4xl font-bold mb-4 font-asap">
            Want access to exclusive AI-driven
            <br />
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
  );
};

export default Unique;
