"use client";
import Image from "next/image";
import React from "react";
import { Blockquote, List } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

const Omolara = () => {
  const iconInfoCircle = <IconInfoCircle />;

  return (
    <div className="w-full md:px-48 md:mt-16 mt-6 md:flex-row flex-col px-5 flex">
      <div className="space-y-2 md:hidden ">
        <h1 className="text-blue font-bold text-xl uppercase">
          KODELEYIRI OMOLARA SHERIFAT
        </h1>
        <p className="text-white font-light text-lg">
          Finance & Bookkeeping Specialist
        </p>
      </div>

      <div className="md:w-[40%] w-full mt-8 h-full">
        <div className="w-full flex md:items-start items-center md:justify-normal justify-center">
          <Image
            src="/team/omolara.png"
            alt="Omolara"
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
            <List.Item>Finance & Bookkeeping Operations</List.Item>
            <List.Item>Account Reconciliation & Cash Flow Management</List.Item>
            <List.Item> Accounts Payable & Receivable Administration</List.Item>
            <List.Item>Inventory Management & Cost Control</List.Item>
            <List.Item>ERP Systems Implementation (Tally, Sage)</List.Item>
            <List.Item>Financial Data Analysis & Reporting</List.Item>
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
          Omolara’s meticulous approach to financial management and her ability
          to integrate modern accounting technologies make her an invaluable
          asset to businesses striving for efficiency and growth.
        </Blockquote>
      </div>

      <div className="w-full md:w-[60%] text-white h-full">
        <div className="space-y-2 md:block hidden">
          <h1 className="text-blue font-bold text-3xl uppercase">
            KODELEYIRI OMOLARA SHERIFAT
          </h1>
          <p className="text-white font-semibold text-xl">
            Finance & Bookkeeping Specialist{" "}
          </p>
        </div>

        <div className="divider"></div>
        <div className="space-y-8 mb-8 font-extralight text-lg">
          <p className="">
            Omolara Sherifat is an accomplished financial expert with an HND in
            Business Administration from The Polytechnic, Ibadan. With extensive
            experience spanning finance, bookkeeping, account reconciliation,
            payables & receivables, and inventory management, she has built a
            strong reputation for precision, efficiency, and strategic financial
            oversight.
          </p>

          <p className="">
            Having worked in multiple banks across Nigeria, Omolara possesses a
            deep understanding of financial operations, compliance, and
            corporate financial structures. Additionally, she has years of
            experience as an accountant in Fast-Moving Consumer Goods (FMCG)
            companies in Lagos, where she has helped businesses optimize cash
            flow, manage inventory efficiently, and maintain robust financial
            reporting systems.
          </p>

          <p>
            Her expertise in Tally ERP and Sage gives her a technical edge in
            financial management, enabling businesses to automate accounting
            processes, enhance data accuracy, and improve decision-making
            through real-time financial insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Omolara;
