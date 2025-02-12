"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProfileCarousel({ data }) {
  return (
    <div className="relative flex justify-center items-center w-full py-12">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[400px] h-[400px] opacity-100"
        >
          <path
            fill="#DFF1FB"
            d="M38.1,-27.7C53.4,-22.8,72.6,-11.4,76,3.4C79.4,18.2,67,36.4,51.7,50.4C36.4,64.3,18.2,74.1,1.9,72.2C-14.3,70.2,-28.6,56.6,-42.6,42.6C-56.5,28.6,-70.1,14.3,-73.8,-3.7C-77.5,-21.7,-71.3,-43.4,-57.3,-48.2C-43.4,-53.1,-21.7,-41.1,-5.1,-36C11.4,-30.8,22.8,-32.5,38.1,-27.7Z"
            transform="translate(100 100)"
          />
        </svg>{" "}
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-6xl w-full px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {data.map((profile, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-xl p-6 w-72 shadow-xl">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Image
                    src={profile.icon}
                    alt="Business avatar"
                    width={70}
                    height={70}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>

                {/* Profile Details */}
                <div className="text-center">
                  <span className="text-black text-lg font-bold">
                    {profile.percentage}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Gender:</span>
                    <span className="font-medium">{profile.gender}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Age:</span>
                    <span className="font-medium">{profile.age}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Profession:</span>
                    <span className="font-medium">{profile.profession}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hobbies:</span>
                    <span className="font-medium">{profile.hobbies}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
