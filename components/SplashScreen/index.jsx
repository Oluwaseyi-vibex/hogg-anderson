"use client"; // Required for client-side rendering in Next.js

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const SplashScreen = ({ setLoading }) => {
  const logoRef = useRef(null); // Reference for the logo

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false), // Hide splash screen after animation
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.3 }, // Initial state
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" } // Animation
    ).to(logoRef.current, {
      y: -20,
      duration: 0.8,
      repeat: -1,
      yoyo: true, // Bounce effect
      ease: "power1.inOut",
    });
  }, [setLoading]);

  return (
    <div className="fixed inset-0 bg-blue flex items-center  justify-center z-50">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={500}
        height={500}
        className="w-[40%] md:w-[10%]"
      />
      <span className="loading loading-ball bg-orange loading-lg"></span>
    </div>
  );
};

export default SplashScreen;
