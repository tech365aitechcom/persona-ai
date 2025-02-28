import { teamMembers } from '@/data'
import React from 'react'
import DecorativeShape from '@/components/DecorativeShape'
import TeamMember from './TeamMember'

const OurTeam = () => {
  return (
    <div className='relative min-h-screen mt-20 md:mb-12 pt-16 py-28 md:pb-44 px-2 md:px-6 bg-[#57BEFF29]'>
      <DecorativeShape className='hidden md:block -top-6 left-60' />
      <DecorativeShape className='hidden md:block -bottom-7 right-60 rotate-180' />

      <div className='max-w-7xl mx-auto space-y-7'>
        <div className='space-y-1 text-center pb-8'>
          <h2 className='text-5xl font-bold text-heading font-asap'>
            <span className='relative'>
              <span className=''>Meet our</span>
            </span>
            <span className='ml-2 relative'>
              <span className='relative z-10'>Team</span>
              <span className='absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300'></span>
            </span>
          </h2>
        </div>

        <div className='space-y-12'>
          {teamMembers.map((item, index) => (
            <TeamMember
              key={index}
              role={item.role}
              name={item.name}
              bio={item.bio}
              xLink={item.xLink}
              linkedinLink={item.linkedinLink}
              currentWork={item.currentWork}
              imageSrc={item.imageUrl}
              imagePosition={item.imagePosition}
              localUrl={item.localUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
