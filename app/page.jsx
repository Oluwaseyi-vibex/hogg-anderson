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

export default function Home() {
  return (
    <div className={`${poppins.className} w-full px-20 mt-14`}>
      <main className="flex w-full items-start  justify-end">
        <div className="flex flex-col gap-3 w-full">
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
            A trusted accounting and business solutions firm specializing in
            inventory management outsourcing restaurants, lounge and hotel and
            others in hospitality industry. And extensive expertise to optimize
            your financial processes and enhance profitability.
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
        </div>

        <div className="flex w-full  items-center justify-center ">
          <Image
            src="/hero.png"
            alt=""
            width={1000}
            height={800}
            className="w-[70%]"
          />
          {/* <div className="flex flex-col gap-2">
            

            <div
              style={{
                backgroundImage: `url(/cost-control.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-[300px] border-2 border-black rounded-3xl text-black  flex flex-col justify-end text-3xl font-bold p-5 h-[200px]"
            >
              Cost <br /> Control
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div
              style={{
                backgroundImage: `url(/Tax2.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
              }}
              className="w-[300px] border-2 border-black rounded-3xl text-white  flex flex-col justify-end text-3xl font-bold p-5 h-[175px]"
            >
              Tax <br /> Compliance
            </div>

            <div className="w-[300px] border-2 bg-black border-black rounded-3xl text-white  flex flex-col justify-end text-3xl font-bold p-5 h-[175px]">
              Business <br /> Planning
            </div>

            <div
              style={{
                backgroundImage: `url(/investor-confidence.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-[300px] border-2  border-black rounded-3xl text-white  flex flex-col justify-end text-3xl font-bold p-5 h-[175px]"
            >
              Investor <br /> Confidence
            </div>
          </div> */}
        </div>
      </main>

      <div className="w-full flex py-32 px-16 text-black bg-[#F5F5F5] h-full rounded-b-3xl mt-24">
        <div className="flex w-[30%] h-full flex-col gap-6">
          <h1 className="text-4xl font-semibold ">
            High-impact <br /> Services
          </h1>
          <p className=" [#E1B6CA] text-sm font-light">
            We assist public and private company clients in reaching their
            objectives through audit, tax, advisory, risk and performance
            services.
          </p>
          <Button
            rightSection={<IconArrowRight size={20} />}
            variant="gradient"
            bg={"#4169E1"}
            size="xl"
            radius="md"
            mt="xl"
            justify="space-between"
            w={250}
          >
            Get in touch
          </Button>
        </div>

        <div className="w-[70%] flex flex-col gap-16 items-end h-full">
          <div className="flex gap-12">
            <ServicesCard
              img={"/financial-accuracy.png"}
              title={"Accounting Services"}
              imgWidth={`35%`}
              description={
                "Whether you’re launching a startup or running an established business, Hogg Anderson Business Solutions Limited offers comprehensive bookkeeping and payroll solutions tailored to your needs. We provide..."
              }
            />
            <ServicesCard
              img={"/cost-control.jpg"}
              title={"Inventory Management System"}
              imgWidth={`35%`}
              description={
                "Conduct regular physical inventory counts to ensure that your records match the actual stock levels."
              }
            />
          </div>

          <div className="flex gap-12">
            <ServicesCard
              img={"/office.jpg"}
              title={"Sales Analytics"}
              imgWidth={"35%"}
              description={
                "Our team expertly values closing inventory using industry-standard methods (e.g., weighted average, FIFO). This ensures precise financial reporting and compliance with accounting standards."
              }
            />
            <ServicesCard
              img={"/person-office.jpg"}
              title={"Accounting System"}
              description={
                "Identifying and reconciling variances is crucial. We analyze discrepancies between actual and expected costs, providing actionable insights to improve efficiency."
              }
            />
          </div>

          <div className="flex gap-12">
            <ServicesCard
              img={"/startup-colleagues-reviewing.jpg"}
              title={"Business Advisory"}
              description={
                "Keep an eye on your inventory turnover ratio to identify slow-moving items and make informed decisions about reordering and promotions."
              }
            />
            <ServicesCard
              img={"/investor-confidence.jpg"}
              title={"Training"}
              description={
                "Our customized stock movement reports track inventory flow, highlight trends, and identify slow-moving items of food and beverages. This aids in inventory management and decision-making."
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full  mt-36 flex">
        <Image
          alt=""
          src={"/aboutsection.jpg"}
          width={400}
          height={150}
          className="w-[20%] h-[60%] rounded-xl"
        />

        <div className="w-[50%] pl-28 flex flex-col gap-10">
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
          <button className="btn bg-[#4169E1] text-white">
            About our firm
          </button>
        </div>
      </div>

      <FeaturesTitle />

      <GetInTouch />

      <TestimonialCarousel />
    </div>
  );
}
