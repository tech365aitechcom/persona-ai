import { timeline } from '@/data'
import { ArrowRight, FileText } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Roadmap = () => {
  return (
    <section className='bg-heading text-white px-4 py-12 mb-12 md:py-28 relative w-full flex flex-col items-center radius'>
      {/* Heading */}
      <div className='text-center space-y-2 mb-12'>
        <span className='text-sky-400 font-medium'>Roadmap</span>
        <h2 className='text-4xl md:text-5xl font-bold text-white font-asap'>
          <span className='relative'>
            <span>Our upcoming</span>
          </span>
          <span className='ml-2 relative'>
            <span className='relative z-10'>Plans</span>
            <span className='absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300'></span>
          </span>
        </h2>
      </div>

      {/* Roadmap Layout */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-5xl'>
        {/* Left Section - Cards */}
        <div className='w-full md:w-2/3 space-y-8'>
          {/* Phase 1 */}
          <div className='bg-[#57BEFF] rounded-3xl p-6'>
            <div className='flex justify-between items-center mb-4'>
              <span className='bg-white text-blue-400 px-4 py-1 rounded-full text-sm'>
                Phase 1
              </span>
              <span className='text-white'>Q1 2025</span>
            </div>
            <h3 className='text-xl font-bold mb-3'>Foundation</h3>
            <p className='text-white/90'>
              This is where all the planning and strategising for
              PersonaAI happens
            </p>
          </div>

          {/* Phase 2 */}
          <div className='bg-white rounded-3xl p-6'>
            <div className='flex justify-between items-center mb-4'>
              <span className='bg-[#57BEFF] text-white px-4 py-1 rounded-full text-sm'>
                Phase 2
              </span>
              <span className='text-blue-900'>Q2 2025</span>
            </div>
            <h3 className='text-xl font-bold text-blue-900'>
              Prototype Development
            </h3>
          </div>

          {/* Phase 3 */}
          <div className='bg-white rounded-3xl p-6'>
            <div className='flex justify-between items-center mb-4'>
              <span className='bg-[#57BEFF] text-white px-4 py-1 rounded-full text-sm'>
                Phase 3
              </span>
              <span className='text-blue-900'>Q3 2025</span>
            </div>
            <h3 className='text-xl font-bold text-blue-900'>Market Presence</h3>
          </div>

          {/* Litepaper Button (Hidden on mobile) */}
          <div className='hidden md:flex justify-center'>
            <button className='flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition'>
              <FileText className='w-5 h-5' />
              <span>Download Litepaper</span>
            </button>
          </div>
        </div>

        {/* Right Section - Timeline */}
        <div className='w-full md:w-2/3 space-y-8 relative flex flex-col items-center'>
          {timeline.map((item, index) => (
            <div
              key={index}
              className='flex gap-4 items-center relative w-full max-w-md'
            >
              {/* Circle */}
              <div className='flex flex-col items-center relative'>
                <div
                  className={`rounded-full ${
                    item.icon ? item.bgColor : 'bg-white px-6'
                  } p-4 shadow-lg`}
                >
                  {item.icon || (
                    <span className='text-blue-900 font-medium'>
                      {item.number}
                    </span>
                  )}
                </div>

                {/* Vertical Line */}
                {index !== timeline.length - 1 && (
                  <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-cyan-400 h-full'></div>
                )}
              </div>

              {/* Text Content */}
              <div className='flex-1'>
                <h4 className='font-medium mb-1'>{item.title}</h4>
                <p className='text-blue-300 text-sm'>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Litepaper Button (Mobile) */}
      <div className='mt-8 md:hidden'>
        <button className='flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition'>
          <FileText className='w-5 h-5' />
          <span>Download Litepaper</span>
        </button>
      </div>

      {/* CTA Section */}
      {/* <div className='pt-16 text-center space-y-6 pb-20'>
        <h3 className='text-4xl md:text-5xl font-bold font-asap'>
          Be the first to
          <span className='ml-2 relative'>
            <span className='relative z-10'>join</span>
            <span className='absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300'></span>
          </span>
          <br /> our platform
        </h3>
        <button
          className='bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto 
                                transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-yellow-100
                                group-hover:shadow-xl group-hover:scale-x-105'
        >
          Explore the Platform
          <ArrowRight className='w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
          <span className='absolute inset-y-0 right-0 w-0 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-6'></span>
        </button>
      </div> */}

      {/* Background Decorations */}
      <div className='absolute right-0 bottom-0'>
        <Image
          src='/ellipse3.png'
          alt='Ellipse'
          width={300}
          height={300}
          className='hidden md:block bottom-right-radius'
        />
        <Image
          src='/ellipse3.png'
          alt='Ellipse'
          width={100}
          height={100}
          className='md:hidden'
        />
      </div>
    </section>
  )
}

export default Roadmap
