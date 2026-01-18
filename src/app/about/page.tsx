import { Button } from "@/components/button";
import { Section, SectionHeader } from "@/components/section";
import Image from "next/image";

const values = [
  {
    title: "Independence",
    description:
      "We have no affiliations with providers or product companies. Our only loyalty is to you.",
  },
  {
    title: "Education",
    description:
      "We believe informed clients make better decisions. Knowledge is the foundation of confidence.",
  },
  {
    title: "Discretion",
    description:
      "Your privacy is paramount. Every conversation and decision remains confidential.",
  },
  {
    title: "Authenticity",
    description:
      "We celebrate natural beauty enhanced, not replaced. Our guidance honors who you are.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-widest text-gold">
                About Us
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Redefining Aesthetic Guidance
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
                Refine Partners was founded on a simple premise: every woman
                deserves access to unbiased, expert guidance when navigating the
                world of aesthetic care. We bridge the gap between overwhelming
                options and confident decisions.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl">
                <Image
                  src="/about-hero-image.png"
                  alt="About Refine Partners"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <Section variant="alt">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Our Story
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            From Personal Journey to Professional Mission
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal-light">
            <p>
              The idea for Refine Partners emerged from countless conversations
              with friends, colleagues, and acquaintances who shared a common
              frustration: wanting to explore aesthetic options but feeling lost
              in a landscape of conflicting information, aggressive marketing,
              and providers with obvious financial incentives.
            </p>
            <p>
              After years of personal research, consultations across the
              country, and building relationships with top providers in every
              specialty, it became clear that this knowledge could help others.
              What began as informal advice to friends transformed into a
              structured practice dedicated to empowering women with the
              information they need.
            </p>
            <p>
              Today, Refine Partners serves discerning women who value their
              time and want to approach aesthetic decisions with the same care
              and research they bring to every other important choice in their
              lives.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder Profile */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl">
              <Image
                src="/founder-profile.PNG"
                alt="Founder of Refine Partners"
                width={600}
                height={800}
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Founder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Sarah Al-Sheikhly
            </h2>
            <p className="mt-2 text-lg text-taupe">Founder & Lead Advisor</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-light">
              <p>
                With a background spanning [industry/experience], Sarah Al-Sheikhly
                brings a unique perspective to aesthetic advisory. Her approach
                combines analytical rigor with genuine empathy, understanding
                that aesthetic decisions are deeply personal.
              </p>
              <p>
                She has consulted with hundreds of women, from those exploring
                their first treatment to those seeking comprehensive anti-aging
                strategies. Her network includes leading providers across the
                country, from renowned plastic surgeons to innovative
                dermatologists and medical spa practitioners.
              </p>
              <p>
                Sarah Al-Sheikhly believes that every woman has the right to feel
                confident in her appearance—and in her decisions about it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Our Values"
          title="What Guides Us"
          description="These principles inform every consultation and recommendation we make."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="bg-cream p-8">
              <h3 className="font-serif text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Team */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Our Team
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Supported by Excellence
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              While Sarah Al-Sheikhly leads all consultations, she is supported by a
              dedicated team that ensures every client receives attentive,
              personalized service. Our team shares a commitment to discretion,
              expertise, and genuine care for every woman we work with.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto aspect-[3/4] max-w-[280px] overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-lg">
                <Image
                  src="/team-member-1.PNG"
                  alt="Team member"
                  width={280}
                  height={373}
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold">Emily Chen</h3>
              <p className="mt-1 text-sm text-taupe">Client Relations Manager</p>
            </div>
            <div className="text-center">
              <div className="mx-auto aspect-[3/4] max-w-[280px] overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-lg">
                <Image
                  src="/team-member-2.PNG"
                  alt="Team member"
                  width={280}
                  height={373}
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold">Rachel Thornton</h3>
              <p className="mt-1 text-sm text-taupe">Research & Provider Liaison</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Begin Your Journey With Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Discover how personalized aesthetic guidance can transform your
            approach to self-care.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" size="lg">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
