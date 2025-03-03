import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'

const TeamMember = ({
  role,
  name,
  bio,
  xLink,
  linkedinLink,
  currentWork,
  imageSrc,
  imagePosition = 'right',
  localUrl = false,
}) => {
  console.log(xLink)

  return (
    <div className='relative bg-white rounded-[2rem] shadow-lg mb-12 max-w-4xl mx-auto min-h-[420px]'>
      <div className='md:hidden p-4'>
        <div className='flex flex-col gap-8'>
          <div className='w-72 h-72 mx-auto rounded-full overflow-hidden flex justify-center items-center'>
            <img
              src={imageSrc}
              alt={name}
              className={`${localUrl ? '' : 'w-full h-full object-cover'}`}
            />
          </div>
          <div>
            <div className='flex w-full justify-between'>
              <div>
                <p className='text-gray-600 text-lg mb-1'>{role}</p>
                <h2 className='text-[1.75rem] font-bold text-blue-900 mb-6'>
                  {name}
                </h2>
              </div>
              <div className='flex gap-4'>
                {linkedinLink && (
                  <a href={linkedinLink} target='_blank'>
                    <Linkedin className='text-blue-900 cursor-pointer' />
                  </a>
                )}
                {xLink && (
                  <a href={xLink} target='_blank'>
                    <FaXTwitter className='text-blue-900 cursor-pointer w-6 h-6' />
                  </a>
                )}
              </div>
            </div>
            <p className='text-gray-700 leading-relaxed mb-6'>{bio}</p>
            <p className='text-gray-700 leading-relaxed'>{currentWork}</p>
          </div>
        </div>
      </div>
      <div className='hidden md:block min-h-[420px] py-16'>
        <div
          className={`flex items-center ${
            imagePosition === 'right'
              ? 'justify-end pl-12'
              : 'justify-start pr-12'
          }`}
        >
          <div
            className={`w-[calc(100%-288px)] ${
              imagePosition === 'right' ? 'mr-72' : 'ml-72'
            }`}
          >
            <div className='flex w-full justify-between'>
              <div>
                <p className='text-gray-600 text-lg mb-1'>{role}</p>
                <h2 className='text-[1.75rem] font-bold text-blue-900 mb-6'>
                  {name}
                </h2>
              </div>
              <div className='flex gap-4'>
                {linkedinLink && (
                  <a href={linkedinLink} target='_blank'>
                    <Linkedin className='text-blue-900 cursor-pointer' />
                  </a>
                )}
                {xLink && (
                  <a href={xLink} target='_blank'>
                    <FaXTwitter className='text-blue-900 cursor-pointer w-6 h-6' />
                  </a>
                )}
              </div>
            </div>
            <p className='text-gray-700 leading-relaxed mb-6'>{bio}</p>
            <p className='text-gray-700 leading-relaxed'>{currentWork}</p>
          </div>
        </div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            imagePosition === 'right' ? '-right-32' : '-left-32'
          }`}
        >
          <div className='w-72 h-72 rounded-full bg-white overflow-hidden flex justify-center items-center'>
            <img
              src={imageSrc}
              alt={name}
              className={`${localUrl ? '' : 'w-full h-full object-cover'}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
