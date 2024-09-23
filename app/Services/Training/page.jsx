"use client";
import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import { Button, Image, List } from "@mantine/core";
import { IconCheckbox } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Training = () => {
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
          Training
        </Link>
      </div>
      <div className="my-5 w-full flex   gap-7">
        <Image
          src={"/investor-confidence.jpg"}
          w={"650px"}
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
          Tailored Training Services for Business Excellence
        </h1>

        <div
          className={`flex flex-col mt-2 gap-3 text-sm w-[70%] text-[${Colors.white}]/60 `}
        >
          <div
            className={`flex flex-col gap-3 text-sm  w-[70%] text-[${Colors.white}]/60 `}
          >
            At Hogg Anderson Business Solutions Limited, we understand that a
            well-trained team is essential to the success of any business.
            That’s why we offer Training Services specifically designed to
            enhance the skills of your workforce and improve overall business
            performance.
          </div>
          <p>
            Our training programs are customized to meet the unique needs of
            your organization, whether it&apos;s in accounting, financial
            management, inventory control, or general business operations. We
            empower your team with the knowledge and tools they need to boost
            efficiency, ensure compliance, and drive growth.
          </p>
        </div>
        <div
          className={`flex flex-col gap-3 text-sm w-[70%] text-[${Colors.white}]/60 `}
        >
          <h1
            className={`text-[${Colors.blue}] font-medium text-2xl mt-10 mb-2`}
          >
            Developing Skills for Success
          </h1>
          <p>
            Our hands-on, practical training programs ensure that your team
            stays ahead of industry trends, adheres to best practices, and
            contributes to the overall success of your business. From new
            recruits to experienced staff, our training solutions cater to all
            levels of expertise.
          </p>
        </div>
        <div className="flex flex-col gap-3 my-4">
          <p className={`text-sm text-[${Colors.blue}]`}>
            Our Training Services Include:
          </p>
          <List
            className={`text-[${Colors.white}]/60 text-base `}
            icon={<IconCheckbox size={"17px"} />}
            size="sm"
          >
            <List.Item>
              Accounting Systems Training: Equip your staff with skills to
              manage and use accounting software efficiently
            </List.Item>
            <List.Item>
              Financial Planning: Budgeting, cash flow forecasting, and capital
              allocation
            </List.Item>
            <List.Item>
              Inventory Management: Improve stock control and accuracy through
              best practices in inventory tracking
            </List.Item>
            <List.Item>
              Financial Reporting & Analysis: Learn how to generate and
              interpret financial reports for better decision-making
            </List.Item>
            <List.Item>
              Performance Improvement: Identifying and solving bottlenecks in
              business performance
            </List.Item>
            <List.Item>
              Payroll Management: Training on accurate and compliant payroll
              processing
            </List.Item>
            <List.Item>
              Compliance & Regulatory Training: Ensure your team understands the
              latest tax laws and industry regulations
            </List.Item>
            <List.Item>
              Business Process Optimization: Teach staff how to streamline
              operations for greater productivity and profitability
            </List.Item>
          </List>

          <div
            className={`flex flex-col gap-3 text-sm w-[70%] text-[${Colors.white}]/60 `}
          >
            <h1
              className={`text-[${Colors.blue}] font-medium text-2xl mt-10 mb-2`}
            >
              Developing Skills for Success
            </h1>

            <List
              className={`text-[${Colors.white}]/60 text-base `}
              icon={<IconCheckbox size={"17px"} />}
              size="sm"
            >
              <List.Item>
                Customized Training: Tailored to the specific needs of your
                business and industry
              </List.Item>

              <List.Item>
                Experienced Trainers: Learn from industry experts with
                real-world experience
              </List.Item>

              <List.Item>
                Ongoing Support: We provide continuous support to ensure your
                team stays up to date
              </List.Item>
            </List>
          </div>
          <p className={`text-[#FFCC99] text-base `}>
            At Hogg Anderson, we believe that continuous learning is key to
            sustained business growth. Our training programs not only build
            expertise but also foster a culture of excellence within your
            organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Training;
