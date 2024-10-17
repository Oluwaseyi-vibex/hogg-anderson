"use client";
import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "..";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services = [
  {
    title: "Payroll & tax accounting.",
    description:
      "Manage payroll effortlessly with accurate salary computations, tax filings, and compliance tracking. Ensure your business stays ahead of payroll obligations with timely submissions and optimized deductions.",
    background: "url('/hero1.jpg')",
    link: "/Services/Accounting-Services",
  },
  {
    title: "Hospitality Accounting System",
    description:
      "Streamline financial operations with a tailored accounting system designed specifically for hotels and restaurants. Track revenue, expenses, and KPIs while maintaining compliance with industry standards like USALI.",
    background: "url('/blog1.jpg')",
    link: "/academy/hospitality-accounting-diploma",
  },

  {
    title: "Inventory Management System",
    description:
      "Take control of your inventory with real-time tracking and forecasting. Minimize stockouts and overstocking, streamline procurement, and generate detailed reports for informed decision-making.",
    background: "url('/investor-confidence.jpg')",
    link: "/Services/Inventory-Management-System",
  },
];

const HeroSection = () => {
  const [activeService, setActiveService] = useState(0);

  // Change the service and background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prevService) => (prevService + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const heroRef = useRef(null); // Ref for the section we want to animate

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { y: -100, opacity: 0 }, // Initial position: 100px above the screen
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" } // Final position: In place, fully visible
    );
  }, [activeService]); // Re-run animation when active service changes
  return (
    <div
      className="h-screen w-full flex flex-col  justify-center py-40 items-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: services[activeService].background,
      }}
    >
      <div className="absolute bg-black opacity-40 w-full h-screen  z-0"></div>
      <div className="text-center w-full text-blue  p-4 rounded-lg relative z-20 max-w-2xl">
        <h1 ref={heroRef} className="md:text-7xl text-4xl font-bold mb-4">
          {services[activeService].title}
        </h1>
        <p className="text-lg text-white mb-6">
          {services[activeService].description}
        </p>
        <Link href={services[activeService].link}>
          <button className="btn btn-ghost bg-blue text-white px-6 hover:text-bg hover:border-2 hover:border-blue text-lg">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
