"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const App = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              new Set(prev).add(entry.target.dataset.section)
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll("[data-section]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (section, delay = 0) => {
    const baseClass = "transition-all duration-1000 ease-out";
    const delayClass = delay ? `delay-${delay}` : "";

    if (visibleSections.has(section)) {
      return `${baseClass} ${delayClass} translate-y-0 opacity-100`;
    }
    return `${baseClass} ${delayClass} translate-y-16 opacity-0`;
  };

  return (
    <div className="min-h-screen  from-slate-50 to-slate-100">
      {/* Header */}
      <header
        className={`flex justify-center py-6 mt-20 ${getAnimationClass(
          "header"
        )}`}
        data-section="header"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
          <span className="bg-white text-indigo-600 px-2 py-1 text-xs font-semibold rounded">
            NEW
          </span>
          <span className="font-medium">FITNESS HUB</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${getAnimationClass(
              "hero-title"
            )}`}
            data-section="hero-title"
          >
            <span className="block text-gray-900">
              Unleash Your Potential With
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Cutting-Edge Fitness Tools
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed ${getAnimationClass(
              "hero-subtitle",
              200
            )}`}
            data-section="hero-subtitle"
          >
            Discover a comprehensive suite of features designed to enhance your
            lifestyle and streamline your daily activities. Join our vibrant
            community of fitness enthusiasts, creators, and trainers to achieve
            your goals and share your success stories.
          </p>

          {/* Profile Pictures */}
          <div
            className={`flex justify-center mb-10 ${getAnimationClass(
              "hero-avatars",
              400
            )}`}
            data-section="hero-avatars"
          >
            <div className="flex -space-x-4">
              <img
                src="/Assets/community1.png"
                alt="User 1"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/Assets/community2.png"
                alt="User 2"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/Assets/community1.png"
                alt="User 3"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/Assets/community2.png"
                alt="User 4"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 mb-16 ${getAnimationClass(
              "hero-buttons",
              600
            )}`}
            data-section="hero-buttons"
          >
            <Link href="/Empower/training" passHref legacyBehavior>
              <button className="bg-[#2E1065] text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#1e0a4a] transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img
                  src="/Assets/heroicon1.png"
                  alt="icon"
                  className="w-5 h-5"
                />
                <span>Explore Tools</span>
              </button>
            </Link>
            <Link href="/Community" passHref legacyBehavior>
              <button className="bg-[#2E1065] text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#1e0a4a] transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img
                  src="/Assets/heroicon1.png"
                  alt="icon"
                  className="w-5 h-5"
                />
                <span>Join Community</span>
              </button>
            </Link>
          </div>
        </section>

        {/* Progress Section */}
        <section
          className={`py-20 px-6 sm:px-12 bg-white ${getAnimationClass(
            "progress-section"
          )}`}
          data-section="progress-section"
        >
          {/* Header + Subtext */}
          <div className="text-center  max-w-2xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 ${getAnimationClass(
                "progress-title",
                200
              )}`}
              data-section="progress-title"
            >
              DESIGNER SPECIALIZING IN BRAND + DIGITAL DESIGN
            </h2>
            <p
              className={`mt-4 text-lg text-gray-600 ${getAnimationClass(
                "progress-subtitle",
                400
              )}`}
              data-section="progress-subtitle"
            >
              Empowering fitness creators and enthusiasts with innovative tools
              and a vibrant community hub.
            </p>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section
        className={`mt-8 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${getAnimationClass(
          "stats-section"
        )}`}
        data-section="stats-section"
      >
        <div
          className={`flex justify-center ${getAnimationClass(
            "stats-content",
            200
          )}`}
          data-section="stats-content"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            {/* Image Placeholder for Gradient Circle (Left side) */}
            <div
              className={`relative ${getAnimationClass("stats-image", 400)}`}
              data-section="stats-image"
            >
              <img
                src="/Assets/stats.png"
                alt="Progress Circle"
                className="w-100 h-120 object-cover rounded-full"
              />
            </div>
            {/* Stats (Right side) */}
            <div
              className={`space-y-7 ${getAnimationClass("stats-data", 600)}`}
              data-section="stats-data"
            >
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Fitness
                </p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <p className="text-3xl font-bold text-gray-900">550/600</p>
                  <p className="text-sm text-gray-500">hrs</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Community
                </p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <p className="text-3xl font-bold text-purple-600">425/500</p>
                  <p className="text-sm text-gray-500">members</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Analytics
                </p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <p className="text-3xl font-bold text-indigo-600">375/500</p>
                  <p className="text-sm text-gray-500">reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Gym Creators Section with Background Image */}
      <section
        className={`relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-12 ${getAnimationClass(
          "creators-section"
        )}`}
        data-section="creators-section"
        style={{
          backgroundImage: "url('/Assets/FitPro.png')",
        }}
      >
        <div className="max-w-6xl w-full mx-auto text-white">
          {/* Heading & Button */}
          <div
            className={`flex flex-col md:flex-row justify-between items-center mb-10 gap-6 ${getAnimationClass(
              "creators-header",
              200
            )}`}
            data-section="creators-header"
          >
            {/* Header aligned left */}
            <h2 className="text-4xl md:text-5xl text-[#A78BFA] font-bold  text-left">
              See Our Top Gym <br /> Creators!!!
            </h2>

            {/* Button with icon + reduced height */}
            <Link href="/pricing" passHref legacyBehavior>
              <button className="bg-[#2E1065] text-white px-6 py-2 rounded-lg hover:bg-[#1e0a4a] transition-colors text-lg shadow-md flex items-center gap-2">
                <img
                  src="/Assets/heroicon1.png"
                  alt="icon"
                  className="w-5 h-5"
                />
                Join Today
              </button>
            </Link>
          </div>

          {/* Table */}
          <div
            className={`overflow-x-auto bg-white text-gray-900 rounded-2xl shadow-2xl mx-auto max-w-6xl ${getAnimationClass(
              "creators-table",
              400
            )}`}
            data-section="creators-table"
          >
            <table className="w-full table-auto text-xl">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-lg">
                  <th className="px-8 py-6 text-left">Name</th>
                  <th className="px-8 py-6 text-left">Email</th>
                  <th className="px-8 py-6 text-left">Location</th>
                  <th className="px-8 py-6 text-left">Status</th>
                  <th className="px-8 py-6 text-right">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-8 py-6">Michael Brown</td>
                  <td className="px-8 py-6">Michael.B@Fitness.com</td>
                  <td className="px-8 py-6">Los Angeles, US</td>
                  <td className="px-8 py-6 text-green-600">Active</td>
                  <td className="px-8 py-6 text-right">$1,500.00</td>
                </tr>
                <tr>
                  <td className="px-8 py-6">Emily White</td>
                  <td className="px-8 py-6">Emily.W@Fitness.com</td>
                  <td className="px-8 py-6">New York, US</td>
                  <td className="px-8 py-6 text-red-600">Inactive</td>
                  <td className="px-8 py-6 text-right">$800.00</td>
                </tr>
                <tr>
                  <td className="px-8 py-6">John Davis</td>
                  <td className="px-8 py-6">John.D@Fitness.com</td>
                  <td className="px-8 py-6">Chicago, US</td>
                  <td className="px-8 py-6 text-green-600">Active</td>
                  <td className="px-8 py-6 text-right">$2,100.00</td>
                </tr>
                <tr>
                  <td className="px-8 py-6">Sarah Miller</td>
                  <td className="px-8 py-6">Sarah.M@Fitness.com</td>
                  <td className="px-8 py-6">Houston, US</td>
                  <td className="px-8 py-6 text-green-600">Active</td>
                  <td className="px-8 py-6 text-right">$1,950.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 border-t border-gray-300 text-lg">
                  <td className="px-8 py-6 font-semibold">Total</td>
                  <td colSpan="4" className="px-8 py-6 text-right font-bold">
                    $6,350.00
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Empowering Your Fitness Journey Section (Hero Style) */}
      <section
        className={`mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${getAnimationClass(
          "journey-section"
        )}`}
        data-section="journey-section"
      >
        <h2
          className={`text-4xl md:text-5xl font-bold bg-clip-text text-[#A78BFA]  mb-6 ${getAnimationClass(
            "journey-title",
            200
          )}`}
          data-section="journey-title"
        >
          EMPOWERING YOUR FITNESS JOURNEY
        </h2>
        <p
          className={`text-gray-700 max-w-3xl mx-auto mb-12 text-lg ${getAnimationClass(
            "journey-subtitle",
            400
          )}`}
          data-section="journey-subtitle"
        >
          Discover our comprehensive suite of features designed to elevate your
          fitness journey, streamline daily activities, and connect with a
          vibrant community of enthusiasts.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ${getAnimationClass(
            "journey-stats",
            600
          )}`}
          data-section="journey-stats"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#2E1065] mb-1">
              100K+
            </div>
            <div className="font-semibold text-gray-900 mb-1">
              Active Community Members
            </div>
            <div className="text-sm text-gray-500">
              Engaging, Sharing, And Growing Together
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#2E1065] mb-1">
              500+
            </div>
            <div className="font-semibold text-gray-900 mb-1">
              Success Stories Shared
            </div>
            <div className="text-sm text-gray-500">
              Inspiring Real-Life Transformations
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#2E1065] mb-1">
              20+
            </div>
            <div className="font-semibold text-gray-900 mb-1">
              Expert Trainers & Coaches
            </div>
            <div className="text-sm text-gray-500">
              Guiding You To Achieve Your Goals
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className={`mt-24 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left ${getAnimationClass(
          "team-section"
        )}`}
        data-section="team-section"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Maria */}
          <div>
            <img
              src="/Assets/maria.png"
              alt="Maria Garcia"
              className="w-full h-94 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-gray-900">Maria Garcia</h3>
            <p className="text-sm text-gray-600">
              Community Engagement Manager
            </p>
          </div>
          {/* David */}
          <div>
            <img
              src="/Assets/david.png"
              alt="David Lee"
              className="w-full h-94 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-gray-900">David Lee</h3>
            <p className="text-sm text-gray-600">Gym Instructor</p>
          </div>
          {/* Alex */}
          <div>
            <img
              src="/Assets/alex.png"
              alt="Alex Johnson"
              className="w-full h-94 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-gray-900">Alex Johnson</h3>
            <p className="text-sm text-gray-600">Lead Fitness Coach</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
