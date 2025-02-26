import Image from "next/image";
import React from "react";

const WhyHold2 = () => {
  return (
    <section className="flex items-center justify-center py-10 md:py-32">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12 md:mb-24">
          <p className="text-[#57BEFF] uppercase text-base tracking-wide mb-8">
            TOKENOMICS
          </p>
          <h1 className="text-5xl font-bold text-[#004D7D] font-asap">
            Why{" "}
            <span className="relative inline-block">
              <span className="relative z-10">hold</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-10"></span>
            </span>{" "}
            $PRSNA
          </h1>
        </div>
        {/* Feature Points with Curved Connections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Curved dotted connections */}
          <div className="absolute w-full -top-2 left-44 right-0 hidden md:block z-10">
            <Image
              src="/Vector 1.png"
              alt="Curved dotted connections"
              width={800}
              height={50}
              className="object-contain w-2/3"
              priority
            />
          </div>

          {/* Point 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-300 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-20">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
            <p className="text-gray-700">
              Stake $PRSNA to access premium AI- <br />
              driven research insights.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-300 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-20">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Governance</h3>
            <p className="text-gray-700">
              Token holders can vote on platform <br />
              improvements & new features.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-300 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-20">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Rewards & Discounts</h3>
            <p className="text-gray-700">
              Get discounts on AI-driven research
              <br /> studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHold2;
