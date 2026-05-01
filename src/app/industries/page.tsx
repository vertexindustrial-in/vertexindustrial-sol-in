import type { Metadata } from "next";
import IndustriesPageContent from "@/components/IndustriesPageContent";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Vertex Industrial Solutions supplies hydraulic seals, cylinders, and industrial valves to steel plants, rolling mills, process industries, maintenance contractors, and allied engineering units across the Bellary–Vijayanagar–Koppal industrial belt.",
  keywords: [
    "hydraulic seals for steel plants Karnataka",
    "rolling mill hydraulic supplier Ballari",
    "industrial supplier Bellary Vijayanagar Koppal",
    "seals and cylinders for steel plants",
    "industrial valves process industry Karnataka",
    "maintenance contractor hydraulic supply",
    "heavy industry hydraulic components Karnataka",
    "HSM hydraulic seals Bellary",
  ],
  openGraph: {
    title: "Industries Served | Vertex Industrial Solutions",
    description:
      "Serving steel plants, rolling mills, process industries, and maintenance contractors across the Bellary–Vijayanagar–Koppal industrial belt.",
    url: "/industries",
  },
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
