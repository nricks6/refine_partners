import { Button } from "@/components/button";
import { Section, SectionHeader } from "@/components/section";
import Image from "next/image";

const services = [
  {
    id: "facial-rejuvenation",
    title: "Facial Rejuvenation",
    description:
      "Navigate the full spectrum of facial enhancement options with expert guidance tailored to your unique features and goals.",
    details: [
      "Injectables assessment (Botox, fillers, biostimulators)",
      "Laser and energy-based treatment evaluation",
      "Surgical consultation preparation",
      "Provider matching and vetting",
      "Treatment timeline planning",
    ],
    image: "/pexels-cottonbro-7585314.jpg",
  },
  {
    id: "skin-health",
    title: "Skin Health",
    description:
      "Develop a comprehensive approach to skin wellness that combines professional treatments with effective daily care.",
    details: [
      "Skin analysis and concern prioritization",
      "Medical-grade skincare recommendations",
      "Treatment modality education (peels, lasers, microneedling)",
      "Provider and product guidance",
      "Long-term skin health strategy",
    ],
    image: "/pexels-ron-lach-8140913.jpg",
  },
  {
    id: "body-contouring",
    title: "Body Contouring",
    description:
      "Understand your options for body sculpting, from non-invasive technologies to surgical procedures.",
    details: [
      "Non-invasive technology comparison (CoolSculpting, Emsculpt, etc.)",
      "Surgical option education (liposuction, tummy tuck, etc.)",
      "Realistic outcome expectations",
      "Provider research and recommendations",
      "Recovery planning guidance",
    ],
    image: "/pexels-ganinph-7772656.jpg",
  },
  {
    id: "preventative-aging",
    title: "Preventative Aging",
    description:
      "Take a proactive approach to maintaining your natural beauty with strategies designed for long-term results.",
    details: [
      "Early intervention assessment",
      "Preventative treatment planning",
      "Lifestyle factor optimization",
      "Age-appropriate care recommendations",
      "Long-term maintenance strategies",
    ],
    image: "/pexels-aging.jpg",
  },
  {
    id: "provider-navigation",
    title: "Provider Navigation",
    description:
      "Find the right specialists for your needs with our extensive network and thorough vetting process.",
    details: [
      "Specialist matching based on your goals",
      "Provider credential verification",
      "Consultation preparation",
      "Second opinion facilitation",
      "Ongoing provider relationship support",
    ],
    image: "/pexels-karola-g-8545586.jpg",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive conversation about your goals, concerns, and aesthetic vision. This is a judgment-free space to explore what matters to you.",
  },
  {
    step: "02",
    title: "Research & Analysis",
    description:
      "Based on our discussion, we research the most appropriate options, providers, and approaches tailored to your specific needs and preferences.",
  },
  {
    step: "03",
    title: "Personalized Roadmap",
    description:
      "You receive a detailed plan outlining recommended treatments, vetted providers, expected outcomes, and a suggested timeline.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "We remain available to answer questions, accompany you to consultations if desired, and adjust recommendations as your journey evolves.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream pt-32 pb-20 watermark-single overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Our services
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Comprehensive aesthetic advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              From your first consideration to ongoing care, we provide expert
              guidance across the full spectrum of aesthetic treatments and
              procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <Section variant="alt">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <h2 className="font-serif text-3xl font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <svg
                        className="mr-3 h-5 w-5 flex-shrink-0 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-charcoal-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {service.image ? (
                  <div className="aspect-[4/3] overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] overflow-hidden bg-blush rounded-tl-[60px] rounded-br-[60px]">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-taupe">
                        {service.title} Image
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section watermark>
        <SectionHeader
          eyebrow="How it works"
          title="Our process"
          description="A structured approach designed to give you clarity and confidence at every step."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <div key={step.step} className="relative">
              <span className="font-serif text-5xl font-light text-blush">
                {step.step}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What to Expect */}
      <Section variant="alt">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            What to expect
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Your consultation experience
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal-light">
            <p>
              Every consultation begins with listening. We want to understand
              not just what you&apos;re considering, but why. What does feeling your
              best look like to you? What concerns do you have? What have you
              tried before?
            </p>
            <p>
              From there, we educate. We&apos;ll explain your options in clear,
              accessible terms—what each treatment involves, what results you
              can realistically expect, what the recovery looks like, and how
              different approaches compare.
            </p>
            <p>
              Finally, we guide. Based on your goals, preferences, and
              circumstances, we&apos;ll recommend specific providers, treatments, and
              timing. You&apos;ll leave with a clear path forward and the confidence
              to pursue it.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to explore your options?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Book a consultation to discuss your goals and discover how we can
            help you navigate your aesthetic journey.
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
