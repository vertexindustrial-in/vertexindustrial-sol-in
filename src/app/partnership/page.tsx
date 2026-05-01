import type { Metadata } from "next";
import PartnershipPageContent from "@/components/PartnershipPageContent";

export const metadata: Metadata = {
  title: "Dealership & Partnership",
  description:
    "Become a dealer, distributor, or supply partner for Vertex Industrial Solutions. We are building a network of regional partners across India for hydraulic seals, cylinders, and industrial valves.",
  keywords: [
    "hydraulic products dealer Karnataka",
    "industrial valve distributor India",
    "hydraulic seals dealership Karnataka",
    "industrial supply partner Ballari",
    "become dealer hydraulic components",
    "valve and cylinder dealer Karnataka",
    "industrial distributor Bellary Vijayanagar",
  ],
  openGraph: {
    title: "Dealership & Partnership | Vertex Industrial Solutions",
    description:
      "Become a dealer, distributor, or supply partner. We are building a network of regional partners for hydraulic seals, cylinders, and valves.",
    url: "/partnership",
  },
  alternates: {
    canonical: "/partnership",
  },
};

export default function PartnershipPage() {
  return <PartnershipPageContent />;
}
