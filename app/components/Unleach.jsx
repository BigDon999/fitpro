import React from "react";
import Image from "next/image";

const App = () => {
  // Data for personalized workout plans
  const workoutPlans = [
    {
      id: 1,
      title: "Personalized Workout Plans",
      description:
        "Tailored Fitness Routines Designed To Meet Your Individual Goals And Fitness Level.",
      image: "/Assets/workout.jpg",
      icon: "/Assets/unleachicon.png",
    },
    {
      id: 2,
      title: "Personalized Workout Plans",
      description:
        "Tailored fitness routines designed to meet your individual goals and fitness level.",
      image: "/Assets/nutrient.jpg",
      icon: "/Assets/unleachicon.png",
    },
  ];

  // Data for community support cards
  const communityCards = [
    {
      id: 1,
      title: "Community Support",
      description:
        "Connect with like-minded individuals, share progress, and find motivation in our vibrant community.",
      image: "/Assets/community.jpg",
      icon: "/Assets/unleachicon.png",
    },
    {
      id: 2,
      title: "Expert Coaching",
      description:
        "Get personalized advice and guidance from certified fitness professionals.",
      image: "/Assets/coashing.jpg",
      icon: "/Assets/unleachicon.png",
    },
    {
      id: 3,
      title: "Progress Tracking",
      description:
        "Monitor your achievements with detailed analytics and milestone celebrations.",
      image: "/Assets/tracking.jpg",
      icon: "/Assets/unleachicon.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 slide-in-bottom">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header and Subtext */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#A78BFA] mb-4 leading-tight">
            Unleash Your Potential,
            <br />
            Transform Your Life
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Discover Our Comprehensive Fitness Tools, Connect With A Thriving
            Community, And Be Inspired By Countless Success Stories. Your
            Journey To A Healthier You Starts Here.
          </p>
        </div>

        {/* Personalized Workout Plans Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {workoutPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={192}
                  height={128}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="flex items-start">
                <Image
                  src={plan.icon}
                  alt={`${plan.title} Icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain mr-3 sm:mr-4 flex-shrink-0"
                />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Community Support Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {communityCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={128}
                  height={96}
                  className="w-full h-24 sm:h-28 md:h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="flex items-start">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mr-3 flex-shrink-0"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Feature Announcement */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200">
            NEW FITNESS TOOLS AVAILABLE (BETA)
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
