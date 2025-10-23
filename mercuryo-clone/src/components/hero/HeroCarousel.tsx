"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { gsap } from "gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  bgGradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "The payment engine",
    subtitle: "behind top web3 business",
    description:
      "Empower your users to buy, sell, and spend crypto seamlessly with our all-in-one payment infrastructure.",
    ctaText: "Get Started",
    ctaLink: "/get-started",
    bgGradient: "from-blue-600 via-purple-600 to-pink-600",
  },
  {
    id: 2,
    title: "Crypto payments",
    subtitle: "made simple",
    description:
      "Accept crypto payments globally with instant settlement and no chargebacks. Perfect for businesses of all sizes.",
    ctaText: "Learn More",
    ctaLink: "/learn-more",
    bgGradient: "from-purple-600 via-pink-600 to-red-600",
  },
  {
    id: 3,
    title: "Scale your business",
    subtitle: "with confidence",
    description:
      "Join 200+ leading web3 companies processing millions in transactions monthly with enterprise-grade infrastructure.",
    ctaText: "View Case Studies",
    ctaLink: "/case-studies",
    bgGradient: "from-pink-600 via-red-600 to-orange-600",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate content on slide change
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll(
        ".hero-title, .hero-subtitle, .hero-description, .hero-cta"
      );

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [activeIndex]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleTabClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-90`}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  ref={contentRef}
                  className="max-w-4xl text-white"
                >
                  <h1 className="hero-title text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="hero-subtitle mt-2 text-4xl font-semibold md:text-5xl lg:text-6xl">
                    {slide.subtitle}
                  </p>
                  <p className="hero-description mt-6 max-w-2xl text-lg md:text-xl lg:text-2xl">
                    {slide.description}
                  </p>
                  <button className="hero-cta mt-8 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:scale-105 hover:shadow-2xl">
                    {slide.ctaText}
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tab Navigation */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleTabClick(index)}
                className={`group relative h-1 w-16 overflow-hidden rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-24 bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : "false"}
              >
                {/* Progress bar for active slide */}
                {activeIndex === index && (
                  <div
                    className="absolute inset-0 bg-white/50"
                    style={{
                      animation: "progress 5s linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-12 right-8 z-20 text-white">
        <span className="text-2xl font-bold">{activeIndex + 1}</span>
        <span className="text-lg opacity-50"> / {slides.length}</span>
      </div>

      {/* CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
