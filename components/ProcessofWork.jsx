import React from 'react'
import { ArrowRight } from 'lucide-react'
import { process } from '@/data'
import Image from 'next/image'

const ProcessOfWork = () => {
  return (
    <div className='w-full'>
      <div className='bg-heading text-white flex items-center flex-col radius relative overflow-hidden py-6 md:py-12 md:mx-12'>
        {/* Subtitle and Title */}
        <div className='text-center mb-8'>
          <p className='text-blue-300 text-sm mb-1'>Some Subtitle</p>
          <h2 className='text-2xl md:text-5xl font-bold font-asap'>
            How It Works
          </h2>
        </div>

        {/* Desktop Layout - Horizontal with left-aligned text */}
        <div className='hidden md:flex md:flex-col md:px-12'>
          <div className='hidden md:block absolute right-0 top-0'>
            <Image
              src='/Ellipse 3.png'
              alt='Decorative circle'
              width={200}
              height={200}
              className=''
            />
          </div>
          {process.map((step, index) => (
            <div key={`desktop-${index}`} className='mb-6'>
              <div className='flex items-start'>
                {/* Left side - Icon */}
                <div className='flex flex-col items-center mr-16'>
                  <div className='bg-blue-50 w-36 h-36 mx-auto rounded-full flex items-center justify-center relative z-10'>
                    <Image src={step.img} width={70} height={70} alt='icon' />
                  </div>
                  {/* Connector Line (except for last item) */}
                  {index < process.length - 1 && (
                    <div className='flex justify-center'>
                      <Image
                        src={index == 1 ? '/Vector.png' : '/Vector2.png'}
                        width={index == 1 ? 28 : 20}
                        height={index == 1 ? 28 : 20}
                        alt='icon'
                        className='mb-3'
                      />
                    </div>
                  )}
                </div>

                {/* Right side - Content */}
                <div className='flex flex-col pt-12'>
                  <h3 className='text-2xl font-bold mb-2'>{step.title}</h3>
                  <p className='text-base'>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Vertical with centered text */}
        <div className='flex flex-col items-center md:hidden'>
          {process.map((step, index) => (
            <div
              key={`mobile-${index}`}
              className='mb-6 flex flex-col items-center'
            >
              {/* Step Icon Circle */}
              <div className='bg-blue-50 w-36 h-36 mx-auto rounded-full flex items-center justify-center relative z-10'>
                <Image src={step.img} width={70} height={70} alt='icon' />
              </div>

              {/* Step Title and Description */}
              <h3 className='text-center font-bold text-lg mb-2'>
                {step.title}
              </h3>
              <p className='text-center text-sm mb-6 px-4'>{step.text}</p>

              {/* Connector Line (except for last item) */}
              {index < process.length - 1 && (
                <div className='flex justify-center'>
                  <Image
                    src={index == 1 ? '/Vector.png' : '/Vector2.png'}
                    width={index == 1 ? 28 : 20}
                    height={index == 1 ? 28 : 20}
                    alt='icon'
                    className='mb-3'
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className='text-center mt-8'>
          <button
            className='bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto 
              transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-yellow-100
              group-hover:shadow-xl group-hover:scale-x-105'
          >
            Learn More
            <ArrowRight className='w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
            <span className='absolute inset-y-0 right-0 w-0 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-6'></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProcessOfWork
