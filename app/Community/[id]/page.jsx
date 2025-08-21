"use client";
import React from "react";
import Image from "next/image";

// Example articles data (should be moved to a shared file/db in production)
const articles = [
  {
    id: "1",
    title: "Unlocking Your Full Fitness Potential",
    date: "MARCH 15, 2024",
    image: "/Assets/article1.png",
    content: `Discover innovative tools and strategies to elevate your training and achieve your goals faster. This article covers the latest trends in fitness technology, motivation, and community support.`,
  },
  {
    id: "2",
    title: "Community Success Stories: Real Transformations",
    date: "APRIL 01, 2024",
    image: "/Assets/article2.png",
    content: `Hear inspiring tales from our members who have transformed their lives through dedication and support. Learn how community and expert guidance can make a difference.`,
  },
  {
    id: "3",
    title: "Expert Insights: Nutrition & Recovery",
    date: "APRIL 10, 2024",
    image: "/Assets/article3.png",
    content: `Get valuable knowledge from leading experts on optimizing your diet and recovery for peak performance. Tips, recipes, and science-backed advice included.`,
  },
];

export default function ArticlePage({ params }) {
  const actualParams = React.use(params);
  const article = articles.find((a) => a.id === actualParams.id);
  if (!article) {
    return <div className="p-8 text-center text-xl">Article not found.</div>;
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 mt-24">
      <h1 className="text-3xl font-bold mb-4 text-[#2E1065]">
        {article.title}
      </h1>
      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
      <div className="mb-8">
        <Image
          src={article.image}
          alt={article.title}
          width={700}
          height={400}
          className="rounded-xl w-full h-auto"
        />
      </div>
      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
        {article.content}
      </div>
      {/* Extra content for richer article experience */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2 text-[#A78BFA]">
          Key Takeaways
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Practical tips and strategies for your fitness journey</li>
          <li>Expert advice on nutrition, recovery, and motivation</li>
          <li>Community support and real transformation stories</li>
        </ul>
      </div>
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-2 text-[#A78BFA]">
          Related Articles
        </h2>
        <ul className="list-none pl-0">
          {articles
            .filter((a) => a.id !== actualParams.id)
            .map((a) => (
              <li key={a.id} className="mb-2">
                <a
                  href={`/Community/${a.id}`}
                  className="text-indigo-600 hover:underline"
                >
                  {a.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
