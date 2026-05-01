"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small rAF delay so the browser has painted the initial frame
    // with layout fully applied before we start the fade-in
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className={`${styles.heroSection} ${isVisible ? styles.visible : ""}`}
    >
      <h1 className={`${styles.mainHeader} ${styles.slideInLeft}`}>
        Transform your fitness <br />
        <span className={`${styles.highlightText} ${styles.slideInRight}`}>
          Journey with our innovative <br /> tools and community
        </span>
      </h1>
      <p className={styles.slideInBottom}>
        Discover cutting-edge fitness tools, connect with a vibrant community,
        and unlock your full <br /> potential. Our platform is designed to
        empower creators, trainers, and enthusiasts alike.
      </p>
      <Image
        src="/Assets/hero2.png"
        alt="fit pro"
        width={800}
        height={400}
        className={`${styles.heroImage} ${styles.slideInImage}`}
        priority
      />
      <div className={styles.contentContainer}>
        <div className={styles.headerWithImages}>
          <h2 className={`${styles.communityHeader} ${styles.slideInLeft}`}>
            Join a thriving community <br /> of fitness pros
          </h2>
          <div className={`${styles.userImagesContainer} ${styles.slideInRight}`}>
            <div className="flex -space-x-4">
              <Image
                src="/Assets/community1.png"
                alt="user1"
                width={35}
                height={35}
                className={styles.userImage}
                priority
              />
              <Image
                src="/Assets/community2.png"
                alt="user2"
                width={35}
                height={35}
                className={styles.userImage}
                priority
              />
              <Image
                src="/Assets/community1.png"
                alt="user3"
                width={35}
                height={35}
                className={styles.userImage}
                priority
              />
              <Image
                src="/Assets/community2.png"
                alt="user4"
                width={35}
                height={35}
                className={styles.userImage}
                priority
              />
            </div>
          </div>
        </div>
        <p className={`${styles.subtext} ${styles.slideInBottom}`}>
          Join thousands of fitness enthusiasts transforming their bodies with
          professional guidance and cutting-edge training programs.
        </p>
        <div className={styles.buttonsContainer}>
          <Link
            href="/pricing"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.slideInLeft}`}
          >
            <Image
              src="/Assets/heroicon1.png"
              alt="icon1"
              width={14}
              height={14}
              className={styles.btnIcon}
              priority
            />{" "}
            Get Started
          </Link>
          <Link
            href="/about"
            className={`${styles.btn} ${styles.btnSecondary} ${styles.slideInRight}`}
          >
            <Image
              src="/Assets/heroicon2.png"
              alt="icon2"
              width={14}
              height={14}
              className={styles.btnIcon}
              priority
            />{" "}
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}