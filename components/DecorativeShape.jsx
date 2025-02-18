import React from "react";

const DecorativeShape = ({ className }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width="550"
        height="550"
      >
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(25, 231, 231, 0.48)" />
            <stop offset="100%" stopColor="rgba(104, 197, 255, 0.48)" />
          </linearGradient>
        </defs>

        <path
          fill="url(#myGradient)"
          d="M38.7,-24.6C41.1,-5,27.9,7.7,11.6,20.6C-4.8,33.6,-24.3,46.9,-34.1,41.2C-44,35.4,-44.2,10.5,-36.9,-15.8C-29.6,-42.1,-14.8,-69.8,1.6,-70.4C18.1,-70.9,36.2,-44.3,38.7,-24.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default DecorativeShape;
