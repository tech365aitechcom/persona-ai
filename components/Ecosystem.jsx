import React from "react";
import Chart from "./Chart";
import { FileText } from "lucide-react";
import { chartData } from "@/data";

const TokenEcosystem = () => {
  return (
    <section className=" py-10 md:pt-40 md:pb-0 mx-8 md:mx-16 border-b">
      <div className="space-y-1 pb-6 text-center">
        <p className="text-sky-400 uppercase text-sm tracking-wide">
          TOKENOMICS
        </p>
        <h2 className="text-5xl font-bold text-heading font-asap">
          The
          <span className="relative">
            <span className="relative z-10"> $PRSNA</span>
            <span className="absolute bottom-0 left-0 w-full rounded-full h-3 bg-yellow-300 -z-10"></span>
          </span>
        </h2>
        <h2 className="text-5xl font-bold text-heading font-asap">
          Token Ecosystem
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full py-8 bg-white">
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-xl font-bold">Token Distribution</h2>
          <ul className="mt-4 space-y-4 flex items-center md:items-baseline justify-center flex-col">
            {chartData.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="font-medium">
                  {item.name}: <strong>{item.value}%</strong>
                </span>
              </li>
            ))}
          </ul>
          <p className="mb-5 py-2 md:mb-0 md:mt-12 font-normal leading-relaxed  md:text-xl text-left">
            Total Supply:
            <span className="text-xl md:text-3xl font-bold">
              1 billion tokens
            </span>
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Chart />
        </div>
        <div className="w-full md:w-1/3 text-left px-12 lg:px-0 flex flex-col gap-6 order-3">
          <p className="text-[#333333] leading-normal text-center">
            PersonaAI acknowledges the importance of ensuring token holders
            fully share in the platform&apos;s success. PersonaAI’s tokenized
            economy is designed to incentivize participation, foster
            transparency, and ensure the platform’s long-term growth. The $PRSNA
            token lies at the core of our ecosystem, offering dynamic utility
            and value for all stakeholders.
          </p>
          <div className="border-l-4 border-yellow-300">
            <p className="font-bold text-black mx-3">
              PersonaAI acknowledges the importance of ensuring token holders
              fully share in the platform&apos;s success. We also know that
              token price growth requires value to be represented in the token.
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button className="w-fit mt-6 px-6 py-4 border border-sky-400 text-sky-400 rounded-full flex items-center justify-start space-x-2">
              <FileText className="text-sky-400" />
              <span>Download Litepaper</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenEcosystem;
