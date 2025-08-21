import React from "react";

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-24">
      <h1 className="text-4xl font-bold mb-8 text-[#2E1065] text-center">
        Support
      </h1>
      <div className="bg-gray-50 rounded-xl p-8 mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">
          How can we help you?
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Contact Us:</strong> Email{" "}
            <a
              href="mailto:support@fitpro.com"
              className="text-indigo-600 hover:underline"
            >
              support@fitpro.com
            </a>{" "}
            or use our{" "}
            <a href="/Contact" className="text-indigo-600 hover:underline">
              Contact page
            </a>
            .
          </li>
          <li>
            <strong>Account Issues:</strong> For login, password, or
            subscription problems, visit your account dashboard or reach out to
            support.
          </li>
          <li>
            <strong>Technical Problems:</strong> If you encounter bugs or
            errors, please describe the issue and include screenshots if
            possible.
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-md text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">
          Community Help
        </h2>
        <p>
          You can also get help from our community in the forums and FAQ
          section. We encourage you to share your experiences and solutions!
        </p>
      </div>
    </div>
  );
}
