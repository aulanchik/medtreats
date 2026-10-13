import type { ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import footer from "@/data/footer.json";

const icons: Record<string, ReactNode> = {
  Instagram: <FaInstagram />,
  X: <FaXTwitter />,
  Facebook: <FaFacebookF />,
};

export default function Footer() {
  return (
    <footer className="bg-brand-900 py-16 text-cream">
      <div className="container-page flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-5xl">MedTreats</p>
          <p className="mt-2 text-sm text-cream/60">
            © {new Date().getFullYear()} MedTreats. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-cream/60">
            Designed & created by Artyom Ulanchik
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-brand-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-3">
          {footer.socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.platform}
                className="grid size-11 place-items-center rounded-full border border-cream/30 transition hover:bg-cream hover:text-brand-900"
              >
                {icons[social.platform]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
