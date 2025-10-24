"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations";

export interface UseCase {
  id: string;
  title: string;
  heading: string;
  description: string;
}

export interface UseCaseTabsProps {
  useCases?: UseCase[];
}

const defaultUseCases: UseCase[] = [
  {
    id: "wallets",
    title: "Wallets",
    heading: "Crypto Wallets Integration",
    description:
      "Seamlessly integrate crypto on-ramp and off-ramp functionality into your wallet. Enable users to buy crypto with fiat currencies and sell crypto for fiat, all within your application. Support for 90+ cryptocurrencies and 30+ fiat currencies ensures global coverage.",
  },
  {
    id: "dexs",
    title: "DEXs",
    heading: "Decentralized Exchanges",
    description:
      "Power your DEX with fiat-to-crypto rails that make it easy for users to enter the crypto ecosystem. Reduce friction for new users and increase trading volume by allowing direct fiat deposits. Compliant, secure, and fast integration.",
  },
  {
    id: "nft",
    title: "NFT & GameFi",
    heading: "NFT Marketplaces & Gaming",
    description:
      "Enable users to purchase NFTs and in-game assets with credit cards and bank transfers. Lower the barrier to entry for mainstream users unfamiliar with crypto. Drive sales and engagement with one-click fiat purchases.",
  },
  {
    id: "yield",
    title: "Yield Platforms",
    heading: "DeFi Yield Platforms",
    description:
      "Allow users to deposit fiat directly into yield-generating protocols. Simplify the user journey from traditional banking to DeFi yield farming. Increase TVL by making it easier for non-crypto natives to participate in DeFi.",
  },
  {
    id: "extensions",
    title: "Browser Extensions",
    heading: "Browser Extensions & Plugins",
    description:
      "Integrate powerful payment infrastructure into browser extensions. Enable users to buy crypto, make payments, and access web3 services directly from their browser. Perfect for wallet extensions, payment plugins, and web3 tools.",
  },
];

export function UseCaseTabs({ useCases = defaultUseCases }: UseCaseTabsProps) {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 border-b border-gray-200 pb-0 md:justify-center">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-all duration-300 hover:text-purple-600 md:px-6 md:text-base ${
                activeTab === useCase.id
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-600"
              }`}
              aria-selected={activeTab === useCase.id}
              role="tab"
            >
              {useCase.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[200px]">
        {useCases.map((useCase) => (
          <div
            key={useCase.id}
            className={`transition-all duration-400 ${
              activeTab === useCase.id
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0"
            }`}
            role="tabpanel"
            aria-hidden={activeTab !== useCase.id}
          >
            <FadeIn key={activeTab} delay={0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
                {/* Heading */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  {useCase.heading}
                </h3>

                {/* Description */}
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  {useCase.description}
                </p>

                {/* Engagement Buttons (disabled state) */}
                <div className="flex items-center gap-4">
                  <button
                    disabled
                    className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400 transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    Like
                  </button>
                  <button
                    disabled
                    className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400 transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                      />
                    </svg>
                    Dislike
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
}
