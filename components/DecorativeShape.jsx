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
          d="M58.9,-48.9C73.6,-44.3,80.8,-22.1,76.3,-4.5C71.8,13.2,55.6,26.3,41,38.4C26.3,50.5,13.2,61.5,-2.3,63.9C-17.8,66.2,-35.7,59.9,-43.1,47.8C-50.5,35.7,-47.5,17.8,-41.2,6.2C-35,-5.4,-25.5,-10.7,-18.1,-15.4C-10.7,-20,-5.4,-23.9,8.4,-32.3C22.1,-40.7,44.3,-53.6,58.9,-48.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default DecorativeShape;
