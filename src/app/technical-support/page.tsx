import type { Metadata } from "next";
import TechnicalSupportPageContent from "@/components/TechnicalSupportPageContent";

export const metadata: Metadata = {
  title: "Technical Support",
  description:
    "Vertex Industrial Solutions provides application-led technical support for hydraulic seals, cylinders, and industrial valves — seal selection, cylinder specification, valve sizing, and failure analysis for industrial customers in Karnataka.",
  keywords: [
    "hydraulic seal selection support Karnataka",
    "cylinder specification industrial Ballari",
    "valve sizing technical support India",
    "hydraulic seal failure analysis",
    "industrial technical support Bellary",
    "application-led seal selection Karnataka",
    "hydraulic troubleshooting support Ballari",
    "industrial component specification Karnataka",
  ],
  openGraph: {
    title: "Technical Support | Vertex Industrial Solutions",
    description:
      "Application-led technical support for hydraulic seals, cylinders, and industrial valves — seal selection, cylinder sizing, valve matching, and failure analysis.",
    url: "/technical-support",
  },
  alternates: {
    canonical: "/technical-support",
  },
};

export default function TechnicalSupportPage() {
  return <TechnicalSupportPageContent />;
}
