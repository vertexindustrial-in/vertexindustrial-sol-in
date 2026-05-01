"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Layers, Activity, Settings, CheckCircle } from "lucide-react";
import { products } from "@/lib/products";

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

export default function ProductsPageContent() {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-[#1e1e1e] bg-[#0a0a0a] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
              What We Supply
            </p>
            <h1
              className="mb-4 text-5xl font-extrabold uppercase text-[#f0f0f0] sm:text-6xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Our Products
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#888888]">
              We supply hydraulic seals, hydraulic cylinders, and industrial valves for demanding
              industrial applications — with technical coordination, correct application matching,
              and dependable regional support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product sections */}
      {products.map((product, i) => {
        const Icon = icons[product.slug];
        const isEven = i % 2 === 1;

        return (
          <section
            key={product.slug}
            className={`border-b border-[#1e1e1e] py-20 lg:py-28 ${
              isEven ? "bg-[#111111]" : "bg-[#0a0a0a]"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${
                  isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Copy */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#1a56db]/10 text-[#1a56db]">
                    <Icon size={22} />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
                    0{i + 1}
                  </p>
                  <h2
                    className="mb-3 text-4xl font-extrabold uppercase leading-tight text-[#f0f0f0] sm:text-5xl"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {product.name}
                  </h2>
                  <p className="mb-2 text-base font-semibold text-[#c8c8c8]">
                    {product.tagline}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-[#888888]">
                    {product.shortDescription}
                  </p>
                  <ul className="mb-8 space-y-2.5">
                    {product.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#888888]">
                        <CheckCircle size={15} className="mt-0.5 shrink-0 text-[#1a56db]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-sm bg-[#1a56db] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
                    >
                      Full Details
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href={`/products/${product.slug}#enquire`}
                      className="inline-flex items-center gap-2 rounded-sm border border-[#2a2a2a] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#888888] transition-colors hover:border-[#555] hover:text-[#f0f0f0]"
                    >
                      Enquire
                    </Link>
                  </div>
                </motion.div>

                {/* Image + Types grid */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                  {/* Product image */}
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-sm border border-[#1e1e1e]">
                    <Image
                      src={productImages[product.slug]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#555]">
                    Types &amp; Variants
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {product.types.map((type, ti) => (
                      <motion.div
                        key={type.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: ti * 0.06, ease: "easeOut" }}
                        className={`rounded-sm border border-[#1e1e1e] p-4 ${
                          isEven ? "bg-[#0a0a0a]" : "bg-[#111111]"
                        }`}
                      >
                        <div className="mb-1.5 flex items-center gap-2">
                          <span className="h-1 w-4 rounded-full bg-[#1a56db]" />
                          <span className="text-sm font-semibold text-[#f0f0f0]">
                            {type.name}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-[#666]">
                          {type.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2
              className="mb-3 text-3xl font-extrabold uppercase text-[#f0f0f0] sm:text-4xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Not Sure What You Need?
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm text-[#888888]">
              Send us your requirement and we will identify the right product and specification
              for your application.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a56db] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
            >
              Send an Enquiry
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
