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

const Lawal = () => {
  const iconInfoCircle = <IconInfoCircle />;

  return (
    <div className="w-full md:px-48 mt-16 flex">
      <div className="w-[40%] h-full">
        <Image
          src="/team/lawal.png"
          alt="lawal"
          className="w-[60%]"
          width={500}
          height={500}
        />

        <div className="my-28 space-y-4 text-blue">
          <h1 className=" text-2xl font-bold">Core Expertise:</h1>
          <List
            spacing="xs"
            size="md"
            mt={20}
            c={"white"}
            center
            listStyleType="disc"
          >
            <List.Item>Financial Reporting & Bookkeeping</List.Item>
            <List.Item>Taxation & Regulatory Compliance </List.Item>
            <List.Item>Taxation & Regulatory Compliance</List.Item>
            <List.Item>Audit & Risk Management</List.Item>
            <List.Item>Strategic Financial Planning & Advisory </List.Item>
            <List.Item>Business Growth & Profitability Analysis</List.Item>
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
          With a reputation for precision, integrity, and strategic financial
          leadership, Lawal is dedicated to empowering businesses with the
          financial clarity they need to thrive.
        </Blockquote>
      </div>

      <div className="w-[60%] text-white h-full">
        <div className="space-y-2">
          <h1 className="text-blue font-bold text-3xl uppercase">
            KODELEYIRI LAWAL MOHAMMED
          </h1>
          <p className="text-white font-semibold text-xl">
            Founder & Lead Consultant
          </p>
        </div>

        <div className="divider"></div>
        <div className="space-y-8 font-extralight text-lg">
          <p className="">
            Lawal Mohammed is a seasoned chartered accountant with over 18 years
            of experience spanning multiple industries, bringing a wealth of
            financial expertise, strategic insights, and a commitment to
            excellence. Holding a Bachelor’s degree in Accounting, Lawal has
            built a distinguished career in bookkeeping, financial reporting,
            taxation, ERP systems, and auditing, helping businesses navigate
            complex financial landscapes with precision.
          </p>

          <p className="">
            Lawal’s accounting and finance journey began in 2011 at Tower
            Aluminium Plc, a vertically integrated metal company with over 16
            subsidiaries, where he served as a Financial Accountant. Since then,
            he has held several leadership positions, including:
          </p>

          <List
            spacing="xs"
            size="md"
            center
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>Head of Accounts at Alufoils Nigeria Limited</List.Item>
            <List.Item>
              Head of Accounts at Honey & Toast Limited, Victoria Island, Lagos
            </List.Item>
            <List.Item>
              Senior Accountant at Rhapsodys Master Franchise, Victoria Island,
              Lagos
            </List.Item>
            <List.Item>
              Head of Finance and Accounts at BON Hotel Lagos, an international
              hotel with a presence in Nigeria, South Africa, UK, and the USA
            </List.Item>
            <List.Item>
              Group Head of Accounts at The Yacht Hotel, Lekki, Lagos
            </List.Item>
          </List>

          <p>
            As the Founder & Lead Consultant at Hogg Anderson Business
            Solutions, Lawal channels his expertise into helping SMEs streamline
            their bookkeeping, optimize financial reporting, and ensure
            compliance with tax and regulatory standards. His extensive
            background across corporate finance, hospitality, manufacturing, and
            service-based industries positions him as a trusted advisor for
            businesses looking to enhance financial efficiency, improve cash
            flow, and drive sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lawal;
