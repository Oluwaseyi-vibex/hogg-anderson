import React from "react";

const Pricing = () => {
  return (
    <div className="bg-[#333333] bg-contain border-none bg-no-repeat py-16 text-white">
      <h2 className="md:text-5xl text-3xl font-bold text-center text-blue-400 mb-12">
        Our Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
        {/* Starter Package */}
        <div className="card bg-blue p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-orange-500">
            Starter Package
          </h3>
          <p className="mt-4 text-lg">
            Ideal for early-stage SMEs and startups needing basic financial
            management.
          </p>
          <p className="mt-8 text-4xl font-bold">₦75,000 - ₦180,000</p>
          <p className="mt-2 text-sm text-gray-300">Per month</p>
          <ul className="mt-6 list-disc list-inside space-y-2 text-lg">
            <li>Basic Bookkeeping</li>
            <li>Monthly Bank Reconciliation</li>
            <li>Payroll (Up to 5 Employees)</li>
            <li>Tax Filing (VAT & PAYE)</li>
            <li>Essential Monthly Reports</li>
          </ul>
          <a target="_blank" href="https://wa.link/54pg2j">
            <button className="btn btn-primary text-white mt-8 w-full py-3 text-lg">
              Get Started
            </button>
          </a>
        </div>

        {/* Growth Package */}
        <div className="card bg-blue p-8 rounded-lg shadow-lg border-4 border-blue-400">
          <h3 className="text-3xl font-semibold text-blue-400">
            Growth Package
          </h3>
          <p className="mt-4 text-lg">
            Perfect for scaling SMEs requiring structured financial oversight.
          </p>
          <p className="mt-8 text-4xl font-bold">₦180,000 - ₦400,000</p>
          <p className="mt-2 text-sm text-gray-300">Per month</p>
          <ul className="mt-6 list-disc list-inside space-y-2 text-lg">
            <li>Advanced Bookkeeping</li>
            <li>Payroll (Up to 20 Employees)</li>
            <li>Monthly & Quarterly Reports</li>
            <li>Budgeting & Forecasting</li>
            <li>Tax Compliance Advisory</li>
          </ul>
          <a target="_blank" href="https://wa.link/54pg2j">
            <button className="btn btn-primary text-white mt-8 w-full py-3 text-lg">
              Get Started
            </button>
          </a>
        </div>

        {/* Premium Package */}
        <div className="card bg-blue p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-orange-500">
            Premium Package
          </h3>
          <p className="mt-4 text-lg">
            For established businesses seeking financial optimization and
            strategic insights.
          </p>
          <p className="mt-8 text-4xl font-bold">₦400,000 - ₦850,000</p>
          <p className="mt-2 text-sm text-gray-300">Per month</p>
          <ul className="mt-6 list-disc list-inside space-y-2 text-lg">
            <li>Comprehensive Financial Management</li>
            <li>Unlimited Payroll</li>
            <li>Advanced Reporting (KPIs)</li>
            <li>Tax Optimization & Audit Support</li>
            <li>CFO-Level Advisory</li>
          </ul>

          <a target="_blank" href="https://wa.link/54pg2j">
            <button className="btn btn-primary text-white mt-8 w-full py-3 text-lg">
              Get Started
            </button>
          </a>
        </div>
      </div>
      <p className="text-center mt-12 text-lg text-gray-300">
        Custom & À la Carte Services available. Contact us for tailored pricing.
      </p>
    </div>
  );
};

export default Pricing;
