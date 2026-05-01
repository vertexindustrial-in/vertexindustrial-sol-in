"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Layers,
  Activity,
  Settings,
} from "lucide-react";
import type { Product } from "@/lib/products";
import EnquiryForm from "@/components/EnquiryForm";

const icons = {
  "hydraulic-seals": Layers,
  "hydraulic-cylinders": Activity,
  "industrial-valves": Settings,
} as const;

const productImages: Record<string, string> = {
  "hydraulic-seals": "/products/seals/seals-main.jpg",
  "hydraulic-cylinders": "/products/cylinders/cylinders-main.jpg",
  "industrial-valves": "/images/shavr-ik-xOR0qFmxM-g-unsplash.jpg",
};

interface Props {
  product: Product;
}

export default function ProductPageContent({ product }: Props) {
  const Icon = icons[product.slug];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="border-b border-[#1e1e1e] bg-[#111111]">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-xs text-[#555] transition-colors hover:text-[#888888]">
            Home
          </Link>
          <ChevronRight size={12} className="text-[#333]" />
          <Link
            href="/products"
            className="text-xs text-[#555] transition-colors hover:text-[#888888]"
          >
            Products
          </Link>
          <ChevronRight size={12} className="text-[#333]" />
          <span className="text-xs text-[#888888]">{product.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#1a56db]/10 text-[#1a56db]">
                <Icon size={22} />
              </div>
              <h1
                className="mb-3 text-5xl font-extrabold uppercase leading-tight text-[#f0f0f0] sm:text-6xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {product.name}
              </h1>
              <p className="mb-3 text-lg font-semibold text-[#c8c8c8]">{product.tagline}</p>
              <p className="mb-6 text-sm leading-relaxed text-[#888888]">
                {product.shortDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#1a56db] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
                >
                  Enquire Now
                  <ArrowRight size={14} />
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-sm border border-[#2a2a2a] px-6 py-3 text-sm font-semibold text-[#888888] transition-colors hover:border-[#555] hover:text-[#f0f0f0]"
                >
                  All Products
                </Link>
              </div>
            </motion.div>

            {/* Product image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col gap-5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#1e1e1e]">
                <Image
                  src={productImages[product.slug]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-3">
                {product.longDescription.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-[#888888]">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features + Specs */}
      <section className="border-y border-[#1e1e1e] bg-[#111111] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2
                className="mb-6 text-2xl font-extrabold uppercase text-[#f0f0f0]"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#888888]">
                    <CheckCircle size={15} className="mt-0.5 shrink-0 text-[#1a56db]" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <h2
                className="mb-6 text-2xl font-extrabold uppercase text-[#f0f0f0]"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Technical Specifications
              </h2>
              <div className="divide-y divide-[#1e1e1e] rounded-sm border border-[#1e1e1e]">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-start justify-between gap-4 px-4 py-3"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#555]">
                      {spec.label}
                    </span>
                    <span className="text-right text-sm text-[#c8c8c8]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="bg-[#0a0a0a] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <h2
              className="text-3xl font-extrabold uppercase text-[#f0f0f0] sm:text-4xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Types &amp; Variants
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.types.map((type, i) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                className="rounded-sm border border-[#1e1e1e] bg-[#111111] p-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#1a56db]" />
                  <h3
                    className="text-base font-bold uppercase text-[#f0f0f0]"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {type.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#888888]">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-y border-[#1e1e1e] bg-[#111111] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2
                className="mb-3 text-3xl font-extrabold uppercase text-[#f0f0f0] sm:text-4xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Applications
              </h2>
              <p className="text-sm leading-relaxed text-[#888888]">
                Industries and use cases where we actively supply and support this product.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="flex flex-wrap gap-2.5 lg:col-span-2"
            >
              {product.applications.map((app, i) => (
                <motion.span
                  key={app}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-sm border border-[#1e1e1e] bg-[#0a0a0a] px-3.5 py-2 text-sm text-[#888888]"
                >
                  {app}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — context */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
                Enquire
              </p>
              <h2
                className="mb-4 text-4xl font-extrabold uppercase leading-tight text-[#f0f0f0] sm:text-5xl"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Request a Quote for{" "}
                <span className="text-[#1a56db]">{product.name}</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-[#888888]">
                Share your requirement and we will come back with the right specification, pricing,
                and availability for your application.
              </p>

              <div className="space-y-4 border-t border-[#1e1e1e] pt-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#555]">
                    Prefer to call?
                  </p>
                  <a
                    href="tel:+918147904606"
                    className="mt-1 block text-sm font-medium text-[#f0f0f0] transition-colors hover:text-[#1a56db]"
                  >
                    +91 81479 04606
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#555]">
                    Email
                  </p>
                  <a
                    href="mailto:fareed@vertexindustrial.in"
                    className="mt-1 block text-sm font-medium text-[#f0f0f0] transition-colors hover:text-[#1a56db]"
                  >
                    fareed@vertexindustrial.in
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#555]">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/918147904606"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium text-[#f0f0f0] transition-colors hover:text-[#1a56db]"
                  >
                    wa.me/918147904606
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="rounded-sm border border-[#1e1e1e] bg-[#111111] p-6 sm:p-8"
            >
              <EnquiryForm defaultProduct={product.name} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
