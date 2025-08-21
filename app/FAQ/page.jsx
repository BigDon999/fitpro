import React from "react";

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-24">
      <h1 className="text-4xl font-bold mb-8 text-[#2E1065] text-center">
        Frequently Asked Questions
      </h1>
      <div className="bg-gray-50 rounded-xl p-8 mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">General</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>What is FitPro?</strong>
            <br />
            FitPro is a platform for fitness enthusiasts, trainers, and creators
            to connect, access training programs, nutrition guides, and track
            progress.
          </li>
          <li>
            <strong>How do I join the community?</strong>
            <br />
            Click the "Join Today" button in the footer or sign up from the
            homepage to become a member.
          </li>
          <li>
            <strong>Is FitPro free?</strong>
            <br />
            We offer both free and paid plans. See our Pricing page for details.
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-md text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">Support</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>How can I contact support?</strong>
            <br />
            Visit the Contact page or email support@fitpro.com.
          </li>
          <li>
            <strong>Can I cancel my subscription?</strong>
            <br />
            Yes, you can manage your subscription from your account dashboard.
          </li>
          <li>
            <strong>Do you offer refunds?</strong>
            <br />
            Refunds are available within 14 days of purchase for annual plans.
            See our Terms of Service for details.
          </li>
        </ul>
      </div>
    </div>
  );
}
