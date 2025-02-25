import React from "react";
import CustomAIPersonas from "@/components/CustomAIPersonas";
import Features from "@/components/Features";
import ProcessOfWork from "@/components/ProcessofWork";
import WhyHold from "@/components/why-hold";
import ResearchImpact from "@/components/ResearchImpact";
import UseCases from "@/components/use-cases";
import Header from "@/components/Header";
import TokenEcosystem from "@/components/Ecosystem";
import Roadmap from "@/components/Roadmap";
import Subscribe from "@/components/Subscribe";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <CustomAIPersonas />
      <Features />
      <ProcessOfWork />
      <TokenEcosystem />
      <WhyHold />
      <ResearchImpact />
      <Roadmap />
      <UseCases />
      <Subscribe />
    </div>
  );
};

export default Home;
