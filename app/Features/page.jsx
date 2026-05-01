"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const creators = [
  { name: "Michael Brown", email: "Michael.B@Fitness.com", location: "Los Angeles, US", status: "Active",  balance: "$1,500.00" },
  { name: "Emily White",   email: "Emily.W@Fitness.com",   location: "New York, US",    status: "Inactive", balance: "$800.00"   },
  { name: "John Davis",    email: "John.D@Fitness.com",    location: "Chicago, US",     status: "Active",  balance: "$2,100.00" },
  { name: "Sarah Miller",  email: "Sarah.M@Fitness.com",   location: "Houston, US",     status: "Active",  balance: "$1,950.00" },
];

export default function FeaturesPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.dataset.section));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const anim = (section, delay = 0) => {
    const base = "transition-all duration-700 ease-out";
    const d = delay ? `delay-${delay}` : "";
    return visibleSections.has(section)
      ? `${base} ${d} translate-y-0 opacity-100`
      : `${base} ${d} translate-y-10 opacity-0`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Badge ── */}
      <header
        className={`flex justify-center pt-28 pb-4 ${anim("header")}`}
        data-section="header"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
          <span className="bg-white text-indigo-600 px-2 py-1 text-xs font-semibold rounded">NEW</span>
          <span className="font-medium">FITNESS HUB</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Hero ── */}
        <section className="text-center mb-16">
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight ${anim("hero-title")}`}
            data-section="hero-title"
          >
            <span className="block text-gray-900">Unleash Your Potential With</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Cutting-Edge Fitness Tools
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed ${anim("hero-subtitle", 200)}`}
            data-section="hero-subtitle"
          >
            Discover a comprehensive suite of features designed to enhance your lifestyle and streamline your daily activities. Join our vibrant community of fitness enthusiasts, creators, and trainers.
          </p>

          {/* Avatars */}
          <div
            className={`flex justify-center mb-10 ${anim("hero-avatars", 400)}`}
            data-section="hero-avatars"
          >
            <div className="flex -space-x-4">
              {["/Assets/community1.png", "/Assets/community2.png", "/Assets/community1.png", "/Assets/community2.png"].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Community member ${i + 1}`}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 mb-16 ${anim("hero-buttons", 600)}`}
            data-section="hero-buttons"
          >
            <Link
              href="/Empower/training"
              className="bg-[#2E1065] text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#1e0a4a] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Image src="/Assets/heroicon1.png" alt="" width={20} height={20} />
              <span>Explore Tools</span>
            </Link>
            <Link
              href="/Community"
              className="bg-[#2E1065] text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#1e0a4a] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Image src="/Assets/heroicon1.png" alt="" width={20} height={20} />
              <span>Join Community</span>
            </Link>
          </div>
        </section>

        {/* ── Brand tagline ── */}
        <section
          className={`py-14 px-6 sm:px-12 bg-white text-center ${anim("progress-section")}`}
          data-section="progress-section"
        >
          <h2
            className={`text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 ${anim("progress-title", 200)}`}
            data-section="progress-title"
          >
            DESIGNER SPECIALIZING IN BRAND + DIGITAL DESIGN
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto ${anim("progress-subtitle", 400)}`}
            data-section="progress-subtitle"
          >
            Empowering fitness creators and enthusiasts with innovative tools and a vibrant community hub.
          </p>
        </section>
      </div>

      {/* ── Stats ── */}
      <section
        className={`mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anim("stats-section")}`}
        data-section="stats-section"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={`flex justify-center ${anim("stats-image", 400)}`} data-section="stats-image">
            <Image
              src="/Assets/stats.png"
              alt="Progress Circle"
              width={400}
              height={480}
              className="rounded-full object-cover w-full max-w-sm h-auto"
            />
          </div>
          <div className={`space-y-7 ${anim("stats-data", 600)}`} data-section="stats-data">
            {[
              { label: "Fitness",   value: "550/600", unit: "hrs",     color: "text-gray-900" },
              { label: "Community", value: "425/500", unit: "members", color: "text-purple-600" },
              { label: "Analytics", value: "375/500", unit: "reports", color: "text-indigo-600" },
            ].map(({ label, value, unit, color }) => (
              <div key={label}>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <p className={`text-3xl font-bold ${color}`}>{value}</p>
                  <p className="text-sm text-gray-500">{unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Creators section ── */}
      <section
        className={`relative w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-12 py-16 ${anim("creators-section")}`}
        data-section="creators-section"
        style={{ backgroundImage: "url('/Assets/FitPro.png')" }}
      >
        <div className="max-w-6xl w-full mx-auto text-white">
          <div
            className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 ${anim("creators-header", 200)}`}
            data-section="creators-header"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#A78BFA] font-bold">
              See Our Top Gym <br /> Creators!!!
            </h2>
            <Link
              href="/pricing"
              className="bg-[#2E1065] text-white px-6 py-3 rounded-lg hover:bg-[#1e0a4a] transition-colors text-base shadow-md flex items-center gap-2"
            >
              <Image src="/Assets/heroicon1.png" alt="" width={20} height={20} />
              Join Today
            </Link>
          </div>

          {/* Desktop table / Mobile cards */}
          <div
            className={`${anim("creators-table", 400)}`}
            data-section="creators-table"
          >
            {/* Desktop table — hidden on mobile */}
            <div className="hidden md:block overflow-x-auto bg-white text-gray-900 rounded-2xl shadow-2xl">
              <table className="w-full table-auto text-base">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Email</th>
                    <th className="px-6 py-4 text-left">Location</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {creators.map((c) => (
                    <tr key={c.name}>
                      <td className="px-6 py-4">{c.name}</td>
                      <td className="px-6 py-4">{c.email}</td>
                      <td className="px-6 py-4">{c.location}</td>
                      <td className={`px-6 py-4 font-medium ${c.status === "Active" ? "text-green-600" : "text-red-500"}`}>{c.status}</td>
                      <td className="px-6 py-4 text-right">{c.balance}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100 border-t border-gray-300">
                    <td className="px-6 py-4 font-semibold">Total</td>
                    <td colSpan={4} className="px-6 py-4 text-right font-bold">$6,350.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Mobile cards — hidden on desktop */}
            <div className="md:hidden space-y-4">
              {creators.map((c) => (
                <div key={c.name} className="bg-white text-gray-900 rounded-2xl shadow-lg p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-lg">{c.name}</p>
                      <p className="text-sm text-gray-500">{c.email}</p>
                    </div>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${c.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                      {c.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">📍 {c.location}</p>
                  <p className="text-base font-bold text-purple-700">{c.balance}</p>
                </div>
              ))}
              <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-5 flex justify-between font-bold">
                <span>Total</span><span>$6,350.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats numbers ── */}
      <section
        className={`mt-20 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${anim("journey-section")}`}
        data-section="journey-section"
      >
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#A78BFA] mb-6 ${anim("journey-title", 200)}`}
          data-section="journey-title"
        >
          EMPOWERING YOUR FITNESS JOURNEY
        </h2>
        <p
          className={`text-gray-700 max-w-3xl mx-auto mb-12 text-base sm:text-lg ${anim("journey-subtitle", 400)}`}
          data-section="journey-subtitle"
        >
          Discover our comprehensive suite of features designed to elevate your fitness journey, streamline daily activities, and connect with a vibrant community of enthusiasts.
        </p>
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 ${anim("journey-stats", 600)}`}
          data-section="journey-stats"
        >
          {[
            { num: "100K+", title: "Active Community Members",   sub: "Engaging, Sharing, And Growing Together" },
            { num: "500+",  title: "Success Stories Shared",     sub: "Inspiring Real-Life Transformations" },
            { num: "20+",   title: "Expert Trainers & Coaches",  sub: "Guiding You To Achieve Your Goals" },
          ].map(({ num, title, sub }) => (
            <div key={num} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#2E1065] mb-1">{num}</div>
              <div className="font-semibold text-gray-900 mb-1">{title}</div>
              <div className="text-sm text-gray-500">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section
        className={`mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anim("team-section")}`}
        data-section="team-section"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { src: "/Assets/maria.png", name: "Maria Garcia", role: "Community Engagement Manager" },
            { src: "/Assets/david.png", name: "David Lee",    role: "Gym Instructor" },
            { src: "/Assets/alex.png",  name: "Alex Johnson", role: "Lead Fitness Coach" },
          ].map(({ src, name, role }) => (
            <div key={name} className="text-left">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
