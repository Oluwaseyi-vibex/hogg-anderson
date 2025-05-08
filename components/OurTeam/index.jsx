"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TeamCard } from "..";

export default function TeamCarousel({ teamMembers }) {
  return (
    <div className="w-full bg-blue min-h-[700px] bg-[url('/team/teambg.svg')] bg-cover bg-no-repeat bg-center px-4 pt-20">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        navigation
        centeredSlides={false}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 2.5 },
        }}
        className="team-carousel"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full max-w-sm">
              <TeamCard member={member} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
