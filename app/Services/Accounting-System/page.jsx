"use client";
import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import { Button, Image, List } from "@mantine/core";
import { IconCheckbox } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const AccountingSystem = () => {
  return (
    <div className={`${poppins.className} h-full mx-4 md:mx-10 md:my-8`}>
      <div className="text-[#F5F5F5]/80 bg-[#333333] sticky top-0 py-2 flex items-center gap-4 text-sm">
        <p className="cursor-pointer">Home</p>
        <div className={`text-[${Colors.blue}] text-xs`}>{`>`}</div>{" "}
        <Link className="cursor-pointer link link-hover " href={"#"}>
          Services
        </Link>
        <div className={`text-[${Colors.blue}] text-xs`}>{`>`}</div>{" "}
        <Link className="cursor-pointer link link-hover " href={"#"}>
          Accounting System
        </Link>
      </div>
      <div className="my-5 w-full flex md:flex-row flex-col gap-7">
        <Image
          src={"/person-office.jpg"}
          w={"645px"}
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
          <Link href="/getInTouch">
            <Button className={`w-full min-w-full`}>Contact Us Now</Button>
          </Link>{" "}
        </div>
      </div>

      <div>
        <h1 className={`text-[${Colors.blue}] font-medium text-4xl mt-10`}>
          Comprehensive Accounting System Solutions
        </h1>

        <div
          className={`flex flex-col mt-2 gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <div
            className={`flex flex-col gap-3 text-sm  md:w-[70%] text-[${Colors.white}]/60 `}
          >
            At Hogg Anderson Business Solutions Limited, we provide cutting-edge
            accounting system solutions tailored to meet the specific needs of
            your business. Whether you&apos;re a small startup or an established
            enterprise, our technology-driven accounting systems are designed to
            streamline your financial processes and enhance overall efficiency.
          </div>
          <p>
            We offer access to seasoned accounting professionals and the latest
            financial management tools, without the need to hire full-time
            staff. Our solutions ensure that your financial data is always
            accurate, compliant, and accessible in real-time, giving you the
            insight needed to make smarter business decisions.
          </p>
        </div>
        <div
          className={`flex flex-col gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <h1
            className={`text-[${Colors.blue}] font-medium text-2xl mt-10 mb-2`}
          >
            Transform Your Accounting Processes with Technology
          </h1>
          <p>
            Our cloud-based accounting systems allow you to manage everything
            from bookkeeping to financial forecasting in one central,
            easy-to-use platform. This ensures that you can focus on growing
            your business while we handle the complexities of your financial
            operations.
          </p>
        </div>
        <div className="flex flex-col gap-3 my-4">
          <p className={`text-sm text-[${Colors.blue}]`}>
            Our Accounting System Services Include:
          </p>
          <List
            className={`text-[${Colors.white}]/60 text-base `}
            icon={<IconCheckbox size={"17px"} />}
            size="sm"
          >
            <List.Item>
              Bookkeeping: Accurate and timely recording of financial
              transactions
            </List.Item>
            <List.Item>
              Financial Reporting: Monthly, quarterly, and annual financial
              statements
            </List.Item>
            <List.Item>
              Payroll Management: Efficient payroll processing and compliance
            </List.Item>
            <List.Item>
              Tax Preparation & Filing: Hassle-free tax management and
              regulatory compliance
            </List.Item>
            <List.Item>
              Financial Forecasting & Budgeting: Projections to guide future
              financial decisions
            </List.Item>
            <List.Item>
              Cash Flow Management: Monitoring inflows and outflows for better
              liquidity control
            </List.Item>
            <List.Item>
              Audit Preparation: Organizing records for external audits
            </List.Item>
          </List>
          <p className={`text-[#FFCC99] text-base `}>
            With Hogg Anderson, you gain access to a robust, cloud-based
            accounting system that not only saves you time and money but also
            delivers the real-time financial insights needed to drive your
            business forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountingSystem;
