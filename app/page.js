"use client";
import Hero from "./components/Hero";
import Empower from "./components/Empower";
import Unleach from "./components/Unleach";
import Testimonials from "./components/Testimonials";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

/**
 * Wraps a section so it fades in when scrolled into view.
 * direction: "up" | "down" | "left" | "right" | "zoom"
 */
function ScrollSection({ children, direction = "up", delay = 0, className = "" }) {
  const [ref, visible] = useScrollAnimation(0.12);
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${delayClass} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero has its own entrance animation — no extra wrapper needed */}
      <Hero />

      <ScrollSection direction="up">
        <Empower />
      </ScrollSection>

      <ScrollSection direction="up" delay={1}>
        <Unleach />
      </ScrollSection>

      <ScrollSection direction="zoom" delay={1}>
        <Testimonials />
      </ScrollSection>
    </>
  );
}
