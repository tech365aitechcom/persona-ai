import { teamMembers } from "@/data";
import React from "react";
import TeamMember from "./TeamMember";
import DecorativeShape from "./DecorativeShape";

const Testimonial = () => {
  return (
    <div className="relative min-h-screen bg-blue-50 pt-16 pb-28 md:pb-44 px-2 md:px-6 rounded-full">
      <DecorativeShape className="hidden md:block-top-32 -left-20" />
      <DecorativeShape className="hidden md:block-bottom-28 -right-20 rotate-180" />

      <div className="max-w-7xl mx-auto space-y-7">
        <div className="space-y-1 text-center">
          <span className="text-sky-400 font-medium">Some Subtitle</span>
          <h2 className="text-5xl font-bold text-heading font-asap">
            <span className="relative">
              <span className="">Meet our</span>
            </span>
            <span className="ml-2 relative">
              <span className="relative z-10">Team</span>
              <span className="absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300"></span>
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          {teamMembers.map((item, index) => (
            <TeamMember
              key={index}
              role={item.role}
              name={item.name}
              bio={item.bio}
              currentWork={item.currentWork}
              imageSrc={item.imageUrl}
              imagePosition={item.imagePosition}
              localUrl={item.localUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
