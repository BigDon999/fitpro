"use client";
import React from "react";
import Image from "next/image";

const empowerCards = [
  {
    id: "training",
    title: "Training Programs",
    image: "/Assets/training.png",
    description:
      "Access personalized training programs designed by experts to help you achieve your fitness goals.",
    details: `Our training programs are crafted by certified professionals and tailored to your unique needs. Whether you're a beginner or advanced, you'll find routines, video guides, and progress tracking to keep you motivated and on track.`,
  },
  {
    id: "nutrition",
    title: "Nutrition Guides",
    image: "/Assets/nutrition.png",
    description:
      "Unlock comprehensive nutrition guides and meal plans to optimize your diet for peak performance.",
    details: `Explore meal plans, recipes, and expert tips to fuel your body. Our guides cover everything from macros to hydration, helping you make informed choices for lasting results.`,
  },
  {
    id: "progress",
    title: "Progress Trackers",
    image: "/Assets/progress.png",
    description:
      "Monitor your progress with intuitive tracking tools, visualize your achievements, and stay motivated.",
    details: `Track your workouts, nutrition, and milestones with our easy-to-use tools. Visualize your journey, celebrate achievements, and stay accountable with reminders and analytics.`,
  },
];

export default function EmpowerDetailPage({ params }) {
  const actualParams = React.use(params);
  const card = empowerCards.find((c) => c.id === actualParams.id);
  if (!card) {
    return (
      <div className="p-8 text-center text-xl">Empower card not found.</div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 mt-24">
      <h1 className="text-3xl font-bold mb-4 text-[#2E1065]">{card.title}</h1>
      <div className="mb-6 flex justify-center">
        <Image
          src={card.image}
          alt={card.title}
          width={400}
          height={250}
          className="rounded-xl w-full h-auto"
        />
      </div>
      <p className="text-lg text-gray-700 mb-4">{card.description}</p>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 text-gray-800">
        <h2 className="text-xl font-semibold mb-2 text-[#A78BFA]">Details</h2>
        <p>{card.details}</p>
      </div>
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-2 text-[#A78BFA]">
          Explore More
        </h2>
        <ul className="list-none pl-0">
          {empowerCards
            .filter((c) => c.id !== actualParams.id)
            .map((c) => (
              <li key={c.id} className="mb-2">
                <a
                  href={`/Empower/${c.id}`}
                  className="text-indigo-600 hover:underline"
                >
                  {c.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
