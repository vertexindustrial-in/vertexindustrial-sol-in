"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Technical Support", href: "/technical-support" },
  { label: "About", href: "/about" },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e1e1e] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Vertex Industrial Solutions"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-150 rounded-sm ${
                    active
                      ? "text-[#f0f0f0]"
                      : "text-[#888888] hover:text-[#f0f0f0]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-sm bg-[#1e1e1e]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Enquire CTA — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-sm bg-[#1a56db] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1e40af]"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 text-[#888888] hover:text-[#f0f0f0] transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#1e1e1e] bg-[#0a0a0a] lg:hidden"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-sm px-3 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-[#1e1e1e] text-[#f0f0f0]"
                          : "text-[#888888] hover:text-[#f0f0f0] hover:bg-[#111111]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-sm bg-[#1a56db] px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#1e40af] transition-colors"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
