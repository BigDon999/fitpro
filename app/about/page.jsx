import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-24">
      <h1 className="text-4xl font-bold mb-8 text-[#2E1065] text-center">
        About FitPro
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        FitPro is dedicated to empowering your fitness journey with expert
        training programs, personalized nutrition guides, and advanced progress
        tracking tools. Our mission is to build a vibrant community where
        everyone can achieve their health and wellness goals.
      </p>
      <div className="bg-gray-50 rounded-xl p-8 mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">
          Our Story
        </h2>
        <p>
          Founded by passionate fitness professionals, FitPro was created to
          make high-quality fitness resources accessible to everyone. We believe
          in the power of community, innovation, and support to help you reach
          your full potential.
        </p>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-md text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-[#A78BFA]">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Expert-designed training programs</li>
          <li>Comprehensive nutrition guidance</li>
          <li>Progress tracking and analytics</li>
          <li>Supportive fitness community</li>
        </ul>
        <p>Join FitPro and start your journey to a healthier, stronger you!</p>
      </div>
    </div>
  );
}
