"use client";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

type Band = { label: string; min: number; max: number; trend: number };

const BANDS: Band[] = [
  { label: "Raiesmikud", min: 2500, max: 4200, trend: 12 },
  { label: "Lepikud", min: 3800, max: 5500, trend: 8 },
  { label: "Kaasikud", min: 4200, max: 6800, trend: 15 },
];

function format(n: number) {
  return new Intl.NumberFormat("et-EE").format(n);
}

export default function MarketAveragesSection() {
  return (
    <section id="metsa-hinnad" className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-6 flex items-center gap-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-medium text-emerald-900">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Keskmised hinnad
          </p>
          <span className="text-xs text-emerald-900/60">Eesti metsakinnistute näidisvahemikud</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BANDS.map((b) => (
            <motion.article
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-slate-900">{b.label}</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  <TrendingUp className="h-3.5 w-3.5" /> +{b.trend}%
                </span>
              </div>
              <div className="mt-4 text-emerald-700">
                <span className="text-2xl font-semibold">{format(b.min)}</span>
                <span className="mx-1 text-slate-400">–</span>
                <span className="text-2xl font-semibold">{format(b.max)}</span>
                <span className="ml-2 text-sm text-slate-500">€/ha</span>
              </div>

              {/* Animated mini chart */}
              <motion.div
                className="mt-5 h-20 w-full rounded-lg bg-emerald-50/70"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <svg viewBox="0 0 200 80" className="h-full w-full text-emerald-600">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    points="0,70 30,60 60,55 90,45 120,42 150,38 180,30 200,26"
                  />
                </svg>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

