import React from 'react'
import CustomAIPersonas from '@/components/CustomAIPersonas'
import Features from '@/components/Features'
import ProcessOfWork from '@/components/ProcessofWork'
import WhyHold from '@/components/why-hold'
import ResearchImpact from '@/components/ResearchImpact'
import UseCases from '@/components/use-cases'
import Header from '@/components/Hero'
import TokenEcosystem from '@/components/Ecosystem'
import Roadmap from '@/components/Roadmap'
import Subscribe from '@/components/Subscribe'
import Unique from '@/components/Unique'

const Home = () => {
  return (
    <div className='w-full m-auto flex flex-col items-center justify-center overflow-x-hidden'>
      <Header />
      <CustomAIPersonas />
      <Unique />
      <Features />
      <ProcessOfWork />
      <TokenEcosystem />
      <WhyHold />
      <ResearchImpact />
      <Roadmap />
      {/* <UseCases /> */}
      <Subscribe />
    </div>
  )
}

export default Home
