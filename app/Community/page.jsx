"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Community() {
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

  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      name: "Alex Rodriguez",
      title: "Certified Personal Trainer",
      quote:
        "This platform transformed my approach to fitness. The tools and community support are unmatched.",
      avatar: "/Assets/avater1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Fitness Enthusiast & Coach",
      quote:
        "I've achieved more in six months than I did in two years before joining this community. The expert guidance is incredible.",
      avatar: "/Assets/avater2.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Nutrition Specialist",
      quote:
        "The personalized nutrition plans and recovery tracking have completely changed how I approach my fitness goals.",
      avatar: "/Assets/avater3.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section with Background - Added pt-16 for navbar spacing */}
      <div className="relative w-full h-screen overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Assets/FitPro.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Header */}
          <header
            className={`flex justify-center py-6 mt-6 ${getAnimationClass(
              "hero-header"
            )}`}
            data-section="hero-header"
          >
            <div className="bg-[#2E1065] text-white px-8 py-2 rounded-lg shadow-lg ">
              <span className="font-medium">COMMUNITY HUB</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
              {/* Hero Section */}
              <section className="text-center mb-16">
                <h1
                  className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${getAnimationClass(
                    "hero-title",
                    200
                  )}`}
                  data-section="hero-title"
                >
                  <span className="block text-gray-900">
                    CONNECT, TRAIN, AND ACHIEVE TOGETHER
                  </span>
                </h1>

                <p
                  className={`text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed ${getAnimationClass(
                    "hero-subtitle",
                    400
                  )}`}
                  data-section="hero-subtitle"
                >
                  Join our thriving fitness community, where you can share your
                  journey, discover new tools, and connect with trainers and
                  enthusiasts who are passionate about health and wellness.
                  Empower your fitness goals with us.
                </p>

                {/* Profile Pictures */}
                <div
                  className={`flex justify-center mb-10 ${getAnimationClass(
                    "hero-avatars",
                    600
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
                    800
                  )}`}
                  data-section="hero-buttons"
                >
                  <Link href="/pricing" passHref legacyBehavior>
                    <button className="bg-[#2E1065] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1e0a4a] transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <span>Join Now</span>
                    </button>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <button className="border-2 border-[#2E1065] text-[#2E1065] px-8 py-3 rounded-lg font-medium hover:bg-[#2E1065] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span>Learn More</span>
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Community Spotlight Section */}
      <section
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${getAnimationClass(
          "spotlight-section"
        )}`}
        data-section="spotlight-section"
      >
        {/* Header */}
        <div
          className={`flex items-center mb-12 ${getAnimationClass(
            "spotlight-header",
            200
          )}`}
          data-section="spotlight-header"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
            <span className="bg-white text-indigo-600 px-2 py-1 text-xs font-semibold rounded">
              NEW
            </span>
            <span className="font-medium">COMMUNITY SPOTLIGHT</span>
          </div>
        </div>

        {/* Articles Grid */}
        <div
          className={`space-y-8 ${getAnimationClass(
            "spotlight-articles",
            400
          )}`}
          data-section="spotlight-articles"
        >
          {/* Article 1 */}
          <article className="border-b border-gray-200 pb-8 last:border-b-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-grow">
                  <div className="flex-shrink-0">
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      MARCH 15, 2024
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Unlocking Your Full Fitness Potential
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Discover innovative tools and strategies to elevate your
                      training and achieve your goals faster.
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-auto pt-4 flex justify-start sm:justify-center">
                  <Link
                    href="/Community/1"
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-200"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/Assets/article1.png"
                  alt="Fitness trainer lifting weights"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="border-b border-gray-200 pb-8 last:border-b-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-grow">
                  <div className="flex-shrink-0">
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      APRIL 01, 2024
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Community Success Stories: Real Transformations
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Hear inspiring tales from our members who have transformed
                      their lives through dedication and support.
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-auto pt-4 flex justify-start sm:justify-center">
                  <Link
                    href="/Community/2"
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-200"
                  >
                    READ STORIES
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/Assets/article2.png"
                  alt="Group of fitness enthusiasts"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </article>

          {/* Article 3 */}
          <article className="border-b border-gray-200 pb-8 last:border-b-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-grow">
                  <div className="flex-shrink-0">
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      APRIL 10, 2024
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Expert Insights: Nutrition & Recovery
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Get valuable knowledge from leading experts on optimizing
                      your diet and recovery for peak performance.
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-auto pt-4 flex justify-start sm:justify-center">
                  <Link
                    href="/Community/3"
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-200"
                  >
                    GET TIPS
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/Assets/article3.png"
                  alt="Fresh fruits and vegetables"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Success Stories Section - New Section */}
      <section
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${getAnimationClass(
          "success-section"
        )}`}
        data-section="success-section"
      >
        {/* Header with Icon */}
        <div
          className={`text-center mb-12 ${getAnimationClass(
            "success-header",
            200
          )}`}
          data-section="success-header"
        >
          <img
            src="/Assets/empowericon.png"
            alt="Community Logo"
            className="w-16 h-16 mx-auto mb-6 rounded-lg"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            EMPOWERING YOUR FITNESS <br /> JOURNEY
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#A78BFA] mb-6">
            COMMUNITY & SUCCESS STORIES
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Join our thriving fitness community and discover tools, resources,
            and inspiring <br /> success stories.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${getAnimationClass(
            "success-cards",
            400
          )}`}
          data-section="success-cards"
        >
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${getAnimationClass(
                `success-card-${story.id}`,
                600 + index * 200
              )}`}
              data-section={`success-card-${story.id}`}
            >
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{story.quote}</p>
              </div>

              <div className="flex items-center">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  <p className="text-sm text-gray-500">{story.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
