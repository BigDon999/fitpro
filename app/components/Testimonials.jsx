"use client";
import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson, Personal Trainer",
      quote:
        "This Platform Has Revolutionized How I Connect With My Clients And Manage My Fitness Programs. Truly A Game-Changer!",
      avatar: "/Assets/avater1.jpg",
    },
    {
      id: 2,
      name: "Sarah Williams",
      quote:
        "The Results I've Achieved Through This Platform Have Exceeded All My Expectations. My Confidence Has Skyrocketed!",
      avatar: "/Assets/avater2.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      quote:
        "I've Never Been Able To Track Progress So Accurately Before. The Analytics Are Amazing!",
      avatar: "/Assets/avater3.jpg",
    },
    {
      id: 4,
      name: "Jessica Rodriguez",
      quote:
        "The Client Management System Has Saved Me Hours Each Week. I Can Focus More On What Matters.",
      avatar: "/Assets/avater4.jpg",
    },
    {
      id: 5,
      name: "David Kim",
      quote:
        "My Students Love The Interactive Features. Engagement Has Increased Dramatically!",
      avatar: "/Assets/avater5.jpg",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 text-center">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
          EMPOWERING YOUR FITNESS <br/>JOURNEY
        </h1>
        <h2 className="text-base xs:text-lg sm:text-4xl md:text-5xl font-semibold text-gray-500 mb-3 sm:mb-4">
          COMMUNITY & SUCCESS STORIES
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
          Discover How Our Fitness Community Helps Individuals Achieve Their
          Fitness Goals And Transform Their Lives.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
        <div className="flex flex-col items-center">
          {/* Testimonial Content */}
          <div className="text-center max-w-2xl mx-auto">
            {/* Avatar */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 border-4 border-white shadow-lg">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <div className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-2">
              {testimonials[currentIndex].name}
            </div>

            {/* Quote */}
            <div className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed italic px-4 sm:px-6">
              "{testimonials[currentIndex].quote}"
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#A78BFA] mb-3 sm:mb-4 leading-tight">
              Unleash Your Potential: <br className="hidden sm:inline" />Transform Your Fitness <br className="hidden sm:inline" />Journey Today!
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 px-2">
              Join our growing community of fitness professionals and clients
              achieving remarkable results together.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="bg-[#2E1065] hover:bg-purple-800 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                <img
                  src="/Assets/heroicon1.png"
                  alt="arrow"
                  className="w-4 h-4"
                />
                <span>Get Started</span>
              </button>
              <button className="border-2 border-[#000000] text-purple-700 hover:bg-[#A78BFA] hover:text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                <img
                  src="/Assets/heroicon2.png"
                  alt="info"
                  className="w-4 h-4"
                />
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-6 md:mt-0">
            <img
              src="/Assets/unleachpic.png"
              alt="Fitness Professional"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;