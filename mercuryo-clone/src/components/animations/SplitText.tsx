"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  type?: "words" | "chars";
  stagger?: number;
  delay?: number;
  duration?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "scale";
}

/**
 * SplitText component for animated text reveals
 * Splits text into words or characters and animates them sequentially
 */
export default function SplitText({
  children,
  className = "",
  type = "words",
  stagger = 0.05,
  delay = 0,
  duration = 0.6,
  animateFrom = "bottom",
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const text = container.textContent || "";

    // Split text into words or characters
    const segments = type === "words"
      ? text.split(" ").filter(word => word.length > 0)
      : text.split("").filter(char => char.trim().length > 0);

    // Clear container and add split segments
    container.innerHTML = "";

    segments.forEach((segment, index) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.overflow = "hidden";

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = segment;

      span.appendChild(inner);
      container.appendChild(span);

      // Add space after word (except last)
      if (type === "words" && index < segments.length - 1) {
        container.appendChild(document.createTextNode(" "));
      }
    });

    // Set up animation based on direction
    const inners = container.querySelectorAll("span > span");

    let fromVars: any = { opacity: 0 };

    switch (animateFrom) {
      case "bottom":
        fromVars.y = 20;
        break;
      case "top":
        fromVars.y = -20;
        break;
      case "left":
        fromVars.x = -20;
        break;
      case "right":
        fromVars.x = 20;
        break;
      case "scale":
        fromVars.scale = 0.5;
        break;
    }

    gsap.set(inners, fromVars);

    // Create scroll trigger animation
    const animation = gsap.to(inners, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 70%", // Start when 30% in viewport
        toggleActions: "play none none none",
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
      // Restore original text for SEO
      container.textContent = text;
    };
  }, [type, stagger, delay, duration, animateFrom]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
