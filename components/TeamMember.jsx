import { Linkedin, Twitter, X } from "lucide-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const TeamMember = ({
  role,
  name,
  bio,
  currentWork,
  imageSrc,
  imagePosition = "right",
  localUrl = false,
}) => {
  const contentOrder = imagePosition === "right" ? "order-1" : "order-2";
  const imageOrder = imagePosition === "right" ? "order-2" : "order-1";

  return (
    <div className="relative bg-white rounded-[2rem] shadow-lg p-4 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-12 max-w-4xl mx-auto">
      <div className={`flex-1 ${contentOrder}`}>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-gray-600 text-lg mb-1">{role}</p>
            <h2 className="text-[1.75rem] font-bold text-blue-900 mb-6">
              {name}
            </h2>
          </div>
          <div className="flex gap-4">
            <Linkedin className="text-blue-900 cursor-pointer" />
            <FaXTwitter className="text-blue-900 cursor-pointer w-6 h-6" />
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{currentWork}</p>
      </div>
      <div className={`${imageOrder}`}>
        <div className="w-72 h-72 rounded-full  overflow-hidden flex justify-center items-center">
          <img
            src={imageSrc}
            alt={name}
            className={`${localUrl ? "" : "w-full h-full object-cover"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
