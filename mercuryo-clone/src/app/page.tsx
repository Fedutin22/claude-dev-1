import { Container, Section, Grid } from "@/components/layout";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section spacing="desktop" className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Mercuryo Clone</h1>
            <p className="mt-4 text-xl md:text-2xl">
              Next.js 14 + TypeScript + Tailwind CSS + GSAP
            </p>
            <p className="mt-2 text-gray-600">Responsive Layout System Implemented!</p>
          </div>
        </Container>
      </Section>

      {/* Test Grid Section */}
      <Section spacing="desktop">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold">Responsive Grid Test</h2>
          <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="lg">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">Card {item}</h3>
                <p className="mt-2 text-gray-600">
                  1 col mobile, 2 cols tablet, 4 cols desktop
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Container Widths Test */}
      <Section spacing="desktop" background="light">
        <Container maxWidth="narrow" className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Container Variants</h2>
          <p className="text-gray-600">This section uses narrow container (960px)</p>
        </Container>
      </Section>

      {/* Spacing Test */}
      <Section spacing="desktop">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold">Responsive Spacing</h2>
          <Grid cols={{ mobile: 1, tablet: 3, desktop: 3 }} gap="md">
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="font-semibold text-blue-900">Mobile</h3>
              <p className="mt-2 text-sm text-blue-700">Padding: 64px (4rem)</p>
            </div>
            <div className="rounded-lg bg-green-50 p-6">
              <h3 className="font-semibold text-green-900">Tablet</h3>
              <p className="mt-2 text-sm text-green-700">Padding: 96px (6rem)</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-6">
              <h3 className="font-semibold text-purple-900">Desktop</h3>
              <p className="mt-2 text-sm text-purple-700">Padding: 128px (8rem)</p>
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
