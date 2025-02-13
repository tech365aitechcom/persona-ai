import { Facebook, Linkedin } from "lucide-react";
import React from "react";

const TeamMember = ({ role, name, bio, imageSrc, imagePosition = "right" }) => {
  const contentOrder = imagePosition === "right" ? "order-1" : "order-2";
  const imageOrder = imagePosition === "right" ? "order-2" : "order-1";

  return (
    <div className="relative bg-white rounded-[2rem] shadow-lg p-4 md:p-12 flex flex-col md:flex-row items-center gap-12 mb-12 max-w-4xl mx-auto">
      <div className={`flex-1 ${contentOrder}`}>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-gray-600 text-lg mb-1">{role}</p>
            <h2 className="text-[1.75rem] font-bold text-blue-900 mb-6">
              {name}
            </h2>
          </div>
          <div className="flex gap-4">
            <Linkedin className="text-sky-400" />
            <Facebook className="text-blue-900" />
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>
      </div>
      <div className={`${imageOrder}`}>
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
