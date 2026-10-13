import { useState } from "react";
import menu from "@/data/menu.json";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/10 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" aria-label="MedTreats home" onClick={close}>
          <img src="/images/logo.png" alt="" className="size-12" />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {menu.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-brand-600">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={menu.cta.href}
          className="btn btn-outline hidden md:inline-flex"
        >
          {menu.cta.title}
        </a>

        <button
          type="button"
          className="btn btn-outline md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-brand-900/10 md:hidden"
        >
          <ul className="container-page flex flex-col py-4">
            {[...menu.links, menu.cta].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 font-serif text-3xl"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
