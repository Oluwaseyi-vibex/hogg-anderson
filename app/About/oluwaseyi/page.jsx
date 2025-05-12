"use client";
import Image from "next/image";
import React from "react";
import { Blockquote, List } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

const Oluwaseyi = () => {
  const iconInfoCircle = <IconInfoCircle />;

  return (
    <div className="w-full md:px-48 md:mt-16 mt-6 md:flex-row flex-col px-5 flex">
      <div className="space-y-2 md:hidden ">
        <h1 className="text-blue font-bold text-xl uppercase">
          KODELEYIRI OLUWASEYIFUNMI EZEKIEL
        </h1>
        <p className="text-white font-light text-lg">
          Technology & Digital Solutions Specialist
        </p>
      </div>

      <div className="md:w-[40%] w-full mt-8 h-full">
        <div className="w-full flex md:items-start items-center md:justify-normal justify-center">
          <Image
            src="/team/oluwaseyi.png"
            alt="Oluwaseyi"
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
            <List.Item>Tech-Based Bookkeeping Integrations</List.Item>
            <List.Item>Business Process Enhancement</List.Item>
            <List.Item> Software & Web Development </List.Item>
            <List.Item>Automation & Digital Financial Systems</List.Item>
            <List.Item>Cybersecurity & Data Protection</List.Item>
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
          Dedicated to bridging the gap between finance and technology,
          Oluwaseyifunmi ensures that businesses can operate more efficiently,
          reduce manual errors, and optimize their financial strategies through
          smart digital implementation.
        </Blockquote>
      </div>

      <div className="w-full md:w-[60%] text-white h-full">
        <div className="space-y-2 md:block hidden">
          <h1 className="text-blue font-bold text-3xl uppercase">
            KODELEYIRI OLUWASEYIFUNMI EZEKIEL
          </h1>
          <p className="text-white font-semibold text-xl">
            Technology & Digital Solutions Specialist
          </p>
        </div>

        <div className="divider"></div>

        <div className="space-y-8 mb-8 font-extralight text-lg">
          <p className="">
            Oluwaseyifunmi Ezekiel is a highly skilled Computer Science graduate
            from the University of Africa, Toro-Orua, Bayelsa State, Nigeria,
            with extensive expertise in modern digital technologies. With
            multiple certifications in React and other advanced programming
            frameworks, he is passionate about leveraging technology to enhance
            business operations, streamline financial processes, and create
            innovative digital solutions.
          </p>

          <p className="">
            As the Technology & Digital Solutions Specialist at Hogg Anderson
            Business Solutions Limited, Oluwaseyifunmi integrates cutting-edge
            software solutions into bookkeeping and financial management,
            ensuring that SMEs have access to efficient, automated, and
            user-friendly financial systems. His expertise in front-end and
            back-end technologies allows businesses to modernize their
            operations, improve digital security, and gain real-time insights
            into their financial data.
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

export default Oluwaseyi;
