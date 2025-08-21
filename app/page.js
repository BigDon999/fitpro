"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import React, { useState, useEffect } from "react";
import Empower from "./components/Empower";
import Unleach from "./components/Unleach";
import Testimonials from "./components/Testimonials";

export default function Home() {
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
      `}</style>
      <div className="slide-in-bottom">
        <Hero />
        <Empower />
        <Unleach />
        <Testimonials />
      </div>
    </>
  );
}
