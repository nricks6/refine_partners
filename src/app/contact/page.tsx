"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Section } from "@/components/section";

const interests = [
  "Facial Rejuvenation",
  "Skin Health",
  "Body Contouring",
  "Preventative Aging",
  "Provider Navigation",
  "General Consultation",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    referral: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <>
        <section className="flex min-h-screen items-center bg-cream pt-20 watermark-single overflow-hidden">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center lg:px-8">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blush">
              <svg
                className="h-8 w-8 text-charcoal"
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
            </div>
            <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Thank you for reaching out
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              We&apos;ve received your consultation request and will be in touch
              within 24-48 hours to schedule your session.
            </p>
            <div className="mt-8">
              <Button href="/" variant="outline">
                Return Home
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream pt-32 pb-20 watermark-single overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Contact us
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Begin your consultation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              Share a bit about yourself and your goals, and we&apos;ll be in touch
              to schedule your personalized consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <Section variant="alt">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-charcoal"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-2 block w-full border-0 border-b border-taupe/30 bg-transparent py-3 text-charcoal placeholder:text-taupe/50 focus:border-charcoal focus:outline-none focus:ring-0"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-charcoal"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-2 block w-full border-0 border-b border-taupe/30 bg-transparent py-3 text-charcoal placeholder:text-taupe/50 focus:border-charcoal focus:outline-none focus:ring-0"
                  placeholder="Smith"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-charcoal"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full border-0 border-b border-taupe/30 bg-transparent py-3 text-charcoal placeholder:text-taupe/50 focus:border-charcoal focus:outline-none focus:ring-0"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-charcoal"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full border-0 border-b border-taupe/30 bg-transparent py-3 text-charcoal placeholder:text-taupe/50 focus:border-charcoal focus:outline-none focus:ring-0"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Interest Selection */}
            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-charcoal"
              >
                Primary Area of Interest
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="mt-2 block w-full border-0 border-b border-taupe/30 bg-transparent py-3 text-charcoal focus:border-charcoal focus:outline-none focus:ring-0"
              >
                <option value="">Select an area...</option>
                {interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-charcoal"
              >
                Tell Us About Your Goals
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full border-0 border-b border-taupe/30 bg-transparent py-3 text-charcoal placeholder:text-taupe/50 focus:border-charcoal focus:outline-none focus:ring-0 resize-none"
                placeholder="Share what brings you to Refine Partners and what you hope to achieve..."
              />
            </div>

            {/* Referral */}
            <div>
              <label
                htmlFor="referral"
                className="block text-sm font-medium text-charcoal"
              >
                How Did You Hear About Us? (Optional)
              </label>
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="mt-2 block w-full border-0 border-b border-taupe/30 bg-transparent py-3 text-charcoal placeholder:text-taupe/50 focus:border-charcoal focus:outline-none focus:ring-0"
                placeholder="Friend, social media, search..."
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Request Consultation
              </Button>
            </div>
          </form>
        </div>
      </Section>

      {/* What Happens Next */}
      <Section watermark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            What happens next
          </h2>
          <div className="mt-8 grid gap-8 text-left sm:grid-cols-3">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush">
                <span className="font-serif text-lg font-semibold text-charcoal">
                  1
                </span>
              </div>
              <h3 className="mt-4 font-medium text-charcoal">We Review</h3>
              <p className="mt-2 text-sm text-charcoal-light">
                Our team reviews your inquiry to understand your needs and
                prepare for our conversation.
              </p>
            </div>
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush">
                <span className="font-serif text-lg font-semibold text-charcoal">
                  2
                </span>
              </div>
              <h3 className="mt-4 font-medium text-charcoal">We Reach Out</h3>
              <p className="mt-2 text-sm text-charcoal-light">
                Within 24-48 hours, we&apos;ll contact you to schedule your
                consultation at a convenient time.
              </p>
            </div>
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush">
                <span className="font-serif text-lg font-semibold text-charcoal">
                  3
                </span>
              </div>
              <h3 className="mt-4 font-medium text-charcoal">We Connect</h3>
              <p className="mt-2 text-sm text-charcoal-light">
                Your consultation begins—a confidential conversation about your
                goals and how we can help.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
