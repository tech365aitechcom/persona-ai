'use client'

import React, { useState } from 'react'
import DecorativeShape from './DecorativeShape'
import { ArrowRight } from 'lucide-react'
import QueryForm from './QueryForm'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'

export default function ResearchImpact() {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full relative overflow-hidden mb-6 md:mb-12'>
      <div className='text-center py-10 md:py-16 lg:py-20 bg-[#E0F9FD] px-4 sm:px-6 md:px-8'>
        <DecorativeShape className='hidden md:block absolute -top-24 -left-10 opacity-80' />
        <DecorativeShape className='hidden md:block absolute -bottom-28 -right-10 rotate-180 opacity-80' />

        <div className='relative z-10 max-w-4xl mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#222222] font-asap'>
            Want to maximize your research impact?
          </h1>
          <div className='text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12'>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger
                className='bg-yellow-400 text-[#333333] px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto 
                        transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-yellow-100
                        group-hover:shadow-xl group-hover:scale-x-105'
              >
                Explore $PRSNA Utility
                <ArrowRight className='w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
                <span
                  className='absolute inset-y-0 right-0 w-0 bg-yellow-300 transition-all duration-300 ease-in-out group-hover:w-8
              '
                ></span>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Contact Us</DialogTitle>
                <QueryForm onClose={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}
