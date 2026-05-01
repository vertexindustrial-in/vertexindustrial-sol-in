import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyVertexSection from "@/components/sections/WhyVertexSection";
import AboutSnapshotSection from "@/components/sections/AboutSnapshotSection";
import CTABannerSection from "@/components/sections/CTABannerSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Vertex Industrial Solutions — Hydraulic Seals, Cylinders & Valves | Ballari, Karnataka",
  },
  description:
    "Vertex Industrial Solutions is a Ballari-based industrial supply and technical partner serving steel plants, rolling mills, and heavy industries across the Bellary–Vijayanagar–Koppal belt. Suppliers of hydraulic seals, hydraulic cylinders, and industrial valves.",
  keywords: [
    "hydraulic seals supplier Ballari",
    "hydraulic cylinders supplier Karnataka",
    "industrial valves supplier Karnataka",
    "industrial supplier Bellary Vijayanagar Koppal",
    "seals and cylinders for steel plants",
    "hydraulic product supplier Bellary",
    "technical partner for industrial maintenance",
    "industrial technical solutions Ballari",
    "valve and cylinder dealer Karnataka",
  ],
  openGraph: {
    title: "Vertex Industrial Solutions — Hydraulic Seals, Cylinders & Valves",
    description:
      "Ballari-based industrial supply and technical partner for steel plants and heavy industries across Karnataka.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyVertexSection />
      <AboutSnapshotSection />
      <CTABannerSection />
    </>
  );
}
