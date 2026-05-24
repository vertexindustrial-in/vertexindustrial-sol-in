"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  PackageCheck,
  Wrench,
  CheckCircle,
  MapPin,
  Users,
  Shield,
  Zap,
  Mail,
  MessageSquare,
  Handshake,
} from "lucide-react";
import PartnershipForm from "@/components/PartnershipForm";

/* ── Data ─────────────────────────────────────────────── */

const partnerTypes = [
  {
    icon: TrendingUp,
    type: "Dealer / Distributor",
    audience: "For industrial product distributors and regional traders",
    description:
      "You sell to industrial customers in your region. We supply you with hydraulic seals, cylinders, and industrial valves — with technical product support and competitive pricing. You extend our reach into markets we do not directly serve.",
    youBring: [
      "Established relationships with industrial buyers",
      "Presence in a specific region or industry segment",
      "Sales capability and customer service infrastructure",
    ],
    weProvide: [
      "Quality products from approved manufacturers",
      "Competitive dealer pricing and margin",
      "Technical product knowledge and application support",
      "Marketing material and product information",
    ],
  },
  {
    icon: PackageCheck,
    type: "Vendor / Supplier",
    audience: "For manufacturers and distributors who can supply to us",
    description:
      "You manufacture or distribute hydraulic seals, cylinders, industrial valves, or related components. We are building our approved supplier base and are interested in quality-focused suppliers who can support our regional customer requirements consistently.",
    youBring: [
      "Manufacturing capability or quality distribution network",
      "Competitive and consistent product availability",
      "Technical documentation and material certifications",
    ],
    weProvide: [
      "A committed regional purchasing partner",
      "Clear specification requirements and feedback",
      "Long-term supply relationship potential",
      "Honest evaluation and fair commercial terms",
    ],
  },
  {
    icon: Wrench,
    type: "Technical Service Partner",
    audience: "For cylinder repair, valve servicing, and installation firms",
    description:
      "You offer technical services — hydraulic cylinder repair and rebuild, valve testing and servicing, seal installation, or related engineering work. We regularly encounter customer requirements for these services and want partners we can confidently refer and potentially co-operate with.",
    youBring: [
      "Workshop capability or on-site service expertise",
      "Technical competence in hydraulic or valve servicing",
      "Presence in or near the industrial belt",
    ],
    weProvide: [
      "Customer referrals for service requirements",
      "Component supply at trade rates for your projects",
      "Collaborative engagement on combined supply + service opportunities",
    ],
  },
];

const benefits = [
  {
    icon: MapPin,
    title: "Established Regional Presence",
    body: "We have operated in the Ballari region since 2002 and have direct relationships with steel plants, rolling mills, and industrial contractors. Partners gain access to an established network, not a new entrant building from zero.",
  },
  {
    icon: Shield,
    title: "Quality-Focused Product Range",
    body: "Our three core product lines — hydraulic seals, hydraulic cylinders, and industrial valves — are sourced from quality manufacturers. Dealers and distributors carry products they can stand behind technically.",
  },
  {
    icon: Users,
    title: "Technical Depth You Can Rely On",
    body: "Application knowledge is central to what we do. Partners benefit from that technical depth — we help you answer specification questions, select the right product, and support customer requirements that go beyond catalogue lookup.",
  },
  {
    icon: Zap,
    title: "Responsive and Accessible",
    body: "We are a focused, agile operation — not a large corporate. Partners deal directly with decision-makers. Pricing discussions, supply questions, and technical queries get answers quickly, not through layers of process.",
  },
];

const steps = [
  {
    icon: Mail,
    step: "01",
    title: "Submit Your Application",
    body: "Fill in the partnership application form below. Tell us about your business, your market, and what type of partnership you are interested in.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Initial Discussion",
    body: "We will review your application and reach out within 2–3 business days to arrange a call or meeting. We will discuss your requirements, our expectations, and whether there is a good mutual fit.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Onboarding",
    body: "If both sides are aligned, we agree commercial terms and proceed with onboarding — product information, pricing, supply processes, and any technical briefing required.",
  },
];

/* ── Component ─────────────────────────────────────────── */

export default function PartnershipPageContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-vertex-border bg-vertex-bg py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              Partnership &amp; Dealership
            </p>
            <h1
              className="mb-4 max-w-4xl text-5xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-6xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Build a Partnership with Vertex Industrial
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-vertex-secondary">
              We are looking for dealers, distributors, vendors, and technical service partners
              across India. Whether you want to carry our products or supply to us, we want to hear
              from you.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-sm bg-vertex-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vertex-accent-hover"
            >
              Apply Now
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Partnership types ── */}
      <section className="border-b border-vertex-border bg-vertex-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              Opportunities
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Three Ways to Partner
            </h2>
          </motion.div>

          <div className="space-y-4">
            {partnerTypes.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={pt.type}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                  className="rounded-sm border border-vertex-border bg-vertex-bg"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 border-b border-vertex-border p-5 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold uppercase text-vertex-primary"
                        style={{ fontFamily: "var(--font-barlow-condensed)" }}
                      >
                        {pt.type}
                      </h3>
                      <p className="mt-0.5 text-xs text-vertex-muted">{pt.audience}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-3 lg:gap-8">
                    <p className="text-sm leading-relaxed text-vertex-secondary">{pt.description}</p>

                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                        You Bring
                      </p>
                      <ul className="space-y-2">
                        {pt.youBring.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-vertex-secondary">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-vertex-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                        We Provide
                      </p>
                      <ul className="space-y-2">
                        {pt.weProvide.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-vertex-secondary">
                            <CheckCircle size={13} className="mt-0.5 shrink-0 text-vertex-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why partner with us ── */}
      <section className="border-b border-vertex-border bg-vertex-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              The Value
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Why Partner with Vertex
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  className="rounded-sm border border-vertex-border bg-vertex-surface p-5"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <Icon size={17} />
                  </div>
                  <h3
                    className="mb-2 text-base font-bold uppercase text-vertex-primary"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-vertex-secondary">{benefit.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-b border-vertex-border bg-vertex-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              The Process
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              How It Works
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  className="relative rounded-sm border border-vertex-border bg-vertex-bg p-6"
                >
                  {/* Connector line (desktop only, between cards) */}
                  {i < steps.length - 1 && (
                    <span className="absolute -right-2 top-8 z-10 hidden h-px w-4 bg-vertex-border sm:block" />
                  )}

                  <span
                    className="mb-4 block text-4xl font-extrabold leading-none text-vertex-accent/20"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {step.step}
                  </span>
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <Icon size={17} />
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold uppercase text-vertex-primary"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-vertex-secondary">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Application form ── */}
      <section id="apply" className="bg-vertex-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

            {/* Left context (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
                Apply
              </p>
              <h2
                className="mb-4 text-4xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-5xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Submit Your Application
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-vertex-secondary">
                Complete the form and we will review your application. We aim to respond within
                2–3 business days. All applications are treated confidentially.
              </p>

              {/* What to expect */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                  What happens next
                </p>
                {[
                  "We review your application within 2–3 days",
                  "We reach out to arrange an initial call",
                  "We discuss fit, terms, and next steps",
                  "Onboarding if both sides are aligned",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-vertex-secondary">
                    <CheckCircle size={14} className="mt-0.5 shrink-0 text-vertex-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 border-t border-vertex-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                  Prefer to call first?
                </p>
                <a
                  href="tel:+918147904606"
                  className="block text-sm font-medium text-vertex-primary transition-colors hover:text-vertex-accent"
                >
                  +91 81479 04606
                </a>
                <a
                  href="mailto:fareed@vertexindustrial.in"
                  className="block text-sm font-medium text-vertex-primary transition-colors hover:text-vertex-accent"
                >
                  fareed@vertexindustrial.in
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-vertex-accent transition-colors hover:text-vertex-primary"
                >
                  About Vertex Industrial
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>

            {/* Right form (3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-3"
            >
              <div className="rounded-sm border border-vertex-border bg-vertex-surface p-6 sm:p-8">
                <div className="mb-6 border-b border-vertex-border pb-5">
                  <h3
                    className="text-2xl font-extrabold uppercase text-vertex-primary"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    Partnership Application
                  </h3>
                  <p className="mt-1 text-sm text-vertex-secondary">
                    Fields marked <span className="text-vertex-accent">*</span> are required.
                  </p>
                </div>
                <PartnershipForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
