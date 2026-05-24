"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Wrench,
  ScanSearch,
  Gauge,
  TriangleAlert,
  ClipboardCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  Layers,
  Activity,
  Settings,
  CheckCircle2,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const supportAreas = [
  {
    icon: ScanSearch,
    title: "Seal Selection & Sizing",
    description:
      "Selecting the wrong seal material or profile for an application is one of the most common causes of premature failure. We work through the application parameters — bore and rod dimensions, operating pressure, temperature range, fluid type, and cycle rate — to identify the correct seal profile and material grade (NBR, PU, FKM, PTFE) before supply.",
    points: [
      "Piston, rod, wiper, and buffer seal selection",
      "Material selection: NBR / PU / FKM / PTFE based on conditions",
      "OEM cross-reference and equivalent sourcing",
      "Seal kit assembly for hydraulic cylinders",
    ],
  },
  {
    icon: Activity,
    title: "Cylinder Specification & Matching",
    description:
      "For replacement or new hydraulic cylinder requirements, we assess the application load, stroke, operating pressure, and mounting arrangement to confirm specifications before sourcing. Where original cylinders cannot be sourced directly, we identify equivalent alternatives or coordinate custom build options.",
    points: [
      "Bore, stroke, and pressure rating confirmation",
      "Mill-type, tie-rod, and welded body cylinder options",
      "Equivalent and replacement cylinder sourcing",
      "Custom cylinder coordination for non-standard applications",
    ],
  },
  {
    icon: Gauge,
    title: "Valve Sizing & Selection",
    description:
      "Industrial valve selection involves more than choosing the right valve type — pressure class, end connection, body material, seat material, and operating medium must all align with the application. We assist with these parameters to ensure the valve supplied matches what the application demands.",
    points: [
      "Valve type selection: gate, globe, ball, check, butterfly",
      "Pressure class and end connection matching",
      "Body and trim material selection for fluid compatibility",
      "API, BS, and IS standard compliance support",
    ],
  },
  {
    icon: TriangleAlert,
    title: "Failure Analysis & Troubleshooting",
    description:
      "When a hydraulic seal fails prematurely, or a cylinder or valve is showing recurring problems, the root cause is often in the application — not the component. We engage with the failure pattern to identify whether the cause is a specification mismatch, installation issue, contamination, or operating condition deviation.",
    points: [
      "Seal failure pattern assessment (extrusion, wear, chemical attack)",
      "Cylinder performance review (leakage, speed loss, drift)",
      "Valve failure investigation (seat leakage, actuator issues)",
      "Recommendations to prevent recurrence",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Describe Your Requirement",
    body: "Share your application details — cylinder dimensions, operating conditions, current component in use, or the problem you are facing. The more specific you are, the more useful our response.",
  },
  {
    step: "02",
    title: "Technical Assessment",
    body: "We review the parameters against known application requirements and available product options. For non-standard situations, we consult with our manufacturer partners to confirm the correct solution.",
  },
  {
    step: "03",
    title: "Recommendation & Quotation",
    body: "We provide a specific product recommendation with technical justification, followed by a quotation for the recommended item. You get the reasoning, not just a part number.",
  },
  {
    step: "04",
    title: "Supply & Follow-Up",
    body: "Once confirmed, we handle sourcing and delivery. For critical applications, we follow up after installation to confirm performance and address any further questions.",
  },
];

const useCases = [
  {
    title: "Emergency Breakdown",
    detail: "Seal blown on a mill cylinder, plant down. Need the right seal kit fast — correct profile, correct material.",
  },
  {
    title: "Planned Shutdown Stock",
    detail: "Upcoming maintenance shutdown. Need to confirm correct seal kits and spare cylinders before the window opens.",
  },
  {
    title: "New Installation",
    detail: "Specifying hydraulic cylinders or valves for a new system. Need application-led selection before ordering.",
  },
  {
    title: "Recurring Failures",
    detail: "Same seal or component keeps failing. Need a root cause review and a better-matched solution.",
  },
  {
    title: "OEM Replacement",
    detail: "Original component no longer available or lead time too long. Need a verified equivalent or replacement.",
  },
  {
    title: "New Supplier Evaluation",
    detail: "Assessing Vertex as an alternative to current supplier. Want to test on a specific item with technical support.",
  },
];

const productLinks = [
  { href: "/products/hydraulic-seals", icon: Layers, name: "Hydraulic Seals" },
  { href: "/products/hydraulic-cylinders", icon: Activity, name: "Hydraulic Cylinders" },
  { href: "/products/industrial-valves", icon: Settings, name: "Industrial Valves" },
];

/* ── Component ─────────────────────────────────────────── */

export default function TechnicalSupportPageContent() {
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
              Technical Support
            </p>
            <h1
              className="mb-4 max-w-3xl text-5xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-6xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Application-Led Technical Solutions
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-vertex-secondary">
              We do not just supply components — we engage with your application to ensure the
              right product is selected, specified, and delivered. Our technical support covers
              seal selection, cylinder specification, valve sizing, and failure analysis for
              industrial customers across the Bellary–Vijayanagar–Koppal belt.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+918147904606"
                className="inline-flex items-center gap-2 rounded-sm bg-vertex-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vertex-accent-hover"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/918147904606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-vertex-border-subtle px-5 py-2.5 text-sm font-semibold text-vertex-secondary transition-colors hover:border-vertex-muted hover:text-vertex-primary"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Support Areas ── */}
      <section className="border-b border-vertex-border bg-vertex-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              What We Cover
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Four Areas of Technical Support
            </h2>
          </motion.div>

          <div className="space-y-6">
            {supportAreas.map((area, i) => {
              const Icon = area.icon;
              const isEven = i % 2 === 1;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                  className="grid gap-6 rounded-sm border border-vertex-border bg-vertex-bg p-6 sm:p-8 lg:grid-cols-2 lg:gap-10"
                >
                  {/* Left: description */}
                  <div className={isEven ? "lg:order-2" : ""}>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                      <Icon size={18} />
                    </div>
                    <h3
                      className="mb-3 text-2xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-3xl"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-vertex-secondary">{area.description}</p>
                  </div>

                  {/* Right: bullet points */}
                  <div className={`flex flex-col justify-center ${isEven ? "lg:order-1" : ""}`}>
                    <div className="rounded-sm border border-vertex-border bg-vertex-surface p-5">
                      <p className="mb-3.5 text-xs font-semibold uppercase tracking-widest text-vertex-muted">
                        Scope Includes
                      </p>
                      <ul className="space-y-2.5">
                        {area.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-vertex-secondary">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-vertex-accent" />
                            {point}
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

      {/* ── How It Works ── */}
      <section className="border-b border-vertex-border bg-vertex-bg py-16 lg:py-24">
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
              How Technical Support Works
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-vertex-secondary">
              A straightforward process from first enquiry to confirmed supply — with technical
              reasoning at every step.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col rounded-sm border border-vertex-border bg-vertex-surface p-5"
              >
                <span
                  className="mb-3 text-4xl font-extrabold tabular-nums text-vertex-accent/30"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {step.step}
                </span>
                <h3
                  className="mb-2 text-lg font-bold uppercase leading-snug text-vertex-primary"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {step.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-vertex-secondary">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="border-b border-vertex-border bg-vertex-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              When to Reach Out
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Common Support Scenarios
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.07, ease: "easeOut" }}
                className="rounded-sm border border-vertex-border bg-vertex-bg p-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-vertex-accent" />
                  <h3
                    className="text-base font-bold uppercase text-vertex-primary"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-vertex-secondary">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Matters ── */}
      <section className="border-b border-vertex-border bg-vertex-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                <Wrench size={18} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
                Our Approach
              </p>
              <h2
                className="mb-5 text-4xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-5xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Technical Matching Over Catalogue Selling
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-vertex-secondary">
                <p>
                  Most industrial component failures are not caused by poor quality — they are
                  caused by wrong selection. A seal in the correct material and profile for its
                  application will outlast the same seal in the wrong specification by a significant
                  margin, regardless of cost or brand.
                </p>
                <p>
                  We treat technical support as a precondition of supply, not an optional extra.
                  Before we quote a seal kit, cylinder, or valve, we confirm that the product
                  we are quoting is actually right for the application. If it is not, we say so
                  and recommend what is.
                </p>
                <p>
                  This is particularly important for customers replacing components on critical
                  machinery where a failure means unscheduled downtime. Getting it right the
                  first time is not just a quality concern — it is a commercial one.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="space-y-4"
            >
              {[
                {
                  label: "Experience",
                  value:
                    "Over two decades working with steel plants, rolling mills, and heavy industry in the Bellary belt — the application knowledge is built-in.",
                },
                {
                  label: "Manufacturer Access",
                  value:
                    "Direct relationships with quality seal manufacturers, cylinder builders, and valve suppliers allow us to confirm specifications and source confidently.",
                },
                {
                  label: "No Upselling",
                  value:
                    "We recommend what the application needs. If a standard NBR seal works, we will not recommend FKM to increase the margin.",
                },
                {
                  label: "Speed",
                  value:
                    "Technical support is provided as part of the enquiry process — no separate engagement or consulting agreement required. Call or WhatsApp and we will respond.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="rounded-sm border border-vertex-border bg-vertex-surface p-5"
                >
                  <p
                    className="mb-1.5 text-sm font-bold uppercase text-vertex-primary"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-vertex-secondary">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Products cross-reference ── */}
      <section className="border-b border-vertex-border bg-vertex-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <h2
              className="text-3xl font-extrabold uppercase text-vertex-primary sm:text-4xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Products We Support
            </h2>
            <p className="mt-2 text-sm text-vertex-secondary">
              Technical support is available across all three of our core product lines.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {productLinks.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.18 } }}
                >
                  <Link
                    href={product.href}
                    className="group flex items-center justify-between rounded-sm border border-vertex-border bg-vertex-bg px-5 py-4 transition-colors hover:border-vertex-accent/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm font-semibold text-vertex-primary">{product.name}</span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-vertex-muted transition-colors group-hover:text-vertex-accent"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-vertex-bg py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2
                className="text-3xl font-extrabold uppercase text-vertex-primary sm:text-4xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Describe Your Application
              </h2>
              <p className="mt-1 max-w-md text-sm text-vertex-secondary">
                Call, WhatsApp, or send an enquiry — we will come back with a specific
                recommendation, not a catalogue.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:+918147904606"
                className="inline-flex items-center gap-2 rounded-sm bg-vertex-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vertex-accent-hover"
              >
                <Phone size={14} />
                +91 81479 04606
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-vertex-border-subtle px-5 py-2.5 text-sm font-semibold text-vertex-secondary transition-colors hover:border-vertex-muted hover:text-vertex-primary"
              >
                Send Enquiry
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
