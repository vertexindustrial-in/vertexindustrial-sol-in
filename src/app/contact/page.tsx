import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Vertex Industrial Solutions in Ballari, Karnataka. Send an enquiry for hydraulic seals, cylinders, or industrial valves — or call +91 81479 04606 directly.",
  keywords: [
    "contact hydraulic supplier Ballari",
    "hydraulic seals enquiry Karnataka",
    "industrial valve supplier contact",
    "hydraulic product supplier Bellary contact",
    "Vertex Industrial Solutions contact",
    "industrial supplier Ballari phone",
  ],
  openGraph: {
    title: "Contact Vertex Industrial Solutions",
    description:
      "Get in touch for hydraulic seals, cylinders, or industrial valves. Ballari, Karnataka — +91 81479 04606.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
