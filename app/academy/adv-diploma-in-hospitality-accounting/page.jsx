import React from "react";

const AdvancedDiplomaCoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-[url('/hospitalityaccounting.jpg')] bg-cover bg-no-repeat bg-center text-white h-[500px] px-4 flex flex-col justify-center items-center">
        <div className="bg-black/50 absolute inset-0"></div>
        {/* Dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            Advanced Diploma in Hospitality Accounting
          </h1>
          <p className="text-xl mt-4">
            Gain advanced knowledge in hospitality accounting with a focus on
            real-world applications, budgeting, tax compliance, and financial
            reporting.{" "}
          </p>
          <button className="btn btn-ghost bg-blue border-none mt-8 px-8 text-white text-lg">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 bg-bg px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-12">
          What You’ll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Topic 1 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Introduction to Hospitality Accounting
            </h3>
            <p className="mt-4">
              Learn the industry-specific challenges and analyze real-world case
              studies on revenue recognition and expense management.
            </p>
          </div>
          {/* Topic 2 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Food & Beverages Costing
            </h3>
            <p className="mt-4">
              Understand how to manage F&B inventory, post invoices, and compute
              the cost of goods sold (COGS) and key performance indicators
              (KPIs).
            </p>
          </div>
          {/* Topic 3 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Payroll Accounting
            </h3>
            <p className="mt-4">
              Learn to compute payroll schedules, PAYE, allowances, and pension
              deductions. File payroll taxes on LIRS portal, and account for
              salary expenses.
            </p>
          </div>
          {/* Topic 4 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Revenue Management & Room KPIs
            </h3>
            <p className="mt-4">
              Master revenue management strategies for hotels. Track ADR,
              occupancy ratios, RevPAR, and generate daily reports to monitor
              performance.
            </p>
          </div>
          {/* Topic 5 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Annual Budget Preparation
            </h3>
            <p className="mt-4">
              Learn how to prepare detailed revenue, expense, profit, and
              capital budgets for restaurants and hotels.
            </p>
          </div>
          {/* Topic 6 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Tax Computation & Filing
            </h3>
            <p className="mt-4">
              Compute taxes like VAT, service charge, and consumption tax. File
              taxes efficiently to avoid penalties.
            </p>
          </div>
          {/* Topic 7 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Fixed Asset Management
            </h3>
            <p className="mt-4">
              Understand how to manage fixed assets, depreciation, and
              impairments in the hospitality industry.
            </p>
          </div>
          {/* Topic 8 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Period-End Closings
            </h3>
            <p className="mt-4">
              Perform period-end closings, including bank and account
              reconciliations, depreciation entries, and inventory adjustments.
            </p>
          </div>
          {/* Topic 9 */}
          <div className="card bg-blue p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-500">
              Financial Reporting (USALI Compliant)
            </h3>
            <p className="mt-4">
              Learn to prepare USALI-compliant financial reports like balance
              sheets, income statements, and statements of cash flow.
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

export default AdvancedDiplomaCoursePage;
