"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Building2,
  Factory,
  Cog,
  Wrench,
  Cpu,
  Zap,
  Settings,
  ArrowRight,
  Layers,
  Activity,
  MapPin,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const featuredIndustries = [
  {
    icon: Building2,
    name: "Steel Plants",
    image: "/images/call-me-lamb-xjL4qcXPpQQ-unsplash.jpg",
    category: "Primary Market",
    description:
      "Integrated steel manufacturers — blast furnace complexes, steelmaking shops, and associated processing facilities — represent the core of our market. These plants run large hydraulic systems for press frames, charging machines, ladle handling, and ancillary equipment, with a zero-tolerance requirement for unexpected downtime.",
    detail:
      "We supply hydraulic seal kits for mill and press cylinders, mill-type hydraulic cylinders for clamping and handling applications, and industrial valves for utility lines (cooling water, compressed air, gas) and process isolation.",
    products: ["Hydraulic Seals", "Hydraulic Cylinders", "Industrial Valves"],
    challenges: [
      "Continuous operation — breakdowns are measured in tonnes per hour",
      "High temperature and contamination environments",
      "Extreme hydraulic loads and pressure cycles",
      "Short maintenance windows during planned shutdowns",
    ],
  },
  {
    icon: Factory,
    name: "Rolling Mills",
    image: "/images/niloy-tanvirul-6TnPpaRUqCE-unsplash.jpg",
    category: "Primary Market",
    description:
      "Hot and cold rolling operations place intense demands on hydraulic sealing and cylinder systems. Rolling mill hydraulic systems operate at high pressures and high cycle rates, with scale, heat, and cooling water creating a highly aggressive sealing environment. Seal life is critical — a blown rod seal in a rolling mill means unscheduled downtime.",
    detail:
      "Our focus here is on seal selection for the specific profile, material, and pressure that mill cylinder applications require — NBR for general service, PU for high cycle, FKM for high-temperature zones. We also supply mill-type cylinders for entry and exit guide systems.",
    products: ["Hydraulic Seals", "Hydraulic Cylinders"],
    challenges: [
      "High cycle rates demanding premium seal materials",
      "Scale and cooling water contamination",
      "Heat exposure in hot rolling applications",
      "Precision dimensional requirements for replacement fitment",
    ],
  },
  {
    icon: Cog,
    name: "Heavy Industry",
    image: "/images/heavy-steel-fabrication-companies-in-delhi-ncr.jpeg",
    category: "Core Market",
    description:
      "Large-scale manufacturing, fabrication, and processing plants outside the primary steel sector — including sponge iron plants, ferro-alloy units, cement facilities, and large engineering works. These operations share the demand for reliable hydraulic components and industrial valves, with the added challenge of more varied application requirements.",
    detail:
      "We apply the same technical approach across heavy industrial customers — engaging with the specific application before recommending product. Our three product lines cover the majority of hydraulic and valve requirements encountered in these environments.",
    products: ["Hydraulic Seals", "Hydraulic Cylinders", "Industrial Valves"],
    challenges: [
      "Wide variety of application types and specifications",
      "Mixed age of installed equipment requiring non-standard replacements",
      "Varied fluid types and operating conditions",
    ],
  },
];

const supportIndustries = [
  {
    icon: Wrench,
    name: "Maintenance Contractors",
    description:
      "Specialist plant maintenance companies carry out shutdown and running maintenance at steel plants and heavy industrial sites. They need a supplier who can deliver correct components quickly and provide technical support for fitment — not just a parts catalogue.",
    value:
      "Fast response, technical seal selection support, seal kits by cylinder model or OEM reference, and emergency supply when planned stock runs out.",
    products: ["Hydraulic Seals", "Hydraulic Cylinders"],
  },
  {
    icon: Cpu,
    name: "OEM-Linked Users",
    description:
      "Original equipment manufacturers and their supply chain partners require components that meet original specifications in material, dimension, and performance. Consistency of supply and quality is the primary requirement.",
    value:
      "Supply to specification, access to quality manufacturers, dimensional accuracy verification, and consistent availability for repeat purchase.",
    products: ["Hydraulic Seals", "Hydraulic Cylinders"],
  },
  {
    icon: Zap,
    name: "Process Industries",
    description:
      "Continuous process plants — chemical, pharmaceutical, power generation, water treatment — operate valves and hydraulic systems with a focus on safety, compatibility, and uptime. Valve specification must account for fluid type, pressure class, and material compatibility.",
    value:
      "Application-led valve selection, correct material grade for the fluid and operating conditions, and compliance with relevant standards (API, BS, IS).",
    products: ["Industrial Valves", "Hydraulic Seals"],
  },
  {
    icon: Settings,
    name: "Allied Engineering Units",
    description:
      "Smaller engineering firms — fabricators, sub-contractors, and service providers — that support the main steel belt operations. These customers often have varied and unpredictable requirements, and value a technically capable regional supplier over a distant national distributor.",
    value:
      "Regional presence, technical support for varied and non-standard requirements, and flexibility on order quantities.",
    products: ["Hydraulic Seals", "Industrial Valves"],
  },
];

const regionalAreas = [
  { name: "Ballari (Bellary)", detail: "Primary base — steel plants, rolling mills, allied industry" },
  { name: "Vijayanagar",       detail: "Integrated steel complex and associated industry" },
  { name: "Koppal",            detail: "Industrial units and process industries" },
  { name: "Hospet",            detail: "Iron ore and steel processing operations" },
  { name: "Toranagallu",       detail: "Major steel plant cluster" },
  { name: "Pan-Karnataka",     detail: "Specific product lines and project requirements" },
];

const keyAccounts = ["HSM 1", "HSM 2", "HSM 3", "Jindal Region", "Vijayanagar Steel", "Sponge Iron Plants", "Ferro-Alloy Units"];

const productLinks = [
  { href: "/products/hydraulic-seals",    icon: Layers,   name: "Hydraulic Seals" },
  { href: "/products/hydraulic-cylinders", icon: Activity, name: "Hydraulic Cylinders" },
  { href: "/products/industrial-valves",  icon: Settings, name: "Industrial Valves" },
];

/* ── Component ─────────────────────────────────────────── */

export default function IndustriesPageContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative border-b border-[#1e1e1e] bg-[#0a0a0a] py-16 lg:py-20 overflow-hidden">
        <Image
          src="/images/hot-rolling.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
              Industries Served
            </p>
            <h1
              className="mb-4 max-w-3xl text-5xl font-extrabold uppercase leading-tight text-[#f0f0f0] sm:text-6xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Built for Demanding Industrial Environments
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#888888]">
              We serve steel plants, rolling mills, process industries, maintenance contractors, and
              allied engineering units — with a primary focus on the Bellary–Vijayanagar–Koppal
              industrial belt in Karnataka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured industries (3 large) ── */}
      {featuredIndustries.map((industry, i) => {
        const Icon = industry.icon;
        const isEven = i % 2 === 1;
        return (
          <section
            key={industry.name}
            className={`border-b border-[#1e1e1e] py-16 lg:py-24 ${isEven ? "bg-[#111111]" : "bg-[#0a0a0a]"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Copy */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={isEven ? "lg:order-2" : ""}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-[#1a56db]/10 text-[#1a56db]">
                    <Icon size={20} />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
                    {industry.category}
                  </p>
                  <h2
                    className="mb-4 text-4xl font-extrabold uppercase leading-tight text-[#f0f0f0] sm:text-5xl"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {industry.name}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-[#888888]">
                    {industry.description}
                  </p>
                  <p className="text-sm leading-relaxed text-[#888888]">
                    {industry.detail}
                  </p>

                  {/* Product badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {industry.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-sm border border-[#1a56db]/25 bg-[#1a56db]/8 px-3 py-1 text-xs font-medium text-[#1a56db]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Image + Challenges */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                  className={isEven ? "lg:order-1" : ""}
                >
                  {/* Industry image */}
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-sm border border-[#1e1e1e]">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/25" />
                  </div>

                  <div
                    className={`rounded-sm border border-[#1e1e1e] p-6 ${isEven ? "bg-[#0a0a0a]" : "bg-[#111111]"}`}
                  >
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#555]">
                      Key Application Challenges
                    </p>
                    <ul className="space-y-3">
                      {industry.challenges.map((c, ci) => (
                        <motion.li
                          key={c}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: ci * 0.07 }}
                          className="flex items-start gap-3 text-sm text-[#888888]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#1a56db]" />
                          {c}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-[#1e1e1e] pt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a56db] transition-colors hover:text-[#f0f0f0]"
                      >
                        Discuss your requirement
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Support industries (4 compact) ── */}
      <section className="border-b border-[#1e1e1e] bg-[#111111] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
              Also Serving
            </p>
            <h2
              className="text-4xl font-extrabold uppercase text-[#f0f0f0] sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Adjacent &amp; Support Sectors
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supportIndustries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  className="flex flex-col rounded-sm border border-[#1e1e1e] bg-[#0a0a0a] p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#1a56db]/10 text-[#1a56db]">
                      <Icon size={16} />
                    </div>
                    <h3
                      className="text-lg font-bold uppercase text-[#f0f0f0]"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {industry.name}
                    </h3>
                  </div>
                  <p className="mb-3 flex-1 text-sm leading-relaxed text-[#888888]">
                    {industry.description}
                  </p>
                  <div className="rounded-sm border border-[#1e1e1e] bg-[#111111] p-3">
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#555]">
                      What We Provide
                    </p>
                    <p className="text-xs leading-relaxed text-[#888888]">{industry.value}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {industry.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-sm border border-[#1a56db]/20 bg-[#1a56db]/6 px-2.5 py-0.5 text-xs font-medium text-[#1a56db]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regional focus ── */}
      <section className="border-b border-[#1e1e1e] bg-[#0a0a0a] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#1a56db]/10 text-[#1a56db]">
                <MapPin size={18} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
                Regional Focus
              </p>
              <h2
                className="mb-5 text-4xl font-extrabold uppercase leading-tight text-[#f0f0f0] sm:text-5xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                The Bellary–Vijayanagar–Koppal Belt
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-[#888888]">
                <p>
                  Northern Karnataka — anchored by Ballari, Vijayanagar, and Koppal — is one of
                  India's most significant steel and heavy industry concentrations, driven by the
                  region's iron ore resources and the large integrated steel plants that have grown
                  around them.
                </p>
                <p>
                  This belt hosts multiple large steel complexes, rolling mill operations, sponge
                  iron plants, ferro-alloy units, and allied engineering and service industries. The
                  cumulative industrial base creates sustained demand for hydraulic components,
                  sealing systems, and industrial valves.
                </p>
                <p>
                  Vertex Industrial Solutions is based in Ballari, with established relationships
                  across this belt built over more than two decades. That regional depth — knowing
                  the plants, the procurement teams, the maintenance contractors, and the
                  operational rhythms — is a material advantage that a distant national supplier
                  cannot replicate.
                </p>
              </div>
            </motion.div>

            {/* Right: area list + key accounts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#555]">
                  Areas We Serve
                </p>
                <div className="space-y-2">
                  {regionalAreas.map((area, i) => (
                    <motion.div
                      key={area.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex items-start gap-3 rounded-sm border border-[#1e1e1e] bg-[#111111] px-4 py-3"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1a56db]" />
                      <div>
                        <span className="text-sm font-semibold text-[#f0f0f0]">{area.name}</span>
                        <span className="ml-2 text-xs text-[#555]">— {area.detail}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#555]">
                  Key Customer Segments
                </p>
                <div className="flex flex-wrap gap-2">
                  {keyAccounts.map((account, i) => (
                    <motion.span
                      key={account}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                      className="rounded-sm border border-[#1a56db]/25 bg-[#1a56db]/8 px-3 py-1.5 text-xs font-medium text-[#1a56db]"
                    >
                      {account}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Products cross-reference ── */}
      <section className="border-b border-[#1e1e1e] bg-[#111111] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <h2
              className="text-3xl font-extrabold uppercase text-[#f0f0f0] sm:text-4xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Our Product Range
            </h2>
            <p className="mt-2 text-sm text-[#888888]">
              Three focused product lines covering the core component requirements of our markets.
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
                    className="group flex items-center justify-between rounded-sm border border-[#1e1e1e] bg-[#0a0a0a] px-5 py-4 transition-colors hover:border-[#1a56db]/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#1a56db]/10 text-[#1a56db]">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm font-semibold text-[#f0f0f0]">{product.name}</span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-[#333] transition-colors group-hover:text-[#1a56db]"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-16 lg:py-20">
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
                className="text-3xl font-extrabold uppercase text-[#f0f0f0] sm:text-4xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Industry-Specific Enquiry
              </h2>
              <p className="mt-1 text-sm text-[#888888]">
                Tell us your industry and application — we will identify the right product.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-[#1a56db] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
              >
                Send Enquiry
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-sm border border-[#2a2a2a] px-5 py-2.5 text-sm font-semibold text-[#888888] transition-colors hover:border-[#555] hover:text-[#f0f0f0]"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
