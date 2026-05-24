---
version: alpha
name: Vertex Industrial Solutions
description: >
  Dark industrial design system for a B2B supplier of hydraulic seals, cylinders, and
  industrial valves. Built to establish credibility with purchasing managers and engineers
  in the Karnataka steel belt — technical and precise, not flashy or consumer-facing.

colors:
  background: "#0a0a0a"
  surface: "#111111"
  border: "#1e1e1e"
  text-primary: "#f0f0f0"
  text-secondary: "#888888"
  text-muted: "#666666"
  accent: "#1a56db"
  accent-hover: "#1e40af"
  orange: "#ea580c"
  green: "#16a34a"
  green-hover: "#15803d"
  destructive: "#dc2626"

typography:
  display:
    fontFamily: "'Barlow Condensed', ui-sans-serif, system-ui"
    fontSize: "clamp(3rem, 8vw, 5.5rem)"
    fontWeight: "800"
    lineHeight: "1.0"
    letterSpacing: "0.01em"
  heading-xl:
    fontFamily: "'Barlow Condensed', ui-sans-serif, system-ui"
    fontSize: "3rem"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: "0.01em"
  heading-lg:
    fontFamily: "'Barlow Condensed', ui-sans-serif, system-ui"
    fontSize: "2.25rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "0.01em"
  heading-md:
    fontFamily: "'Barlow Condensed', ui-sans-serif, system-ui"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "0.01em"
  heading-sm:
    fontFamily: "'Barlow Condensed', ui-sans-serif, system-ui"
    fontSize: "1.25rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "0.01em"
  body:
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui"
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.625"
    letterSpacing: "0"
  body-md:
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.625"
    letterSpacing: "0"
  label:
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui"
    fontSize: "0.75rem"
    fontWeight: "600"
    lineHeight: "1.25"
    letterSpacing: "0.1em"
  mono:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.5"
    letterSpacing: "0"

rounded:
  sm: "0.3rem"
  md: "0.4rem"
  lg: "0.5rem"
  xl: "0.7rem"
  full: "9999px"

spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  section-y: "5rem"
  section-y-lg: "7rem"
  container-x: "1rem"
  container-x-lg: "2rem"
  max-width: "80rem"

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    fontWeight: "600"
    rounded: "{rounded.lg}"
    padding: "0.5rem 1.25rem"
    height: "2.25rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    fontWeight: "500"
    rounded: "{rounded.lg}"
    padding: "0.5rem 1.25rem"
    height: "2.25rem"
    border: "1px solid #2a2a2a"
  button-secondary-hover:
    border: "1px solid #555555"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.body}"
    fontWeight: "600"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.border}"
    padding: "1.5rem"
  card-hover:
    border: "1px solid rgba(26, 86, 219, 0.4)"
    transform: "translateY(-4px)"
  nav:
    backgroundColor: "rgba(10, 10, 10, 0.95)"
    textColor: "{colors.text-secondary}"
    border: "1px solid {colors.border}"
    backdropFilter: "blur(4px)"
  nav-link:
    textColor: "{colors.text-secondary}"
  nav-link-hover:
    textColor: "{colors.text-primary}"
  nav-link-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
  input-field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
    typography: "{typography.body}"
  input-field-focus:
    border: "1px solid {colors.accent}"
    boxShadow: "0 0 0 1px rgba(26, 86, 219, 0.3)"
  input-label:
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
  input-error:
    border: "1px solid rgba(220, 38, 38, 0.6)"
    textColor: "#f87171"
  icon-badge:
    backgroundColor: "rgba(26, 86, 219, 0.1)"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    size: "2.25rem"
  tag-accent:
    backgroundColor: "rgba(26, 86, 219, 0.08)"
    textColor: "{colors.accent}"
    border: "1px solid rgba(26, 86, 219, 0.25)"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.75rem"
    typography: "{typography.label}"
  eyebrow:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    border: "1px solid {colors.border}"
  whatsapp-fab:
    backgroundColor: "{colors.green}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    size: "3rem"
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.4)"
  whatsapp-fab-hover:
    backgroundColor: "{colors.green-hover}"
---

## Overview

Vertex Industrial Solutions presents a **dark industrial** visual identity that signals
precision engineering and technical authority. The aesthetic is purpose-built for B2B
industrial buyers — purchasing managers, maintenance engineers, and plant operators —
who distrust consumer-grade polish and respond to competence and directness.

The palette is near-monochromatic: near-black backgrounds, dark charcoal surfaces, and a
single steel-blue accent that carries all interactive weight. There is no purple, no
gradients that feel decorative, and no stock-photo softness. Every design decision
reinforces the same message: *this is a serious technical supplier, not a marketplace*.

The overall character is **high-contrast and structural**: strong typographic hierarchy
using condensed bold headings, clean sans-serif body text, and generous whitespace that
lets content breathe without feeling empty. Micro-interactions are present but restrained
— card lifts, staggered entrance reveals, smooth transitions — never flashy.

## Colors

The color system is minimal by design. Three layers of darkness create depth without
shadows, and a single accent color carries all interactive meaning.

**Background hierarchy** — depth through color value, not elevation:
- `#0a0a0a` (background): page canvas, input fields, low-emphasis sections
- `#111111` (surface): cards, footers, alternating section backgrounds
- `#1e1e1e` (border): all hairline dividers and card borders

Sections alternate between `background` and `surface` fills to create rhythm without
visible dividers. The difference is intentionally subtle: adjacent sections should feel
like a continuous dark surface with gentle texture variation, not a checkerboard.

**Accent blue** (`#1a56db` → `#1e40af` on hover) is the sole interactive color. It
appears on CTAs, focus rings, icon badges, active nav indicators, contact info, and
accent tags. Its opacity-based tints (`rgba(26, 86, 219, 0.08–0.25)`) serve as
non-intrusive fills for tags and icon container backgrounds.

**Text hierarchy** uses three values:
- `#f0f0f0`: headlines, card titles, all primary content
- `#888888`: body copy, descriptions, secondary labels
- `#666666`: tertiary details, spec lists, sub-labels

**Special-purpose colors** are single-use and do not bleed into general UI:
- `#16a34a` / `#15803d`: WhatsApp floating button only — never used for other CTAs
- `#ea580c` (orange): reserved as a warm alternative CTA accent, sparingly applied
- `#dc2626`: validation errors and destructive states only

All text/background pairings target WCAG AA contrast. Never place `#888888` body text
on `#111111` surface for extended reading — reserve it for short labels and metadata.

## Typography

Two complementary typefaces define the voice:

**Barlow Condensed** — all headings. Condensed geometry and bold weight communicate
industrial strength without decorative flair. Use exclusively for headings (`h1`–`h6`),
large stat callouts, and card titles. Always uppercase. Weight `700` for section
headings, `800` for hero display text.

**IBM Plex Sans** — all body text, labels, navigation, form fields. The "Plex" family
was designed for IBM's technical documentation and carries the right associations:
systematic, readable, slightly mechanical. Weights `400` (regular) and `600`
(semi-bold labels).

**IBM Plex Mono** — technical specifications, part numbers, measurements, callout data.
Use sparingly to signal precision — not for code blocks or general content.

**Eyebrow labels** appear above section headings and card groups. They are rendered in
`IBM Plex Sans` at `0.75rem / 600 / uppercase / tracking-widest` in `{colors.accent}`.
A short horizontal rule or inline accent mark often precedes the eyebrow text to
reinforce the section anchor.

Heading sizes scale down responsively. Hero display text uses `clamp()` to remain
impactful on mobile without overflowing. Section headings (`heading-xl`) reduce from
`3rem` to roughly `2rem` at mobile widths.

## Layout & Spacing

The layout system uses a **max-width constrained container** (`80rem / 1280px`) with
horizontal padding that scales from `1rem` on mobile to `2rem` on large screens.
All content lives within this container; full-bleed background fills extend to viewport
edges while content stays aligned.

Section vertical rhythm uses `py-20` (5rem) on standard screens and `py-28` (7rem) on
large screens. This generous spacing is intentional: the site conveys premium positioning
through restraint and air, not density.

**Card grids** follow a consistent pattern:
- Product/feature cards: 3-column on desktop, 1-column on mobile, `gap-1` (4px)
- Differentiator cards: 3-column on large, 2-column on medium, 1-column on mobile
- Industries: 2-column on small+, 1-column on mobile

The extremely tight `gap-1` (4px) between product cards is a deliberate choice that
makes the grid read as a unified panel rather than a collection of separate cards. This
reinforces the industrial, structured feel.

Horizontal spacing inside cards uses `1.5rem` padding. Icon-to-text spacing uses `0.75rem`.
List items use `space-y-2.5` for comfortable reading density.

## Elevation & Depth

This system uses **color-based depth** rather than box shadows. The three background
values (`#0a0a0a`, `#111111`, `#1e1e1e`) create a three-level elevation model:

- **Level 0** — page canvas: `#0a0a0a`. Input fields and low-emphasis containers sit
  here to appear "inset."
- **Level 1** — cards, footer, alternating sections: `#111111`. The standard surface
  for interactive and content-bearing elements.
- **Level 2** — borders, dividers, disabled states: `#1e1e1e`. Not a surface — a
  structural element.

Traditional box shadows are absent on cards. The `1px border` on `#1e1e1e` provides
sufficient separation. The one exception is the WhatsApp floating action button, which
uses `shadow-lg` with `rgba(0,0,0,0.4)` because it floats above page content and needs
a visible lift on any background color.

The navbar uses `backdrop-filter: blur(4px)` on a `rgba(10,10,10,0.95)` background.
This is not a decorative effect — it ensures readable navigation as the user scrolls
over varied content (hero images, section backgrounds).

On hover, cards animate `translateY(-4px)` — a 4px lift. This is the primary motion
signal for "this element is interactive." No shadow change accompanies the lift; the
slight displacement is sufficient on a dark background.

## Shapes

Border radius values are intentionally small. The industrial aesthetic demands
**controlled geometry**, not softness:

- `sm` (0.3rem / ~5px): card corners, input fields, icon badges, tags — the default
  for almost all containers
- `md` (0.4rem / ~6px): reserved for intermediate UI states and button size variants
- `lg` (0.5rem / 8px): primary and secondary buttons
- `xl` (0.7rem / ~11px): used by component library for larger interactive surfaces
- `full` (9999px): the WhatsApp FAB — deliberately circular to stand apart from
  all rectilinear page elements

Icon badges are square containers (not circular) at `2.25rem × 2.25rem` with `rounded-sm`.
Circular icon containers would soften the aesthetic — square containers maintain alignment
with the grid and feel more mechanical.

Tags and status indicators use `rounded-sm` as well. The only fully round element on
the page is the WhatsApp button, which serves as a deliberate visual anchor.

## Components

### Buttons

Three tiers, left to right in visual weight:

1. **Primary** (`button-primary`): solid accent blue, white text, `600` weight. Used
   for the single most important action on any surface — "Enquire Now," "Submit."
2. **Secondary** (`button-secondary`): dark border (`#2a2a2a`) on transparent, white
   text. Appears alongside primary CTAs for secondary actions — "View Products,"
   "Learn More." Border brightens to `#555555` on hover.
3. **Ghost** (`button-ghost`): no background or border, accent-blue text. Used for
   inline text links styled as actions — "View all products →". Inherits context color.

All buttons use `rounded.lg` (0.5rem), `height: 2.25rem`, and transition `colors` over
`150ms`. The `active` state shifts the button `1px` downward.

### Cards

Product cards, feature differentiator cards, and industry cards share a base structure:
`surface` background, `border` hairline, `rounded.sm` corners. On hover, the border
transitions to `rgba(26, 86, 219, 0.4)` and the card lifts `4px`. A thin accent bar
at the card bottom grows from `0` to full width on hover using a CSS transform — this
is the only expanding/morphing animation in the system.

Cards contain: an icon badge (top), a Barlow Condensed title (uppercase), short body
copy in `text-secondary`, and optional spec lists or CTA links.

### Navigation

The navbar is sticky (`top: 0; z-index: 50`) and blurred. Active nav items have a
`surface` background pill that animates between links using a Motion layout animation
(spring: stiffness 400, damping 35). This creates a smooth sliding indicator without
a separate underline element. Nav text rests at `text-secondary` and brightens to
`text-primary` on hover and when active.

The mobile menu slides open with a height animation from `0` to `auto` over `220ms`.

### Icon Badges

All feature icons use a consistent badge pattern: `2.25rem × 2.25rem` container with
`rgba(26, 86, 219, 0.10)` background and `{colors.accent}` icon color. The badge is
always `rounded.sm`. This creates a consistent visual hook that ties product cards,
feature cards, industry items, and credential blocks into the same visual language.

### Eyebrows & Section Headers

Sections open with an eyebrow label (`{typography.label}` in `{colors.accent}`),
followed by a `heading-xl` title in `text-primary`, then a short descriptive paragraph
in `text-secondary` at `body-md` size. The eyebrow is always uppercase with wide
letter-spacing and often preceded by a short horizontal rule in the accent color.
This three-part header pattern repeats on every major section.

### Forms

Form labels use `{typography.label}` (uppercase, spaced, `text-secondary`). Input
fields use `background` fill to appear inset relative to the form's `surface`
container. The focus state draws a `1px accent` border plus a soft `0 0 0 1px rgba(26,86,219,0.3)`
ring — visible but not loud.

Fields lay out in a 2-column grid on tablet+ and collapse to 1-column on mobile.
Error messages appear in `#f87171` (red-400) below the offending field with no icon —
text only.

### WhatsApp Floating Button

Positioned fixed at `bottom: 1.25rem; right: 1.25rem; z-index: 50`. Fully circular
(`rounded.full`), `3rem × 3rem`, WhatsApp green. Enters with a scale animation
(`0.8 → 1.0` over `350ms`, delayed `1.2s` to appear after page settles). On hover,
scales to `1.06`; on tap, scales to `0.94`. This is the only persistent interactive
element that floats over all content.

## Do's and Don'ts

**Do:**
- Use `{colors.accent}` for exactly one CTA per screen region — never compete with
  itself
- Keep heading text uppercase when using Barlow Condensed — mixed case breaks the
  industrial register
- Use eyebrow labels before every major section heading to provide scanning anchors
- Animate with `whileInView` and `viewport={{ once: true }}` — entrance animations
  trigger once only, not on re-scroll
- Stagger child animations: `delay: index × 0.08s` to `index × 0.1s` for card grids
- Use `translateY(-4px)` as the universal hover lift for interactive cards

**Don't:**
- Add box shadows to cards — color-based depth is the system's design choice and
  shadows would break the flat-dark aesthetic
- Use purple, teal, or multi-hue gradients — this is a one-accent system
- Apply `{colors.green}` to anything except the WhatsApp button — it reads as a
  status indicator and muddies the accent system
- Make border-radius larger than `rounded.xl` (0.7rem) on any container — soft rounded
  cards undermine the industrial character
- Use `{colors.text-secondary}` (`#888888`) for body paragraphs longer than 3 lines on
  `surface` — contrast is sufficient for labels but borderline for reading
- Animate with `repeat: Infinity` except for the scroll-indicator chevron — continuous
  motion distracts on a serious B2B site
- Center-align body copy — reserve center alignment for short hero subheadlines and CTA
  banners; all other body text is left-aligned
