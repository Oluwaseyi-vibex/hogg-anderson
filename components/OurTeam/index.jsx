"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TeamCard } from "..";

export default function TeamCarousel({ teamMembers }) {
  return (
    <div className="w-full bg-blue h-screen overflow-y-scroll bg-[url('/team/teambg.svg')] bg-cover bg-no-repeat bg-center px-4 pt-20">
      {/* <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={2}
        navigation
        centeredSlides={false}
        breakpoints={{
          0: { slidesPerView: 5 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
        }}
        className="team-carousel"
      > */}
      <div className="md:fixed top-8 z-40 text-center text-white text-sm">
        SCROLL DOWN TO SEE ALL
      </div>
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="w-full ">
            <TeamCard member={member} />
          </div>
        </SwiperSlide>
      ))}
      {/* </Swiper> */}
    </div>
  );
}
