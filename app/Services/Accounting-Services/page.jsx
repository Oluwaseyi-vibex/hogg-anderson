"use client";
import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import { Button, List } from "@mantine/core";
import { IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AccountingServices = () => {
  return (
    <div className={`${poppins.className} h-full mx-4 md:mx-24 md:my-8`}>
      <div className="text-[#F5F5F5]/80 bg-[#333333] sticky top-0 py-2 flex items-center gap-4 text-sm">
        <p className="cursor-pointer">Home</p>
        <div className={`text-[${Colors.blue}] text-xs`}>{`>`}</div>{" "}
        <Link className="cursor-pointer link link-hover " href={"#"}>
          Services
        </Link>
        <div className={`text-[${Colors.blue}] text-xs`}>{`>`}</div>{" "}
        <Link className="cursor-pointer link link-hover " href={"#"}>
          Accounting Services
        </Link>
      </div>
      <div className="my-5 w-full flex md:flex-row flex-col gap-7 md:gap-16">
        <Image
          alt=""
          src={"/financial-accuracy.png"}
          width={800}
          className="md:w-[60%] w-full h-full md:h-[600px]"
          height={700}
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
          </Link>
        </div>
      </div>

      <div>
        <h1 className={`text-[${Colors.blue}] font-medium text-4xl mt-10`}>
          Comprehensive Accounting Services
        </h1>

        <div className={`h-1 w-20 my-6 bg-[${Colors.orange}]`}></div>

        <div
          className={`flex flex-col gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <p>
            Whether you&apos;re launching a startup in need of small business
            bookkeeping services or managing an established business, Hogg
            Anderson Business Solutions Limited offers seamless bookkeeping and
            payroll solutions tailored to your needs.
          </p>

          <p>
            We provide easy access to highly qualified and experienced
            accounting professionals—without the need for you to hire full-time
            staff.
          </p>

          <p>
            Even if your in-house bookkeeper is struggling to keep up with your
            growing business demands, we can step in with efficient,
            cost-effective support to keep your financial processes on track.
            Our cloud-based, online bookkeeping services are designed to help
            you reduce costs and manage your books efficiently.
          </p>
        </div>

        <div
          className={`flex flex-col gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <h1
            className={`text-[${Colors.blue}] font-medium text-2xl mt-10 mb-2`}
          >
            Streamlined Accounting with Cloud Technology
          </h1>
          <p>
            Our cloud-based accounting solutions revolutionize the way you
            manage your financial data. The built-in efficiencies allow you and
            your advisors to focus more on strategies that drive profitability
            and business growth.
          </p>
        </div>

        <div className="flex flex-col gap-3 my-4">
          <p className={`text-sm text-[${Colors.blue}]`}>
            Our Accounting Services Include:
          </p>
          <List
            className={`text-[${Colors.white}]/60 text-base `}
            icon={<IconCheckbox size={"17px"} />}
            size="sm"
          >
            <List.Item>Monthly and periodical financial reporting</List.Item>
            <List.Item>Payroll management</List.Item>
            <List.Item>Analytics and KPI reporting</List.Item>
            <List.Item>
              Financial forecasting, cash flow, and budget preparation
            </List.Item>
            <List.Item>
              Supervision and training of in-house accounting staff
            </List.Item>
          </List>
          <p className={`text-[#FFCC99] text-base `}>
            As your business grows, you may require more in-depth financial
            analysis by cost center. We provide this added level of insight at
            no extra cost, ensuring your business continues to thrive with
            well-informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountingServices;
