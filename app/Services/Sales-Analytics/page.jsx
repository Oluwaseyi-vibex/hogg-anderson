"use client";
import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import { Button, Image, List } from "@mantine/core";
import { IconCheckbox } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SalesAnalytics = () => {
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
          Sales Analytics
        </Link>
      </div>
      <div className="my-5 w-full flex md:flex-row flex-col gap-7">
        <Image
          src={"/office.jpg"}
          w={"600px"}
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
          Actionable Sales Analytics Solutions
        </h1>

        <div
          className={`flex flex-col mt-2 gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <div
            className={`flex flex-col gap-3 text-sm  md:w-[70%] text-[${Colors.white}]/60 `}
          >
            At Hogg Anderson Business Solutions Limited, we understand that
            sales data is key to driving growth and profitability. Our Sales
            Analytics services provide you with deep insights into your sales
            performance, enabling you to make informed decisions that propel
            your business forward.
          </div>
          <p>
            Whether you&apos;re a startup or an established business, we help
            you harness the power of data to maximize revenue, optimize sales
            strategies, and improve overall business performance.
          </p>

          <p>
            We give you access to experienced professionals who can help you
            streamline your inventory processes—without the need to hire
            full-time staff. From managing stock levels to implementing best
            practices, our inventory solutions are designed to enhance
            efficiency and reduce operational costs.
          </p>
        </div>
        <div
          className={`flex flex-col gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <h1
            className={`text-[${Colors.blue}] font-medium text-2xl mt-10 mb-2`}
          >
            Data-Driven Sales Insights
          </h1>
          <p>
            Our cloud-based sales analytics solutions allow you to monitor,
            analyze, and visualize your sales data in real-time. This enables
            you to stay on top of trends, identify opportunities, and adapt to
            changing market demands.
          </p>
        </div>
        <div className="flex flex-col gap-3 my-4">
          <p className={`text-sm text-[${Colors.blue}]`}>
            Our Sales Analytics Services Include:
          </p>
          <List
            className={`text-[${Colors.white}]/60 text-base `}
            icon={<IconCheckbox size={"17px"} />}
            size="sm"
          >
            <List.Item>
              Comprehensive sales reporting and performance tracking
            </List.Item>
            <List.Item>Key performance indicators (KPIs) analysis</List.Item>
            <List.Item>
              Customer segmentation and sales trend identification
            </List.Item>
            <List.Item>Revenue forecasting and financial planning</List.Item>
            <List.Item>Profit margin analysis by product or service</List.Item>
            <List.Item>Sales team performance tracking</List.Item>
            <List.Item>
              Custom dashboards for real-time sales insights
            </List.Item>
          </List>
          <p className={`text-[#FFCC99] text-base `}>
            With Hogg Anderson, you gain access to actionable insights that not
            only reveal how your business is performing but also highlight areas
            where improvements can be made, helping you increase profitability
            and stay ahead of the competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
