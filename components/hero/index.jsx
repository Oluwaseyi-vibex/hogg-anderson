"use client";
import React, { useState, useEffect } from "react";
import { NavBar } from "..";

const services = [
  {
    title: "Advanced Hospitality Accounting",
    description:
      "Master the intricacies of accounting specific to hotels, restaurants, and lounges.",
    background: "url('/hero1.jpg')",
  },
  {
    title: "Food & Beverage Cost Management",
    description:
      "Learn how to manage F&B inventory, cost of goods sold, and key performance indicators.",
    background: "url('/blog1.jpg')",
  },
  {
    title: "Payroll & Tax Accounting",
    description:
      "Efficiently handle payroll, tax filing, and compliance with industry regulations.",
    background: "url('/hero3.jpg')",
  },
  {
    title: "Financial Reporting for Hospitality",
    description:
      "Understand USALI-compliant financial reports, balance sheets, and income statements.",
    background: "url('/investor-confidence.jpg')",
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

  return (
    <div
      className="h-screen w-full flex flex-col justify-center py-40 items-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: services[activeService].background,
      }}
    >
      <div className="text-center w-full text-blue  p-4 rounded-lg max-w-2xl">
        <h1 className="md:text-7xl text-4xl font-bold mb-4">
          {services[activeService].title}
        </h1>
        <p className="text-lg text-white mb-6">
          {services[activeService].description}
        </p>
        <button className="btn btn-ghost bg-blue text-white px-6 hover:text-bg hover:border-2 hover:border-blue text-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
