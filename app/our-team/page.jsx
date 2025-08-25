import { TeamPage } from "@/components";
import teamMembers from "@/data/teamData";
import { montserrat, nanum_Gothic } from "@/utils/font/fonts";
import React from "react";

const OurTeam = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center  gap-24 bg-white pt-5 md:py-0 px-4 md:px-20 ">
      <div className="md:w-[45%]">
        <p
          className={`${montserrat.className} text-[16px] text-[#746D6D] uppercase`}
        >
          Our team
        </p>
        <h1
          className={`${nanum_Gothic.className} md:text-[96px] font-extrabold uppercase leading-[1.2] text-[24px] `}
        >
          Meet our Extra-ordinary team
        </h1>
        <div className="h-[8px] w-[60%] my-5 bg-bg"></div>
        <p
          className={`${montserrat.className} text-sm md:text-[18px] w-full text-[#746D6D] `}
        >
          We are a team of dedicated professionals—accountants, advisors, and
          financial strategists—driven by a shared commitment to accuracy,
          integrity, and excellence. Each of us brings specialized expertise and
          experience, and together, we provide clear, reliable, and tailored
          solutions that empower our clients to manage their finances
          confidently and achieve sustainable growth.
        </p>
      </div>

      <div className={`md:flex-1`}>
        <TeamPage teamMembers={teamMembers} />
      </div>
    </div>
  );
};

export default OurTeam;
