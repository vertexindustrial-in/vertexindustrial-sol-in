"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/918147904606"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-vertex-green text-white shadow-lg shadow-black/40 transition-colors hover:bg-vertex-green-hover sm:h-auto sm:w-auto sm:gap-2 sm:rounded-full sm:px-4 sm:py-3"
    >
      <MessageCircle size={20} className="shrink-0" />
      <span className="sr-only sm:not-sr-only sm:text-sm sm:font-semibold">
        WhatsApp Us
      </span>
    </motion.a>
  );
}
