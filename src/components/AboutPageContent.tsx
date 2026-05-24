"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Layers,
  Target,
  Shield,
  Clock,
  Package,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const credentials = [
  { icon: CalendarDays, label: "Operational Since", value: "2002" },
  { icon: CalendarDays, label: "Incorporated as Vertex", value: "2025" },
  { icon: MapPin,        label: "Headquarters",         value: "Ballari, Karnataka, India" },
  { icon: Users,         label: "Primary Region",        value: "Bellary – Vijayanagar – Koppal" },
  { icon: Layers,        label: "Core Product Lines",    value: "3 — Seals · Cylinders · Valves" },
  { icon: Target,        label: "Focus",                 value: "B2B Industrial Supply & Technical Support" },
];

const pillars = [
  {
    number: "01",
    title: "Technical-First Engagement",
    body: "Before recommending anything, we engage with the application — the operating pressure, temperature, fluid, load cycle, and environment. A technically correct specification delivers long service life and prevents costly failures. We treat that selection work as a core part of our role, not an afterthought.",
  },
  {
    number: "02",
    title: "Regional Presence",
    body: "We are rooted in the Ballari region and have built relationships with plant teams, procurement managers, and maintenance contractors across the Bellary–Vijayanagar–Koppal steel belt over more than two decades. That on-ground knowledge means we understand local procurement norms, plant schedules, and the pressures our customers operate under.",
  },
  {
    number: "03",
    title: "Partnership Over Transaction",
    body: "We aim to be the supplier customers call when they have a problem, not just a purchase order. That means staying accessible, following up after supply, and engaging with application issues that arise during fitment or operation. A long-term supplier relationship is built on reliability in those moments.",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Technical Coordination",
    body: "We work with customers to identify the correct component for their specific operating conditions — seal profile, material grade, pressure class, dimensional specification. Correct application selection is the foundation of reliable performance.",
  },
  {
    icon: MapPin,
    title: "Regional Strength",
    body: "Our relationships in the Ballari region go back over two decades. We understand the procurement cycles, shutdown windows, and urgency levels that steel plant and rolling mill operations involve. That context makes us a more effective supply partner.",
  },
  {
    icon: Shield,
    title: "Critical Application Support",
    body: "We focus on applications where failures are costly — high-load cylinders, high-cycle sealing systems, process isolation valves. Our customers cannot afford to experiment. We bring the technical rigour those situations demand.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    body: "When a cylinder seal fails in a running plant, the clock starts immediately. We understand that. Quick enquiry response, fast quotation turnaround, and reliable delivery timelines are not optional for our customers — and they are not optional for us.",
  },
  {
    icon: Package,
    title: "Reliable Sourcing",
    body: "We work with quality manufacturers and approved suppliers to ensure consistent product availability. For our customers, supply reliability is as important as price — an unavailable component at shutdown time is far more expensive than a premium on the product.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    body: "Not every requirement is a standard catalogue item. Unusual bore sizes, non-standard seal profiles, replacement components for older equipment — these situations require suppliers who engage with the problem rather than decline the enquiry. That is the approach we take.",
  },
];

/* ── Component ─────────────────────────────────────────── */

export default function AboutPageContent() {
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
              About Us
            </p>
            <h1
              className="mb-4 max-w-3xl text-5xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-6xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Vertex Industrial Solutions
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-vertex-secondary">
              Industrial supply and technical partner for steel plants, rolling mills, and heavy
              industries across the Bellary–Vijayanagar–Koppal belt — built on over two decades of
              regional experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="bg-vertex-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
                Our Story
              </p>
              <h2
                className="mb-6 text-4xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-5xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Built Over Two Decades in the Ballari Region
              </h2>

              <div className="space-y-5 text-sm leading-relaxed text-vertex-secondary">
                <p>
                  Vertex Industrial Solutions has its roots in SMS Engineers, which began operating
                  in the Ballari industrial region in 2002. Over more than two decades, the business
                  developed deep working relationships with steel plants, rolling mills, maintenance
                  contractors, and heavy industrial users across the Bellary–Vijayanagar–Koppal belt.
                </p>
                <p>
                  During that period, a clear understanding of what industrial customers in this
                  region actually need from a supply partner was established — not generic trading,
                  but technical engagement, application-based product selection, reliable sourcing,
                  and genuine responsiveness when plant operations are under pressure.
                </p>
                <p>
                  In 2025, the business was formally incorporated as Vertex Industrial Solutions —
                  carrying forward that accumulated experience and those long-standing relationships
                  into a structured entity with a sharper focus on hydraulic seals, hydraulic
                  cylinders, and industrial valves.
                </p>
                <p>
                  The core philosophy has not changed: we are a technical partner first, and a
                  supplier second. Every customer interaction is guided by the question of what the
                  application actually requires — not what is easiest to supply.
                </p>
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
              className="space-y-3"
            >
              {credentials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="flex items-center gap-4 rounded-sm border border-vertex-border bg-vertex-surface px-5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                      <Icon size={15} />
                    </div>
                    <div>
                      <div className="text-xs text-vertex-muted">{item.label}</div>
                      <div className="text-sm font-semibold text-vertex-primary">{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.45 }}
                className="rounded-sm border border-vertex-accent/25 bg-vertex-accent/5 px-5 py-4"
              >
                <div className="text-xs text-vertex-muted">Proprietor</div>
                <div className="mt-0.5 text-sm font-semibold text-vertex-primary">H. Fareed Samdani</div>
                <div className="mt-0.5 text-xs text-vertex-secondary">
                  fareed@vertexindustrial.in · +91 81479 04606
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="border-y border-vertex-border bg-vertex-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              How We Work
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Our Approach
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col rounded-sm border border-vertex-border bg-vertex-bg p-6"
              >
                <span
                  className="mb-4 text-4xl font-extrabold text-vertex-accent/30"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="mb-3 text-xl font-bold uppercase text-vertex-primary"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-vertex-secondary">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Vertex (detailed) ── */}
      <section className="bg-vertex-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              Why Vertex
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-vertex-border rounded-sm border border-vertex-border">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                  className="flex flex-wrap items-start gap-x-4 gap-y-3 bg-vertex-surface p-5 transition-colors hover:bg-vertex-surface/80 sm:grid sm:grid-cols-[2.5rem_1fr_2fr] sm:items-start sm:gap-6 sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <Icon size={18} />
                  </div>
                  <h3
                    className="min-w-0 flex-1 self-center text-lg font-bold uppercase text-vertex-primary sm:flex-none sm:text-xl"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="w-full text-sm leading-relaxed text-vertex-secondary sm:w-auto sm:self-center">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What We Supply ── */}
      <section className="border-y border-vertex-border bg-vertex-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
                Core Products
              </p>
              <h2
                className="mb-4 text-4xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-5xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Three Product Lines, One Technical Focus
              </h2>
              <p className="text-sm leading-relaxed text-vertex-secondary">
                Our product range is deliberately focused — hydraulic seals, hydraulic cylinders, and
                industrial valves. That focus allows us to develop genuine depth in application
                knowledge, supplier relationships, and technical support rather than spreading thin
                across a broad catalogue.
              </p>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-vertex-accent transition-colors hover:text-vertex-primary"
              >
                View our products
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="space-y-3"
            >
              {[
                {
                  href: "/products/hydraulic-seals",
                  name: "Hydraulic Seals",
                  detail: "Piston, rod, wiper, guide ring, buffer, and static seals — full range for industrial cylinders.",
                },
                {
                  href: "/products/hydraulic-cylinders",
                  name: "Hydraulic Cylinders",
                  detail: "Tie-rod, welded, mill-type, and telescopic cylinders with full technical coordination.",
                },
                {
                  href: "/products/industrial-valves",
                  name: "Industrial Valves",
                  detail: "Gate, ball, globe, check, butterfly, and safety valves for process and utility applications.",
                },
              ].map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <Link
                    href={product.href}
                    className="group flex items-start gap-3 rounded-sm border border-vertex-border bg-vertex-bg p-4 transition-colors hover:border-vertex-accent/40"
                  >
                    <CheckCircle size={15} className="mt-0.5 shrink-0 text-vertex-accent" />
                    <div>
                      <div className="text-sm font-semibold text-vertex-primary transition-colors group-hover:text-vertex-accent">
                        {product.name}
                      </div>
                      <div className="mt-0.5 text-xs text-vertex-muted">{product.detail}</div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto mt-0.5 shrink-0 text-vertex-muted transition-colors group-hover:text-vertex-accent"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
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
            className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2
                className="text-3xl font-extrabold uppercase text-vertex-primary sm:text-4xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Work With Us
              </h2>
              <p className="mt-1 text-sm text-vertex-secondary">
                Send an enquiry or discuss a potential supply partnership.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-vertex-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vertex-accent-hover"
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/partnership"
                className="inline-flex items-center gap-2 rounded-sm border border-vertex-border-subtle px-5 py-2.5 text-sm font-semibold text-vertex-secondary transition-colors hover:border-vertex-muted hover:text-vertex-primary"
              >
                Partnership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
