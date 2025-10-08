"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Trees, Axe, Tractor, Mail } from "lucide-react";
import { Container } from "@/components/primitives/Container";

type Item = { label: string; href: string };

const METSAMAAD: Item[] = [
  { label: "Metsa müük", href: "/metsa-muuk/" },
  { label: "Metsa hind", href: "/" },
  { label: "Metsa istutamine", href: "/metsa-istutamine/" },
];

const METSARAIE: Item[] = [
  { label: "Raieõiguse müük", href: "/raieoiguse-muuk/" },
  { label: "Raieõiguse hind", href: "/raieoiguse-hind/" },
  { label: "Metsateatis", href: "/metsateatis/" },
  { label: "Hooldusraied", href: "/hooldusraied/" },
];

const POLLUMAA: Item[] = [
  { label: "Põllumaa ost", href: "/pollumaa-ost/" },
  { label: "Põllumaa müük", href: "/pollumaa-muuk/" },
  { label: "Põllumaa hind", href: "/pollumaa-hind/" },
];

function Dropdown({ label, items, Icon }: { label: string; items: Item[]; Icon: any }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50">
        <Icon className="h-4 w-4 text-emerald-700" />
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-[60] mt-0 -translate-y-[1px] w-56 overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-xl">
          <ul className="py-2 text-sm text-emerald-900">
            {items.map((i) => (
              <li key={i.href}>
                <a href={i.href} className="block px-4 py-2 hover:bg-emerald-50">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<null | "metsamaa" | "metsaraie" | "pollumaa" >(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-100/70 bg-white/90 backdrop-blur">
      <Container className="py-[10px] lg:py-[15px]">
        <div className="flex items-center justify-between">
          {/* Left cluster: logo + nav */}
          <div className="flex items-center gap-3 lg:gap-5">
            <a href="/" className="inline-flex items-center gap-2">
              <Image src="/metsa-hind-ikoon.png" alt="Metsa Hind" width={36} height={36} className="h-9 w-9" />
            </a>

            {/* Mobile-only CTA next to logo */}
            <a
              href="/kontakt/"
              className="lg:hidden inline-flex items-center rounded-lg bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800"
            >
              Kontaktivorm
            </a>

            {/* Desktop nav next to logo */}
            <nav className="hidden lg:flex items-center gap-1">
            <a href="/" className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50">
                Avaleht
            </a>
            <Dropdown label="Metsamaa" items={METSAMAAD} Icon={Trees} />
            <Dropdown label="Metsaraie" items={METSARAIE} Icon={Axe} />
            <Dropdown label="Põllumaa" items={POLLUMAA} Icon={Tractor} />
            </nav>
          </div>

          {/* Right side: email + CTA for desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="mailto:info@metsamaahind.ee" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span>info@metsamaahind.ee</span>
            </a>
            <a
              href="/kontakt/"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow transition-colors hover:bg-emerald-700"
            >
                KONTAKTIVORM
              <span aria-hidden>→</span>
              </a>
          </div>

          {/* Mobile trigger */}
            <button
              onClick={() => setMobileOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 rounded-md px-2 py-1 text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-expanded={mobileOpen}
              aria-label="Ava menüü"
            >
            <span className="text-sm font-semibold">Menüü</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>
      </Container>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[70] bg-white/95 backdrop-blur lg:hidden"
                onClick={() => setMobileOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto mt-20 w-[92%] max-w-sm rounded-2xl border border-emerald-100 bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-emerald-900">Menüü</div>
              <button onClick={() => setMobileOpen(false)} aria-label="Sulge" className="rounded-md p-2 text-slate-700 hover:bg-slate-100">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <nav className="mt-4 space-y-5 text-emerald-900">
              <a href="/" className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50" onClick={() => setMobileOpen(false)}>
                Avaleht
              </a>

                    <div>
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === "metsamaa" ? null : "metsamaa")}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-600 hover:bg-emerald-50"
                  aria-expanded={openSection === "metsamaa"}
                >
                  <span className="uppercase tracking-wide">Metsamaa</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "metsamaa" ? "rotate-180" : "rotate-0"}`} />
                </button>
                {openSection === "metsamaa" && (
                      <div className="mt-2 grid gap-1">
                    {METSAMAAD.map((i) => (
                          <a key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-sm hover:bg-emerald-50" onClick={() => setMobileOpen(false)}>
                            {i.label}
                          </a>
                        ))}
                      </div>
                )}
                    </div>

                    <div>
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === "metsaraie" ? null : "metsaraie")}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-600 hover:bg-emerald-50"
                  aria-expanded={openSection === "metsaraie"}
                >
                  <span className="uppercase tracking-wide">Metsaraie</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "metsaraie" ? "rotate-180" : "rotate-0"}`} />
                </button>
                {openSection === "metsaraie" && (
                      <div className="mt-2 grid gap-1">
                    {METSARAIE.map((i) => (
                          <a key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-sm hover:bg-emerald-50" onClick={() => setMobileOpen(false)}>
                            {i.label}
                          </a>
                        ))}
                      </div>
                )}
                    </div>

                    <div>
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === "pollumaa" ? null : "pollumaa")}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-600 hover:bg-emerald-50"
                  aria-expanded={openSection === "pollumaa"}
                >
                  <span className="uppercase tracking-wide">Põllumaa</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "pollumaa" ? "rotate-180" : "rotate-0"}`} />
                </button>
                {openSection === "pollumaa" && (
                      <div className="mt-2 grid gap-1">
                    {POLLUMAA.map((i) => (
                          <a key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-sm hover:bg-emerald-50" onClick={() => setMobileOpen(false)}>
                            {i.label}
                          </a>
                        ))}
                      </div>
                )}
                    </div>

              <a href="/kontakt/" className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50" onClick={() => setMobileOpen(false)}>
                Kontakt
              </a>
            </nav>
          </div>
                    </div>
          )}
    </header>
  );
}

export default Header;


