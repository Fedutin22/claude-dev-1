"use client";

import { FadeIn } from "@/components/animations";
import Link from "next/link";
import { ReactNode } from "react";

export interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  stats?: Array<{
    label: string;
    value: string;
    icon?: ReactNode;
  }>;
  gradient?: string;
  delay?: number;
}

export function ProductCard({
  title,
  description,
  href,
  icon,
  stats,
  gradient = "from-blue-500/10 to-purple-500/10",
  delay = 0,
}: ProductCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link href={href} className="group block h-full">
        <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:scale-[1.03] hover:border-transparent hover:shadow-2xl hover:shadow-purple-500/20">
          {/* Gradient background that appears on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          />

          {/* Glow effect border */}
          <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            {icon && (
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                {icon}
              </div>
            )}

            {/* Title */}
            <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-700">
              {title}
            </h3>

            {/* Description */}
            <p className="mb-6 text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              {description}
            </p>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="mb-6 space-y-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm"
                  >
                    {stat.icon && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-purple-600 transition-colors duration-300 group-hover:bg-purple-100">
                        {stat.icon}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Link */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-all duration-300 group-hover:gap-4 group-hover:text-purple-700">
              Learn more
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
