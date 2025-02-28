'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data'

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerPage = 4

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < testimonials.length ? prevIndex + 1 : prevIndex
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }

  return (
    <div className='my-12 md:mb-20 md:mx-10 relative'>
      <div className='bg-[#004D7D] p-8 pt-16 pb-12 md:pb-44 w-full relative overflow-hidden radius'>
        <div className='text-center space-y-2 mb-12 md:mb-28'>
          <h3
            className='font-medium opacity-10 text-7xl md:text-[10rem] font-asap absolute top-10 md:-top-10 left-1/2 -translate-x-1/2 leading-loose'
            style={{
              background:
                'linear-gradient(158.27deg, #651FFF 9.95%, #00BCD4 92.81%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Testimonials
          </h3>

          <span className='text-sky-400 font-medium'>Testimonials</span>
          <h2 className='text-4xl md:text-5xl font-bold text-white font-asap'>
            <span className='relative'>
              <span>"What Our</span>
            </span>
            <span className='ml-2 relative'>
              <span className='relative z-10'>Customer</span>
              <span className='absolute bottom-1 left-0 w-full h-3 rounded-full bg-yellow-300'></span>
            </span>
            <span className='ml-2'>Say"</span>
          </h2>
        </div>

        {/* Testimonials Container */}
        {/* Desktop */}
        <div className='relative hidden md:flex'>
          <div
            className='flex gap-4 transition-transform duration-500 ease-in-out pr-12'
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-blue-200 bg-opacity-30 p-6 rounded-2xl w-full md:w-1/4 flex flex-col shrink-0 font-figtree'
              >
                <div className='text-4xl text-cyan-300 mb-2 '>
                  <Quote className='text-[#19E7E7] w-6 h-6 rotate-180' />
                </div>
                <p className='text-white flex-grow'>{testimonial.quote}</p>
                <div className='mt-4'>
                  <p className='text-white font-medium'>{testimonial.author}</p>
                  <div className='flex text-yellow-400 mt-1'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className='absolute left-0 top-1/2 -translate-y-1/2 bg-[#9EE6FC] rounded-full p-2 shadow-lg  transition z-10'
            >
              <ChevronLeft size={24} className='text-[#004D7D]' />
            </button>
          )}
          {currentIndex + itemsPerPage < testimonials.length && (
            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 -translate-y-1/2 bg-[#9EE6FC] rounded-full p-2 shadow-lg transition z-10'
            >
              <ChevronRight size={24} className='text-[#004D7D]' />
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className='flex flex-col md:hidden gap-4 transition-transform duration-500 ease-in-out'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-blue-200 bg-opacity-30 p-6 rounded-2xl w-full md:w-1/4 flex flex-col shrink-0 font-figtree'
            >
              <div className='text-4xl text-cyan-300 mb-2 '>
                <Quote className='text-[#19E7E7] w-6 h-6 rotate-180' />
              </div>
              <p className='text-white flex-grow'>{testimonial.quote}</p>
              <div className='mt-4'>
                <p className='text-white font-medium'>{testimonial.author}</p>
                <div className='flex text-yellow-400 mt-1'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
