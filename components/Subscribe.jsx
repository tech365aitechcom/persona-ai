"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import QueryForm from "./QueryForm";

const Subscribe = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full md:pb-12">
      <div className="flex justify-center items-center md:mx-8">
        <div className="w-full bg-heading custom-radius flex justify-between items-center relative overflow-hidden py-8 px-4">
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
              Try PersonaAI to optimize marketing, <br /> product adoption and
              governance strategies.
            </h2>

            <div className="text-center">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger
                  className="bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto 
                                       transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-yellow-100
                                       group-hover:shadow-xl group-hover:scale-x-105"
                >
                  Start Your AI-Powered Market Research Today
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Contact Us</DialogTitle>
                  <QueryForm onClose={() => setOpen(false)} />
                </DialogContent>
              </Dialog>
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
