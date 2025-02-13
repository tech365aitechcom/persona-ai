import Image from "next/image";
import React from "react";

const AvatarIcon = ({ image }) => {
  return (
    <div className="w-24 h-24 bg-blue-100 rounded-full p-1 shadow-lg flex items-center justify-center border-8 border-white">
      <Image
        src={image}
        alt="Avatar"
        width={50}
        height={50}
        className="w-16 h-16 object-cover"
      />
    </div>
  );
};

export default AvatarIcon;
