"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { inter, poppins } from "@/utils/font/fonts";
import { ServicesCard } from "@/components";
import { FeaturesTitle } from "@/components/features";
import { Button } from "@mantine/core";
import { IconArrowRight, IconSignRight } from "@tabler/icons-react";
import GetInTouch from "@/components/contact";
import TestimonialCarousel from "@/components/testimonialCarousel";
import HeroCarousel from "@/components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${poppins.className} w-full   `}>
      {/* <main className="flex w-full items-start  justify-end"> */}
      {/* <div className="flex flex-col gap-3 w-full">
          <p className="rounded-full shadow-md shadow-black cursor-pointer font-light border-white border-[0.5px] w-fit bg-transparent py-1 px-8 text-sm text-[#4169E1]">
            Hogg Anderson Business Solutions Limited
          </p>
          <h1 className="text-[70px] text-[#F5F5F5] leading-tight font-semibold ">
            Inventory
            <div className="relative">
              <span className="relative z-10">
                <span className="relative z-10">Management</span>{" "}
                <span className="w-full absolute h-[40%] bottom-4 left-0 z-0 bg-[#4169E1]"></span>
              </span>
            </div>
            Solutions.
          </h1>
          <p className="text-sm text-[#F5F5F5]/40 w-[550px]">
            At Hogg Anderson Business Solutions, we provide expert accounting
            services, inventory management systems, and implementation of
            accounting software to streamline your business operations. Our
            business advisory services offer strategic guidance to drive growth.
          </p>
          <Button
            rightSection={<IconArrowRight size={20} />}
            variant="gradient"
            // gradient={{ deg: 133, from: "pink", to: "black" }}
            size="xl"
            bg={"#4169E1"}
            radius="md"
            mt="xl"
            justify="space-between"
            w={250}
          >
            Get started
          </Button>
        </div> */}

      <HeroCarousel />
      {/* </main> */}

      <div className="w-full  flex md:flex-row flex-col space-y-8 py-12 md:py-24 md:px-16 text-black bg-[#F5F5F5] h-full rounded-b-3xl ">
        <div className="flex md:w-[30%] px-4 h-full flex-col gap-2 md:gap-6">
          <h1 className="text-4xl font-semibold ">
            High-impact <br /> Services
          </h1>
          <p className=" [#E1B6CA] text-sm font-light">
            We assist public and private company clients in reaching their
            objectives through audit, tax, advisory, risk and performance
            services.
          </p>

          <Link href={"/getInTouch"}>
            <Button
              rightSection={<IconArrowRight size={20} />}
              variant="gradient"
              bg={"#4169E1"}
              size="xl"
              radius="md"
              mt="md"
              justify="space-between"
              w={250}
              className="shadow-md"
            >
              Get in touch
            </Button>
          </Link>
        </div>

        <div className="md:w-[70%] flex flex-col md:gap-16 gap-8 items-center md:items-end h-full">
          <div className="flex md:flex-row flex-col gap-12">
            <ServicesCard
              img={"/financial-accuracy.png"}
              title={"Accounting Services"}
              imgWidth={`35%`}
              description={
                "Whether you’re launching a startup or running an established business, Hogg Anderson Business Solutions Limited offers comprehensive bookkeeping and payroll solutions tailored to your needs. We provide..."
              }
              link={"/Services/Accounting-Services"}
            />
            <ServicesCard
              img={"/cost-control.jpg"}
              title={"Inventory Management System"}
              imgWidth={`35%`}
              description={
                "Conduct regular physical inventory counts to ensure that your records match the actual stock levels."
              }
              link={"/Services/Inventory-Management-System"}
            />
          </div>

          <div className="flex  md:flex-row flex-col gap-12">
            <ServicesCard
              img={"/office.jpg"}
              title={"Sales Analytics"}
              imgWidth={"35%"}
              description={
                "Our sales analytics service aims to empower restaurants by providing actionable insights based on weekly sales data. By identifying top-selling items and underperforming products, we enable informed decision-making and strategic planning."
              }
              link={"/Services/Sales-Analytics"}
            />
            <ServicesCard
              img={"/person-office.jpg"}
              title={"Accounting System"}
              description={
                "Identifying and reconciling variances is crucial. We analyze discrepancies between actual and expected costs, providing actionable insights to improve efficiency."
              }
              link={"/Services/Accounting-System"}
            />
          </div>

          <div className="flex  md:flex-row flex-col gap-12">
            <ServicesCard
              img={"/startup-colleagues-reviewing.jpg"}
              title={"Business Advisory"}
              description={
                "Keep an eye on your inventory turnover ratio to identify slow-moving items and make informed decisions about reordering and promotions."
              }
              link={"/Services/Business-Advisory"}
            />
            <ServicesCard
              img={"/investor-confidence.jpg"}
              title={"Training"}
              description={
                "Our customized stock movement reports track inventory flow, highlight trends, and identify slow-moving items of food and beverages. This aids in inventory management and decision-making."
              }
              link={"/Services/Training"}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:px-4 md:mt-36 mb-20 md:mb-0 gap-6 md:gap-0 mt-16 flex md:flex-row flex-col">
        <Image
          alt=""
          src={"/aboutsection.jpg"}
          width={1000}
          height={150}
          className="md:w-[50%]  md:h-[60%] md:rounded-xl"
        />

        <div className="md:w-[50%] px-4 md:pl-28 flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl text-[#F5F5F5] font-bold">
            The story behind our company
          </h1>
          <p className="text-lg text-white/40 font-extralight">
            At Hogg Anderson Business Solutions Limited, we specialize in
            providing expert accounting and business solutions tailored to the
            unique needs of the hospitality industry. With a strong focus on
            cost accounting and inventory management, our goal is to help
            restaurants, lounges, and hotels streamline their financial
            processes, reduce waste, and enhance profitability. Led by a team of
            seasoned professionals, we bring a wealth of experience and a
            commitment to excellence in every service we offer. Let us be your
            trusted partner in optimizing your business for success.
          </p>
          <Link href={"/About"}>
            <button className="btn bg-[#4169E1] text-white">
              About our firm
            </button>
          </Link>
        </div>
      </div>

      <FeaturesTitle />

      <GetInTouch />

      <TestimonialCarousel />
    </div>
  );
}
