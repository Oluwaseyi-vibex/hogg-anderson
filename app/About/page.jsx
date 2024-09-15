import { inter, poppins } from "@/utils/font/fonts";
import {
  faArchive,
  faBuildingUser,
  faInfo,
  faInfoCircle,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
// import { Image } from "@mantine/core";
import React from "react";

const About = () => {
  return (
    <div className={`${poppins.className} h-full flex flex-col gap-8 py-16 `}>
      <div className="px-24 flex  flex-col gap-12 h-full pb-24">
        <div className="flex items-center h-fit  gap-4 text-md text-[#F5F5F5]/60">
          <FontAwesomeIcon
            color=""
            icon={faInfoCircle}
            className="w-[30px] text-[#4169E1]  h-[30px]"
          ></FontAwesomeIcon>
          <h1>About Hogg Anderson Business Solutions Limited</h1>
        </div>

        <div className="flex h-fit flex-col  gap-6">
          <h1 className="text-6xl flex gap-5 font-semibold tracking-wider leading-[70px] text-[#F5F5F5]">
            <div className="w-[10px] h-[70px] bg-[#4169E1] rounded-l-xl"></div>
            <p> Who We Are</p>
          </h1>
          <div className="text-6xl max-h-full flex gap-5 font-semibold tracking-wider leading-[70px] text-[#F5F5F5]">
            <div className="w-[10px] h-[140px] bg-[#4169E1] rounded-l-xl"></div>
            <p>
              What is Hogg Anderson and <br /> How Valid is It?
            </p>
          </div>
          <p className="text-lg w-[700px] text-[#F5F5F5]/50">
            At Hogg Anderson Business Solutions Limited, we specialize in
            providing cost accounting and business solutions for the hospitality
            industry. With a commitment to excellence, we empower restaurants,
            lounges, and hotels to optimize their financial processes and boost
            profitability.
          </p>
        </div>
      </div>

      <div className="h-screen w-full flex py-24 px-12 justify-between bg-[#F5F5F5]">
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/aboutPage.png"}
            alt=""
            width={1000}
            className="w-[80%]"
            height={1000}
          />
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="flex text-[#333333] items-center gap-4">
            <FontAwesomeIcon
              icon={faBuildingUser}
              className="w-[30px] text-[#333333] h-[30px]"
            />
            <p>About Us</p>
          </div>

          <h1 className="text-4xl text-[#333333] font-semibold">
            Our Company Overview
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
