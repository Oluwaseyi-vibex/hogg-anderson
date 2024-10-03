import Image from "next/image";
import React from "react";

const DataEntryAcademyPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-[url('/data-entry-academy.jpg')] bg-cover bg-center text-white h-[500px] flex flex-col justify-center items-center">
        <div className="bg-black/50 absolute inset-0"></div>
        {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            LEARN DIGITAL SKILLS FOR THE WORKPLACE
          </h1>
          <p className="text-lg mt-4">
            Start a Hustle, Find a Job, Freelance Your Skills, Grow Your
            Business
          </p>
          <a
            href="https://accountinghub.ng/paydataentryacademy"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg"
          >
            Register Here
          </a>
        </div>
      </section>

      {/* About the Academy */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">
              About Data Entry Academy
            </h2>
            <p className="text-lg mb-6">
              Data-Entry Academy is a 30-day online school that teaches the
              software and skills needed for any workplace. Whether you&apos;re
              looking to improve your business, freelance, or grow your career,
              this academy covers essential tools like Microsoft, Google,
              Bookkeeping, Cloud storage, and Project Management, plus various
              workplace skills.
            </p>
            <h3 className="text-2xl font-semibold mb-4">
              Who is the academy for?
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Freelancers – Earn money providing digital services</li>
              <li>
                Business Owners – Automate and organize business processes
              </li>
              <li>Full-time Employees – Perform better in the workplace</li>
              <li>Job Seekers and Students – Become more employable</li>
              <li>
                People Looking to Upskill – Stay relevant in today&apos;s world
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <Image
              width={1000}
              height={1000}
              src="/data-entry-skills.jpg"
              alt="Data Entry Skills"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Course Topics */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Course Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ul className="space-y-3">
              <li>Data Entry Importance & Applications</li>
              <li>Overview of Popular Data Entry Software</li>
              <li>Real-World Data Entry Projects</li>
              <li>Data Security & Privacy</li>
              <li>Microsoft Excel, Word, and Google Tools</li>
              <li>Database Creation, Cleaning, and Validation</li>
              <li>Using Electronic Forms for Data Collection</li>
            </ul>
            <ul className="space-y-3">
              <li>Customer & People Relationship Management</li>
              <li>Handling a Project with Project Management Skills</li>
              <li>Basic Business Math & Simple Payroll Management</li>
              <li>Inventory Management and Stocktaking</li>
              <li>Creating and Tracking Budgets</li>
              <li>Performing Reconciliations</li>
              <li>Scaling Your Data Entry Business</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What You&apos;ll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Workplace Software
              </h3>
              <ul className="space-y-2">
                <li>Microsoft Excel and Word</li>
                <li>Google Sheets and Docs</li>
                <li>Project Management Tools</li>
                <li>Cloud Storage Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Workplace Skills</h3>
              <ul className="space-y-2">
                <li>Billing and Negotiation</li>
                <li>Customer Management</li>
                <li>Scheduling and Managing Virtual Meetings</li>
                <li>Simple Payroll Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
        <p className="text-lg mb-6">
          Take the next step to enhance your career and grow your digital
          skills.
        </p>
        <a
          href="https://accountinghub.ng/paydataentryacademy"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100"
        >
          Join the Academy
        </a>
      </section>
    </div>
  );
};

export default DataEntryAcademyPage;
