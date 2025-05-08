"use client";
import { TeamPage } from "@/components";
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

import teamMembers from "@/data/teamData";

const About = () => {
  return (
    <div
      className={`${poppins.className} h-full flex flex-col gap-0 pt-8 md:pt-16 `}
    >
      <div className="md:px-24 px-4 flex  flex-col gap-12 h-full md:pb-24">
        <div className="flex items-center h-fit  gap-4 text-sm md:text-md text-[#F5F5F5]/60">
          <FontAwesomeIcon
            color=""
            icon={faInfoCircle}
            className="w-[30px] text-[#4169E1]  h-[30px]"
          ></FontAwesomeIcon>
          <h1>About Hogg Anderson Business Solutions Limited</h1>
        </div>

        <div className="flex h-fit flex-col  gap-6">
          <h1 className="text-5xl md:text-6xl flex gap-5 font-semibold tracking-wider leading-[70px] text-[#F5F5F5]">
            <div className="w-[10px] md:h-[70px] bg-[#4169E1] rounded-l-xl"></div>
            <p> Who We Are</p>
          </h1>
          <div className="text-5xl hidden md:text-6xl max-h-full md:flex gap-5 font-semibold tracking-wider md:leading-[70px] text-[#F5F5F5]">
            <div className="w-[10px] md:h-[140px] bg-[#4169E1] rounded-l-xl"></div>
            <p>
              What is Hogg Anderson and <br /> What do we do?
            </p>
          </div>
          <p className="text-sm md:text-lg md:w-[700px] text-[#F5F5F5]/50">
            At Hogg Anderson, we specialize in providing accurate, reliable, and
            tailored bookkeeping services for small and medium-sized enterprises
            (SMEs) across Nigeria. We understand the unique challenges faced by
            businesses in maintaining financial records, tracking expenses, and
            staying compliant with tax regulations. That’s why we are here—to
            help you simplify your finances, make informed decisions, and grow
            with confidence.
          </p>
        </div>
      </div>

      <div className="h-full w-full flex md:flex-row flex-col py-10 gap-16 md:py-24 px-4 md:px-12 justify-between bg-[#F5F5F5]">
        <div className="w-full flex  items-start md:justify-center">
          <Image
            src={"/aboutPage.png"}
            alt=""
            width={1000}
            className="md:w-[80%]"
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

          <h1 className="text-2xl text-[#333333] font-semibold">
            Why Choose Us?{" "}
          </h1>

          <div className="flex flex-col gap-3">
            <List icon={<IconCheck />} className="list-disc  space-y-2">
              <List.Item>
                Expert Financial Management - Our professional bookkeeping
                services ensure your records are organized, up-to-date, and
                ready for financial analysis.{" "}
              </List.Item>
              <List.Item>
                SME-Focused Solutions - We customize our approach to suit the
                needs of growing businesses, making financial management simple
                and stress-free.
              </List.Item>
              <List.Item>
                Compliance & Accuracy - Stay compliant with Nigerian tax and
                regulatory requirements with our precision-driven bookkeeping
                strategies.
              </List.Item>
              <List.Item>
                Data-Driven Growth - We help you leverage financial insights to
                optimize your cash flow and maximize profitability.
              </List.Item>
              <List.Item>
                Scalable Support - Whether you&apos;re a startup or an
                established business, our services grow with you.
              </List.Item>
            </List>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#333333] font-semibold">
              Our Services Include:{" "}
            </h1>

            <List icon={<IconCheck />} className="list-disc">
              <List.Item>General Bookkeeping & Record Management</List.Item>
              <List.Item>Accounts Payable & Receivable Tracking</List.Item>
              <List.Item>Bank Reconciliation & Financial Reporting </List.Item>
              <List.Item>
                Tax Preparation Support & Compliance Assistance
              </List.Item>
              <List.Item>Payroll Management & Expense Tracking</List.Item>
              <List.Item>Financial Consulting & Advisory Services</List.Item>
            </List>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#333333] font-semibold">
              Specialist Industry Expertise
            </h1>

            <List icon={<IconCheck />} className="list-disc">
              <List.Item>Hospitality (Restaurants, Lounges, Hotels)</List.Item>
              <List.Item>Real Estate</List.Item>
              <List.Item>Transportation</List.Item>
              <List.Item>Information Technology</List.Item>
              <List.Item>Trading & Distribution</List.Item>
              <List.Item>Professional Services</List.Item>
              <List.Item>Small & Medium Enterprises (SMEs)</List.Item>
            </List>
          </div>

          {/* <div className="flex flex-col gap-3">
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
          </div> */}

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
            Let us handle the numbers while you focus on building your business!
            <br />
            <a
              target="_blank"
              href={"https://wa.link/54pg2j"}
              className="link link-hover text-blue italic"
            >
              Contact us
            </a>{" "}
            today to discover how Hogg Anderson can streamline your bookkeeping
            process and set your business up for success.
          </p>
        </div>
      </div>
      <TeamPage teamMembers={teamMembers} />

      <div className="mt-8">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default About;
