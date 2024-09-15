"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { inter } from "@/utils/font/fonts";
import { ServicesCard } from "@/components";
import { FeaturesTitle } from "@/components/features";
import { Button } from "@mantine/core";
import { IconArrowRight, IconSignRight } from "@tabler/icons-react";
import GetInTouch from "@/components/contact";
import TestimonialCarousel from "@/components/testimonialCarousel";

export default function Home() {
  return (
    <div className={`${inter.className} px-20 mt-14`}>
      <main className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-3 w-fit">
          <p className="rounded-full shadow-md shadow-black/25 cursor-pointer font-semibold border-black border-2 w-fit bg-transparent py-1 px-8 text-xs text-black">
            Hogg Anderson Business Solutions Limited
          </p>
          <h1 className="text-[70px] text-black leading-tight font-semibold ">
            Inventory
            <div className="relative">
              <span className="relative z-10">
                <span className="relative z-10">Management</span>{" "}
                <span className="w-full absolute h-[40%] bottom-4 left-0 z-0 bg-[#E1B6CA]"></span>
              </span>
            </div>
            Solutions.
          </h1>
          <p className="text-sm text-black w-[500px]">
            A trusted accounting and business solutions firm specializing in
            inventory management outsourcing restaurants, lounge and hotel and
            others in hospitality industry. And extensive expertise to optimize
            your financial processes and enhance profitability.
          </p>
          <Button
            rightSection={<IconArrowRight size={20} />}
            variant="gradient"
            gradient={{ deg: 133, from: "pink", to: "black" }}
            size="xl"
            radius="md"
            mt="xl"
            justify="space-between"
            w={250}
          >
            Get started
          </Button>
        </div>

        <div className="flex w-full gap-3 items-center justify-end">
          <Image
            src="/hero3.jpg"
            alt=""
            width={1000}
            height={1000}
            className="w-[85%] rounded-xl"
          />
          {/* <div className="flex flex-col gap-2">
            <div
              style={{
                backgroundImage: `url(/financial-accuracy.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="group w-[300px]  border-2 border-black rounded-3xl text-white transition-all ease-in duration-300 flex flex-col justify-end text-3xl font-bold p-5 h-[200px]"
            >
              <div className="w-full group-hover:opacity-65 group-hover:rounded-md group-hover:h-[100px] transition-all ease-in duration-300 relative top-0 z-0 group-hover:bg-black">
                <h1 className="relative z-10">
                  Financial <br /> Accuracy
                </h1>
                <p className="group-hover:flex relative z-10 transition-all ease-in  text-xs text-white font-medium hidden">
                  Ensuring your financial statements reflect the true value of
                  your inventory.
                </p>
              </div>
            </div>

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

      <div className="w-full flex py-32 px-16 bg-black h-full rounded-b-3xl mt-24">
        <div className="flex w-[30%] h-full flex-col gap-6">
          <h1 className="text-4xl font-semibold text-white">
            High-impact <br /> Services
          </h1>
          <p className="text-white [#E1B6CA] text-sm font-light">
            We assist public and private company clients in reaching their
            objectives through audit, tax, advisory, risk and performance
            services.
          </p>
          <Button
            rightSection={<IconArrowRight size={20} />}
            variant="gradient"
            gradient={{ deg: 133, from: "pink", to: "black" }}
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
          <div className="flex gap-8">
            <ServicesCard
              img={"/invoice2.png"}
              title={"Supplier Invoices Management"}
              imgWidth={`35%`}
              description={
                "We meticulously handle supplier invoices, ensuring accuracy, proper recording, and timely reconciliation. Our process streamlines payables and minimizes errors."
              }
            />
            <ServicesCard
              img={"/file.png"}
              title={"Regular Audits"}
              imgWidth={`35%`}
              description={
                "Conduct regular physical inventory counts to ensure that your records match the actual stock levels."
              }
            />
          </div>

          <div className="flex gap-8">
            <ServicesCard
              img={"/inventory.png"}
              title={"Inventory Valuation at Month-End"}
              imgWidth={"35%"}
              description={
                "Our team expertly values closing inventory using industry-standard methods (e.g., weighted average, FIFO). This ensures precise financial reporting and compliance with accounting standards."
              }
            />
            <ServicesCard
              img={"/analysis.png"}
              title={"Variance Analysis and Reconciliation"}
              description={
                "Identifying and reconciling variances is crucial. We analyze discrepancies between actual and expected costs, providing actionable insights to improve efficiency."
              }
            />
          </div>

          <div className="flex gap-8">
            <ServicesCard
              img={"/monitoring.png"}
              title={"Monitoring of Inventory Turnover"}
              description={
                "Keep an eye on your inventory turnover ratio to identify slow-moving items and make informed decisions about reordering and promotions."
              }
            />
            <ServicesCard
              img={"/Stock_market-removebg-preview.png"}
              title={"Stock Movement Reports"}
              description={
                "Our customized stock movement reports track inventory flow, highlight trends, and identify slow-moving items of food and beverages. This aids in inventory management and decision-making."
              }
            />
          </div>

          <div className="flex items-baseline gap-8">
            <ServicesCard
              img={"/training-removebg-preview.png"}
              title={"Training Staff"}
              description={
                "Ensure that your staff is well-trained in inventory management procedures to maintain accuracy and efficiency."
              }
            />
            <ServicesCard
              img={"/foodmetrics.png"}
              title={"Key Performance Metrics for Food and Beverages"}
              description={
                "We compute essential metrics, including: Food Cost Percentage, Beverage Cost Percentage, Cost of Sales."
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full  mt-36 flex">
        <Image
          src={"/aboutsection.jpg"}
          width={1000}
          height={1000}
          className="w-[60%] rounded-xl"
        />

        <div className="w-[50%] pl-28 flex flex-col gap-10">
          <h1 className="text-4xl text-black font-bold">
            The story behind our company
          </h1>
          <p className="text-lg text-black/40 font-extralight">
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
          <button className="btn text-white">About our firm</button>
        </div>
      </div>

      <FeaturesTitle />

      <GetInTouch />

      <TestimonialCarousel />
    </div>
  );
}
