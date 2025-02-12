import Image from "next/image";
import React from "react";

const ProfileCard = ({
  image,
  percentage,
  gender,
  age,
  profession,
  hobbies,
}) => {
  return (
    <div className="w-64 h-auto bg-white rounded-xl p-4 shadow-lg transition-transform duration-700 transform scale-y-100 opacity-100">
      <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
        <Image
          src={image}
          alt="Avatar"
          width={50}
          height={50}
          className="w-16 h-16 object-cover"
        />
      </div>
      <div className="mb-3 text-center">
        <span className="text-black text-sm font-bold">{percentage}</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Gender:</span>
          <span className="font-medium">{gender}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Age:</span>
          <span className="font-medium">{age}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Profession:</span>
          <span className="font-medium">{profession}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Hobbies:</span>
          <span className="font-medium">{hobbies}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
