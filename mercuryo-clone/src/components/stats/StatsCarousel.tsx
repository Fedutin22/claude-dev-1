"use client";

import { Marquee } from "@/components/common";

const stats = [
  { value: "$2.5B+", label: "Transaction Volume" },
  { value: "200+", label: "Web3 Partners" },
  { value: "150+", label: "Countries Supported" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Customer Support" },
  { value: "5M+", label: "Users Worldwide" },
];

export default function StatsCarousel() {
  return (
    <Marquee speed={0.8} pauseOnHover={true}>
      <div className="flex gap-16 px-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex min-w-[200px] flex-col items-center">
            <div className="text-5xl font-bold text-blue-600">{stat.value}</div>
            <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </Marquee>
  );
}
