"use client";
import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import { Button, Image, List } from "@mantine/core";
import { IconCheckbox } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const BusinessAdvisory = () => {
  return (
    <div className={`${poppins.className} h-full  mx-10 my-8`}>
      <div className="text-[#F5F5F5]/80 bg-[#333333] sticky top-[95px] py-1 flex items-center gap-4 text-sm">
        <p className="cursor-pointer">Home</p>
        <div className={`text-[${Colors.blue}] text-xs`}>{`>`}</div>{" "}
        <Link className="cursor-pointer link link-hover " href={"#"}>
          Services
        </Link>
        <div className={`text-[${Colors.blue}] text-xs`}>{`>`}</div>{" "}
        <Link className="cursor-pointer link link-hover " href={"#"}>
          Business Advisory
        </Link>
      </div>
      <div className="my-5 w-full flex   gap-7">
        <Image
          src={"/startup-colleagues-reviewing.jpg"}
          w={"750px"}
          alt=""
          // className="w-[900px]"
        />
        <div
          className={`p-8 h-fit w-fit flex flex-col gap-3 text-[${Colors.white}] bg-[${Colors.blue}]`}
        >
          <h1 className="text-2xl">Contact Us</h1>
          <p className={`font-extralight text-sm `}>
            We would love to hear from you
          </p>
          <Button className={`w-full min-w-full`}>Contact Us Now</Button>
        </div>
      </div>

      <div>
        <h1 className={`text-[${Colors.blue}] font-medium text-4xl mt-10`}>
          Strategic Business Advisory Services
        </h1>

        <div
          className={`flex flex-col mt-2 gap-3 text-sm w-[70%] text-[${Colors.white}]/60 `}
        >
          <div
            className={`flex flex-col gap-3 text-sm  w-[70%] text-[${Colors.white}]/60 `}
          >
            At Hogg Anderson Business Solutions Limited, we offer Business
            Advisory services designed to support the long-term success of your
            business. We don’t just deliver financial advice; we act as a
            trusted partner, helping you navigate challenges, seize
            opportunities, and make informed decisions that drive growth.
          </div>
          <p>
            Our team of experienced business advisors is equipped to assist you
            in every aspect of your business—from strategic planning to
            operational efficiency and financial management. We provide tailored
            advice and actionable solutions that help you optimize your business
            performance and achieve your goals.
          </p>
        </div>
        <div
          className={`flex flex-col gap-3 text-sm w-[70%] text-[${Colors.white}]/60 `}
        >
          <h1
            className={`text-[${Colors.blue}] font-medium text-2xl mt-10 mb-2`}
          >
            Unlock Your Business Potential
          </h1>
          <p>
            With our expertise and data-driven insights, we help you refine your
            business model, streamline operations, and improve profitability.
            Whether you’re a startup or an established business, we tailor our
            services to meet your unique needs.
          </p>
        </div>
        <div className="flex flex-col gap-3 my-4">
          <p className={`text-sm text-[${Colors.blue}]`}>
            Our Business Advisory Services Include:
          </p>
          <List
            className={`text-[${Colors.white}]/60 text-base `}
            icon={<IconCheckbox size={"17px"} />}
            size="sm"
          >
            <List.Item>
              Strategic Planning: Crafting short-term and long-term business
              strategies
            </List.Item>
            <List.Item>
              Financial Planning: Budgeting, cash flow forecasting, and capital
              allocation
            </List.Item>
            <List.Item>
              Payroll Management: Efficient payroll processing and compliance
            </List.Item>
            <List.Item>
              Business Process Optimization: Streamlining operations for
              efficiency
            </List.Item>
            <List.Item>
              Performance Improvement: Identifying and solving bottlenecks in
              business performance
            </List.Item>
            <List.Item>
              Risk Management: Mitigating financial, operational, and compliance
              risks
            </List.Item>
            <List.Item>
              Market Analysis & Expansion: Identifying opportunities for growth
              and market entry
            </List.Item>
          </List>
          <p className={`text-[#FFCC99] text-base `}>
            We work with businesses across various sectors, helping them adapt
            to ever-changing market conditions and capitalize on new
            opportunities. With Hogg Anderson, you get more than advice—you get
            a partner committed to your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessAdvisory;
