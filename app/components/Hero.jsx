"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  

  return (
    <>
      <section className="hero-section">
        <h1 className="main-header slide-in-left">
          Transform your fitness <br />
          <span className="highlight-text slide-in-right">
            Journey with our innovative <br /> tools and community
          </span>
        </h1>
        <p className="slide-in-bottom">
          Discover cutting-edge fitness tools, connect with a vibrant community,
          and unlock your full <br /> potential. Our platform is designed to
          empower creators, trainers, and enthusiasts alike.
        </p>
        <Image
          src="/Assets/hero2.png"
          alt="fit pro"
          width={800}
          height={400}
          className="hero-image slide-in-image"
          priority
        />
        <div className="content-container">
          <div className="header-with-images">
            <h2 className="community-header slide-in-left">
              Join a thriving community <br /> of fitness pros
            </h2>
            <div className="user-images-container slide-in-right">
              <Image
                src="/Assets/community1.png"
                alt="user1"
                width={35}
                height={35}
                className="user-image"
                priority
              />
              <Image
                src="/Assets/community2.png"
                alt="user2"
                width={35}
                height={35}
                className="user-image"
                priority
              />
              <Image
                src="/Assets/community1.png"
                alt="user3"
                width={35}
                height={35}
                className="user-image"
                priority
              />
              <Image
                src="/Assets/community2.png"
                alt="user4"
                width={35}
                height={35}
                className="user-image"
                priority
              />
            </div>
          </div>
          <p className="subtext slide-in-bottom">
            Join thousands of fitness enthusiasts transforming their bodies with
            professional guidance and cutting-edge training programs.
          </p>
          <div className="buttons-container">
            <Link href="/pricing" passHref legacyBehavior>
              <button className="btn btn-primary slide-in-left">
                <Image
                  src="/Assets/heroicon1.png"
                  alt="icon1"
                  width={14}
                  height={14}
                  className="btn-icon"
                  priority
                />{" "}
                Get Started
              </button>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <button className="btn btn-secondary slide-in-right">
                <Image
                  src="/Assets/heroicon2.png"
                  alt="icon2"
                  width={14}
                  height={14}
                  className="btn-icon"
                  priority
                />{" "}
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <style jsx>{`
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
          gap: 0;
          position: relative;
        }
        .user-image {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: -18px;
          box-shadow: 0 0 0 2px #fff;
          position: relative;
          z-index: 2;
        }
        .user-image:first-child {
          margin-left: 0;
          z-index: 2;
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
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInBottom {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInImage {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .slide-in-bottom {
          animation: slideInBottom 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .slide-in-image {
          animation: slideInImage 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </>
  );
}
