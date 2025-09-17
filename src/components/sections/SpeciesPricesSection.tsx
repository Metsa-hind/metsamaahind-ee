"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Tile = {
  title: string;
  stock: string; // e.g. "Metsa tagavara 400 tm"
  note?: string;
  min: number;
  max: number;
  image: string; // background image inside radial
};

const TILES: Tile[] = [
  { title: "Raiesmike hektari hind", stock: "Metsamaa peale raietöid", min: 2200, max: 2800, image: "/raiesmik-hektari-hind-eestis.png" },
  { title: "Haavametsa hektari hind", stock: "Metsa tagavara 380–420 tm", min: 13500, max: 15000, image: "/haavametsa-hind-haaviku-hektari-hind.png" },
  { title: "Kasemetsa hektari hind", stock: "Metsa tagavara 330–370 tm", min: 16000, max: 22000, image: "/kaasik-hektari-hind-kaasiku-metsa-hind.png" },
  { title: "Kuusemetsa hektari hind", stock: "Metsa tagavara 380–420 tm", min: 23000, max: 26000, image: "/kuusiku-hektari-hind-kuuse-metsa-hind.png" },
  { title: "Männimetsa hektari hind", stock: "Metsa tagavara 380–420 tm", min: 25000, max: 27000, image: "/manniku-hektari-hind-manni-puu-hind.png" },
  { title: "Lepametsa hektari hind", stock: "Metsa tagavara 280 tm", min: 6700, max: 7200, image: "/lepiku-hektari-hind-lepametsa-hind.png" },
];

function format(n: number) {
  return new Intl.NumberFormat("et-EE").format(n);
}

export default function SpeciesPricesSection() {
  // Normalize the radial gauge based on midpoint across all tiles
  const mids = TILES.map((t) => Math.round((t.min + t.max) / 2));
  const globalMin = Math.min(...mids);
  const globalMax = Math.max(...mids);
  const CIRC = 2 * Math.PI * 46; // circle circumference for r=46

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-medium text-emerald-900">
            Metsamaa hektari liigipõhised hinnad
          </p>
          <h2 className="mt-3 font-adcreative text-2xl text-slate-900 sm:text-3xl">
            Metsa hektari keskmised hinnad liigiti
          </h2>
          
          {/* Horizontal bulleted list with green checkmarks */}
          <div className="mt-[10px] flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm italic text-slate-700">Kvaliteetne metsamaterjal</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm italic text-slate-700">Mets on raieküps</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm italic text-slate-700">Kinnistule on normaalne ligipääs</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm italic text-slate-700">Metsa tagavara vähemalt 300tm</span>
            </div>
          </div>
          
          <p className="mt-4 text-left text-base leading-7 text-slate-700">
            Metsa hektari keskmine hind liigiti moodustub peamiselt metsamaterjali koguse ja kvaliteedi hindamise alusel. Alljärgnevad metsamaa hektari hinnad on keskmised ning sellised hinnavahemikud on realistlikud, kui teie kinnistul kasvav mets on vähemalt keskmise kvaliteediga ning teil on metsatagavara vähemalt toodud mahus. Väljatoodud näited on hinnangulised ning kinnistu või teie metsamaa hektari hinna teadasaamiseks saatke hinnapäring.
          </p>

        </div>

        {/* Simplified dial cards: title + stock + range */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((t, i) => {
            const mid = Math.round((t.min + t.max) / 2);
            const pct = globalMax === globalMin ? 0.6 : (mid - globalMin) / (globalMax - globalMin);

            // Derive display stock: if it starts with "Metsa tagavara", show minimal value as circa
            let displayStock = t.stock;
            if (displayStock.toLowerCase().startsWith("metsa tagavara")) {
              const match = displayStock.match(/(\d+)/);
              const value = match ? parseInt(match[1], 10) : undefined;
              if (value) displayStock = `Metsa tagavara ca ${value} tm`;
            }
            return (
              <motion.article
                key={t.title + i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-[28px] border border-emerald-200/60 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                {/* seasonal badge */}
                <motion.div
                  className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-500/30 shadow-sm group-hover:bg-emerald-600/15 group-hover:ring-emerald-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  Sügis 2025
                </motion.div>
                <h3 className="font-medium text-slate-900">{t.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{displayStock}</p>

                <div className="mt-4 grid grid-cols-[112px_1fr] items-center gap-4">
                  {/* radial with background image */}
                  <div className="relative h-28 w-28">
                    {/* Background image shrunk to 90% so it sits behind the ring */}
                    <div className="absolute inset-0">
                      <div className="relative left-[5%] top-[5%] h-[90%] w-[90%] overflow-hidden rounded-full">
                        <Image src={t.image} alt={t.title} fill sizes="101px" className="object-cover" />
                      </div>
                    </div>
                    <motion.svg
                      viewBox="0 0 112 112"
                      className="absolute inset-0 h-full w-full"
                      initial={{ rotate: -90 }}
                      whileInView={{ rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 80, damping: 14 }}
                    >
                      <defs>
                        <linearGradient id={`grad-${i}`} x1="0" x2="1">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#065f46" />
                        </linearGradient>
                      </defs>
                      <circle cx="56" cy="56" r="46" stroke="#e2e8f0" strokeWidth="10" fill="none" />
                      <circle
                        cx="56"
                        cy="56"
                        r="46"
                        stroke={`url(#grad-${i})`}
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={`${CIRC.toFixed(1)} 0`}
                      />
                      {/* Removed center number to keep the radial clean */}
                    </motion.svg>
                  </div>

                  {/* range only */}
                  <div>
                    <div className="text-emerald-900">
                      <span className="text-xl font-semibold">{format(t.min)}</span>
                      <span className="mx-1 text-slate-400">–</span>
                      <span className="text-xl font-semibold">{format(t.max)}</span>
                      <span className="ml-2 text-xs text-slate-500">eurot / ha</span>
                    </div>
                  </div>
                </div>

                {/* subtle hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <a href="#form" className="inline-flex items-center gap-1 text-sm font-semibold italic text-emerald-700 underline hover:text-emerald-800 transition-colors">
            Metsamaa täpse hinna teadasaamiseks saatke meile päring siit
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

