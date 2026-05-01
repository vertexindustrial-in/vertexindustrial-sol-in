# CLAUDE.md — Vertex Industrial Solutions Website

> This file is the project memory for Claude Code. Read this before touching any file.

---

## 🏢 Project Overview

**Client:** Vertex Industrial Solutions  
**Proprietor:** H. Fareed Samdani  
**Location:** Ballari, Karnataka, India  
**Phone:** +91 81479 04606  
**Email:** fareed@vertexindustrial.in  
**Address:** SY No. 464/B and 464/1, D Block, Belagal Tanda Road, Belagal Village, Ballari District, Karnataka – 583115

**Business:** Industrial supply and technical solutions firm  
**Core Products:** Hydraulic Seals · Hydraulic Cylinders · Industrial Valves  
**Region Served:** Bellary–Vijayanagar–Koppal industrial belt, Karnataka

---

## 🎯 Website Goals

1. Establish credibility as a serious industrial supplier
2. Generate inbound enquiries from industrial buyers
3. Support dealership / vendor onboarding
4. Showcase technical expertise (NOT look like a generic trader)
5. Present regional strength in the Bellary steel belt

---

## 🧱 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Motion (motion.dev) — use `motion/react`
- **UI Components:** shadcn/ui (for forms, dialogs)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend or Nodemailer (for enquiry form)
- **Fonts:** Google Fonts — `Barlow Condensed` (headings) + `IBM Plex Sans` (body)
- **Deployment:** Vercel (recommended)

---

## 🎨 Design System

### Colors
```css
--color-bg: #0a0a0a           /* near-black background */
--color-surface: #111111       /* card/section surfaces */
--color-border: #1e1e1e        /* subtle borders */
--color-text-primary: #f0f0f0  /* primary text */
--color-text-secondary: #888888 /* muted text */
--color-accent: #1a56db        /* Vertex blue — matches logo */
--color-accent-hover: #1e40af  /* slightly darker on hover */
--color-orange: #ea580c        /* optional warm accent for CTAs */
```

### Typography
- **Display/Hero:** `Barlow Condensed` — bold, industrial, strong
- **Body:** `IBM Plex Sans` — technical, clean, readable
- **Mono:** `IBM Plex Mono` — for specs/technical callouts

### Logo
- The Vertex logo is a geometric blue "V/W" mark with bold text
- Logo file: `/public/logo.png` (place here when provided)
- On dark backgrounds: use as-is (blue on dark works)
- On light backgrounds: use dark variant

### Design Aesthetic
- **Theme:** Dark industrial — near-black base, steel blue accent
- **Feel:** Precision engineering, not flashy consumer brand
- **Layout:** Clean sections, strong type hierarchy, generous whitespace
- **Avoid:** Purple gradients, generic stock photo heavy layouts, loud colours

---

## 📄 Pages & Structure

```
/                    → Home
/about               → About Us
/products            → Products (Seals, Cylinders, Valves)
/products/hydraulic-seals
/products/hydraulic-cylinders
/products/industrial-valves
/industries          → Industries Served
/technical-support   → Technical Support / Solutions
/contact             → Contact Us
/partnership         → Vendor / Dealership / Partnership
```

---

## 🏠 Home Page Sections

1. **Hero** — Full-width dark banner
   - Headline: "Industrial Seals, Hydraulic Cylinders & Valves"
   - Subheadline: "Technical Solutions for Demanding Industrial Applications"
   - Subtext: "Vertex Industrial Solutions is a Ballari-based industrial supply and technical partner serving steel plants, rolling mills, and heavy industries across the region."
   - CTAs: [Enquire Now] [View Products] [Contact Us]

2. **Products Strip** — 3 cards: Hydraulic Seals / Hydraulic Cylinders / Industrial Valves

3. **Industries Served** — Steel Plants · Rolling Mills · Heavy Industry · Maintenance Contractors · OEM Users · Process Industries

4. **Why Vertex** — 6 differentiator cards:
   - Technical Coordination
   - Regional Strength (Bellary steel belt)
   - Critical Application Support
   - Fast Response
   - Reliable Sourcing
   - Problem-Solving Mindset

5. **About Snapshot** — 2-column: text + company credentials

6. **CTA Banner** — "Ready to discuss your requirements? Get in touch."

7. **Footer** — Logo, nav links, contact details, WhatsApp button

---

## 🔩 Product Pages

### Hydraulic Seals
> We supply high-quality hydraulic seals for industrial applications, with focus on reliable performance, technical fitment, and timely support.

### Hydraulic Cylinders
> We support hydraulic cylinder requirements for industrial users with application-based sourcing, technical coordination, and dependable supply.

### Industrial Valves
> We source industrial valves suited to operating conditions and application needs, with support for technical matching and project execution.

---

## 🏭 Industries Served

- Steel plants
- Rolling mills
- Heavy industries
- Maintenance contractors
- OEM-linked industrial users
- Process industries
- Allied engineering units

**Key regional customers:** HSM 1, HSM 2, HSM 3, Jindal region customers

---

## ✅ Core Differentiators (Why Vertex)

| Point | Description |
|---|---|
| Technical Coordination | Supports right application selection, not just selling |
| Regional Strength | Deep relationships in Bellary steel belt |
| Critical Application Support | Focus on demanding use cases where failures are costly |
| Fast Response | Quick enquiries, quotations, and follow-up |
| Reliable Sourcing | Quality manufacturers and approved suppliers |
| Problem-Solving Mindset | Practical solutions, not just catalogue items |

---

## 📬 Contact / Lead Generation

**Must-have features:**
- Enquiry form (Name, Company, Phone, Email, Product Interest, Message)
- Call button (mobile sticky)
- WhatsApp button → `https://wa.me/918147904606`
- Product-specific enquiry buttons on each product page
- "Request a Quote" form
- "Become a Partner" form on /partnership page

**Form fields — General Enquiry:**
```
Name *
Company Name *
Phone Number *
Email Address
Product / Service of Interest (dropdown: Hydraulic Seals / Cylinders / Valves / Other)
Message / Requirements
[Submit Enquiry]
```

---

## 🌐 SEO Keywords

```
hydraulic seals supplier Ballari
hydraulic cylinders supplier Karnataka
industrial valves supplier Karnataka
industrial technical solutions Ballari
seals and cylinders for steel plants
hydraulic product supplier Bellary
industrial supplier Bellary Vijayanagar Koppal
technical partner for industrial maintenance
valve and cylinder dealer Karnataka
```

---

## 🏗️ Component Conventions

- All components in `/components/` folder
- Page sections as separate components: `HeroSection`, `ProductsSection`, etc.
- Use `motion.div` from `motion/react` for entrance animations
- Stagger children with `transition={{ delay: index * 0.1 }}`
- Use `useInView` from motion for scroll-triggered animations
- Forms use `react-hook-form` with zod schema validation

---

## 📁 Asset Locations

```
/public/logo.png          ← Vertex logo (blue on transparent)
/public/logo-white.png    ← White version for dark backgrounds
/public/images/
  hero-bg.jpg             ← Industrial/steel plant background
  seals.jpg               ← Hydraulic seals product image
  cylinders.jpg           ← Hydraulic cylinders product image
  valves.jpg              ← Industrial valves product image
```

---

## 🚀 Setup Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest vertex-industrial --typescript --tailwind --eslint --app --src-dir

# 2. Install dependencies
cd vertex-industrial
npm install motion lucide-react react-hook-form zod @hookform/resolvers
npm install @radix-ui/react-dialog @radix-ui/react-select

# 3. Install shadcn/ui
npx shadcn@latest init

# 4. Add fonts to next.config or layout.tsx (Barlow Condensed + IBM Plex Sans)
```

---

## 📐 Animation Guidelines (Motion)

```tsx
// Fade-up entrance (use for section headings)
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>

// Stagger children (use for card grids)
<motion.div
  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>

// Card hover lift
<motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }}>
```

---

## ⚠️ Important Notes

- Do NOT make this look like a generic trading/ecommerce website
- No purple gradients, no loud colors
- Keep tone professional and technical — this is B2B industrial, not consumer retail
- WhatsApp CTA should be persistent on mobile
- The company has operational experience since 2002 (through SMS Engineers), incorporated as Vertex in 2025
- Primary market: Bellary–Vijayanagar–Koppal steel and heavy industry belt
- Secondary: Pan-India for specific product lines

---

## 🔗 UI References

- Motion animations: https://motion.dev/
- Component inspiration: https://github.com/nexu-io/open-design
- Design reference: https://stitch.withgoogle.com/

---

*Last updated: May 2026 | Project: Vertex Industrial Solutions Website*

---

## 📸 Image Asset Map (All images in `/public/`)

### Background Images → use for hero, section backgrounds, industries page
```
/images/backgrounds/hero-steel-plant-1.jpg      ← BEST hero background (dramatic steel plant)
/images/backgrounds/hero-steel-plant-2.jpg      ← Alt hero background
/images/backgrounds/hero-industrial-1.jpg       ← Dark industrial scene (good for CTA sections)
/images/backgrounds/hero-industrial-2.jpg       ← Alt industrial scene
/images/backgrounds/bg-hot-rolling.jpg          ← Hot rolling process (Industries page)
/images/backgrounds/bg-rolling-mill-process.jpg ← Rolling mill overview (Industries page)
/images/backgrounds/bg-steel-fabrication.jpg    ← Steel fabrication (Industries page)
/images/backgrounds/bg-steel-industry.jpg       ← Steel industry wide shot
/images/backgrounds/bg-coal-handling.jpg        ← Industrial handling plant
/images/backgrounds/bg-industrial-pipes.jpg     ← Industrial pipes closeup
/images/backgrounds/bg-industrial-detail.jpg    ← Detail industrial shot
/images/backgrounds/bg-conveyor-header.webp     ← Conveyor/bulk handling
```

### Seals Product Images
```
/images/products/seals/seals-main.jpg           ← PRIMARY: use on Products page card + Seals page hero
/images/products/seals/seals-closeup.jpg        ← Closeup detail shot
/images/products/seals/seals-variety-1.jpg      ← Variety shot 1
/images/products/seals/seals-variety-2.jpg      ← Variety shot 2
/images/products/seals/seals-variety-3.jpg      ← Variety shot 3
```

### Hydraulic Cylinders Product Images
```
/images/products/cylinders/cylinders-main.jpg        ← PRIMARY: use on Products card + Cylinders page hero
/images/products/cylinders/cylinders-render.jpg      ← 3D render variant
/images/products/cylinders/cylinders-gen-1.png       ← Generated image 1
/images/products/cylinders/cylinders-gen-2.png       ← Generated image 2
/images/products/cylinders/cylinders-gen-3.png       ← Generated image 3

Sub-types (use on Cylinders detail page):
/images/products/cylinders/mill-type/mill-type-main.png
/images/products/cylinders/mill-type/mill-type-1.png
/images/products/cylinders/mill-type/mill-type-2.png
/images/products/cylinders/telescopic/telescopic-main.png
/images/products/cylinders/telescopic/telescopic-1.png
/images/products/cylinders/tie-rod/tie-rod-main.png
/images/products/cylinders/welded-body/welded-body-main.png
/images/products/cylinders/welded-body/welded-body-1.png
```

### Rolling Mill / Industries Images
```
/images/products/rolling-mill/rolling-mill-main.jpg   ← Use on Industries page (Rolling Mills section)
/images/products/rolling-mill/rolling-mill-rolls.webp ← Rolling mill rolls detail
```

### Recommended Usage
| Location | Image to use |
|---|---|
| Hero section background | `hero-steel-plant-1.jpg` |
| About section background | `hero-industrial-1.jpg` |
| CTA banner | `hero-industrial-2.jpg` |
| Products page — Seals card | `seals-main.jpg` |
| Products page — Cylinders card | `cylinders-main.jpg` |
| Products page — Valves card | `bg-industrial-pipes.jpg` (repurpose) |
| Industries page | `bg-hot-rolling.jpg`, `bg-steel-fabrication.jpg`, `bg-rolling-mill-process.jpg` |
| Cylinders detail sub-types | Sub-type folders above |
