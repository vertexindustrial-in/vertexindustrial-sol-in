"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";

const credentials = [
  {
    icon: CalendarDays,
    label: "Operational Since",
    value: "2002 (via SMS Engineers)",
  },
  {
    icon: CalendarDays,
    label: "Incorporated as Vertex",
    value: "2025",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Ballari, Karnataka, India",
  },
  {
    icon: Users,
    label: "Primary Market",
    value: "Bellary – Vijayanagar – Koppal belt",
  },
];

export default function AboutSnapshotSection() {
  return (
    <section className="relative border-y border-vertex-border bg-vertex-surface py-20 lg:py-28 overflow-hidden">
      <Image
        src="/images/shavr-ik-D5kM5x-aoZM-unsplash.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              About Vertex
            </p>
            <h2 className="mb-5 text-4xl font-extrabold uppercase leading-tight text-vertex-primary sm:text-5xl">
              Industrial Expertise, Built Over Decades
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-vertex-secondary">
              <p>
                Vertex Industrial Solutions is built on over two decades of operational experience
                in industrial supply and technical support, rooted in the Bellary–Vijayanagar–Koppal
                steel belt of Karnataka.
              </p>
              <p>
                Operating since 2002 through SMS Engineers and formally incorporated as Vertex in
                2025, we bring deep regional knowledge, established supplier relationships, and a
                practical engineering mindset to every customer requirement.
              </p>
              <p>
                We do not operate as a generic trader. Our focus is technical — understanding
                applications, selecting the right components, and supporting customers through
                procurement, fitment, and follow-up.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-vertex-accent transition-colors hover:text-vertex-primary"
            >
              About Vertex Industrial
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right — credentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="space-y-3"
          >
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-sm border border-vertex-border bg-vertex-bg px-5 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <Icon size={15} />
                  </div>
                  <div>
                    <div className="text-xs text-vertex-muted">{item.label}</div>
                    <div className="text-sm font-semibold text-vertex-primary">{item.value}</div>
                  </div>
                </div>
              );
            })}

            {/* Proprietor highlight */}
            <div className="rounded-sm border border-vertex-accent/25 bg-vertex-accent/5 px-5 py-4">
              <div className="mb-1 text-xs text-vertex-muted">Proprietor</div>
              <div className="text-sm font-semibold text-vertex-primary">H. Fareed Samdani</div>
              <div className="mt-0.5 text-xs text-vertex-secondary">Ballari, Karnataka, India</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
