"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

/**
 * FadeIn component with scroll-triggered animations
 * Fades in and slides elements when they enter the viewport
 *
 * @param direction - Direction of slide animation (up, down, left, right, none)
 * @param distance - Distance to slide in pixels (default: 40px)
 * @param duration - Animation duration in seconds (default: 0.7s)
 * @param stagger - Delay between child elements in seconds (default: 0)
 * @param delay - Initial delay before animation starts (default: 0)
 * @param once - Only animate once (default: true)
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.7,
  stagger = 0,
  once = true,
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !elementRef.current) {
      // Skip animations if user prefers reduced motion
      if (elementRef.current) {
        gsap.set(elementRef.current.children, { opacity: 1, clearProps: "all" });
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;

    // Determine initial position based on direction
    const initialX = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const initialY = direction === "up" ? distance : direction === "down" ? -distance : 0;

    // Set initial state
    gsap.set(element.children.length > 0 ? element.children : element, {
      opacity: 0,
      x: initialX,
      y: initialY,
    });

    // Create scroll trigger animation
    const animation = gsap.to(
      element.children.length > 0 ? element.children : element,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Start when 20% of element is in viewport
          end: "bottom 20%",
          toggleActions: once ? "play none none none" : "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      }
    );

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, direction, distance, duration, stagger, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
