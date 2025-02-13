import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ProfileCard = ({
  image,
  percentage,
  gender,
  age,
  profession,
  hobbies,
  color,
}) => {
  const [faceUp, setFaceUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFaceUp(true);
    }, 10000); // Tilt after 10s

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="w-64 h-auto bg-white rounded-xl p-4 shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotateX: faceUp ? 10 : 0,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-24 h-24 mx-auto mb-1 bg-blue-100 rounded-full flex items-center justify-center">
        <Image
          src={image}
          alt="Avatar"
          width={50}
          height={50}
          className="w-16 h-16 object-cover"
        />
      </div>
      <div className="mb-3 text-center">
        <span
          className={`text-black text-sm font-bold ${color} px-4 py-1 rounded-full`}
        >
          {percentage}
        </span>
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
    </motion.div>
  );
};

export default ProfileCard;
