import React from "react";

export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-24">
      <h1 className="text-4xl font-bold mb-8 text-[#2E1065] text-center">
        Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">Basic</h2>
          <p className="text-3xl font-bold mb-2">$19/mo</p>
          <ul className="mb-6 text-gray-700 list-disc pl-5">
            <li>Access to training programs</li>
            <li>Basic progress tracking</li>
            <li>Email support</li>
          </ul>
          <button className="bg-[#2E1065] text-white px-6 py-2 rounded-lg w-full hover:bg-purple-800 transition">
            Choose Basic
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#A78BFA]">
          <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">Pro</h2>
          <p className="text-3xl font-bold mb-2">$39/mo</p>
          <ul className="mb-6 text-gray-700 list-disc pl-5">
            <li>All Basic features</li>
            <li>Personalized nutrition guides</li>
            <li>Advanced progress analytics</li>
            <li>Priority support</li>
          </ul>
          <button className="bg-[#A78BFA] text-white px-6 py-2 rounded-lg w-full hover:bg-[#2E1065] transition">
            Choose Pro
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">Elite</h2>
          <p className="text-3xl font-bold mb-2">$59/mo</p>
          <ul className="mb-6 text-gray-700 list-disc pl-5">
            <li>All Pro features</li>
            <li>1-on-1 coaching sessions</li>
            <li>Exclusive community access</li>
            <li>Early access to new features</li>
          </ul>
          <button className="bg-[#2E1065] text-white px-6 py-2 rounded-lg w-full hover:bg-purple-800 transition">
            Choose Elite
          </button>
        </div>
      </div>
    </div>
  );
}
