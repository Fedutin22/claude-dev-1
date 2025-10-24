import { HeroCarousel } from "@/components/hero";
import { Container, Section } from "@/components/layout";
import { FadeIn, SplitText } from "@/components/animations";
import { Marquee } from "@/components/common";
import { StatsCarousel } from "@/components/stats";
import { ProductCard } from "@/components/products";
import { DefaultBlockchainGrid } from "@/components/blockchain";
import { UseCaseTabs } from "@/components/use-cases";
import { OfficeLocations } from "@/components/locations";

export default function Home() {
  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Test Section 1 - With split-text animation */}
      <Section spacing="desktop" id="features">
        <Container>
          <SplitText className="mb-8 text-center text-4xl font-bold">
            Our Features
          </SplitText>
          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              Experience the power of seamless crypto payments with our cutting-edge
              infrastructure. Built for scale, designed for simplicity.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Test Section 2 - With character split animation */}
      <Section spacing="desktop" background="light" id="about">
        <Container>
          <SplitText className="mb-8 text-center text-4xl font-bold" type="chars" stagger={0.03}>
            About Mercuryo
          </SplitText>
          <FadeIn delay={0.8}>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              We&apos;re building the future of web3 payments. Trusted by 200+ leading
              companies worldwide, processing millions in transactions every month.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Products Section - Interactive Cards */}
      <Section spacing="desktop" id="products">
        <Container>
          <SplitText className="mb-4 text-center text-4xl font-bold">
            Our Products
          </SplitText>
          <FadeIn delay={0.3}>
            <p className="mb-12 text-center text-lg text-gray-600">
              Comprehensive solutions for crypto payments and web3 integration
            </p>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <ProductCard
              title="On Ramp"
              description="Seamlessly convert fiat to crypto with our industry-leading on-ramp solution. Support for 90+ cryptocurrencies and 30+ fiat currencies."
              href="/products/on-ramp"
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              stats={[
                {
                  value: "90+ Cryptocurrencies",
                  label: "Supported Assets",
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  value: "150+ Countries",
                  label: "Global Coverage",
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  value: "99.9% Uptime",
                  label: "Reliability",
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ]}
              gradient="from-blue-500/10 to-cyan-500/10"
              delay={0.5}
            />
            <ProductCard
              title="Spend"
              description="Enable crypto spending for your users with virtual and physical cards. Instant settlements, global acceptance, and seamless integration."
              href="/products/spend"
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
              stats={[
                {
                  value: "Visa & Mastercard",
                  label: "Card Networks",
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ),
                },
                {
                  value: "Instant Settlement",
                  label: "Transaction Speed",
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  value: "40M+ Merchants",
                  label: "Acceptance",
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
              ]}
              gradient="from-purple-500/10 to-pink-500/10"
              delay={0.7}
            />
          </div>
        </Container>
      </Section>

      {/* Blockchain Networks Section */}
      <Section spacing="desktop" background="light" id="blockchains">
        <Container>
          <SplitText className="mb-4 text-center text-4xl font-bold">
            Supported Blockchain Networks
          </SplitText>
          <FadeIn delay={0.3}>
            <p className="mb-12 text-center text-lg text-gray-600">
              Multi-chain support for maximum flexibility and reach
            </p>
          </FadeIn>
          <DefaultBlockchainGrid />
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="desktop" id="stats">
        <Container>
          <SplitText className="mb-12 text-center text-3xl font-bold">
            Our Impact in Numbers
          </SplitText>
        </Container>
        <StatsCarousel />
      </Section>

      {/* Use Cases Section */}
      <Section spacing="desktop" background="light" id="use-cases">
        <Container>
          <SplitText className="mb-4 text-center text-4xl font-bold">
            Built for Every Use Case
          </SplitText>
          <FadeIn delay={0.3}>
            <p className="mb-12 text-center text-lg text-gray-600">
              From wallets to DeFi platforms, we power the entire web3 ecosystem
            </p>
          </FadeIn>
          <UseCaseTabs />
        </Container>
      </Section>

      {/* Marquee Section - Partner Logos */}
      <Section spacing="desktop" id="partners">
        <Container>
          <SplitText className="mb-12 text-center text-3xl font-bold">
            Trusted by Leading Web3 Companies
          </SplitText>
        </Container>
        <Marquee speed={1.5} className="py-8">
          <div className="flex gap-12 px-6">
            {["Binance", "Coinbase", "MetaMask", "Trust Wallet", "Ledger", "Uniswap", "OpenSea", "Polygon"].map((company) => (
              <div
                key={company}
                className="flex h-20 w-40 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-xl font-semibold text-gray-700 shadow-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee speed={1} direction="right" className="py-8">
          <div className="flex gap-12 px-6">
            {["Bitcoin", "Ethereum", "USDT", "BNB", "Solana", "Cardano", "XRP", "Polkadot"].map((crypto) => (
              <div
                key={crypto}
                className="flex h-20 w-40 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 px-6 text-xl font-semibold text-white shadow-md"
              >
                {crypto}
              </div>
            ))}
          </div>
        </Marquee>
      </Section>

      {/* Office Locations Section */}
      <Section spacing="desktop" id="offices">
        <Container>
          <SplitText className="mb-4 text-center text-4xl font-bold">
            Our Global Presence
          </SplitText>
          <FadeIn delay={0.3}>
            <p className="mb-12 text-center text-lg text-gray-600">
              With offices across the globe, we&apos;re always close to our partners
            </p>
          </FadeIn>
        </Container>
        <OfficeLocations />
      </Section>

      {/* Test Section 4 */}
      <Section spacing="desktop" background="light" id="contact">
        <Container>
          <FadeIn direction="down" distance={30}>
            <h2 className="mb-8 text-center text-4xl font-bold">Get In Touch</h2>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              Ready to transform your crypto payment infrastructure? Let&apos;s talk about
              how Mercuryo can help your business scale.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
