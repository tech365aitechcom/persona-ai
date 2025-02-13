import React from "react";

const DecorativeShape = ({ className }) => {
  <div className={`absolute pointer-events-none ${className}`}>
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
      <path
        d="M0 200C0 89.543 89.543 0 200 0C310.457 0 400 89.543 400 200C400 310.457 310.457 400 200 400C89.543 400 0 310.457 0 200Z"
        fill="#BBE5FA"
        fillOpacity="0.3"
      />
    </svg>
  </div>;
};

export default DecorativeShape;
