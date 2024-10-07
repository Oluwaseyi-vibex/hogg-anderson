import { poppins } from "@/utils/font/fonts";
import Image from "next/image";
import React from "react";

const NewAcademyPageDaisy = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-bg text-white`}>
      {/* Hero Section */}
      <section className="relative bg-[url('/project2.jpg')] bg-cover bg-center text-white h-[500px] flex flex-col justify-center items-center">
        <div className="bg-black/50 absolute inset-0"></div>
        {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            Hogg Anderson Accounting Software Academy
          </h1>
          <p className="text-lg mt-4">
            Your gateway to mastering top accounting tools and enhancing your
            career.
          </p>
          <button className="btn btn-ghost bg-blue border-none mt-8 text-white text-lg">
            Register Now
          </button>
        </div>
      </section>

      {/* About the Academy */}
      <div className="bg-white">
        <section className="pt-16 px-6 lg:px-20 text-[rgb(51,51,51)] bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:gap-10 lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">
                About Accounting Software Academy
              </h2>
              <p className="text-lg mb-6">
                Welcome to Hogg Anderson Accounting Software Solutions! We offer
                comprehensive training programs designed to equip accountants
                with the skills needed to excel in today’s competitive market.
                Our courses cover three of the most widely used accounting
                software: Sage Accounting, Tally, and QuickBooks.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Benefits of Attending Our Accounting Software Training{" "}
              </h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li className="font-bold">
                  Gain in-depth understanding of Sage Accounting, Tally, and
                  QuickBooks.
                </li>

                <li className="font-bold">
                  <p className="font-bold"> Flexible Learning Options:</p>{" "}
                  <ul className="list-disc font-normal">
                    <li>
                      Choose between online and on-site training to fit your
                      schedule.
                    </li>
                    <li>
                      Access course materials and resources at your convenience.
                    </li>
                  </ul>
                </li>

                <li className="font-bold">Certification.</li>
              </ol>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
              <Image
                width={1000}
                height={1000}
                src="/organic-flat-people-business-training-illustration.png"
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
        <Image
          src={"/wavedown.svg"}
          alt=""
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>

      {/* 50+ Course Topics */}

      {/* Feature Highlights Section */}
      {/* <section className="py-20 bg-[url('/wavedown.svg')] bg-cover bg-center bg-white">
        <h2 className="text-4xl font-bold  text-center text-[#2C2C2C] mb-12">
          Why Choose Our Academy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {[
            {
              title: "Expert Instructors",
              description:
                "Learn from industry professionals with years of experience.",
            },
            {
              title: "Hands-on Practice",
              description:
                "Gain real-world experience with practical exercises.",
            },
            {
              title: "Flexible Learning",
              description: "Access courses online and learn at your own pace.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card shadow-lg bg-[#444444] p-6 text-center"
            >
              <h3 className="text-2xl font-semibold text-orange">
                {feature.title}
              </h3>
              <p className="mt-4 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Courses Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-blue mb-12">
          What you will learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {[
            {
              title: "Sage Accounting Training",
              description:
                "Master Sage software to handle your business’s accounting needs with ease.",
              duration: "4 weeks",
              price: "25,000 naira only.",
            },
            {
              title: "Tally Training",
              description:
                "Get proficient in Tally ERP 9, including GST, inventory, and payroll management.",
              duration: "4 weeks",
            },
            {
              title: "QuickBooks Training",
              description:
                "Learn how to manage sales, expenses, and payroll with QuickBooks.",
              duration: "4 weeks",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="group card shadow-xl bg-[#444444] cursor-pointer p-6 hover:bg-blue transition-colors"
            >
              <h3 className="text-2xl text-white font-semibold">
                {course.title}
              </h3>
              <p className="mt-4 text-white">{course.description}</p>
              <p className="mt-4 text-white font-bold">
                Duration: {course.duration}
              </p>
              <p className="mt-4 text-white font-bold">
                Pricing: 25,000 naira only
              </p>

              <button className="btn mt-4 group-hover:bg-bg btn-ghost text-base bg-blue">
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="pb-16 bg-[url('/wave.svg')] bg-cover bg-center flex flex-col items-center justify-center bg-bg text-center">
        <h2 className="text-5xl  font-bold text-bg">Enroll Today!</h2>
        <p className="mt-4 font-semibold text-2xl">
          Start your journey with us and gain valuable skills in accounting
          software.
        </p>
        <p className=" my-3 text-orange w-[700px]">
          Take the next step in your accounting career with Hogg Anderson
          Accounting Software Solutions. Contact us at 08029514484 to enroll or
          learn more about our training programs.
        </p>
        <button className="btn btn-blue mt-8 text-white hover:bg-blue/90 bg-blue border-none text-lg">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default NewAcademyPageDaisy;
