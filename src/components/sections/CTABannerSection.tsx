"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function CTABannerSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 lg:py-24">
      {/* Background image */}
      <Image
        src="/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/82" />
      {/* Blue radial */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(26,86,219,0.12),transparent)]" />
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)] bg-[size:64px_64px] opacity-15" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1a56db]">
            Get In Touch
          </p>
          <h2
            className="mb-4 text-4xl font-extrabold uppercase text-[#f0f0f0] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Ready to Discuss Your Requirements?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[#888888]">
            Whether you need a product quotation, technical support, or want to explore a supply
            partnership — we&apos;re ready to engage.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a56db] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
            >
              Send Enquiry
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/918147904606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-[#2a2a2a] bg-[#111111] px-7 py-3.5 text-sm font-semibold text-[#f0f0f0] transition-colors hover:border-[#555]"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
            <a
              href="tel:+918147904606"
              className="inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold text-[#888888] transition-colors hover:text-[#f0f0f0]"
            >
              <Phone size={14} />
              +91 81479 04606
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
