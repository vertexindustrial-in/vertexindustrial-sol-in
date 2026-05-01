import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_NAME = "Vertex Industrial Solutions";
const SITE_DESC =
  "Vertex Industrial Solutions is a Ballari-based industrial supply and technical partner for steel plants and heavy industries across Karnataka — specialising in hydraulic seals, hydraulic cylinders, and industrial valves.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexindustrial.in"),

  title: {
    default: `${SITE_NAME} — Hydraulic Seals, Cylinders & Valves`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESC,

  keywords: [
    "hydraulic seals supplier Ballari",
    "hydraulic cylinders supplier Karnataka",
    "industrial valves supplier Karnataka",
    "industrial technical solutions Ballari",
    "seals and cylinders for steel plants",
    "hydraulic product supplier Bellary",
    "industrial supplier Bellary Vijayanagar Koppal",
    "technical partner for industrial maintenance",
    "valve and cylinder dealer Karnataka",
  ],

  authors: [{ name: SITE_NAME, url: "https://vertexindustrial.in" }],
  creator: SITE_NAME,

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Hydraulic Seals, Cylinders & Valves`,
    description: SITE_DESC,
    url: "https://vertexindustrial.in",
  },

  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Hydraulic Seals, Cylinders & Valves`,
    description: SITE_DESC,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://vertexindustrial.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f0f0f0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
