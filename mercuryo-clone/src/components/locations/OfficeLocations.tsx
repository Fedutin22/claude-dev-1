"use client";

import { FadeIn } from "@/components/animations";
import { useRef } from "react";

export interface Office {
  city: string;
  address: string;
  country: string;
  countryFlag: string;
  image?: string;
  backgroundColor?: string;
}

export interface OfficeLocationsProps {
  offices?: Office[];
}

const defaultOffices: Office[] = [
  {
    city: "Valencia",
    address: "Carrer de Colón 45, 46004",
    country: "Spain",
    countryFlag: "🇪🇸",
    backgroundColor: "from-orange-400 to-red-500",
  },
  {
    city: "Zagreb",
    address: "Savska cesta 41, 10000",
    country: "Croatia",
    countryFlag: "🇭🇷",
    backgroundColor: "from-blue-400 to-blue-600",
  },
  {
    city: "Limassol",
    address: "Arch. Makariou III 167, 3026",
    country: "Cyprus",
    countryFlag: "🇨🇾",
    backgroundColor: "from-green-400 to-teal-500",
  },
  {
    city: "London",
    address: "20 Liverpool Street, EC2M 7QD",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    backgroundColor: "from-purple-400 to-indigo-600",
  },
  {
    city: "Denver",
    address: "1801 California St, CO 80202",
    country: "United States",
    countryFlag: "🇺🇸",
    backgroundColor: "from-blue-500 to-purple-600",
  },
];

export function OfficeLocations({ offices = defaultOffices }: OfficeLocationsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:block"
        aria-label="Scroll left"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:block"
        aria-label="Scroll right"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 md:px-12"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {offices.map((office, index) => (
          <FadeIn key={office.city} delay={index * 0.1}>
            <div className="w-[300px] flex-shrink-0 snap-start md:w-[350px]">
              <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                {/* Image Placeholder with Gradient */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${office.backgroundColor || "from-purple-400 to-blue-500"} transition-transform duration-300 group-hover:scale-105`}
                >
                  {/* Country Flag Overlay */}
                  <div className="absolute right-4 top-4 text-4xl opacity-80">
                    {office.countryFlag}
                  </div>
                  {/* City Name Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                      {office.city}
                    </h3>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-6">
                  <div className="mb-3 flex items-start gap-2">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">{office.address}</p>
                      <p className="text-sm text-gray-500">{office.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Scroll Indicators (dots) */}
      <div className="mt-6 flex justify-center gap-2">
        {offices.map((office, index) => (
          <button
            key={office.city}
            onClick={() => {
              if (scrollContainerRef.current) {
                const scrollAmount = index * 350;
                scrollContainerRef.current.scrollTo({
                  left: scrollAmount,
                  behavior: "smooth",
                });
              }
            }}
            className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-purple-600"
            aria-label={`Scroll to ${office.city}`}
          />
        ))}
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
