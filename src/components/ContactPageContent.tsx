"use client";

import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 81479 04606",
    href: "tel:+918147904606",
    cta: "Call now",
  },
  {
    icon: Mail,
    label: "Email",
    value: "fareed@vertexindustrial.in",
    href: "mailto:fareed@vertexindustrial.in",
    cta: "Send email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 81479 04606",
    href: "https://wa.me/918147904606",
    cta: "Open WhatsApp",
    external: true,
  },
];

export default function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-vertex-border bg-vertex-bg py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-vertex-accent">
              Contact Us
            </p>
            <h1 className="mb-4 text-5xl font-extrabold uppercase text-vertex-primary sm:text-6xl">
              Get In Touch
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-vertex-secondary">
              Send an enquiry, request a quotation, or discuss a technical requirement. We respond
              to all enquiries within one business day.
            </p>

            {/* Quick-contact strip */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+918147904606"
                className="inline-flex items-center gap-2 rounded-sm bg-vertex-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vertex-accent-hover"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/918147904606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-vertex-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vertex-green-hover"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href="mailto:fareed@vertexindustrial.in"
                className="inline-flex items-center gap-2 rounded-sm border border-vertex-border-subtle px-5 py-2.5 text-sm font-semibold text-vertex-secondary transition-colors hover:border-vertex-muted hover:text-vertex-primary"
              >
                <Mail size={14} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main: contact info + form */}
      <section className="bg-vertex-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

            {/* Left — contact details (2 of 5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-4 lg:col-span-2"
            >
              {/* Contact method cards */}
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ x: 3, transition: { duration: 0.15 } }}
                    className="group flex items-start gap-4 rounded-sm border border-vertex-border bg-vertex-surface p-4 transition-colors hover:border-vertex-accent/40"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                        {method.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-vertex-primary">
                        {method.value}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-vertex-accent opacity-0 transition-opacity group-hover:opacity-100">
                        {method.cta}
                        <ArrowUpRight size={11} />
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.28 }}
                className="rounded-sm border border-vertex-border bg-vertex-surface p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                      Address
                    </p>
                    <address className="mt-0.5 not-italic text-sm leading-relaxed text-vertex-secondary">
                      SY No. 464/B and 464/1, D Block<br />
                      Belagal Tanda Road, Belagal Village<br />
                      Ballari District, Karnataka – 583115<br />
                      India
                    </address>
                  </div>
                </div>
              </motion.div>

              {/* Business hours */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.36 }}
                className="rounded-sm border border-vertex-border bg-vertex-surface p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-vertex-accent/10 text-vertex-accent">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                      Business Hours
                    </p>
                    <div className="mt-1.5 space-y-1">
                      <div className="flex justify-between gap-6 text-sm">
                        <span className="text-vertex-secondary">Monday – Saturday</span>
                        <span className="text-vertex-primary">9:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-6 text-sm">
                        <span className="text-vertex-secondary">Sunday</span>
                        <span className="text-vertex-muted">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Proprietor */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.44 }}
                className="rounded-sm border border-vertex-accent/25 bg-vertex-accent/5 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-vertex-muted">
                  Proprietor
                </p>
                <p className="mt-1 text-sm font-semibold text-vertex-primary">
                  H. Fareed Samdani
                </p>
                <p className="mt-0.5 text-xs text-vertex-secondary">
                  Vertex Industrial Solutions
                </p>
              </motion.div>
            </motion.div>

            {/* Right — enquiry form (3 of 5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-3"
            >
              <div className="rounded-sm border border-vertex-border bg-vertex-surface p-6 sm:p-8">
                <div className="mb-6 border-b border-vertex-border pb-5">
                  <h2 className="text-2xl font-extrabold uppercase text-vertex-primary">
                    Send an Enquiry
                  </h2>
                  <p className="mt-1 text-sm text-vertex-secondary">
                    Fields marked <span className="text-vertex-accent">*</span> are required.
                  </p>
                </div>
                <EnquiryForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="border-t border-vertex-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[420px] w-full bg-vertex-surface lg:h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps?q=Belagal+Village,+Ballari+District,+Karnataka+583115,+India&output=embed&z=13"
            title="Vertex Industrial Solutions — Ballari, Karnataka"
            className="absolute inset-0 h-full w-full border-0 grayscale"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Address overlay card */}
          <div className="absolute bottom-3 left-3 right-3 z-10 rounded-sm border border-vertex-border bg-vertex-bg/95 p-4 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-xs">
            <div className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-vertex-accent" />
              <div>
                <p className="mb-0.5 text-sm font-bold uppercase text-vertex-primary">
                  Vertex Industrial Solutions
                </p>
                <p className="text-xs leading-relaxed text-vertex-secondary">
                  Belagal Village, Ballari District<br />
                  Karnataka – 583115, India
                </p>
                <a
                  href="https://maps.google.com/maps?q=Belagal+Village,+Ballari+District,+Karnataka+583115,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-vertex-accent transition-colors hover:text-vertex-primary"
                >
                  Open in Google Maps
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
