"use client";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          className="btn btn-circle btn-ghost"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Header Section */}
      <header className="bg-primary text-primary-content py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hogg Anderson Business Solutions
          </h1>
          <p className="mt-3 text-lg md:text-xl opacity-90">
            Your Trusted Financial Partner for SMEs in Nigeria
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hoggandersonbiz@gmail.com"
              className="btn btn-secondary btn-md"
            >
              Email Us
            </a>
            <a
              href="tel:+2348029514484"
              className="btn btn-outline btn-accent btn-md"
            >
              Call: +234 8029514484
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-base-content">
            Empowering Your Business Growth
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-base-content/80">
            With over 15 years of experience as a Chartered Accountant, Hogg
            Anderson Business Solutions provides tailored financial services to
            help Nigerian SMEs thrive. From bookkeeping to tax consulting, we
            ensure compliance, efficiency, and success.
          </p>
          <Link href="#contact">
            <button className="btn btn-primary btn-lg">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-base-content">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl text-base-content">
                  Bookkeeping Outsourcing
                </h3>
                <p className="text-base-content/80">
                  Accurate financial records with income/expense tracking, bank
                  reconciliations, and financial statements.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl text-base-content">
                  Management Reporting
                </h3>
                <p className="text-base-content/80">
                  Data-driven insights with monthly/quarterly reports, cash flow
                  analysis, and budgeting.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl text-base-content">
                  Payroll Processing
                </h3>
                <p className="text-base-content/80">
                  Efficient payroll management with statutory deductions,
                  payslip generation, and compliance.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl text-base-content">
                  Tax Consulting
                </h3>
                <p className="text-base-content/80">
                  Expert tax planning, VAT/corporate tax filing, and audit
                  representation to optimize outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-base-content">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl text-base-content">
                  Starter Package
                </h3>
                <p className="text-2xl font-bold text-primary">
                  ₦75,000 - ₦180,000/mo
                </p>
                <p className="text-base-content/80">
                  Ideal for startups and small businesses.
                </p>
                <ul className="list-disc list-inside mt-4 text-base-content/80">
                  <li>Basic Bookkeeping</li>
                  <li>Monthly Bank Reconciliation</li>
                  <li>Payroll (Up to 5 Employees)</li>
                  <li>Tax Filing (VAT & PAYE)</li>
                  <li>Essential Reports</li>
                </ul>
                <button className="btn btn-primary mt-4">Choose Plan</button>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl text-base-content">
                  Growth Package
                </h3>
                <p className="text-2xl font-bold text-primary">
                  ₦180,000 - ₦400,000/mo
                </p>
                <p className="text-base-content/80">
                  Perfect for scaling SMEs.
                </p>
                <ul className="list-disc list-inside mt-4 text-base-content/80">
                  <li>Advanced Bookkeeping</li>
                  <li>Payroll (Up to 20 Employees)</li>
                  <li>Monthly/Quarterly Reports</li>
                  <li>Budgeting & Forecasting</li>
                  <li>Tax Compliance Advisory</li>
                </ul>
                <button className="btn btn-primary mt-4">Choose Plan</button>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl text-base-content">
                  Premium Package
                </h3>
                <p className="text-2xl font-bold text-primary">
                  ₦400,000 - ₦850,000/mo
                </p>
                <p className="text-base-content/80">
                  For established businesses.
                </p>
                <ul className="list-disc list-inside mt-4 text-base-content/80">
                  <li>Comprehensive Financial Management</li>
                  <li>Unlimited Payroll</li>
                  <li>Advanced Reporting (KPIs)</li>
                  <li>Tax Optimization & Audit Support</li>
                  <li>CFO-Level Advisory</li>
                </ul>
                <button className="btn btn-primary mt-4">Choose Plan</button>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-base-content">
            Custom & À la Carte Services available.{" "}
            <Link href="#contact" className="link link-primary">
              Contact us
            </Link>{" "}
            for tailored pricing.
          </p>
        </div>
      </section>

      {/* Contact hypogrok.comSection */}
      <section id="contact" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-base-content">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-base-content">
                Contact Information
              </h3>
              <p className="text-base-content/80">
                <strong>Email:</strong> hoggandersonbiz@gmail.com
              </p>
              <p className="text-base-content/80">
                <strong>Phone:</strong> +234 8029514484
              </p>
              <p className="text-base-content/80">
                <strong>Address:</strong> 11 Ogundairo Street, Oworonsoki,
                Lagos, Nigeria
              </p>
              <p className="mt-4 text-base-content/80">
                Let’s discuss how we can support your business growth. Schedule
                a consultation today!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-base-content">
                Send Us a Message
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-content">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered bg-base-100 text-base-content placeholder-base-content/50"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-content">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-base-100 text-base-content placeholder-base-content/50"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-content">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered bg-base-100 text-base-content placeholder-base-content/50"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="btn btn-primary mt-4">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-primary-content py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2025 Hogg Anderson Business Solutions Limited. All rights
            reserved.
          </p>
          <p className="mt-2">
            Founded by KODGLEYIRI, Lawal Mohammed (Bsc. Accounting, ACA, AAT,
            Edp (Unilag))
          </p>
        </div>
      </footer>
    </>
  );
}
