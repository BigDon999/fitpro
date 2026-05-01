import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible].
 * Attach `ref` to the element you want to watch.
 * `isVisible` becomes true once it enters the viewport (and stays true).
 *
 * @param {number} threshold  – 0‒1, how much of the element must be visible (default 0.15)
 * @param {string} rootMargin – CSS margin to expand/shrink the detection zone
 */
export function useScrollAnimation(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire only once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
