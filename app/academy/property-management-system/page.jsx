"use client";
import Pricing from "@/components/pricing";
import Image from "next/image";
import React, { useState } from "react";

const OperaPMSPage = () => {
  return (
    <div className="min-h-screen bg-bg text-white">
      {/* Hero Section */}
      <section className="relative bg-[url('/pms.jpg')] bg-cover bg-center text-white h-[500px] flex flex-col justify-center items-center">
        <div className="bg-black/50 absolute inset-0"></div>
        {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            Certificate Course in Hotel Property Management System
          </h1>
          <p className="text-xl mt-4">
            Master OPERA PMS, the world&apos;s leading Property Management
            System for hotels.
          </p>
          <button className="btn btn-ghost bg-blue border-none mt-8 px-8 text-white text-lg">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 bg-[#2C2C2C]">
        <h2 className="text-4xl font-bold text-center text-blue mb-12">
          What You&apos;ll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          <div className="card shadow-lg bg-[#444444] p-6 text-center">
            <h3 className="text-2xl font-semibold text-orange">
              Master OPERA PMS
            </h3>
            <p className="mt-4 text-lg">
              Learn everything about navigating and utilizing OPERA Hospitality
              Property Management System (PMS) for efficient hotel operations.
            </p>
          </div>
          <div className="card shadow-lg bg-[#444444] p-6 text-center">
            <h3 className="text-2xl font-semibold text-orange">
              Reservation & Guest Management
            </h3>
            <p className="mt-4 text-lg">
              Handle guest check-ins, check-outs, reservation management, room
              assignments, and more with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Course Breakdown */}
      <div className="bg-[#333333]">
        <Image
          src={"/wave2.svg"}
          alt=""
          width={1000}
          height={1000}
          className="w-full absolute"
        />
        <section className="pb-16 pt-52 bg-[#333333] px-8 ">
          {/* <Image
          src={"/wave.svg"}
          alt=""
          width={1000}
          height={1000}
          className="w-full"
        /> */}

          <h2 className="text-4xl font-bold text-center text-blue mb-12">
            Courses
          </h2>

          <div className="w-full flex flex-col gap-6">
            <div className="collapse w-full text-left text-xl font-semibold text-blue bg-gray-700 h-fit rounded-lg">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title text-xl">
                Introduction to OPERA PMS
              </div>
              <div className="collapse-content bg-gray-600  h-fit rounded-md mx-2 mb-2 p-1 text-lg">
                <ul className="list-disc pl-6 text-white text-lg space-y-2">
                  <li>Navigation Menus</li>
                  <li>Changing Passwords</li>
                  <li>Splash Page and Application Access Controls</li>
                  <li>Logging into PMS System</li>
                  <li>Title Bar Information</li>
                  <li>Menu Bar Functions</li>
                  <li>Toolbar icons</li>
                </ul>
              </div>
            </div>

            <div className="collapse w-full text-left text-xl font-semibold text-blue bg-gray-700 h-fit rounded-lg">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl">Reservation System</div>
              <div className="collapse-content bg-gray-600  h-fit rounded-md mx-2 mb-2 p-1 text-lg">
                <ul className="list-disc pl-6 text-white text-lg space-y-2">
                  <li>Welcome & Overview</li>
                  <li>Accessing the Rate Query Screen</li>
                  <li>Using the Rate Query Screen Filters</li>
                  <li>Viewing the Rate Query Details Screen</li>
                  <li>Understanding Room Types, Rate Codes and Lamps</li>
                  <li>
                    Creating a simple Reservation - No of Nights and Guest info
                  </li>
                  <li>Linking Profiles to Reservation</li>
                </ul>
              </div>
            </div>

            <div className="collapse w-full text-left text-xl font-semibold text-blue bg-gray-700 h-fit rounded-lg">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl">Checking in Guest</div>
              <div className="collapse-content bg-gray-600  h-fit rounded-md mx-2 mb-2 p-1 text-lg">
                <ul className="list-disc pl-6 text-white text-lg space-y-2">
                  <li>How to check in Guest</li>
                  <li>Front Desk Menu</li>
                  <li>Finding Guest Booking</li>
                  <li>Assigning Room Number</li>
                  <li>Printing Registration Card</li>
                  <li>Returning Credit Card & Keys</li>
                </ul>
              </div>
            </div>

            <div className="collapse w-full text-left text-xl font-semibold text-blue bg-gray-700 h-fit rounded-lg">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl">Checking out Guest</div>
              <div className="collapse-content bg-gray-600  h-fit rounded-md mx-2 mb-2 p-1 text-lg">
                <ul className="list-disc pl-6 text-white text-lg space-y-2">
                  <li>Introduction to Checkout</li>
                  <li>Overview of the Checkout Process</li>
                  <li>Checking Departures for the Day</li>
                  <li>Generating an Account Statement for Guest</li>
                  <li>Payment and closing Account</li>
                  <li>Final Thoughts on Checkout Process</li>
                </ul>
              </div>
            </div>

            <div className="collapse w-full text-left text-xl font-semibold text-blue bg-gray-700 h-fit rounded-lg">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl">Advanced Features</div>
              <div className="collapse-content bg-gray-600  h-fit rounded-md mx-2 mb-2 p-1 text-lg">
                <ul className="list-disc pl-6 text-white text-lg space-y-2">
                  <li>Amending Bookings</li>
                  <li>Canceling Bookings</li>
                  <li>Adding Special Requests</li>
                  <li>Traces, Alerts, Add-ons, Routings</li>
                  <li>Billing and Processing Payments</li>
                  <li>Discounts, Adjustments, Rebates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-[url('/wave.svg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center bg-bg text-center">
          <p className="mt-4 font-semibold text-2xl">
            Start your journey with us and gain valuable skills in Hotel
            Property Management System
          </p>
          <p className=" my-3 text-orange w-[700px]">
            Take the next step in your accounting career with Hogg Anderson
            Accounting Software Solutions. Contact us at 08029514484 to enroll
            or learn more about our training programs.
          </p>
          <button className="btn btn-blue mt-8 text-white hover:bg-blue/90 bg-blue border-none text-lg">
            Enroll Now
          </button>
        </section>
      </div>

      <Pricing />
    </div>
  );
};

export default OperaPMSPage;
