"use client";

import { FadeIn } from "@/components/animations";
import { ReactNode } from "react";

export interface BlockchainLogo {
  name: string;
  icon: ReactNode;
  color?: string;
}

export interface BlockchainGridProps {
  logos: BlockchainLogo[];
  stagger?: number;
  delay?: number;
}

export function BlockchainGrid({ 
  logos, 
  stagger = 0.05,
  delay = 0 
}: BlockchainGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
      {logos.map((logo, index) => (
        <FadeIn 
          key={logo.name} 
          delay={delay + index * stagger}
          className="h-full"
        >
          <div 
            className="group flex h-28 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-xl"
            style={{
              boxShadow: logo.color 
                ? `0 0 0 0 ${logo.color}20` 
                : undefined,
            }}
          >
            {/* Glow effect on hover */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: logo.color 
                  ? `radial-gradient(circle at center, ${logo.color}20, transparent 70%)`
                  : 'radial-gradient(circle at center, rgba(147, 51, 234, 0.1), transparent 70%)',
              }}
            />
            
            {/* Logo content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {logo.icon}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

// Default blockchain logos with text placeholders
const defaultLogos: BlockchainLogo[] = [
  { 
    name: "BNB Chain", 
    icon: <div className="text-xl font-bold text-yellow-600">BNB</div>,
    color: "#F3BA2F"
  },
  { 
    name: "Ethereum", 
    icon: <div className="text-xl font-bold text-blue-600">ETH</div>,
    color: "#627EEA"
  },
  { 
    name: "Polygon", 
    icon: <div className="text-xl font-bold text-purple-600">MATIC</div>,
    color: "#8247E5"
  },
  { 
    name: "Avalanche", 
    icon: <div className="text-xl font-bold text-red-600">AVAX</div>,
    color: "#E84142"
  },
  { 
    name: "Arbitrum", 
    icon: <div className="text-xl font-bold text-blue-500">ARB</div>,
    color: "#28A0F0"
  },
  { 
    name: "Optimism", 
    icon: <div className="text-xl font-bold text-red-500">OP</div>,
    color: "#FF0420"
  },
  { 
    name: "Solana", 
    icon: <div className="text-xl font-bold text-purple-500">SOL</div>,
    color: "#9945FF"
  },
  { 
    name: "Near", 
    icon: <div className="text-xl font-bold text-teal-600">NEAR</div>,
    color: "#00C1DE"
  },
  { 
    name: "Fantom", 
    icon: <div className="text-xl font-bold text-blue-400">FTM</div>,
    color: "#1969FF"
  },
  { 
    name: "Cronos", 
    icon: <div className="text-xl font-bold text-blue-700">CRO</div>,
    color: "#002D74"
  },
  { 
    name: "Tron", 
    icon: <div className="text-xl font-bold text-red-600">TRX</div>,
    color: "#FF0013"
  },
  { 
    name: "Cosmos", 
    icon: <div className="text-xl font-bold text-purple-700">ATOM</div>,
    color: "#6F7390"
  },
  { 
    name: "Base", 
    icon: <div className="text-xl font-bold text-blue-600">BASE</div>,
    color: "#0052FF"
  },
  { 
    name: "zkSync", 
    icon: <div className="text-xl font-bold text-gray-800">zkSync</div>,
    color: "#8C8DFC"
  },
];

export function DefaultBlockchainGrid() {
  return <BlockchainGrid logos={defaultLogos} stagger={0.05} delay={0.3} />;
}
