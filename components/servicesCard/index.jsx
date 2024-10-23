"use client"; // Ensure client-side rendering for Next.js

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const ServicesCard = ({ img, title, description, link }) => {
  const cardRef = useRef(null); // Reference for the card

  useEffect(() => {
    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current, // Trigger when this card enters the viewport
        start: "top 80%", // Trigger when the top of the element reaches 80% of the viewport
        end: "bottom 50%",
        scrub: true, // No scrubbing (play naturally)
        toggleActions: "play none none none", // Replay on each scroll-in
      },
    });

    // Add animations to the timeline
    tl.fromTo(
      cardRef.current.querySelector("img"), // Image
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        cardRef.current.querySelector("h1"), // Title
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "<0.2" // Slight overlap
      )
      .fromTo(
        cardRef.current.querySelector("p"), // Description
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "<0.2"
      )
      .fromTo(
        cardRef.current.querySelector("button"), // Button
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "<0.2"
      );

    // Cleanup on unmount
    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef} // Attach ref to the card
      className="w-[350px] space-y-6 flex flex-col gap-2 transition-all"
    >
      {/* Image */}
      <Image
        src={img}
        alt="image"
        className="h-[200px] "
        width={350}
        height={200}
      />

      {/* Text Content */}
      <div className="w-full h-[130px] flex flex-col gap-1 text-bg transition-all ease-in duration-300">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-sm text-black font-light">{description}</p>
      </div>

      {/* Button */}
      <Link href={link}>
        <button className="btn bg-blue border-none shadow-md text-white">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default ServicesCard;
