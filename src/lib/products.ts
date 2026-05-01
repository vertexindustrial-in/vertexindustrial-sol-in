export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductType {
  name: string;
  description: string;
}

export interface Product {
  slug: "hydraulic-seals" | "hydraulic-cylinders" | "industrial-valves";
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  features: string[];
  specs: ProductSpec[];
  types: ProductType[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug: "hydraulic-seals",
    name: "Hydraulic Seals",
    tagline: "Precision Sealing for Critical Hydraulic Systems",
    shortDescription:
      "High-quality hydraulic seals for industrial applications, with focus on reliable performance, technical fitment, and timely support.",
    longDescription: [
      "We supply hydraulic seals for demanding industrial applications including steel plant hydraulics, rolling mill cylinders, presses, and general industrial equipment.",
      "Our focus is on correct application matching — selecting the right seal profile, material, and dimensional specification for your operating pressure, temperature, and fluid type.",
      "We work with quality manufacturers to ensure consistent supply of standard and custom seal kits, with technical support for fitment and replacement guidance.",
    ],
    features: [
      "Wide pressure range — low to ultra-high pressure applications",
      "Temperature resistance from −40 °C to +200 °C depending on material",
      "Multiple materials: NBR, Polyurethane, PTFE, FKM/Viton",
      "Standard and custom dimensions available",
      "Complete seal kits for specific cylinder models and OEM references",
      "Technical support for seal selection and application matching",
    ],
    specs: [
      { label: "Pressure Range", value: "Up to 500 bar (application-dependent)" },
      { label: "Temperature Range", value: "−40 °C to +200 °C" },
      { label: "Materials", value: "NBR, PU, PTFE, FKM, EPDM" },
      { label: "Standards", value: "ISO, DIN, JIS dimensional references" },
      { label: "Supply Form", value: "Individual seals and complete seal kits" },
      { label: "Lead Time", value: "Ex-stock for standard sizes" },
    ],
    types: [
      {
        name: "Piston Seals",
        description:
          "Seal the cylinder piston to prevent fluid bypass. Single and double-acting configurations for most cylinder types.",
      },
      {
        name: "Rod Seals",
        description:
          "Primary sealing on the cylinder rod. Prevents external leakage and contamination ingress into the cylinder.",
      },
      {
        name: "Wiper / Dust Seals",
        description:
          "Exclude external contaminants from entering the cylinder. Critical in dusty steel plant and mill environments.",
      },
      {
        name: "Guide Rings",
        description:
          "Support and guide the piston and rod under lateral load. Prevent metal-to-metal contact inside the cylinder.",
      },
      {
        name: "Buffer Seals",
        description:
          "Absorb pressure peaks and protect primary rod seals from shock loading in high-cycle applications.",
      },
      {
        name: "Static Seals (O-Rings)",
        description:
          "Sealing of static joints, flanges, and end caps in hydraulic assemblies and manifold systems.",
      },
    ],
    applications: [
      "Steel plant hydraulic systems",
      "Rolling mill cylinders",
      "Industrial presses",
      "Mobile hydraulic equipment",
      "Crane and hoist cylinders",
      "Material handling equipment",
      "Process plant valve actuators",
      "General industrial machinery",
    ],
  },
  {
    slug: "hydraulic-cylinders",
    name: "Hydraulic Cylinders",
    tagline: "Dependable Cylinder Supply with Technical Coordination",
    shortDescription:
      "Application-based sourcing, technical coordination, and dependable supply for hydraulic cylinder requirements across industrial users.",
    longDescription: [
      "We support hydraulic cylinder requirements for industrial users with a focus on application-based sourcing and technical coordination. From standard catalogue cylinders to custom-specification units, we work with established manufacturers to ensure dependable supply.",
      "Our engagement goes beyond supply — we assist customers with bore, stroke, mounting style, and seal specification, helping identify the right cylinder for the operating load, pressure, and environmental conditions.",
      "We also support cylinder repair and rebuild requirements, including seal replacement, rod condition assessment, and sourcing of replacement components.",
    ],
    features: [
      "Standard and custom bore/stroke configurations",
      "High pressure ratings up to 350 bar",
      "Multiple mounting styles: flange, trunnion, clevis, foot, eye",
      "Seal package selection matched to operating conditions",
      "Repair, rebuild, and seal replacement support",
      "Technical assistance for specification and replacement matching",
    ],
    specs: [
      { label: "Bore Range", value: "25 mm to 500 mm+" },
      { label: "Stroke Range", value: "Up to 6 000 mm+" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Cylinder Types", value: "Tie-rod, Welded, Mill-type, Telescopic" },
      { label: "Mounting Options", value: "Flange, Trunnion, Clevis, Foot, Eye" },
      { label: "Rod Finish", value: "Hard chrome plated" },
    ],
    types: [
      {
        name: "Tie-Rod Cylinders",
        description:
          "Standard construction for general industrial use. Easy maintenance, seal replacement, and end-cap removal.",
      },
      {
        name: "Welded Body Cylinders",
        description:
          "Compact, high-pressure construction for space-constrained applications and mobile equipment.",
      },
      {
        name: "Mill Type Cylinders",
        description:
          "Heavy-duty construction for steel plant and rolling mill applications. High load capacity and robust sealing.",
      },
      {
        name: "Telescopic Cylinders",
        description:
          "Multi-stage cylinders for long stroke requirements within a compact retracted length.",
      },
    ],
    applications: [
      "Steel plant press frames and clamping",
      "Rolling mill entry and exit guides",
      "Scrap handling equipment",
      "Crane and hoist mechanisms",
      "Press brakes and power presses",
      "Mining and quarrying equipment",
      "Bulk material handling systems",
      "Industrial automation equipment",
    ],
  },
  {
    slug: "industrial-valves",
    name: "Industrial Valves",
    tagline: "Right Valve, Right Application, Every Time",
    shortDescription:
      "Industrial valves suited to operating conditions and application needs, with support for technical matching and project execution.",
    longDescription: [
      "We source and supply industrial valves for process piping, hydraulic systems, utility lines, and steam applications — matching valve type, pressure class, material grade, and end connection to the specific operating requirement.",
      "Our approach is application-led: we engage with operating conditions — fluid type, pressure, temperature, and flow requirement — to identify the correct valve specification rather than simply supplying catalogue items.",
      "We support both planned project procurement and urgent replacement requirements, with access to quality manufacturers supplying valves to API, BS, and IS standards.",
    ],
    features: [
      "Full range from isolation to control and regulation service",
      "Multiple pressure classes: PN10 to PN400 and ANSI equivalents",
      "Material grades: Carbon Steel, Stainless Steel, Cast Iron, Alloy Steel",
      "End connections: flanged, butt-weld, socket-weld, threaded",
      "Compliance with API, BS, IS, and other standards as required",
      "Technical support for valve selection, sizing, and specification",
    ],
    specs: [
      { label: "Pressure Classes", value: "PN10–PN400 / ANSI Class 150–2500" },
      { label: "Size Range", value: "15 mm (½\") to 600 mm (24\") and above" },
      { label: "Body Materials", value: "CS (A216 WCB), SS (CF8/CF8M), CI, Alloy" },
      { label: "End Connections", value: "Flanged, BW, SW, Threaded (NPT/BSP)" },
      { label: "Standards", value: "API 600, API 6D, BS 1414, IS 778, IS 780" },
      { label: "Applications", value: "Process, Utility, Steam, Hydraulic" },
    ],
    types: [
      {
        name: "Gate Valves",
        description:
          "Full-bore isolation for on/off service. Low pressure drop in open position — suitable for process and utility lines.",
      },
      {
        name: "Ball Valves",
        description:
          "Quarter-turn operation for fast isolation. Suitable for clean fluids in utility and process applications.",
      },
      {
        name: "Globe Valves",
        description:
          "Throttling and regulation service. Good control characteristics for flow regulation and modulating applications.",
      },
      {
        name: "Check Valves",
        description:
          "Prevent reverse flow. Swing, lift, and dual-plate types available for various pipeline orientations.",
      },
      {
        name: "Butterfly Valves",
        description:
          "Compact and lightweight for large-bore isolation in low-to-medium pressure service. Wafer and lug patterns.",
      },
      {
        name: "Safety / Relief Valves",
        description:
          "Overpressure protection for vessels and pipelines. Spring-loaded and pilot-operated types to various standards.",
      },
    ],
    applications: [
      "Process plant piping systems",
      "Steel plant utility lines (water, air, gas)",
      "Steam distribution and condensate systems",
      "Cooling water circuits",
      "Hydraulic power unit (HPU) pipelines",
      "Fuel oil and lube oil systems",
      "Fire protection systems",
      "General industrial piping",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
