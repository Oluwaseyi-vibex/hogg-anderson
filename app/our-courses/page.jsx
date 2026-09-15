"use client";

import React from "react";
import Orb from "@/components/Orb"; // Optional background component from React Bits

export default function OurCoursesPage() {
  const courses = [
    {
      title: "Frontend Development",
      image: "/images/frontend.jpg",
      desc: "Master React, Tailwind CSS, and responsive UI design.",
    },
    {
      title: "Backend Development",
      image: "/images/backend.jpg",
      desc: "Learn Node.js, Express, and database management.",
    },
    {
      title: "UI/UX Design",
      image: "/images/uiux.jpg",
      desc: "Design intuitive and beautiful user interfaces.",
    },
    {
      title: "Mobile App Development",
      image: "/images/mobile.jpg",
      desc: "Build Android and iOS apps with React Native.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-base-100 text-base-content overflow-hidden">
      {/* React Bits Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* <Orb hue={180} /> */}
      </div>
    </section>
  );
}
