"use client";
import Image from "next/image";
import React from "react";
import teamMembers from "@/data/teamData";
import { Blockquote, List, ThemeIcon } from "@mantine/core";
import {
  IconCheck,
  IconCircleCheck,
  IconCircleDashed,
  IconDots,
  IconInfoCircle,
} from "@tabler/icons-react";

const Emmanuel = () => {
  const iconInfoCircle = <IconInfoCircle />;

  return (
    <div className="w-full md:px-48 md:mt-16 mt-6 md:flex-row flex-col px-5 flex">
      <div className="space-y-2 md:hidden ">
        <h1 className="text-blue font-bold text-xl uppercase">
          KODELEYIRI EVANS EMMANUEL
        </h1>
        <p className="text-white font-light text-lg">
          Finance & Inventory Management Specialist
        </p>
      </div>

      <div className="md:w-[40%] w-full mt-8 h-full">
        <div className="w-full flex md:items-start items-center md:justify-normal justify-center">
          <Image
            src="/team/emmanuel.png"
            alt="emmanuel"
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
            <List.Item>Inventory Management & Cost Control</List.Item>
            <List.Item>Accounts Payable & Receivable Processing </List.Item>
            <List.Item>Management Accounting & Financial Reporting</List.Item>
            <List.Item>Strategic Financial Modeling & Budgeting</List.Item>
            <List.Item>
              Cash Flow Optimization & Business Profitability Analysis{" "}
            </List.Item>
            <List.Item>Regulatory Compliance & Financial Oversight</List.Item>
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
          Emmanuel’s commitment to precision, efficiency, and financial
          sustainability ensures that businesses can operate smoothly with
          strong financial foundations. His ability to integrate structured
          financial management with strategic insights makes him a trusted
          partner for growth-driven organizations.
        </Blockquote>
      </div>

      <div className="w-full md:w-[60%] text-white h-full">
        <div className="space-y-2 md:block hidden">
          <h1 className="text-blue font-bold text-3xl uppercase">
            KODELEYIRI EVANS EMMANUEL
          </h1>
          <p className="text-white font-semibold text-xl">
            Finance & Inventory Management Specialist
          </p>
        </div>

        <div className="divider"></div>

        <div className="space-y-8 mb-8 font-extralight text-lg">
          <p className="">
            Emmanuel Evans is a dedicated finance professional with a Bachelor’s
            degree in Accounting from Olabisi Onabanjo University, Ago-Iwoye,
            and an Associate Member of the Chartered Institute of Finance &
            Control of Nigeria (CIFCON). His extensive expertise spans inventory
            management, accounts payable & receivable, management accounting,
            and financial modeling, making him a crucial asset in financial
            planning and control.
          </p>

          <p className="">
            With a wealth of experience as a Financial Accountant at Protea by
            Marriott Lagos, Emmanuel has honed his ability to streamline
            financial processes, optimize resource management, and enhance
            business efficiency. His strong analytical skills and mastery of
            financial modeling enable businesses to forecast financial
            performance, make data-driven decisions, and maintain financial
            stability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Emmanuel;
