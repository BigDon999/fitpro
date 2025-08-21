import React from "react";

export default function CareersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-24">
      <h1 className="text-4xl font-bold mb-8 text-[#2E1065] text-center">
        Careers at FitPro
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Join our passionate team and help us empower people to achieve their
        fitness goals! We're always looking for talented, driven individuals who
        share our mission.
      </p>
      <div className="bg-gray-50 rounded-xl p-8 mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">
          Open Positions
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Fitness Coach</li>
          <li>Nutrition Specialist</li>
          <li>Frontend Developer</li>
          <li>Community Manager</li>
        </ul>
        <p>
          If you're interested in joining FitPro, send your resume and a brief
          cover letter to{" "}
          <a
            href="mailto:careers@fitpro.com"
            className="text-indigo-600 hover:underline"
          >
            careers@fitpro.com
          </a>
          .
        </p>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-md text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">
          Why Work With Us?
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Supportive and innovative team culture</li>
          <li>Opportunities for growth and development</li>
          <li>Flexible work environment</li>
          <li>Impactful mission to help others</li>
        </ul>
      </div>
    </div>
  );
}
