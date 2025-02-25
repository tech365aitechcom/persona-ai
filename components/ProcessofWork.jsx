import React from "react";
import { ArrowRight } from "lucide-react";
import { process } from "@/data";
import Image from "next/image";

const ProcessOfWork = () => {
  return (
    <div className="bg-heading text-white flex items-center flex-col radius relative overflow-hidden py-16 mx-2 md:mx-12">
      <div className="absolute right-0 top-0">
        <Image
          src="/Ellipse 3.png"
          alt="Ellipse"
          width={300}
          height={300}
          className="hidden md:block"
        />
        <Image
          src="/Ellipse 3.png"
          alt="Ellipse"
          width={100}
          height={100}
          className="md:hidden"
        />
      </div>
      <div className="text-center mb-16">
        <p className="text-[#57BEFF] mb-2">Some Subtitle</p>
        <h2 className="text-5xl font-bold font-asap">How It Works</h2>
      </div>

      <div className="flex flex-col">
        {process.map((step, index) => (
          <div key={index} className="">
            {/* Step content with circle */}
            <div className="flex items-center gap-16">
              <div className="">
                <div className="bg-blue-50 w-36 h-36 mx-auto rounded-full flex items-center justify-center relative z-10">
                  <Image src={step.img} width={70} height={70} alt="icon" />
                </div>
                {index < process.length - 1 && (
                  <div className="flex justify-center">
                    <Image
                      src={index == 1 ? "/Vector.png" : "/Vector2.png"}
                      width={index == 1 ? 28 : 20}
                      height={index == 1 ? 28 : 20}
                      alt="icon"
                      className="mb-3"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                {/* Title and description */}
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-base">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-3 px-6 rounded-full inline-flex items-center">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProcessOfWork;
