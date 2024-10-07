import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const DataEntryAcademyPage = () => {
  const softwareList1 = [
    "Microsoft Excel",
    "Microsoft Word",
    "Google tools",
    "Invoicing tools",
    "Inventory management tools",
    "Cloud storage tools",
    "Recording tools",
    "Online meeting tools",
    "Retail management tools",
    "Artificial intelligence tools",
    "Project Management tools",
    "Bookkeeping tools",
  ];

  const softwareList2 = [
    "Expense-tracking tools",
    "Note taking tools",
    "Email writing tools",
    "Order management tools",
    "Checklist tools",
    "Classroom tools",
    "Presentation tools",
    "Design tools",
    "CRM tools",
    "And more...",
  ];
  return (
    <div className="bg-gray-100 w-full">
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
          <button className="btn btn-ghost bg-orange border-none mt-8 px-8 text-white text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* About the Academy */}
      <section className="pt-16 px-6 lg:px-20 text-[#333333] bg-white">
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

      {/* 50+ Course Topics */}
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
      <section className="py-16 px-6 lg:px-20 text-[#333333] bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#4169e1] font-semibold text-center mb-10">
            Here are over 50 Course Topics you will learn
          </h2>
          <p className="text-center text-lg mb-10">
            Covering a wide range of practical skills and tools, you’ll be
            equipped to succeed in any workplace!
          </p>

          <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ul className="space-y-3">
              <li>1. Overview of Data Entry, Importance & Application</li>
              <li>
                2. Overview of popular Data Entry software (Hands-on practical)
              </li>
              <li>3. Real world Data Entry projects</li>
              <li>4. Data Security & Privacy</li>
              <li>5. Cloud storage solution, documents & tools</li>
              <li>6. The basics of Microsoft Excel and Google Sheets</li>
              <li>7. The basics of Microsoft Word and Google Docs</li>
              <li>8. Database creation, data cleaning and validation</li>
              <li>9. Using electronic forms to collect data</li>
              <li>10. Converting various document types</li>
              <li>11. Filing Hard and Soft documents</li>
              <li>12. Tools to get started with Data Entry Hustle</li>
              <li>13. Scheduling and Managing virtual meetings</li>
              <li>14. Workplace Ethics</li>
              <li>15. Customer & People Relationship Management</li>
              <li>16. Billing and Negotiation for Data-Entry Jobs</li>
              <li>17. Data Entry using Spreadsheets</li>
              <li>18. Handling a Project with Project Management Skills</li>
              <li>19. Tracking Sales in retail businesses</li>
              <li>20. Becoming a highly-sought data-entry expert</li>
              <li>
                21. Basic Business Maths – Making simple business calculations
              </li>
              <li>22. Simple Payroll Management</li>
              <li>23. Inventory Management and Stocktaking</li>
              <li>24. Managing and tracking raw materials of a business</li>
            </ul>

            <ul className="space-y-3">
              <li>25. Creating and Tracking Budgets</li>
              <li>26. Performing various reconciliations</li>
              <li>27. Recordkeeping for small businesses with no accountant</li>
              <li>28. Scaling your Data Entry Business</li>
              <li>29. Roadmap to making 1 million Naira in 6 months</li>
              <li>30. Link Shortening and Whatsapp Links Bonus Session</li>
              <li>31. 22 Strategies to market your skills</li>
              <li>32. Weekly, Monthly or Job Reporting</li>
              <li>33. Record your Voice and Screen Training</li>
              <li>34. How to perform online research</li>
              <li>35. Improving your typing speed</li>
              <li>36. Building Recordkeeping Templates</li>
              <li>37. LinkedIn Optimization, Client Acquisition</li>
              <li>38. Basic Bookkeeping in accounting software (Quickbooks)</li>
              <li>39. Executing Copy and Paste Data-entry Jobs</li>
              <li>40. 26 Google tools for the workplace</li>
              <li>41. 30+ Ideas and Opportunities from digital skills</li>
              <li>
                42. Managing product-based businesses on E-commerce platforms
              </li>{" "}
              <li>43. Calendar (Tasks and Events) Management</li>
              <li>44. Writing Simple Small Business Proposals</li>
              <li>45. Recordkeeping for Niches – POS Businesses</li>
              <li>46. Recordkeeping for Niches – Schools</li>
            </ul>

            <ul className="space-y-3">
              <li>47. Recordkeeping for Niches – Residential estates</li>
              <li>
                48. Recordkeeping for Niches – Associations and Co-operatives
              </li>
              <li>
                49. Recordkeeping for Niches – Boutiques and Thrift businesses
              </li>
              <li>50. Recordkeeping for Niches – Hospitals and Clinics</li>
              <li>51. Designing Slides for Presentations</li>
              <li>52. Designing Official Letter Templates</li>
              <li>53. Building a one-page website in 30 minutes</li>
              <li>
                54. Data Entry for E-commerce (Product Listings, Inventory,
                Orders)
              </li>
              <li>
                55. Medical Data Entry (Handling Medical Records, HIPAA
                Compliance)
              </li>
              <li>
                56. Legal Data Entry (Managing Legal Documents, Confidentiality)
              </li>
              <li>
                57. Data Entry for Market Research (Survey Data Entry,
                Reporting)
              </li>
              <li>
                58. Data Entry for Real Estate (Property Listings, Client
                Management)
              </li>
              <li>59. Data Entry for Education (Student Records, Reporting)</li>
              <li>
                60. Data Entry for Nonprofits (Donor Management, Event Data
                Entry)
              </li>
              <li>
                61. Data Entry for Government Agencies (Public Records
                Management)
              </li>
              <li>
                62. Data Entry for Financial Services (Transaction Data Entry)
              </li>
              <li>
                63. Data Entry for Human Resources (Employee Records, Payroll)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <div>
        <Image
          src={"/wavedown.svg"}
          alt=""
          width={1000}
          height={1000}
          className="w-full"
        />
        <section className=" px-6 text-[#333333] lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#4169e1] font-semibold text-center mb-10">
              What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Workplace Software
                </h3>
                <ul className=" space-y-2">
                  {softwareList1.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 ">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="w-[3%]"
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Workplace Skills
                </h3>
                <ul className="space-y-2">
                  {softwareList2.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 ">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="w-[3%]"
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="py-16 my-11 bg-bg text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
        <p className="text-lg mb-6">
          Take the next step to enhance your career and grow your digital
          skills.
        </p>
        <a
          href="https://accountinghub.ng/paydataentryacademy"
          className="inline-block px-8 py-3 bg-blue text-blue-600 font-semibold rounded-lg hover:bg-gray-100"
        >
          Join the Academy
        </a>
      </section>
    </div>
  );
};

export default DataEntryAcademyPage;
