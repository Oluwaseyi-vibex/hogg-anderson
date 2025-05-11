"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full  sm:w-1/2 md:w-1/3 lg:w-[400px] h-full text-white p-4 cursor-pointer"
        onClick={toggleFlip}
      >
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          {/* Front */}

          <div className="card bg-bg shadow-xl h-[450px]">
            <figure>
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className=" w-[40%] "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{member.name}</h2>
              <p className="text-sm text-blue">{member.title}</p>
              <p className="mt-2">{member.frontText}</p>
              <p className="mt-4 text-xs text-right text-info">Click to flip</p>
            </div>
          </div>

          {/* Back */}
          <div className="card bg-orange text-bg shadow-xl h-[450px]">
            <div className="card-body">
              <h2 className="card-title">{member.name}</h2>
              <p className="text-sm text-blue">{member.title}</p>
              <p className="mt-2 text-sm">{member.backText}</p>
              <p className="mt-4 text-xs text-right text-info">
                Click to flip back
              </p>
            </div>
          </div>
        </ReactCardFlip>
      </div>
      <Link href={member.link}>
        <button className="btn btn-outline outline-[#f5f5f5] w-auto uppercase mx-4">
          view more
        </button>
      </Link>
    </div>
  );
}
