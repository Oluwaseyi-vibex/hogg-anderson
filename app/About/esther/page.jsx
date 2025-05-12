"use client";
import Image from "next/image";
import React from "react";
import { Blockquote, List } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

const Esther = () => {
  const iconInfoCircle = <IconInfoCircle />;

  return (
    <div className="w-full md:px-48 md:mt-16 mt-6 md:flex-row flex-col px-5 flex">
      <div className="space-y-2 md:hidden ">
        <h1 className="text-blue font-bold text-xl uppercase">
          KODELEYIRI ESTHER OPEYEMI
        </h1>
        <p className="text-white font-light text-lg">
          Accounting & Data Analysis Specialist
        </p>
      </div>

      <div className="md:w-[40%] w-full mt-8 h-full">
        <div className="w-full flex md:items-start items-center md:justify-normal justify-center">
          <Image
            src="/team/esther.png"
            alt="esther"
            className="md:w-[60%] w-[90%]"
            width={500}
            height={500}
          />
        </div>

        <div className="md:my-28 my-14 w-full space-y-4 text-blue">
          <h1 className=" text-xl md:text-2xl font-bold">Core Expertise:</h1>
          <List
            spacing="xs"
            size="md"
            mt={20}
            c={"white"}
            center
            listStyleType="disc"
          >
            <List.Item>Financial Analysis & Reporting</List.Item>
            <List.Item>Advanced Excel Spreadsheet Management</List.Item>
            <List.Item> Accounting Software Optimization</List.Item>
            <List.Item>Bookkeeping & Data Reconciliation</List.Item>
            <List.Item>Budgeting & Financial Forecasting </List.Item>
            <List.Item>Business Process Automation</List.Item>
          </List>
        </div>

        <Blockquote
          color="blue"
          //   cite="– Forrest Gump"
          icon={iconInfoCircle}
          mt="xl"
          c={"white"}
          w={"300px"}
        >
          Esther’s meticulous approach to financial management, combined with
          her technological expertise, makes her an essential force in driving
          efficiency, accuracy, and strategic business growth.
        </Blockquote>
      </div>

      <div className="w-full md:w-[60%] text-white h-full">
        <div className="space-y-2 md:block hidden">
          <h1 className="text-blue font-bold text-3xl uppercase">
            KODELEYIRI ESTHER OPEYEMI
          </h1>
          <p className="text-white font-semibold text-xl">
            Accounting & Data Analysis Specialist
          </p>
        </div>

        <div className="divider"></div>
        <div className="space-y-8 mb-8 font-extralight text-lg">
          <p className="">
            Esther Opeyemi is a highly accomplished finance professional with a
            First-Class degree in Accounting from Hallmark University, Ogun
            State, Nigeria. Her exceptional academic background is complemented
            by her deep expertise in Excel spreadsheet management and advanced
            accounting software, making her an asset in financial analysis,
            bookkeeping automation, and data-driven decision-making.
          </p>

          <p className="">
            With a strong foundation in accounting principles, financial
            reporting, and business analytics, Esther excels in developing
            efficient financial models, streamlining data management processes,
            and optimizing financial accuracy for businesses. Her proficiency in
            Excel and modern accounting software enables companies to automate
            financial tracking, enhance reporting efficiency, and improve
            strategic financial planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Esther;
