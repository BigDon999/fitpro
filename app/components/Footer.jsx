import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              JOIN OUR FITNESS <br />
              COMMUNITY TODAY!
            </h2>
            <button className="bg-[#2E1065] hover:bg-[#A78BFA] text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors duration-300">
              <Image
                src="/Assets/heroicon1.png"
                alt="Arrow icon"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
              />
              Join Today
            </button>
          </div>

          {/* Right Section - Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
            <div>
              <h3 className="text-lg font-semibold mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="/Features"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    FEATURES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    PRICING
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">RESOURCES</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    SUPPORT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    CAREERS
                  </a>
                </li>
                <li>
                  <a
                    href="/Contact"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            COPYRIGHT © 2023 Wegio Inc. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              TERMS OF SERVICE
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              PRIVACY POLICY
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              COOKIE POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
