import Image from "next/image";
import React from "react";

const AvatarIcon = ({ image }) => {
  return (
    <div className="w-20 h-20 bg-white rounded-full p-1 shadow-lg flex items-center justify-center">
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
