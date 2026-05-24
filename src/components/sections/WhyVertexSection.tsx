"use client";

import { motion } from "motion/react";
import { Target, MapPin, Shield, Clock, Package, Lightbulb } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Technical Coordination",
    description:
      "Supports right application selection, not just selling. We work with you to identify the correct component for your specific operating conditions.",
  },
  {
    icon: MapPin,
    title: "Regional Strength",
    description:
      "Deep relationships and on-ground presence in the Bellary steel belt. We understand local plant requirements, schedules, and procurement norms.",
  },
  {
    icon: Shield,
    title: "Critical Application Support",
    description:
      "Focus on demanding use cases where seal or cylinder failures are costly. We prioritise reliability in high-load, high-temperature environments.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Quick turnaround on enquiries, quotations, and follow-up. We understand that plant downtime is not an option — and we act accordingly.",
  },
  {
    icon: Package,
    title: "Reliable Sourcing",
    description:
      "Working relationships with quality manufacturers and approved suppliers. Consistent product availability and supply chain dependability.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    description:
      "Practical solutions, not just catalogue items. We engage with application challenges and help identify the right fix for non-standard situations.",
  },
];

export default function WhyVertexSection() {
  return (
    <section className="bg-vertex-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 max-w-xl"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
            Why Vertex
          </p>
          <h2 className="text-4xl font-extrabold uppercase text-vertex-primary sm:text-5xl">
            What Sets Us Apart
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-sm border border-vertex-border bg-vertex-surface p-6 transition-colors hover:border-vertex-accent/30"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                  <Icon size={17} />
                </div>
                <h3 className="mb-2 text-lg font-bold uppercase text-vertex-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-vertex-secondary">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
