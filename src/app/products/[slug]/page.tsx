import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import ProductPageContent from "@/components/ProductPageContent";

type Props = {
  params: Promise<{ slug: string }>;
};

const productKeywords: Record<string, string[]> = {
  "hydraulic-seals": [
    "hydraulic seals supplier Ballari",
    "hydraulic seal kits Karnataka",
    "piston seals rolling mill",
    "rod seals industrial cylinders",
    "wiper seals steel plant",
    "hydraulic seals supplier Bellary",
    "NBR PU PTFE FKM seals industrial",
    "seal kits hydraulic cylinders Karnataka",
  ],
  "hydraulic-cylinders": [
    "hydraulic cylinders supplier Karnataka",
    "mill type hydraulic cylinders Ballari",
    "welded body cylinders industrial",
    "tie rod hydraulic cylinder Karnataka",
    "hydraulic cylinder steel plant Bellary",
    "custom hydraulic cylinders Karnataka",
    "cylinder repair rebuild Ballari",
    "hydraulic cylinders Bellary Vijayanagar",
  ],
  "industrial-valves": [
    "industrial valves supplier Karnataka",
    "gate valve supplier Ballari",
    "ball valve industrial Karnataka",
    "valve and cylinder dealer Karnataka",
    "industrial valve Bellary",
    "globe valve check valve Karnataka",
    "API valves industrial supplier India",
    "process valves Karnataka steel plant",
  ],
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    keywords: productKeywords[slug] ?? [],
    openGraph: {
      title: `${product.name} | Vertex Industrial Solutions`,
      description: product.shortDescription,
      url: `/products/${slug}`,
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return <ProductPageContent product={product} />;
}
