"use client";
import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import { Button, Image, List } from "@mantine/core";
import { IconCheckbox } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const InventoryManagementServices = () => {
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
          Inventory Management System
        </Link>
      </div>
      <div className="my-5 w-full flex md:flex-row flex-col gap-7">
        <Image
          src={"/cost-control.jpg"}
          // w={"800px"}
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
          Efficient Inventory Management Solutions
        </h1>

        <div className={`h-1 w-20 my-6 bg-[${Colors.orange}]`}></div>

        <div
          className={`flex flex-col gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <p>
            Whether you&apos;re a startup or an established business in the
            hospitality industry, Hogg Anderson Business Solutions Limited
            provides comprehensive inventory management solutions tailored to
            your needs.
          </p>

          <p>
            We give you access to experienced professionals who can help you
            streamline your inventory processes—without the need to hire
            full-time staff. From managing stock levels to implementing best
            practices, our inventory solutions are designed to enhance
            efficiency and reduce operational costs.
          </p>

          <p>
            Even if your current in-house system isn&apos;t keeping up with your
            business demands, we can step in to provide efficient support,
            ensuring you maintain accurate records and optimize inventory
            control at cost-effective rates.
          </p>
        </div>

        <div
          className={`flex flex-col gap-3 text-sm md:w-[70%] text-[${Colors.white}]/60 `}
        >
          <h1
            className={`text-[${Colors.blue}] font-medium text-2xl mt-10 mb-2`}
          >
            Revolutionizing Inventory Management with Technology
          </h1>
          <p>
            Our cloud-based, real-time inventory management solutions provide
            full visibility into your stock levels, allowing you to make smarter
            purchasing decisions, minimize waste, and improve overall
            profitability.
          </p>
        </div>

        <div className="flex flex-col gap-3 my-4">
          <p className={`text-sm text-[${Colors.blue}]`}>
            Our Inventory Management Services Include:
          </p>
          <List
            className={`text-[${Colors.white}]/60 text-base `}
            icon={<IconCheckbox size={"17px"} />}
            size="sm"
          >
            <List.Item>
              Regular physical inventory counts and reconciliation
            </List.Item>
            <List.Item>Real-time stock movement tracking and reports</List.Item>
            <List.Item>
              Monthly inventory valuation and variance analysis
            </List.Item>
            <List.Item>
              Cost control strategies for food and beverage operations
            </List.Item>
            <List.Item>
              Analytics and key performance metrics for inventory turnover
            </List.Item>
            <List.Item>
              Custom reporting to identify slow-moving stock and optimize
              reordering
            </List.Item>
            <List.Item>
              Staff training on inventory management procedures
            </List.Item>
          </List>
          <p className={`text-[#FFCC99] text-base `}>
            As your business expands, you may require more detailed analysis and
            reporting on your inventory. We provide this level of insight
            without any additional cost, ensuring your inventory management
            scales with your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagementServices;
