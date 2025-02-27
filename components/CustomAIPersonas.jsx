import Image from 'next/image'
import React from 'react'

export default function CustomAIPersonas() {
  return (
    <div className='pt-20 md:pt-52 w-full'>
      <div className='text-center py-24 md:py-36 px-4 md:px-12 bg-gradient-to-r from-[#68c5ff1a] to-[#19e7e71a] relative overflow-hidden'>
        {/* Left blur ellipse - repositioned for mobile */}
        <div className='absolute -left-10 md:left-20 top-1/4 md:top-1/2 md:-translate-y-1/2'>
          <Image
            src='/image.png'
            alt='Ellipse'
            width={200}
            height={200}
            className='opacity-10 -rotate-12 w-40 md:w-auto'
          />
        </div>

        <span className='text-[#57BEFF] font-medium'>AI Persona</span>
        <div className='relative z-10 mt-6'>
          <h1 className='text-3xl md:text-5xl font-bold text-heading font-asap'>
            <span className='relative'>
              <span className='relative z-10'>Custom</span>
              <span className='absolute bottom-0 left-0 w-full rounded-full h-2 md:h-3 bg-yellow-300 -z-10'></span>
            </span>
            <span> AI </span>Personas
          </h1>
          <p className='mt-4 text-[#222222] mx-auto text-lg md:text-2xl font-medium'>
            Your Users, Simulated. Get custom AI personas tailored to your
            audience <br />
            —use them for market research, product testing, and strategic
            planning repeatedly.
          </p>
          <button className='w-fit px-4 py-3 md:px-6 md:py-4 bg-white mt-6 text-sky-400 rounded-full space-x-2 text-sm md:text-base'>
            Commission a Custom Persona
          </button>
        </div>

        {/* Right blur ellipse - repositioned for mobile */}
        <div className='absolute -right-20 -bottom-20 md:-right-12 md:-bottom-44'>
          <Image
            src='/image.png'
            alt='Ellipse'
            width={400}
            height={350}
            className='opacity-10 -rotate-12 w-64 md:w-auto'
          />
        </div>
      </div>
    </div>
  )
}
