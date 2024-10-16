"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { lexendPeta, poppins } from "@/utils/font/fonts";
import { NavLink } from "@mantine/core";
import Link from "next/link";
const ServicesCard = ({ img, title, description, link }) => {
  return (
    <div className="w-[350px] space-y-6 flex flex-col gap-2">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="group     text-white transition-all ease-in duration-300 flex flex-col justify-end text-3xl font-bold p-5 h-[200px]"
      ></div>
      <div className="w-full h-[130px] flex flex-col gap-1 transition-all ease-in duration-300 relative top-0 z-0 group-hover:bg-black">
        <h1 className="relative text-2xl font-medium z-10">{title}</h1>
        <p className="flex relative z-10 transition-all ease-in  text-sm text-black font-light ">
          {description}
        </p>
      </div>
      <Link href={link}>
        <button className="btn bg-blue border-none shadow-md text-white">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default ServicesCard;
