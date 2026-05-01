"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Features", label: "Features" },
    { href: "/Community", label: "Community" },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ""}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/Assets/Artboard 2.png"
            alt="FitPro Logo"
            width={36}
            height={36}
            style={{ borderRadius: "8px" }}
            priority
          />
          <span className={styles.logoText}>FitPro</span>
        </Link>

        {/* Desktop nav pill */}
        <div className={styles.navLinks}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.navLinkActive : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link href="/Contact" className={styles.ctaBtn}>
          Contact
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="navigation" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/Contact"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
