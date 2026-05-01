"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "3", label: "Core Product Lines" },
  { value: "Steel Belt", label: "Bellary – Vijayanagar – Koppal" },
  { value: "B2B", label: "Industrial Focus" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <Image
        src="/images/ant-rozetsky-_qWeqqmpBpU-unsplash.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/80" />
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
      {/* Blue radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(26,86,219,0.22),transparent)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#1a56db]"
        >
          <span className="h-px w-8 bg-[#1a56db]" />
          Ballari · Karnataka · India
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="max-w-5xl text-5xl font-extrabold uppercase leading-[0.93] tracking-tight text-[#f0f0f0] sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Industrial Seals,{" "}
          <span className="text-[#1a56db]">Hydraulic</span>{" "}
          Cylinders{" "}
          <span className="text-[#444]">&amp;</span>{" "}
          Valves
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-5 text-lg font-semibold text-[#c8c8c8] sm:text-xl"
        >
          Technical Solutions for Demanding Industrial Applications
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="mt-3 max-w-2xl text-base leading-relaxed text-[#888888]"
        >
          Vertex Industrial Solutions is a Ballari-based industrial supply and technical partner
          serving steel plants, rolling mills, and heavy industries across the region.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[#1a56db] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
          >
            Enquire Now
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-sm border border-[#2a2a2a] bg-[#111111] px-6 py-3 text-sm font-semibold text-[#f0f0f0] transition-colors hover:border-[#555] hover:bg-[#1a1a1a]"
          >
            View Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-transparent px-6 py-3 text-sm font-semibold text-[#888888] transition-colors hover:text-[#f0f0f0]"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="mt-16 flex flex-wrap gap-8 border-t border-[#1e1e1e] pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl font-extrabold text-[#f0f0f0]"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {s.value}
              </div>
              <div className="mt-0.5 text-xs text-[#888888]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#444]"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
