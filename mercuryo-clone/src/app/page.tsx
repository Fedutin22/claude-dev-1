import { HeroCarousel } from "@/components/hero";
import { Container, Section } from "@/components/layout";
import { FadeIn } from "@/components/animations";

export default function Home() {
  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Test Section 1 - To demonstrate smooth scrolling and fade-in */}
      <Section spacing="desktop" id="features">
        <Container>
          <FadeIn>
            <h2 className="mb-8 text-center text-4xl font-bold">Our Features</h2>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              Experience the power of seamless crypto payments with our cutting-edge
              infrastructure. Built for scale, designed for simplicity.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Test Section 2 */}
      <Section spacing="desktop" background="light" id="about">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="mb-8 text-center text-4xl font-bold">About Mercuryo</h2>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              We're building the future of web3 payments. Trusted by 200+ leading
              companies worldwide, processing millions in transactions every month.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Test Section 3 - With stagger animation for cards */}
      <Section spacing="desktop" id="products">
        <Container>
          <FadeIn>
            <h2 className="mb-8 text-center text-4xl font-bold">Our Products</h2>
          </FadeIn>
          <FadeIn stagger={0.15} delay={0.3}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <h3 className="mb-4 text-2xl font-semibold">Product {item}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Test Section 4 */}
      <Section spacing="desktop" background="light" id="contact">
        <Container>
          <FadeIn direction="down" distance={30}>
            <h2 className="mb-8 text-center text-4xl font-bold">Get In Touch</h2>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              Ready to transform your crypto payment infrastructure? Let's talk about
              how Mercuryo can help your business scale.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
