import { teamMembers } from "@/data";
import React from "react";
import TeamMember from "./TeamMember";
import DecorativeShape from "./DecorativeShape";

const Testimonial = () => {
  return (
    <div className="relative min-h-screen bg-blue-50 py-20 px-2 md:px-6 overflow-hidden">
      <DecorativeShape className="-top-40 -left-20 rotate-45" />
      <DecorativeShape className="-bottom-60 -right-40 rotate-12" />

      <div className="max-w-7xl mx-auto space-y-7">
        <div className="space-y-1 text-center">
          <span className="text-sky-400 font-medium">Some Subtitle</span>
          <h2 className="text-5xl font-bold text-heading">
            <span className="relative">
              <span className="relative z-10">Meet our</span>
              <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300 -z-10"></span>
            </span>
            <span className="ml-2 relative z-10">Team</span>
          </h2>
        </div>
        <div className="space-y-12">
          {teamMembers.map((item, index) => (
            <TeamMember
              key={index}
              role={item.role}
              name={item.name}
              bio={item.bio}
              imageSrc={item.imageUrl}
              imagePosition={item.imagePosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
