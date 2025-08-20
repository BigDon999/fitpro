"use client";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .spinner {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #a78bfa;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .hero-section {
          background-image: url("/Assets/FitPro.png");
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          text-align: center;
        }

        .main-header {
          font-size: 40px;
          font-weight: bold;
          max-width: 800px;
          color: #000;
          margin-top: 50px;
        }

        .highlight-text {
          color: #a78bfa;
        }

        .hero-image {
          width: 800px;
          height: auto;
          border-radius: 20px;
          margin-top: 20px;
          max-width: 100%;
        }

        .content-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 30px;
          max-width: 800px;
          width: 100%;
        }

        .header-with-images {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 13px;
          width: 100%;
        }

        .community-header {
          font-size: 24px;
          font-weight: 600;
          color: #000;
          margin: 0;
          text-align: left;
        }

        .user-images-container {
          display: flex;
          gap: -13px;
        }

        .user-image {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: -10px;
        }

        .user-image:first-child {
          margin-left: 0;
        }

        .subtext {
          max-width: 600px;
          font-size: 16px;
          color: #000;
          margin: 0 0 13px 0;
          text-align: left;
        }

        .buttons-container {
          display: flex;
          gap: 15px;
        }

        .btn {
          padding: 4px 30px;
          font-size: 13px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.2s;
        }

        .btn:hover {
          opacity: 0.8;
        }

        .btn-primary {
          background-color: #2e1065;
          color: #fff;
        }

        .btn-secondary {
          background-color: #fff;
          color: #000;
          border: 1px solid #ddd;
        }

        .btn-icon {
          width: 14px;
        }

        /* Tablet styles */
        @media (max-width: 768px) {
          .main-header {
            font-size: 32px;
            margin-top: 40px;
          }

          .hero-image {
            width: 100%;
            max-width: 600px;
          }

          .content-container {
            max-width: 100%;
          }

          .header-with-images {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
          }

          .community-header {
            font-size: 20px;
          }

          .user-images-container {
            flex-shrink: 0;
          }

          .subtext {
            font-size: 15px;
          }
        }

        /* Mobile styles */
        @media (max-width: 480px) {
          .hero-section {
            padding: 20px 15px;
          }

          .main-header {
            font-size: 28px;
            margin-top: 80px;
          }

          .hero-image {
            margin-top: 15px;
          }

          .content-container {
            margin-top: 20px;
          }

          .header-with-images {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .community-header {
            font-size: 18px;
          }

          .user-images-container {
            margin-left: 0;
          }

          .user-image {
            width: 30px;
            height: 30px;
          }

          .subtext {
            font-size: 14px;
          }

          .buttons-container {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            padding: 12px 20px;
            font-size: 14px;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="hero-section">
          {/* Main Header */}
          <h1 className="main-header">
            Transform your fitness <br />{" "}
            <span className="highlight-text">
              Journey with our innovative <br /> tools and community
            </span>
          </h1>
          <p>
            Discover cutting-edge fitness tools, connect with a vibrant
            community, and unlock your full <br /> potential. Our platform is
            designed to empower creators, trainers, and enthusiasts alike.
          </p>
          {/* Center Image */}
          <img src="/Assets/hero2.png" alt="fit pro" className="hero-image" />

          {/* Content below image */}
          <div className="content-container">
            {/* Header with user images */}
            <div className="header-with-images">
              <h2 className="community-header">
                Join a thriving community <br /> of fitness pros
              </h2>

              {/* 4 user images */}
              <div className="user-images-container">
                <img
                  src="/Assets/community1.png"
                  alt="user1"
                  className="user-image"
                />
                <img
                  src="/Assets/community2.png"
                  alt="user2"
                  className="user-image"
                />
                <img
                  src="/Assets/community1.png"
                  alt="user3"
                  className="user-image"
                />
                <img
                  src="/Assets/community2.png"
                  alt="user4"
                  className="user-image"
                />
              </div>
            </div>

            {/* Subtext */}
            <p className="subtext">
              Join thousands of fitness enthusiasts transforming their bodies
              with professional guidance and cutting-edge training programs.
            </p>

            {/* Buttons */}
            <div className="buttons-container">
              <button className="btn btn-primary">
                <img
                  src="/Assets/heroicon1.png"
                  alt="icon1"
                  className="btn-icon"
                />{" "}
                Get Started
              </button>
              <button className="btn btn-secondary">
                <img
                  src="/Assets/heroicon2.png"
                  alt="icon2"
                  className="btn-icon"
                />{" "}
                Learn More
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}