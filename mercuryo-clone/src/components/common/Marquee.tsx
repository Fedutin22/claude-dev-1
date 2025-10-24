"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Marquee component for infinite horizontal scrolling
 * @param speed - Speed multiplier (default: 1, higher = faster)
 * @param direction - Scroll direction (default: "left")
 * @param pauseOnHover - Pause animation on hover (default: true)
 */
export default function Marquee({
  children,
  speed = 1,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return;

    const marquee = marqueeRef.current;
    const content = contentRef.current;

    // Calculate how many times to duplicate for seamless loop
    const contentWidth = content.scrollWidth;
    const viewportWidth = marquee.offsetWidth;
    const duplicates = Math.ceil(viewportWidth / contentWidth) + 2;

    // Clone content for seamless loop
    const clone = content.cloneNode(true) as HTMLDivElement;
    marquee.appendChild(clone);

    // Add more clones if needed
    for (let i = 1; i < duplicates; i++) {
      const additionalClone = content.cloneNode(true) as HTMLDivElement;
      marquee.appendChild(additionalClone);
    }

    // Calculate animation duration based on speed
    const baseDuration = 20; // Base duration in seconds
    const duration = baseDuration / speed;

    // Set initial position
    gsap.set(marquee.children, {
      x: direction === "left" ? 0 : -contentWidth,
    });

    // Create infinite animation
    const animation = gsap.to(marquee.children, {
      x: direction === "left" ? -contentWidth : contentWidth,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xValue = parseFloat(x);
          if (direction === "left") {
            return `${xValue % contentWidth}px`;
          } else {
            return `${((xValue % contentWidth) + contentWidth) % contentWidth}px`;
          }
        },
      },
    });

    animationRef.current = animation;

    // Pause on hover if enabled
    if (pauseOnHover) {
      marquee.addEventListener("mouseenter", () => animation.pause());
      marquee.addEventListener("mouseleave", () => animation.resume());
    }

    // Cleanup
    return () => {
      animation.kill();
      // Remove cloned elements
      while (marquee.children.length > 1) {
        marquee.removeChild(marquee.lastChild!);
      }
    };
  }, [speed, direction, pauseOnHover]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={marqueeRef} className="flex">
        <div ref={contentRef} className="flex shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
