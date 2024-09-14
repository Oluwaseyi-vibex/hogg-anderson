import Image from "next/image";
import React from "react";
import { lexendPeta } from "@/utils/font/fonts";
const ServicesCard = ({ img, title, description }) => {
  return (
    <div
      className={`${lexendPeta.className} flex w-[350px] h-fit text-center flex-col gap-2 items-center justify-center`}
    >
      <Image src={img} alt="" width={500} height={500} className={`w-[50%]`} />
      <h1 className="text-white font-semibold text-xl">{title}</h1>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  );
};

export default ServicesCard;
