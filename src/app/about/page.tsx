import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vertex Industrial Solutions is a Ballari-based industrial supply and technical partner with over two decades of experience serving steel plants and heavy industry across the Bellary–Vijayanagar–Koppal belt in Karnataka.",
  keywords: [
    "Vertex Industrial Solutions Ballari",
    "industrial supplier Ballari Karnataka",
    "hydraulic components supplier Bellary",
    "industrial technical solutions Ballari",
    "industrial supplier Bellary Vijayanagar Koppal",
    "SMS Engineers Ballari",
    "technical partner for industrial maintenance",
  ],
  openGraph: {
    title: "About Vertex Industrial Solutions",
    description:
      "Over two decades of industrial supply and technical experience in the Bellary–Vijayanagar–Koppal steel belt of Karnataka.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
