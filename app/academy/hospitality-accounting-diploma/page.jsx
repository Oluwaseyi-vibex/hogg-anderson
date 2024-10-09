import { poppins } from "@/utils/font/fonts";
import Image from "next/image";
import React from "react";

const HospitalityAccountingPage = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-bg text-white`}>
      {/* Hero Section */}
      <section className="relative bg-[url('/hospitalityaccounting.jpg')] bg-cover bg-no-repeat bg-center text-white h-[500px] flex flex-col justify-center items-center">
        <div className="bg-black/50 absolute inset-0"></div>
        {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            Diploma in Hospitality Accounting
          </h1>
          <p className="text-xl mt-4">
            Specialized training designed to empower accountants and account
            officers with practical skills tailored to the hospitality industry.
          </p>
          <button className="btn btn-ghost bg-blue border-none mt-8 px-8 text-white text-lg">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Executive Summary */}
      <div className="bg-white">
        <section className="pt-16 px-6 lg:px-20 text-[rgb(51,51,51)] bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:gap-10 lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">
                About Hospitality Accounting
              </h2>
              <p className="text-lg mb-6">
                {" "}
                Hogg Anderson Hospitality Accounting Academy (HAHAI) bridges the
                gap between theoretical knowledge and practical skills for
                aspiring accountants and account officers in the hospitality
                sector. By providing specialized training, we empower
                professionals to excel in financial management, compliance, and
                reporting within the unique context of the hospitality industry.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Program Objectives
              </h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li className="font-bold">
                  Develop a solid foundation in accounting principles.
                </li>

                <li className="font-bold">
                  Understand financial statements, ledgers, and journals.
                </li>

                <li className="font-bold">
                  Explore hospitality-specific revenue recognition & management.
                </li>

                <li className="font-bold">
                  Learn cost allocation methods relevant to hotels, restaurants,
                  and event venues.
                </li>

                <li className="font-bold">
                  Improve profitability and operational efficiency through
                  better budgeting and control.
                </li>
                <li className="font-bold">
                  Navigate tax regulations, payroll accounting, and internal
                  controls.
                </li>
              </ol>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
              <Image
                width={1000}
                height={1000}
                src="/ha.jpg"
                alt="Data Entry Skills"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <Image
          src={"/wave.svg"}
          alt=""
          width={1000}
          height={1000}
          className="w-full"
        />
        {/* <Image
          src={"/wavedown.svg"}
          alt=""
          width={1000}
          height={1000}
          className="w-full"
        /> */}
      </div>

      {/* Key Course Topics */}
      <section className="py-16 bg-bg px-8">
        <h2 className="text-4xl font-bold text-center text-blue mb-12">
          Key Course Topics
        </h2>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 px-12 gap-8">
          {/* Topic 1 */}
          <div className="card w-[600px]  bg-[#444444] p-8">
            <h3 className="text-2xl text-orange font-semibold">
              Financial Accounting Fundamentals
            </h3>
            <p className="mt-4">
              Learn the foundations of accounting, accrual concepts, and
              understand financial statements, ledgers, and journals.
            </p>
          </div>
          {/* Topic 2 */}
          <div className="card w-[600px]  bg-[#444444] p-8">
            <h3 className="text-2xl text-orange font-semibold">
              Management of Accounts Payable
            </h3>
            <p className="mt-4">
              Master invoice processing, vendor management, internal controls,
              and compliance.
            </p>
          </div>
          {/* Topic 3 */}
          <div className="card w-[600px]  bg-[#444444] p-8">
            <h3 className="text-2xl text-orange font-semibold">
              Management of Accounts Receivable
            </h3>
            <p className="mt-4">
              Learn credit policies, collections, bad debt estimation, and
              internal controls for accounts receivable.
            </p>
          </div>
          {/* Topic 4 */}
          <div className="card w-[600px]  bg-[#444444] p-8">
            <h3 className="text-2xl text-orange font-semibold">
              Inventory Management
            </h3>
            <p className="mt-4">
              Explore inventory costing methods (FIFO, LIFO, weighted average),
              inventory control techniques, and inventory audits.
            </p>
          </div>
          {/* Topic 5 */}
          <div className="card w-[600px]  bg-[#444444] p-8">
            <h3 className="text-2xl text-orange font-semibold">
              General Ledger and Financial Reporting
            </h3>
            <p className="mt-4">
              Understand nominal accounts, prepare financial statements, and
              learn reconciliations for accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Method and Certification */}
      <section className="py-24 bg-bg bg-[url('/wavedown.svg')] bg-cover bg-center px-8">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Delivery Method & Certification
        </h2>
        <p className="max-w-4xl mx-auto font-light text-lg">
          Our blended learning approach includes in-person workshops, online
          modules, and industry visits, ensuring a flexible yet comprehensive
          learning experience. Participants will be assessed through
          assignments, quizzes, and a final project. Upon completion,
          participants will receive a certificate in Hospitality Industry
          Accounting.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-bg px-8">
        <h2 className="text-5xl font-bold text-center text-blue-400 mb-12">
          Pricing
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card bg-blue  p-6 text-center rounded-lg shadow-lg">
            <h3 className="text-3xl text-white font-semibold text-orange-500">
              Certificate Program
            </h3>
            <p className="mt-4 text-lg">
              Our introductory program in Hospitality Accounting.
            </p>
            <p className="mt-8 text-5xl text-bg font-bold">$50</p>
            <p className="mt-2 text-sm text-bg">One-time payment</p>
            <ul className="mt-6 list-disc text-white list-inside space-y-2 text-lg">
              <li>4-week access</li>
              <li>Basic accounting modules</li>
              <li>Email support</li>
              <li>Certificate upon completion</li>
            </ul>
            <button className="btn btn-ghost bg-bg mt-8 w-full text-white text-lg">
              Get Started
            </button>
          </div>

          <div className="card bg-blue p-6 text-center rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-white">
              Advanced Diploma
            </h3>
            <p className="mt-4 text-lg">
              Advanced program for professionals seeking comprehensive
              knowledge.
            </p>
            <p className="mt-8 text-5xl font-bold">$55</p>
            <p className="mt-2 text-sm text-bg">One-time payment</p>
            <ul className="mt-6 list-disc list-inside space-y-2 text-lg">
              <li>6-week access</li>
              <li>Advanced accounting modules</li>
              <li>Priority support</li>
              <li>Diploma upon completion</li>
            </ul>
            <button className="btn btn-ghost bg-bg mt-8 w-full py-3 text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalityAccountingPage;
