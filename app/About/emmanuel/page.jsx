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
    <div className="w-full md:px-48 mt-16 flex">
      <div className="w-[40%] h-full">
        <Image
          src="/team/emmanuel.png"
          alt="emmanuel"
          className="w-[60%]"
          width={500}
          height={500}
        />

        <div className="my-16 space-y-4 text-blue">
          <h1 className=" text-2xl font-bold">Core Expertise:</h1>
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

      <div className="w-[60%] text-white h-full">
        <div className="space-y-2">
          <h1 className="text-blue font-bold text-3xl uppercase">
            KODELEYIRI EVANS EMMANUEL
          </h1>
          <p className="text-white font-semibold text-xl">
            Finance & Inventory Management Specialist
          </p>
        </div>

        <div className="divider"></div>
        <div className="space-y-8 font-extralight text-lg">
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
