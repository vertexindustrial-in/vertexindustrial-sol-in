import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const productLinks = [
  { label: "Hydraulic Seals", href: "/products/hydraulic-seals" },
  { label: "Hydraulic Cylinders", href: "/products/hydraulic-cylinders" },
  { label: "Industrial Valves", href: "/products/industrial-valves" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries Served", href: "/industries" },
  { label: "Technical Support", href: "/technical-support" },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-vertex-border bg-vertex-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Vertex Industrial Solutions"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-vertex-secondary leading-relaxed max-w-xs">
              Industrial supply and technical solutions firm serving steel plants,
              rolling mills, and heavy industries across the Bellary–Vijayanagar–Koppal belt.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918147904606"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-sm bg-vertex-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-vertex-green-hover"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-vertex-secondary">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-vertex-secondary transition-colors hover:text-vertex-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-vertex-secondary">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-vertex-secondary transition-colors hover:text-vertex-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-vertex-secondary">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918147904606"
                  className="flex items-start gap-2.5 text-sm text-vertex-secondary transition-colors hover:text-vertex-primary"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-vertex-accent" />
                  +91 81479 04606
                </a>
              </li>
              <li>
                <a
                  href="mailto:fareed@vertexindustrial.in"
                  className="flex items-start gap-2.5 text-sm text-vertex-secondary transition-colors hover:text-vertex-primary"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-vertex-accent" />
                  fareed@vertexindustrial.in
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-vertex-secondary">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-vertex-accent" />
                  <span>
                    SY No. 464/B and 464/1, D Block,<br />
                    Belagal Tanda Road, Belagal Village,<br />
                    Ballari District, Karnataka – 583115
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-vertex-border pt-6 sm:flex-row">
          <p className="text-xs text-vertex-secondary">
            © {new Date().getFullYear()} Vertex Industrial Solutions. All rights reserved.
          </p>
          <p className="text-xs text-vertex-secondary">
            Ballari, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  );
}
