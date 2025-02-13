import { teamMembers } from "@/data";
import React from "react";
import TeamMember from "./TeamMember";
import DecorativeShape from "./DecorativeShape";

const Testimonial = () => {
  return (
    <div className="relative min-h-screen bg-blue-50 py-20 px-2 md:px-6 overflow-hidden">
      <DecorativeShape className="-top-40 -left-20 rotate-45" />
      <DecorativeShape className="-bottom-60 -right-40 rotate-12" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-300 text-lg mb-3">Some Subtitle</p>
          <h1 className="text-5xl font-bold text-blue-900">
            Meet the <span className="text-yellow-400">Team</span>
          </h1>
        </div>
        <div className="space-y-12">
          {teamMembers.map((item) => (
            <TeamMember
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
