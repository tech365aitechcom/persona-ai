import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-0 px-2 md:mx-12 md:pt-12 md:absolute -bottom-12">
      {/* Image Container */}
      <div className="w-0.5/4 rounded-xl hidden md:block">
        <Image
          src="https://s3-alpha-sig.figma.com/img/9458/4f2c/531c04ee75b24df439c3626405379fbf?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GX5eD2yT485N--7VWvhLlHTpGb-ZfkqHXDITI6F15vY~8oEuQ9YCubGN4ZU3S6xQeazMLinMNDTce6B3ryTeNs8E1v4bL6~TTdx3-j9CjWjrOVJn1wpb3pg464F04YmUL35U~kWRPsZMTUg8lkKKhTMZXlZ8R0xpOGpYJR87Eg7QkOF85yiwnMM4I2ZaFdIjcab3chSWmm15XuRVFhsyySTFiJJ7kY2c1s3egs5Ok5P3F6YfTntTej7wNcKMsZwSED08W91nRIaMhmVx5t0ORJ5IWN7g3jx3Soe5c0PRWpDNMRW9Ao494B86ViNujQxQ16aee4XAJ0cah53PPLyyDA__"
          alt=""
          width={250}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Content Card */}
      <div className=" w-full justify-center items-center md:mx-8 pr-12 hidden md:flex">
        <div className="w-full bg-heading rounded-xl flex justify-between items-center relative overflow-hidden py-5 px-4">
          {/* Left circle - positioned absolutely to overlap with the edge */}
          <div className="hidden md:flex absolute left-24 top-0 bottom-0  items-center">
            <Image
              src="/Ellipse31.png"
              alt="Decorative circle"
              width={200}
              height={400}
              className="transform h-full -translate-x-1/2"
            />
          </div>
          <div className="md:hidden absolute left-24 top-0 bottom-0  items-center">
            <Image
              src="/sleft.png"
              alt="Decorative circle"
              width={200}
              height={400}
              className="transform -translate-x-1/2"
            />
          </div>
          {/* Center content */}
          <div className="flex justify-center items-center flex-col gap-6 z-10 mx-auto px-8">
            <h2 className="text-white font-bold text-lg md:text-2xl font-asap text-center">
              Try PersonaAI to optimize marketing, product adoption and
              governance strategies. <br /> adoption, and governance strategies.
            </h2>

            <div className="text-center">
              <a
                href="https://x.com/PersonaAI_agent"
                target="_blank"
                className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto 
                                       transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-yellow-100
                                       group-hover:shadow-xl group-hover:scale-x-105"
              >
                Start Your AI-Powered Market Research Today
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right circle - positioned absolutely to overlap with the edge */}
          <div className="absolute right-24 top-0 bottom-0 hidden md:flex items-center">
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

      <div className="w-full rounded-xl md:hidden">
        <Image
          src="https://s3-alpha-sig.figma.com/img/9458/4f2c/531c04ee75b24df439c3626405379fbf?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GX5eD2yT485N--7VWvhLlHTpGb-ZfkqHXDITI6F15vY~8oEuQ9YCubGN4ZU3S6xQeazMLinMNDTce6B3ryTeNs8E1v4bL6~TTdx3-j9CjWjrOVJn1wpb3pg464F04YmUL35U~kWRPsZMTUg8lkKKhTMZXlZ8R0xpOGpYJR87Eg7QkOF85yiwnMM4I2ZaFdIjcab3chSWmm15XuRVFhsyySTFiJJ7kY2c1s3egs5Ok5P3F6YfTntTej7wNcKMsZwSED08W91nRIaMhmVx5t0ORJ5IWN7g3jx3Soe5c0PRWpDNMRW9Ao494B86ViNujQxQ16aee4XAJ0cah53PPLyyDA__"
          alt=""
          width={250}
          height={500}
          className="object-cover w-full"
        />
      </div>

      {/* Content Card */}
      <div className="flex w-full justify-center items-center md:mx-8 md:pr-12 md:hidden">
        <div className="w-full bg-heading rounded-xl flex justify-between items-center relative overflow-hidden py-5 px-4">
          {/* Left circle - positioned absolutely to overlap with the edge */}
          <div className="hidden md:flex absolute left-24 top-0 bottom-0  items-center">
            <Image
              src="/Ellipse31.png"
              alt="Decorative circle"
              width={200}
              height={400}
              className="transform h-full -translate-x-1/2"
            />
          </div>
          <div className="md:hidden absolute left-24 top-0 bottom-0  items-center">
            <Image
              src="/sleft.png"
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
              marketing, product <br /> adoption, and governance strategies.
            </h2>

            <div className="text-center">
              <button
                className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto 
                                       transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-yellow-100
                                       group-hover:shadow-xl group-hover:scale-x-105"
              >
                Start Your AI-Powered Market Research Today
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                <span className="absolute inset-y-0 right-0 w-0 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-6"></span>
              </button>
            </div>
          </div>

          {/* Right circle - positioned absolutely to overlap with the edge */}
          <div className="absolute right-24 top-0 bottom-0 hidden md:flex items-center">
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
