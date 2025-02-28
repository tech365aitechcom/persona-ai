'use client'

import { featureData } from '@/data'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [connectorTop, setConnectorTop] = useState(0)
  const featureRefs = useRef([])

  useEffect(() => {
    if (featureRefs.current[activeFeature]) {
      const offsetTop = featureRefs.current[activeFeature].offsetTop
      setConnectorTop(
        offsetTop + featureRefs.current[activeFeature].clientHeight / 2
      )
    }
  }, [activeFeature])

  const handleFeatureClick = (index) => {
    setActiveFeature(index)
  }

  return (
    <section className='py-12 md:py-24 flex flex-col items-center w-full mx-auto px-4 md:px-12'>
      {/* Title section */}
      <div className='space-y-1 text-center mb-8'>
        <span className='text-sky-400 font-medium'>Features</span>
        <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900'>
          <span className='relative'>
            <span className='relative z-10'>How</span>
            <span className='absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300 -z-10'></span>
          </span>
          <span className='ml-2'>Can You</span>
        </h2>
        <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900'>
          Use Persona AI?
        </h2>
      </div>

      {/* Mobile View */}
      <div className='w-full md:hidden flex flex-col'>
        {/* Feature cards for mobile */}
        {featureData.map((feature, index) => (
          <div key={index} className='mb-6'>
            {/* Feature header */}
            <div
              className={`flex items-center gap-3 p-3 ${
                activeFeature === index
                  ? 'bg-white rounded-t-lg shadow-sm'
                  : 'bg-white rounded-lg shadow-sm'
              }`}
              onClick={() => handleFeatureClick(index)}
            >
              <div className='w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center bg-[linear-gradient(45deg,rgba(104,197,255,0.24)_0%,rgba(25,231,231,0.24)_100%)]'>
                <Image
                  src={feature.icon}
                  width={30}
                  height={30}
                  alt={`Feature ${index + 1}`}
                />
              </div>
              <h3 className='text-base font-bold text-[#222222]'>
                {feature.title}
              </h3>
            </div>

            {/* Feature content - only show for active feature */}
            {activeFeature === index && (
              <div className='bg-white rounded-b-lg shadow-sm p-4 border-t border-gray-100'>
                {/* Teal connector */}
                <div className='border-l-2 border-[#19E7E7] h-6 ml-6 my-2'></div>
                {/* Feature content */}
                <div className='space-y-4 mb-4'>
                  {feature.content.map((item, contentIndex) => (
                    <div key={contentIndex} className='mb-3'>
                      <p className='font-semibold text-[#333333]'>
                        {item.heading}
                      </p>
                      <p className='text-[#333333] font-normal text-sm'>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className='mt-4'>
                  <button className='w-full px-6 py-2 border border-sky-400 text-sky-400 rounded-full flex items-center justify-center text-sm'>
                    {feature.buttonText || 'Start Researching with AI'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View - Unchanged */}
      <div className='hidden md:grid w-full grid-cols-1 md:grid-cols-2 gap-6 relative'>
        {/* Active feature connector line */}
        <div
          className='md:block absolute left-[49%] -translate-x-1/2 flex flex-col items-center transition-all duration-300'
          style={{
            top: `${connectorTop}px`,
          }}
        >
          <div className='flex items-center'>
            <div className='w-2 h-2 bg-[#19E7E7] rounded-full'></div>
            <div className='w-[100px] h-0.5 bg-[#19E7E7] rounded-full'></div>
            <div className='w-2 h-2 bg-[#19E7E7] rounded-full'></div>
          </div>
        </div>

        {/* Left column */}
        <div className='flex flex-col space-y-8'>
          {featureData.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className={`flex items-start p-6 bg-white rounded-lg border cursor-pointer transition-all duration-200 ${
                activeFeature === index
                  ? 'border-l-4 border-l-[#19E7E7] shadow-md'
                  : 'border-gray-200 shadow-sm'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div>
                <div className='w-24 h-24 mr-4 mx-auto rounded-2xl flex items-center justify-center bg-[linear-gradient(45deg,rgba(104,197,255,0.24)_0%,rgba(25,231,231,0.24)_100%)]'>
                  <Image
                    src={feature.icon}
                    width={60}
                    height={60}
                    alt={`Feature ${index + 1}`}
                  />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-bold text-[#222222]'>
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div
          className={`bg-white shadow-md rounded-lg px-12 py-6 h-fit ${
            activeFeature === 1
              ? 'mt-36'
              : activeFeature === 2
              ? 'mt-60'
              : 'mt-0'
          }`}
        >
          <h3 className='text-xl font-bold text-[#222222] mb-6'>
            {featureData[activeFeature].title}
          </h3>

          <div className='space-y-6'>
            {featureData[activeFeature].content.map((item, index) => (
              <div key={index}>
                <p className='font-semibold text-[#333333] mb-1 text-lg'>
                  {item.heading}
                  <span className='text-[#333333] font-normal ml-1'>
                    {item.text}
                  </span>
                </p>
              </div>
            ))}

            <div className='flex mt-6'>
              <button className='w-fit px-6 py-3 border border-sky-400 text-sky-400 rounded-full flex items-center justify-start space-x-2'>
                {featureData[activeFeature].buttonText ||
                  'Start Researching with AI'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
