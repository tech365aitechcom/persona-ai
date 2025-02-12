"use client";
import React, { useState } from "react";
import {
  User,
  Flag,
  CheckCircle,
  FileText,
  ArrowRight,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Download,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const ProfileCard = ({ profile, percentage }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 w-64 relative">
    {/* Percentage Badge */}
    <div className="absolute -top-3 right-4 bg-blue-400 text-white rounded-full px-3 py-1 text-sm">
      {percentage}%
    </div>

    {/* Avatar */}
    <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
      <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
    </div>

    {/* Profile Info */}
    <div className="space-y-2 text-center">
      <div className="flex items-center justify-center gap-2">
        <span className="text-gray-500">Gender:</span>
        <span className="font-medium">{profile.gender}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-gray-500">Age:</span>
        <span className="font-medium">{profile.age}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-gray-500">Profession:</span>
        <span className="font-medium">{profile.profession}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-gray-500">Hobbies:</span>
        <span className="font-medium">{profile.hobbies}</span>
      </div>
    </div>
  </div>
);

const NewPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const profiles = [
    {
      gender: "Male",
      age: "30-40 years",
      profession: "Lawyer",
      hobbies: "Reading, yoga",
      percentage: 79,
    },
    {
      gender: "Female",
      age: "25-35 years",
      profession: "Designer",
      hobbies: "Painting, hiking",
      percentage: 85,
    },
    {
      gender: "Male",
      age: "35-45 years",
      profession: "Engineer",
      hobbies: "Gaming, cooking",
      percentage: 92,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white p-6 max-w-md mx-auto">
        {/* Powered by section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="text-blue-500">⚡</div>
          <span className="text-gray-600">Powered by: </span>
          <span className="text-blue-500">$PRSNA</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-bold mb-4">
          Transform Market Research with{" "}
          <span className="relative">
            AI-Driven Insights
            <div className="absolute -z-10 bottom-0 left-0 w-full h-3 bg-yellow-300"></div>
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Welcome to PersonaAI, where cutting-edge AI meets blockchain to
          revolutionize market research.
        </p>

        {/* Primary CTA Button */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full mb-4 flex items-center justify-center gap-2 transition-colors">
          Explore the Platform
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Secondary Action */}
        <button className="w-full text-gray-600 hover:text-gray-800 py-2 flex items-center justify-center gap-2 transition-colors">
          <Download className="w-5 h-5" />
          Download Litepaper
        </button>
      </div>
      <div className="relative w-full max-w-4xl mx-auto py-12 px-4">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl -z-10"></div>

        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="relative overflow-hidden w-72">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {profiles.map((profile, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <ProfileCard
                    profile={profile}
                    percentage={profile.percentage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {profiles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Header - centered on both mobile and desktop */}
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          How you can
        </h2>
        <div className="inline-block relative">
          <span className="text-2xl md:text-3xl font-bold text-blue-900">
            use Persona AI
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-300 -z-10"></div>
        </div>
      </div>

      {/* Features Container - flex column on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-8 md:space-y-0">
        {/* Market Validation Section */}
        <div className="space-y-4 text-center md:max-w-sm">
          <div className="bg-blue-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
            <User className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg md:text-xl">
            Market Validation
          </h3>
          <p className="text-gray-600 text-sm md:text-base mx-auto max-w-xs">
            Test product concepts through virtual focus groups with AI avatars
            representing target customers
          </p>
        </div>

        {/* Roleplaying Section */}
        <div className="space-y-4 text-center md:max-w-sm">
          <div className="bg-blue-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
            <Flag className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg md:text-xl">
            Roleplaying Scenarios
          </h3>
          <p className="text-gray-600 text-sm md:text-base mx-auto max-w-xs">
            Practice sales pitches, presentations, and negotiations in a
            risk-free environment
          </p>
        </div>
        <div className="space-y-4 text-center md:max-w-sm">
          <div className="bg-blue-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
            <User className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg md:text-xl">
            Market Validation
          </h3>
          <p className="text-gray-600 text-sm md:text-base mx-auto max-w-xs">
            Test product concepts through virtual focus groups with AI avatars
            representing target customers
          </p>
        </div>
        <div className="space-y-4 text-center md:max-w-sm">
          <div className="bg-blue-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
            <User className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg md:text-xl">
            Market Validation
          </h3>
          <p className="text-gray-600 text-sm md:text-base mx-auto max-w-xs">
            Test product concepts through virtual focus groups with AI avatars
            representing target customers
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto p-6 space-y-8 text-center">
        {/* Header */}
        <div className="space-y-1">
          <p className="text-sky-400 uppercase text-sm tracking-wide">
            TOKENOMICS
          </p>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-blue-900">
              The{" "}
              <span className="relative">
                <span className="relative z-10">SPRSNA</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-10"></span>
              </span>
            </h2>
            <h2 className="text-2xl font-bold text-blue-900">
              Token Ecosystem
            </h2>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="relative w-64 h-64 mx-auto">
          <svg
            viewBox="0 0 100 100"
            className="transform -rotate-90 w-full h-full"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="white"
              className="stroke-gray-100"
              strokeWidth="20"
            />

            {/* Circulating Supply - Light Blue (72%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#67C6E3"
              strokeWidth="20"
              strokeDasharray={`${72 * 2.51327} ${100 * 2.51327}`}
            />

            {/* Seed Round - Dark Blue (15%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#13294B"
              strokeWidth="20"
              strokeDasharray={`${15 * 2.51327} ${100 * 2.51327}`}
              strokeDashoffset={`${-72 * 2.51327}`}
            />

            {/* Team Allocation - Yellow (8%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#FFD344"
              strokeWidth="20"
              strokeDasharray={`${8 * 2.51327} ${100 * 2.51327}`}
              strokeDashoffset={`${-(72 + 15) * 2.51327}`}
            />

            {/* Hiring/Community - Cyan (5%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#67E3E3"
              strokeWidth="20"
              strokeDasharray={`${5 * 2.51327} ${100 * 2.51327}`}
              strokeDashoffset={`${-(72 + 15 + 8) * 2.51327}`}
            />

            {/* Center white circle */}
            <circle cx="50" cy="50" r="30" fill="white" />

            {/* SPRSNA text in center */}
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-3xl font-light text-gray-400"
              fontSize="8"
            >
              SPRSNA
            </text>
          </svg>
        </div>

        {/* Distribution List */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Token Distribution</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#67C6E3]"></div>
              <span className="text-gray-600">
                Circulating Supply: <span className="font-semibold">72%</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#13294B]"></div>
              <span className="text-gray-600">
                Seed Round: <span className="font-semibold">15%</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FFD344]"></div>
              <span className="text-gray-600">
                Team Allocation: <span className="font-semibold">8%</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#67E3E3]"></div>
              <span className="text-gray-600">
                Hiring/Community: <span className="font-semibold">5%</span>
              </span>
            </div>
          </div>

          {/* Total Supply */}
          <div className="pt-4">
            <p className="text-gray-600">
              Total Supply:{" "}
              <span className="font-semibold">1 billion tokens</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-white p-8 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <p className="text-blue-400 mb-2">Roadmap</p>
          <h2 className="text-2xl font-bold">Our upcoming plans</h2>
        </div>

        {/* Foundation Card */}
        <div className="bg-blue-400 rounded-3xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-white text-blue-400 px-4 py-1 rounded-full text-sm">
              Phase 1
            </span>
            <span className="text-white">Q1 2025</span>
          </div>
          <h3 className="text-xl font-bold mb-3">Foundation</h3>
          <p className="text-white/90">
            Turpis cursus ut tristique accumsan lacus. Commodo nibh enim urna
            vulputate et sed augue tortor. Odio at elementum lacus orci sed.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 mb-8">
          {/* Previous timeline items 1-5 remain the same */}
          {[
            {
              icon: <CheckCircle className="w-5 h-5 text-blue-900" />,
              bgColor: "bg-cyan-400",
              title: "Refine tokenomics and finalize the website",
              date: "January",
            },
            {
              icon: <CheckCircle className="w-5 h-5 text-blue-900" />,
              bgColor: "bg-cyan-400",
              title: "Develop and demo the prototype",
              date: "Early February",
            },
            {
              number: "3",
              title:
                "Conduct a skills gap assessment and hire for critical roles",
              date: "March",
            },
            {
              number: "4",
              title: "Technology planning and decisions",
              date: "April",
            },
            { number: "5", title: "Preliminary avatars", date: "April" },
            {
              number: "6",
              title: "Sales and marketing strategy and planning",
              date: "Early May",
            },
            {
              number: "7",
              title: "Develop partner relationships",
              date: "Mid May",
            },
            {
              number: "8",
              title: "Organize community incentives",
              date: "End of May",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`rounded-full ${
                    item.icon ? item.bgColor : "bg-white"
                  } p-2`}
                >
                  {item.icon || (
                    <span className="text-blue-900 font-medium">
                      {item.number}
                    </span>
                  )}
                </div>
                {index !== 7 && (
                  <div
                    className={`w-0.5 h-full ${
                      item.icon ? item.bgColor : "bg-white/30"
                    } mt-2`}
                  ></div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-1">{item.title}</h4>
                <p className="text-blue-300 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Phase 2 Card */}
        <div className="bg-white rounded-3xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
              Phase 2
            </span>
            <span className="text-blue-900">Q2 2025</span>
          </div>
          <h3 className="text-xl font-bold text-blue-900">
            Prototype Development
          </h3>
        </div>

        {/* Phase 3 Card */}
        <div className="bg-white rounded-3xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
              Phase 3
            </span>
            <span className="text-blue-900">Q3 2025</span>
          </div>
          <h3 className="text-xl font-bold text-blue-900">Market Presence</h3>
        </div>

        {/* Download Litepaper */}
        <div className="mb-12">
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <FileText className="w-5 h-5" />
            <span>Download Litepaper</span>
          </button>
        </div>

        {/* CTA Section */}
        <div className="relative mt-20">
          {/* Curved background effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500 to-blue-900 rounded-b-3xl"></div>

          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-2xl font-bold">Join us CTA title</h3>
            <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
              Explore the Platform
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-blue-50 relative p-8">
        {/* Curved accent in the corner */}
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-cyan-400 rounded-bl-[100px]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-sky-400 mb-2">Some Subtitle</p>
            <h2 className="text-2xl font-bold text-blue-900">
              Meet the{" "}
              <span className="relative">
                <span className="relative z-10">Team</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-10"></span>
              </span>
            </h2>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-300">
                <img
                  src="/api/placeholder/192/192"
                  alt="Scott Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-2">Founder</p>
              <h3 className="text-xl font-bold text-blue-900">Scott Johnson</h3>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Scott Johnson brings extensive leadership experience to
                PersonaAI, with a background in educational product development,
                market research, business development, and managing large
                organizations. He has served an executive in several education
                businesses, including eight years as CEO of Interactive
                Composition Corporation, operating in Portland, Oregon, and New
                Delhi, India.
              </p>
              <p>
                Currently, Scott owns SparkWave AI, where he helps businesses
                integrate AI solutions, and Fight Flow Academy, a martial arts
                and personal development center in Raleigh, NC. At PersonaAI, he
                combines his expertise to create innovative tools that
                revolutionize market research through AI and blockchain.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 relative overflow-hidden">
          {/* Curved overlay */}
          <div className="absolute bottom-0 right-0 w-2/3 h-48 bg-blue-700 rounded-tl-[100px]" />

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl font-bold text-white leading-tight">
              Stay Updated on the Future
              <br />
              of Market Research
            </h2>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <div className="text-white text-xl font-bold">AI</div>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              MarketAI Pro
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Intelligent Market Analysis Platform
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <a href="#" className="block hover:text-white transition-colors">
              Team
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Resources
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Platform
            </a>
          </nav>

          {/* Privacy Policy */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewPage;
