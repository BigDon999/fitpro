"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "10px",
    transition: "0.3s ease",
  };

  const activeLinkStyle = {
    ...linkStyle,
    background: "#2E1065",
    color: "#fff",
  };

  function hoverOn(e) {
    e.currentTarget.style.background = "#2E1065";
    e.currentTarget.style.color = "#fff";
  }

  function hoverOff(e) {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "#000";
  }

  const dropdownLinkStyle = {
    color: "#000",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    transition: "0.3s ease",
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <nav
      style={{
        position: "fixed", // Changed from absolute to fixed for scroll effect
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        zIndex: 50,
        background: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.2)"
          : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "29px", fontWeight: "bold", color: "#A78BFA" }}>
        FitPro
      </div>

      {/* Desktop Navlinks - now centered */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "50px",
          background: "#A78BFA",
          padding: "10px 40px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Link
          href="/"
          style={pathname === "/" ? activeLinkStyle : linkStyle}
          onMouseEnter={(e) => hoverOn(e)}
          onMouseLeave={(e) => hoverOff(e)}
        >
          Home
        </Link>
        <Link
          href="/Features"
          style={pathname === "/Features" ? activeLinkStyle : linkStyle}
          onMouseEnter={(e) => hoverOn(e)}
          onMouseLeave={(e) => hoverOff(e)}
        >
          Features
        </Link>
        <Link
          href="/Community"
          style={pathname === "/Community" ? activeLinkStyle : linkStyle}
          onMouseEnter={(e) => hoverOn(e)}
          onMouseLeave={(e) => hoverOff(e)}
        >
          Community
        </Link>
      </div>

      {/* Desktop Register Button */}
      <Link href="/Contact" passHref>
        <button
          className="register-btn"
          style={{
            background: "#A78BFA",
            color: "#000",
            border: "none",
            padding: "12px 28px",
            borderRadius: "15px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#2E1065";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#A78BFA";
            e.currentTarget.style.color = "#000";
          }}
        >
          Contact
        </button>
      </Link>

      {/* Mobile Toggle Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "26px",
          cursor: "pointer",
          display: "none", // hidden on desktop
        }}
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu (with Register inside) */}
      {menuOpen && (
        <div
          className="dropdown"
          style={{
            position: "absolute",
            top: "70px",
            right: "40px",
            background: "rgba(255, 255, 255, 0.95)", // Made slightly transparent
            backdropFilter: "blur(10px)", // Added blur effect
            padding: "20px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "200px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255, 255, 255, 0.2)", // Added subtle border
          }}
        >
          <Link
            href="/"
            style={
              pathname === "/"
                ? { ...dropdownLinkStyle, background: "#2E1065", color: "#fff" }
                : dropdownLinkStyle
            }
          >
            Home
          </Link>
          <Link
            href="/Features"
            style={
              pathname === "/Features"
                ? { ...dropdownLinkStyle, background: "#2E1065", color: "#fff" }
                : dropdownLinkStyle
            }
          >
            Features
          </Link>
          <Link
            href="/Community"
            style={
              pathname === "/Community"
                ? { ...dropdownLinkStyle, background: "#2E1065", color: "#fff" }
                : dropdownLinkStyle
            }
          >
            Community
          </Link>
          <Link href="/Contact" passHref>
            <button
              style={{
                background: "#A78BFA",
                color: "#000",
                border: "none",
                padding: "12px 28px",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2E1065";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#A78BFA";
                e.currentTarget.style.color = "#000";
              }}
            >
              Contact
            </button>
          </Link>
        </div>
      )}

      {/* CSS Media Query */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .register-btn {
            display: none !important;
          }
          .menu-toggle {
            display: block !important;
            color: #a78bfa;
          }
        }
      `}</style>
    </nav>
  );
}

/* --- Styles --- */
const linkStyle = {
  color: "#000",
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "10px",
  transition: "0.3s ease",
};

function hoverOn(e) {
  e.currentTarget.style.background = "#2E1065";
  e.currentTarget.style.color = "#fff";
}

function hoverOff(e) {
  e.currentTarget.style.background = "transparent";
  e.currentTarget.style.color = "#000";
}

const dropdownLinkStyle = {
  color: "#000",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: "8px",
  transition: "0.3s ease",
};

/* --- Loader Styles --- */
<style jsx>{`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
  }
  .spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #a78bfa;
    border-radius: 50%;
    width: 30px;
    height: 30px;
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
`}</style>;
