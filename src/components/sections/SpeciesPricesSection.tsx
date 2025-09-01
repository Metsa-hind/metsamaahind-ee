"use client";
import { motion } from "framer-motion";

type Tile = {
  title: string;
  stock: string; // e.g. "Metsa tagavara 400 tm"
  note?: string;
  min: number;
  max: number;
};

const TILES: Tile[] = [
  { title: "Männimetsa hind", stock: "Metsa tagavara 380–420 tm", min: 24800, max: 26900 },
  { title: "Kuusemetsa hind", stock: "Metsa tagavara 380–420 tm", min: 23900, max: 25900 },
  { title: "Lepametsa hind", stock: "Metsa tagavara 230–270 tm", note: "Hall lepp", min: 4300, max: 4900 },
  { title: "Lepametsa hind", stock: "Metsa tagavara 280–320 tm", note: "Sanglepp", min: 6700, max: 7200 },
  { title: "Haavametsa hind", stock: "Metsa tagavara 380–420 tm", min: 13800, max: 14800 },
  { title: "Kasemetsa hind", stock: "Metsa tagavara 330–370 tm", min: 16400, max: 17400 },
  { title: "Kasemetsa hind", stock: "Metsa tagavara 380–420 tm", note: "~20% oksavaba", min: 20800, max: 22300 },
  { title: "Raiesmiku hind", stock: "Raiutud metsa hind", min: 2300, max: 2700 },
];

function format(n: number) {
  return new Intl.NumberFormat("et-EE").format(n);
}

export default function SpeciesPricesSection() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-medium text-emerald-900">
            Liigipõhised näidishinnad
          </p>
          <h2 className="mt-3 font-adcreative text-2xl text-slate-900 sm:text-3xl">
            Metsakinnistute hinnavahemikud liigiti
          </h2>
        </div>

        {/* Unique “dial” cards: radial gauge + details */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t, i) => {
            const mid = Math.round((t.min + t.max) / 2);
            return (
              <motion.article
                key={t.title + i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-[28px] border border-emerald-200/60 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <h3 className="font-medium text-slate-900">{t.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{t.stock}{t.note ? ` • ${t.note}` : ""}</p>

                <div className="mt-4 grid grid-cols-[112px_1fr] items-center gap-4">
                  {/* radial “gauge” */}
                  <motion.svg
                    viewBox="0 0 112 112"
                    className="h-28 w-28"
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
                      strokeDasharray={`${(mid % 360) * 2}, 1000`}
                    />
                    <text x="56" y="60" textAnchor="middle" className="fill-emerald-800 text-[12px] font-semibold">
                      {format(mid)}
                    </text>
                  </motion.svg>

                  {/* numbers */}
                  <div>
                    <div className="text-emerald-900">
                      <span className="text-xl font-semibold">{format(t.min)}</span>
                      <span className="mx-1 text-slate-400">–</span>
                      <span className="text-xl font-semibold">{format(t.max)}</span>
                      <span className="ml-2 text-xs text-slate-500">eurot / hektar</span>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      Uuendatud hiljuti
                    </div>
                  </div>
                </div>

                {/* bottom micro-link */}
                <div className="mt-4 flex items-center justify-end text-xs text-emerald-800">
                  <span className="transition-transform group-hover:translate-x-0.5">Vaata lähemalt →</span>
                </div>

                {/* glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/25 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
