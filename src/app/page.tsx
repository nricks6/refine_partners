import { Button } from "@/components/button";
import { Section, SectionHeader } from "@/components/section";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Facial Rejuvenation",
    description:
      "Expert guidance on injectables, laser treatments, and surgical options tailored to your unique features.",
    href: "/services#facial-rejuvenation",
  },
  {
    title: "Skin Health",
    description:
      "Comprehensive skincare strategies combining medical-grade treatments with personalized routines.",
    href: "/services#skin-health",
  },
  {
    title: "Body Contouring",
    description:
      "Navigate the landscape of body sculpting options from non-invasive to surgical procedures.",
    href: "/services#body-contouring",
  },
  {
    title: "Preventative Aging",
    description:
      "Proactive approaches to maintain your natural beauty and age gracefully on your terms.",
    href: "/services#preventative-aging",
  },
];

const testimonials = [
  {
    quote:
      "Working with Refine Partners gave me the confidence to make decisions I'd been putting off for years. Their guidance was invaluable.",
    author: "Sarah M.",
    location: "New York, NY",
  },
  {
    quote:
      "They helped me find the right provider for my goals and navigate options I didn't even know existed. Truly personalized care.",
    author: "Jennifer L.",
    location: "Los Angeles, CA",
  },
  {
    quote:
      "No pressure, just honest advice. They genuinely care about helping you feel your best, not selling procedures.",
    author: "Michelle K.",
    location: "Chicago, IL",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center bg-cream pt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-widest text-gold">
                Aesthetic Advisory
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Elevate Your Approach to{" "}
                <span className="text-taupe">Aesthetic Care</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
                A distinguished group of women consulting on facial
                rejuvenation, skin health, body contouring, and preventative
                aging. We help you navigate providers and procedures to make
                informed decisions about your appearance goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Book Consultation
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/4] w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl">
                <Image
                  src="/hero-consultation.png"
                  alt="Aesthetic consultation session"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section variant="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            {/* Placeholder for philosophy image */}
            <div className="aspect-square overflow-hidden bg-blush">
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-taupe">Philosophy Image</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Our Philosophy
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Beauty on Your Terms
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              We believe that aesthetic care should be empowering, not
              overwhelming. Our role is to demystify the world of treatments and
              procedures, providing you with the knowledge and connections you
              need to make choices that align with your values and goals.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              Every consultation is a partnership. We listen, we educate, and we
              guide—never pressure. Your journey is uniquely yours.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <SectionHeader
          eyebrow="What We Offer"
          title="Advisory Services"
          description="Comprehensive guidance across the full spectrum of aesthetic care, tailored to your individual needs and aspirations."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-cream-dark p-8 transition-all duration-300 hover:bg-blush"
            >
              <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-taupe transition-colors group-hover:text-charcoal">
                Learn more
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Client Experiences"
          title="Trusted by Women Who Expect Excellence"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream p-8"
            >
              <svg
                className="h-8 w-8 text-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 text-base leading-relaxed text-charcoal-light">
                {testimonial.quote}
              </p>
              <div className="mt-6">
                <p className="font-medium text-charcoal">{testimonial.author}</p>
                <p className="text-sm text-taupe">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder Spotlight */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Meet the Founder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              A Vision for Better Aesthetic Care
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              Refine Partners was born from a simple observation: navigating the
              world of aesthetic procedures shouldn&apos;t require becoming an expert
              yourself. Too many women feel lost in a sea of options, marketing
              claims, and well-meaning but biased advice.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              We created a different path—one where your advocate has no
              financial stake in which procedure you choose, only in ensuring
              you make the right choice for you.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Read Our Story
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Placeholder for founder image */}
            <div className="aspect-[4/5] overflow-hidden bg-blush">
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-taupe">Founder Image</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Schedule a consultation to discuss your goals and discover how we
            can help you make informed decisions about your aesthetic care.
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
