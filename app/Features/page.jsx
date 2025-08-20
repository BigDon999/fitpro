import React from "react";
import Image from "next/image";

const App = () => {
  return (
    <div className="min-h-screen  from-slate-50 to-slate-100">
      {/* Header */}
      <header className="flex justify-center py-6 mt-20">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900">
              Unleash Your Potential With
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Cutting-Edge Fitness Tools
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover a comprehensive suite of features designed to enhance your
            lifestyle and streamline your daily activities. Join our vibrant
            community of fitness enthusiasts, creators, and trainers to achieve
            your goals and share your success stories.
          </p>

          {/* Profile Pictures */}
          <div className="flex justify-center mb-10">
            <div className="flex -space-x-4">
              <Image
                src="/Assets/community1.png"
                alt="User 1"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/Assets/community2.png"
                alt="User 2"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/Assets/community1.png"
                alt="User 3"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/Assets/community2.png"
                alt="User 4"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-[#2E1065] text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#1e0a4a] transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Image
                src="/Assets/heroicon1.png"
                alt="icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Explore Tools</span>
            </button>
            <button className="bg-[#2E1065] text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#1e0a4a] transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Image
                src="/Assets/heroicon1.png"
                alt="icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Join Community</span>
            </button>
          </div>
        </section>

        {/* Progress Section */}
        {/* Progress Section */}
        <section className="py-20 px-6 sm:px-12 bg-white">
          {/* Header + Subtext */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              DESIGNER SPECIALIZING IN BRAND + DIGITAL DESIGN
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Empowering fitness creators and enthusiasts with innovative tools
              and a vibrant community hub.
            </p>
          </div>
        </section>
      </div>

      {/* Top Gym Creators Section with Background Image */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-12"
        style={{
          backgroundImage: "url('/Assets/FitPro.png')",
        }}
      >
        <div className="max-w-6xl w-full mx-auto text-white">
          {/* Heading & Button */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            {/* Header aligned left */}
            <h2 className="text-4xl md:text-5xl text-[#A78BFA] font-bold  text-left">
              See Our Top Gym <br /> Creators!!!
            </h2>

            {/* Button with icon + reduced height */}
            <button className="bg-[#2E1065] text-white px-6 py-2 rounded-lg hover:bg-[#1e0a4a] transition-colors text-lg shadow-md flex items-center gap-2">
              <img src="/Assets/heroicon1.png" alt="icon" className="w-5 h-5" />
              Join Today
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white text-gray-900 rounded-2xl shadow-2xl mx-auto max-w-6xl">
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
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-[#A78BFA]  mb-6">
          EMPOWERING YOUR FITNESS JOURNEY
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          Discover our comprehensive suite of features designed to elevate your
          fitness journey, streamline daily activities, and connect with a
          vibrant community of enthusiasts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
      <section className="mt-24 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Maria */}
          <div>
            <Image
              src="/Assets/maria.png"
              alt="Maria Garcia"
              width={300}
              height={188}
              className="w-full h-94 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-gray-900">Maria Garcia</h3>
            <p className="text-sm text-gray-600">
              Community Engagement Manager
            </p>
          </div>
          {/* David */}
          <div>
            <Image
              src="/Assets/david.png"
              alt="David Lee"
              width={300}
              height={188}
              className="w-full h-94 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-gray-900">David Lee</h3>
            <p className="text-sm text-gray-600">Gym Instructor</p>
          </div>
          {/* Alex */}
          <div>
            <Image
              src="/Assets/alex.png"
              alt="Alex Johnson"
              width={300}
              height={188}
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
