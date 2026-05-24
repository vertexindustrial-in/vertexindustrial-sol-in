"use client";

import { motion } from "motion/react";
import { Building2, Factory, Wrench, Cpu, Cog, Zap } from "lucide-react";

const industries = [
  {
    icon: Building2,
    label: "Steel Plants",
    sub: "Integrated steel manufacturers",
  },
  {
    icon: Factory,
    label: "Rolling Mills",
    sub: "Hot and cold rolling operations",
  },
  {
    icon: Cog,
    label: "Heavy Industry",
    sub: "Large-scale industrial operations",
  },
  {
    icon: Wrench,
    label: "Maintenance Contractors",
    sub: "Plant maintenance specialists",
  },
  {
    icon: Cpu,
    label: "OEM-Linked Users",
    sub: "Original equipment manufacturers",
  },
  {
    icon: Zap,
    label: "Process Industries",
    sub: "Continuous process plants",
  },
];

const regionalTags = ["HSM 1", "HSM 2", "HSM 3", "Jindal Region", "Allied Engineering Units"];

export default function IndustriesSection() {
  return (
    <section className="border-y border-vertex-border bg-vertex-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              Industries Served
            </p>
            <h2 className="mb-5 text-4xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-5xl">
              Built for Demanding Industrial Environments
            </h2>
            <p className="text-base leading-relaxed text-vertex-secondary">
              We serve the full spectrum of heavy industrial operations across the
              Bellary–Vijayanagar–Koppal steel belt — from large integrated steel plants to allied
              engineering units requiring reliable component supply and technical support.
            </p>

            {/* Regional tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {regionalTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-vertex-accent/25 bg-vertex-accent/8 px-3 py-1 text-xs font-medium text-vertex-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — industry grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                  className="flex items-start gap-3 rounded-sm border border-vertex-border bg-vertex-bg p-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <Icon size={15} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-vertex-primary">{ind.label}</div>
                    <div className="mt-0.5 text-xs text-vertex-muted">{ind.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
