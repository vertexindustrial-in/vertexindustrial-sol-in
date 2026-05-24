"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Layers, Activity, Settings } from "lucide-react";

const productImages: Record<string, string> = {
  "hydraulic-seals": "/products/seals/seals-main.jpg",
  "hydraulic-cylinders": "/products/cylinders/cylinders-main.jpg",
  "industrial-valves": "/images/shavr-ik-xOR0qFmxM-g-unsplash.jpg",
};

const products = [
  {
    icon: Layers,
    name: "Hydraulic Seals",
    slug: "hydraulic-seals",
    description:
      "High-quality hydraulic seals for industrial applications. Reliable performance, technical fitment, and timely support for demanding environments.",
    specs: ["Piston Seals", "Rod Seals", "Wiper Seals", "Guide Rings"],
  },
  {
    icon: Activity,
    name: "Hydraulic Cylinders",
    slug: "hydraulic-cylinders",
    description:
      "Application-based sourcing, technical coordination, and dependable supply for hydraulic cylinder requirements across industrial users.",
    specs: ["Tie-Rod Cylinders", "Welded Cylinders", "Custom Builds", "Repair Support"],
  },
  {
    icon: Settings,
    name: "Industrial Valves",
    slug: "industrial-valves",
    description:
      "Industrial valves suited to operating conditions and application needs, with support for technical matching and project execution.",
    specs: ["Gate Valves", "Ball Valves", "Globe Valves", "Check Valves"],
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-vertex-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
            Core Products
          </p>
          <h2 className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl">
            What We Supply
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex flex-col rounded-sm border border-vertex-border bg-vertex-surface overflow-hidden transition-colors hover:border-vertex-accent/40"
              >
                {/* Product image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={productImages[product.slug]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Keep dark overlay on card images regardless of theme */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/40" />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <Icon size={20} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold uppercase text-vertex-primary">
                    {product.name}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-vertex-secondary">
                    {product.description}
                  </p>

                  {/* Spec list */}
                  <ul className="mb-6 space-y-1.5">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-vertex-muted">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-vertex-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-vertex-accent transition-colors hover:text-vertex-primary"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Bottom hover accent */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-vertex-accent transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-sm border border-vertex-border bg-vertex-surface px-6 py-3 text-sm font-semibold text-vertex-secondary transition-colors hover:border-vertex-muted hover:text-vertex-primary"
          >
            All Products
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
