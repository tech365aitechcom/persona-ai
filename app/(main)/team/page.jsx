import React from 'react'
import OurTeam from './_components/OurTeam'
import TestimonialCarousel from './_components/TestimonialCarousel'
import Subscribe from './_components/Subscribe'

const TeamPage = () => {
  return (
    <div className='relative pb-8 md:pb-32'>
      <OurTeam />
      {/* <TestimonialCarousel /> */}
      <Subscribe />
    </div>
  )
}

export default TeamPage
