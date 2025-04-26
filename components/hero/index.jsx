"use client";
import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "..";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services = [
  {
    title: "Bookkeeping Outsourcing",
    description:
      "Keep your financial records accurate and compliant with our expert bookkeeping services. We handle income/expense tracking, bank reconciliations, accounts management, and financial statements, so you can focus on growing your business.",
    background: "url('/hero1.jpg')",
    link: "/Services/Accounting-Services",
  },
  {
    title: "Management Reporting",
    description:
      "Make informed decisions with our data-driven reporting solutions. Get monthly and quarterly financial reports, cash flow analysis, budgeting, and performance tracking to drive your business forward.",
    background: "url('/blog1.jpg')",
    link: "/academy/hospitality-accounting-diploma",
  },

  {
    title: "Payroll Processing",
    description:
      "Streamline payroll with accurate computations, statutory deductions, and timely payments. Our services include payslip generation, tax remittances, and employee benefits management for full compliance.",
    background: "url('/investor-confidence.jpg')",
    link: "/Services/Inventory-Management-System",
  },

  {
    title: "Tax Consulting",
    description:
      "Optimize your tax strategy with expert planning and compliance services. We handle VAT, corporate tax filings, regulatory compliance, and audit representation to minimize liabilities and maximize savings.",
    background: "url('/blog1.jpg')",
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
        {/* <Link href={services[activeService].link}>
          <button className="btn btn-ghost bg-blue text-white px-6 hover:text-bg hover:border-2 hover:border-blue text-lg">
            Learn More
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default HeroSection;
