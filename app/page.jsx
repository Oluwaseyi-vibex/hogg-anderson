"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { inter, poppins } from "@/utils/font/fonts";
import { ServicesCard } from "@/components";
import { FeaturesTitle } from "@/components/features";
import { Button } from "@mantine/core";
import { IconArrowRight, IconSignRight } from "@tabler/icons-react";
import GetInTouch from "@/components/contact";
import TestimonialCarousel from "@/components/testimonialCarousel";
import HeroCarousel from "@/components/hero";
import Link from "next/link";

// GSAP ANIMATIONS /////////////////////////////////////////////
import { useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin
import Pricing from "@/components/pricing";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const headingRef = useRef(null); // Create a ref for the <h1>
  const paragraphRef = useRef(null); // Reference to the <p> element
  const buttonRef = useRef(null); // Create a ref for animation
  const sectionRef = useRef(null); // Reference to the section

  useGSAP(() => {
    // Animate the <h1> text content
    gsap.to(headingRef.current, {
      duration: 1,
      text: "High-impact Services",
      ease: "none",
      scrollTrigger: {
        trigger: headingRef.current, // Trigger animation when this element enters the viewport
        start: "top 80%", // Trigger when the top of the element reaches 80% of the viewport
        end: "bottom 50%", // End the animation when the bottom of the element reaches
        toggleActions: "play none none none", // Play animation on enter
        scrub: true,
        // markers: true,
      },
    });

    gsap.fromTo(
      paragraphRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current, // Trigger animation when this element enters the viewport
          start: "top 80%", // Trigger when the top of the element reaches 80% of the viewport
          end: "bottom 50%", // End the animation when the bottom of the element reaches
          toggleActions: "play none none none", // Play animation on enter
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current, // Trigger animation when this element enters the viewport
          start: "top 80%", // Trigger when the top of the element reaches 80% of the viewport
          end: "bottom 50%", // End the animation when the bottom of the element reaches
          toggleActions: "play none none none", // Play animation on enter
          scrub: true,
          // markers: true,
        },
      }
    );

    // const ctx = gsap.context(() => {
    //   // Create GSAP animation timeline for image and text
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: sectionRef.current, // Start animation when section enters viewport
    //       start: "top 50%",
    //       scrub: true,
    //       end: "bottom 20%", // End when bottom of section reaches 20%
    //       toggleActions: "play none none none", // Replay on every scroll-in
    //     },
    //   });

    //   // Animate image from the left
    //   tl.fromTo(
    //     sectionRef.current.querySelector("img"),
    //     { x: -100, opacity: 0 }, // Start 100px left and invisible
    //     { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" } // Slide in and fade in
    //   )
    //     // Animate text content from the right
    //     .fromTo(
    //       sectionRef.current.querySelector("div"),
    //       { x: 100, opacity: 0 },
    //       { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
    //       "<0.2" // Slight overlap with the image animation
    //     );
    // }, sectionRef);

    // Cleanup on unmount
    // return () => ctx.revert();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className={`${poppins.className} w-full overflow-hidden`}>
      {/* <main className="flex w-full items-start  justify-end"> */}
      {/* <div className="flex flex-col gap-3 w-full">
          <p className="rounded-full shadow-md shadow-black cursor-pointer font-light border-white border-[0.5px] w-fit bg-transparent py-1 px-8 text-sm text-[#4169E1]">
            Hogg Anderson Business Solutions Limited
          </p>
          <h1 className="text-[70px] text-[#F5F5F5] leading-tight font-semibold ">
            Inventory
            <div className="relative">
              <span className="relative z-10">
                <span className="relative z-10">Management</span>{" "}
                <span className="w-full absolute h-[40%] bottom-4 left-0 z-0 bg-[#4169E1]"></span>
              </span>
            </div>
            Solutions.
          </h1>
          <p className="text-sm text-[#F5F5F5]/40 w-[550px]">
            At Hogg Anderson Business Solutions, we provide expert accounting
            services, inventory management systems, and implementation of
            accounting software to streamline your business operations. Our
            business advisory services offer strategic guidance to drive growth.
          </p>
          <Button
            rightSection={<IconArrowRight size={20} />}
            variant="gradient"
            // gradient={{ deg: 133, from: "pink", to: "black" }}
            size="xl"
            bg={"#4169E1"}
            radius="md"
            mt="xl"
            justify="space-between"
            w={250}
          >
            Get started
          </Button>
        </div> */}

      <HeroCarousel />
      {/* </main> */}

      <div className="w-full bg-[url('/wave2.svg')] bg-cover bg-center flex md:flex-row flex-col space-y-8 py-12 md:py-24 md:px-16 text-bg bg-[#F5F5F5] h-full rounded-b-3xl ">
        <div className="flex md:w-[30%] px-4 h-full flex-col gap-2 md:gap-6">
          <h1 ref={headingRef} className="text-4xl font-semibold ">
            Bringing to you
          </h1>
          <p ref={paragraphRef} className=" text-sm font-light">
            We empower public and private company clients to achieve their
            business goals through expert bookkeeping, insightful management
            reporting, streamlined payroll processing, and strategic tax
            consulting services.
          </p>

          <Link href={"/getInTouch"}>
            <Button
              ref={buttonRef} // Attach ref to the button for GSAP animation
              rightSection={<IconArrowRight size={20} />}
              variant="gradient"
              bg={"#4169E1"}
              size="xl"
              radius="md"
              mt="md"
              justify="space-between"
              w={250}
              className="shadow-md"
            >
              Get in touch
            </Button>
          </Link>
        </div>

        <div className="md:w-[70%] flex flex-col md:gap-16 gap-8 items-center md:items-end h-full">
          <div className="flex md:flex-row flex-col gap-12">
            <ServicesCard
              img={"/financial-accuracy.png"}
              title="Bookkeeping Outsourcing"
              imgWidth={`35%`}
              description={
                "Our expert bookkeeping services ensure accurate and compliant financial records. We handle income/expense tracking, bank reconciliations, accounts management, and financial statements, freeing you to focus on growth."
              }
              link={"/"}
            />
            <ServicesCard
              img={"/cost-control.jpg"}
              title={"Management Reporting"}
              imgWidth={`35%`}
              description={
                "Gain data-driven insights with our tailored reporting solutions. We provide monthly/quarterly reports, cash flow analysis, budgeting, and performance tracking to empower informed decision-making"
              }
              link={"/"}
            />
          </div>

          <div className="flex  md:flex-row flex-col gap-12">
            <ServicesCard
              img={"/office.jpg"}
              title={"Payroll Processing"}
              imgWidth={"35%"}
              description={
                "Streamline payroll with our efficient solutions. We manage computations, statutory deductions, payslip generation, and compliance, ensuring accuracy and timely payments for your team."
              }
              link={"/"}
            />
            <ServicesCard
              img={"/person-office.jpg"}
              title={"Tax Consulting"}
              description={
                "We provide cutting-edge accounting system solutions tailored to meet the specific needs of your business. Whether you're a small startup or an established enterprise, our technology-driven..."
              }
              link={"/"}
            />
          </div>
        </div>
      </div>

      {/* <div
        ref={sectionRef} // Attach ref to section for GSAP animations
        className="w-full md:px-4 md:mt-36 mb-20 md:mb-0 gap-6 md:gap-0 mt-16 flex md:flex-row flex-col"
      >
        <Image
          alt=""
          src={"/aboutsection.jpg"}
          width={1000}
          height={150}
          className="md:w-[50%] md:h-[60%] md:rounded-xl"
        />

        <div className="md:w-[50%] px-4 md:pl-28 flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl text-[#F5F5F5] font-bold">
            The story behind our company
          </h1>
          <p className="text-lg text-white/40 font-extralight">
            At Hogg Anderson Business Solutions Limited, we specialize in
            providing expert accounting and business solutions tailored to the
            unique needs of the hospitality industry. With a strong focus on
            cost accounting and inventory management, our goal is to help
            restaurants, lounges, and hotels streamline their financial
            processes, reduce waste, and enhance profitability. Led by a team of
            seasoned professionals, we bring a wealth of experience and a
            commitment to excellence in every service we offer. Let us be your
            trusted partner in optimizing your business for success.
          </p>
          <Link href={"/About"}>
            <button className="btn bg-[#4169E1] text-white">
              About our firm
            </button>
          </Link>
        </div>
      </div> */}
      <Pricing />

      {/* <FeaturesTitle /> */}

      <GetInTouch />

      <TestimonialCarousel />
    </div>
  );
}
