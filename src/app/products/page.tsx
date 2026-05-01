import type { Metadata } from "next";
import ProductsPageContent from "@/components/ProductsPageContent";

export const metadata: Metadata = {
  title: "Hydraulic Seals, Cylinders & Industrial Valves",
  description:
    "Vertex Industrial Solutions supplies hydraulic seals, hydraulic cylinders, and industrial valves for steel plants, rolling mills, and heavy industry across Karnataka. Technical coordination and dependable regional support.",
  keywords: [
    "hydraulic seals supplier Ballari",
    "hydraulic cylinders supplier Karnataka",
    "industrial valves supplier Karnataka",
    "seals and cylinders for steel plants",
    "hydraulic product supplier Bellary",
    "valve and cylinder dealer Karnataka",
    "industrial supplier Bellary Vijayanagar Koppal",
    "hydraulic components Karnataka",
  ],
  openGraph: {
    title: "Hydraulic Seals, Cylinders & Industrial Valves | Vertex Industrial Solutions",
    description:
      "Three focused product lines — hydraulic seals, hydraulic cylinders, and industrial valves — for demanding industrial applications across Karnataka.",
    url: "/products",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
