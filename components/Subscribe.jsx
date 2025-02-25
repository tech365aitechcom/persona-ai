import { ArrowRight } from "lucide-react";
import React from "react";

const Subscribe = () => {
  return (
    <section>
      <div className="hidden md:flex justify-center items-center mx-8 pb-12">
        <div className="w-full h-56 bg-heading radius pl-4 flex justify-center items-center gap-4 relative">
          {/* <div className="">
            <Image
              src="/Ellipse31.png"
              alt="PersonaAI Logo"
              width={200}
              height={700}
            />
          </div> */}
          <div className="flex justify-center items-center flex-col gap-6">
            <h2 className="text-white font-bold text-lg md:text-2xl flex-1 font-asap text-center">
              Join top crypto & Web2 businesses using PersonaAI to optimize
              marketing, product <br /> adoption, and governance strategies.
            </h2>

            <div className="text-center">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-[#333333] font-medium py-3 px-6 rounded-full inline-flex items-center">
                Start Your AI-Powered Market Research Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          {/* <div className="">
            <Image
              src="/Ellipse 4.png"
              alt="PersonaAI Logo"
              width={200}
              height={300}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
