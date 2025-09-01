"use client";
import { Mail, MapPin, Phone, TreePine, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-emerald-100/60 bg-white/80 backdrop-blur">
      <div className="pointer-events-none absolute -top-20 right-16 h-28 w-28 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
                <TreePine className="h-5 w-5" />
              </div>
              <span className="font-adcreative text-xl text-emerald-900">MetsaPartner</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Professionaalne partner metsakinnistute hindamisel, ostul ja müügil üle Eesti.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-700" /> info@metsapartner.ee</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-700" /> +372 5555 5555</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-700" /> Tallinn, Eesti</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Lehed</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { href: "/", label: "Avaleht" },
                { href: "/metsa-hind", label: "Metsa hind" },
                { href: "/teenused", label: "Teenused" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1 text-slate-700 hover:text-emerald-700">
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Õigus</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privaatsuspoliitika" className="text-slate-700 hover:text-emerald-700">Privaatsuspoliitika</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-emerald-100/60 pt-6 text-xs text-slate-600 sm:flex-row">
          <div>© {new Date().getFullYear()} MetsaPartner. Kõik õigused kaitstud.</div>
          <div className="text-slate-500">Kvaliteetne teenindus üle Eesti</div>
        </div>
      </div>
    </footer>
  );
}

