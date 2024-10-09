import React from "react";

const Pricing = () => {
  return (
    <div className="bg-gray-800 bg-[url('/wavedown.svg')] bg-contain border-none bg-no-repeat  py-16 text-white">
      <h2 className="text-5xl font-bold text-center text-blue-400 mb-12">
        Our Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
        {/* Basic Plan */}
        <div className="card bg-gray-700 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-orange-500">Basic Plan</h3>
          <p className="mt-4 text-lg">
            Perfect for beginners starting with hospitality accounting.
          </p>
          <p className="mt-8 text-5xl font-bold">$199</p>
          <p className="mt-2 text-sm text-gray-300">One-time payment</p>
          <ul className="mt-6 list-disc list-inside space-y-2 text-lg">
            <li>4-week course access</li>
            <li>Basic accounting modules</li>
            <li>Email support</li>
            <li>Certification</li>
          </ul>
          <button className="btn btn-orange mt-8 w-full py-3 text-lg">
            Get Started
          </button>
        </div>

        {/* Standard Plan */}
        <div className="card bg-gray-700 p-8 rounded-lg shadow-lg border-4 border-blue-400">
          <h3 className="text-3xl font-semibold text-blue-400">
            Standard Plan
          </h3>
          <p className="mt-4 text-lg">
            Best for individuals looking for comprehensive accounting skills.
          </p>
          <p className="mt-8 text-5xl font-bold">$399</p>
          <p className="mt-2 text-sm text-gray-300">One-time payment</p>
          <ul className="mt-6 list-disc list-inside space-y-2 text-lg">
            <li>6-week course access</li>
            <li>All basic modules + advanced modules</li>
            <li>Priority email support</li>
            <li>Certification</li>
          </ul>
          <button className="btn btn-blue mt-8 w-full py-3 text-lg">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="card bg-gray-700 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-orange-500">
            Premium Plan
          </h3>
          <p className="mt-4 text-lg">
            For professionals seeking a full suite of hospitality accounting
            knowledge.
          </p>
          <p className="mt-8 text-5xl font-bold">$699</p>
          <p className="mt-2 text-sm text-gray-300">One-time payment</p>
          <ul className="mt-6 list-disc list-inside space-y-2 text-lg">
            <li>12-week course access</li>
            <li>All modules (basic + advanced + expert)</li>
            <li>1-on-1 mentorship</li>
            <li>Priority support & certification</li>
          </ul>
          <button className="btn btn-orange mt-8 w-full py-3 text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
