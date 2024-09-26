"use client";
import GetInTouch from "@/components/contact";
import { ContactIconsList } from "@/components/contact/ContactIcons";
import OurVision from "@/components/ourVision";
import TestimonialCarousel from "@/components/testimonialCarousel";
import { inter, poppins } from "@/utils/font/fonts";
import {
  faArchive,
  faBuildingUser,
  faInfo,
  faInfoCircle,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, List } from "@mantine/core";
import {
  IconArrowRightBar,
  IconArrowRightCircle,
  IconArrowRightCircleFilled,
  IconCheck,
  IconCommand,
  IconListCheck,
  IconMarkdown,
  IconMarkdownOff,
  IconMessage2Check,
  IconPhoneEnd,
  IconTicket,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className={`${poppins.className} h-full flex flex-col gap-8 pt-16 `}>
      <div className="px-24 flex  flex-col gap-12 h-full pb-24">
        <div className="flex items-center h-fit  gap-4 text-md text-[#F5F5F5]/60">
          <FontAwesomeIcon
            color=""
            icon={faInfoCircle}
            className="w-[30px] text-[#4169E1]  h-[30px]"
          ></FontAwesomeIcon>
          <h1>About Hogg Anderson Business Solutions Limited</h1>
        </div>

        <div className="flex h-fit flex-col  gap-6">
          <h1 className="text-6xl flex gap-5 font-semibold tracking-wider leading-[70px] text-[#F5F5F5]">
            <div className="w-[10px] h-[70px] bg-[#4169E1] rounded-l-xl"></div>
            <p> Who We Are</p>
          </h1>
          <div className="text-6xl max-h-full flex gap-5 font-semibold tracking-wider leading-[70px] text-[#F5F5F5]">
            <div className="w-[10px] h-[140px] bg-[#4169E1] rounded-l-xl"></div>
            <p>
              What is Hogg Anderson and <br /> How Valid is It?
            </p>
          </div>
          <p className="text-lg w-[700px] text-[#F5F5F5]/50">
            At Hogg Anderson Business Solutions Limited, we specialize in
            providing cost accounting and business solutions for the hospitality
            industry. With a commitment to excellence, we empower restaurants,
            lounges, and hotels to optimize their financial processes and boost
            profitability.
          </p>
        </div>
      </div>

      <div className="h-full w-full flex py-24 px-12 justify-between bg-[#F5F5F5]">
        <div className="w-full flex items-start justify-center">
          <Image
            src={"/aboutPage.png"}
            alt=""
            width={1000}
            className="w-[80%]"
            height={1000}
          />
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="flex text-[#333333] items-center gap-4">
            <FontAwesomeIcon
              icon={faBuildingUser}
              className="w-[30px] text-[#333333] h-[30px]"
            />
            <p>About Us</p>
          </div>

          <h1 className="text-4xl text-[#333333] font-semibold">
            Our Company Overview
          </h1>
          <p>
            Hogg Anderson Business Solutions Limited is a dynamic and trusted
            accounting and business solutions firm, specializing in cost
            accounting, inventory management, and financial optimization for the
            hospitality industry. With over 20 years of experience, we provide
            tailored services that empower restaurants, lounges, and hotels to
            streamline their operations, reduce costs, and improve
            profitability.
          </p>
          <div className="flex gap-8">
            <button className="font-normal btn rounded-sm h-fit min-h-fit py-4 hover:text-white bg-[#FFCC99] border-none text-white text-lg px-6">
              Company
            </button>
            <button className="font-normal btn rounded-sm h-fit min-h-fit py-4 hover:text-white bg-[#E8E8E8] border-none text-black text-lg px-6">
              Industries
            </button>
            <button className="font-normal btn rounded-sm h-fit min-h-fit py-4 hover:text-white bg-[#E8E8E8] border-none text-black text-lg px-6">
              Our Team
            </button>
          </div>

          <p>
            At Hogg Anderson Business Solutions Limited, we don’t just crunch
            numbers—we empower your business to reach new heights. Our mission
            is to be an integral part of your growth journey, serving as the
            driving force behind your success. We’re not just accountants; we’re
            business enthusiasts with a passion for seeing brands thrive.
          </p>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">
              Your Preferred and Trusted Business Advisor
            </h1>
            <p>
              As your go-to business advisor, we offer much more than
              traditional accounting services. We help you:
            </p>
            <List icon={<IconCheck />} className="list-disc">
              <List.Item>
                Maintain an organized, streamlined accounting system
              </List.Item>
              <List.Item>
                Gain valuable insights into your business performance for
                informed financial decisions
              </List.Item>
              <List.Item>
                Reduce tax liabilities and stay compliant with regulations
              </List.Item>
              <List.Item>
                Access alternative funding solutions to grow your business
              </List.Item>
              <List.Item>
                Save money, cut costs, and enhanceli li profit margins
              </List.Item>
              <List.Item>
                Receive expert advice with free professional consultations
              </List.Item>
              <List.Item>
                Purchase services on a flexible pay-as-you-go basis
              </List.Item>
            </List>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Who We Work With</h1>
            <p>We proudly support a wide range of businesses, including:</p>
            <List icon={<IconCheck />} className="list-disc">
              <List.Item>
                Owner-managed businesses (Sole Proprietors, Partnerships,
                Limited Liability Companies)
              </List.Item>
              <List.Item>Expatriates running local businesses</List.Item>
              <List.Item>Professional associations and groups</List.Item>
            </List>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">
              Specialist Industry Expertise
            </h1>
            <p>
              While we work with all types of businesses, we have significant
              expertise in:
            </p>
            <List icon={<IconCheck />} className="list-disc">
              <List.Item>Hospitality (Restaurants, Lounges, Hotels)</List.Item>
              <List.Item>Real Estate</List.Item>
              <List.Item>Transportation </List.Item>
              <List.Item>Information Technology</List.Item>
              <List.Item>Trading & Distribution</List.Item>
              <List.Item>Professional Services</List.Item>
              <List.Item>Small & Medium Enterprises (SMEs)</List.Item>
            </List>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl  font-medium">
              Nigeria’s Leading Business Advisor for Hospitality and Beyond
            </h1>
            <p>
              Since our inception, Hogg Anderson has become the go-to provider
              of accounting, taxation, and business advisory services for the
              hospitality industry in Nigeria. We offer deep technical knowledge
              and hands-on experience, providing tailored solutions that fit the
              specific needs of each client, no matter their size or location.
            </p>

            <p>
              At Hogg Anderson, we go beyond just providing services—our
              priority is always client satisfaction. By leveraging the latest
              technology and the expertise of our dedicated professionals, we
              strive to exceed your expectations and be your trusted partner in
              business success.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Our Commitment</h1>
            <p>
              We are committed to acting as a force for integrity and sound
              business practices. Guided by a promise to always do what’s right
              for our clients, people, and community, we deliver wise,
              actionable solutions to the challenges your business faces.
            </p>
          </div>
          <p>
            <Link className="italic underline text-[#4169e1]" href={"#"}>
              Book a consultation
            </Link>{" "}
            with our team today and let’s discuss how we can help your business
            grow.
          </p>
        </div>
      </div>

      <TestimonialCarousel />
    </div>
  );
};

export default About;
