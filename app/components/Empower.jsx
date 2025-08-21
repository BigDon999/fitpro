"use client";

import Image from "next/image";
import Link from "next/link";

export default function Empower() {
  // Empower cards data
  const empowerCards = [
    {
      id: "training",
      title: "Training Programs",
      description:
        "Access personalized training programs designed by experts to help you achieve your fitness goals.",
      image: "/Assets/training.png",
      button: "EXPLORE PROGRAMS",
    },
    {
      id: "nutrition",
      title: "Nutrition Guides",
      description:
        "Unlock comprehensive nutrition guides and meal plans to optimize your diet for peak performance.",
      image: "/Assets/nutrition.png",
      button: "VIEW GUIDES",
    },
    {
      id: "progress",
      title: "Progress Trackers",
      description:
        "Monitor your progress with intuitive tracking tools, visualize your achievements, and stay motivated.",
      image: "/Assets/progress.png",
      button: "START TRACKING",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 bg-gray-50 slide-in-bottom">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          EMPOWER YOUR FITNESS JOURNEY <br />
          <span className="text-gray-800">WITH OUR INNOVATIVE TOOLS</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 px-2">
          Discover a vibrant community, cutting-edge tools, and inspiring
          success stories to fuel your progress.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {/* Left - Big Purple Card */}
        <div className="bg-[#A78BFA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 uppercase">
              {empowerCards[0].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mt-2">
              {empowerCards[0].description}
            </p>
          </div>
          <Link
            href={`/Empower/${empowerCards[0].id}`}
            className="mt-4 bg-[#2E1065] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-purple-800 transition text-sm sm:text-base block text-center"
          >
            {empowerCards[0].button}
          </Link>
          <div className="mt-5 sm:mt-6 flex justify-center">
            <Image
              src={empowerCards[0].image}
              alt={empowerCards[0].title}
              width={400}
              height={250}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Right - Two Stacked White Cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {empowerCards.slice(1).map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="text-lg font-semibold text-gray-900 uppercase">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    {card.description}
                  </p>
                  <Link
                    href={`/Empower/${card.id}`}
                    className="mt-4 bg-[#2E1065] text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition w-full text-center text-sm sm:text-base block"
                  >
                    {card.button}
                  </Link>
                </div>
                <div className="w-full sm:w-auto flex justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={140}
                    height={100}
                    className="rounded-lg w-auto h-auto max-w-[140px]"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
