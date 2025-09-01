"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function FinalContactSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-md backdrop-blur sm:p-10"
        >
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-adcreative text-3xl text-slate-900 sm:text-4xl">Võta meiega ühendust</h2>
              <p className="mt-2 text-slate-700">
                Saada lühike kirjeldus oma metsakinnistu kohta ja anname kiirelt esialgse hinnangu.
                Vajadusel pakume kohapealset vaatlust.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <li className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-700" /> Vastus 24h jooksul</li>
                <li className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-700" /> Kogenud meeskond</li>
                <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-700" /> Konfidentsiaalne</li>
              </ul>

              {/* Trust/review block */}
              <div className="mt-6 rounded-2xl border border-emerald-100 bg-white/70 p-4">
                <div className="text-sm text-slate-700">
                  “Koostöö oli kiire ja korrektne. Hinnang tuli samal päeval ning tehinguni jõudsime
                  plaanitust kiiremini.”
                </div>
                <div className="mt-2 text-xs text-slate-600">— Partnerettevõte, kinnisvarajuht</div>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">A</span>
                  <span>Audit ja andmekaitse: konfidentsiaalne töövoog</span>
                </div>
              </div>
            </div>

            <motion.form
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6"
            >
              <div className="grid grid-cols-1 gap-4">
                <input className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4" placeholder="Nimi" />
                <input type="email" className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4" placeholder="E-mail" />
                <input className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4" placeholder="Katastritunnus" />
                <input className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4" placeholder="Telefon (valikuline)" />
                <textarea rows={4} className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-300/40 focus:ring-4" placeholder="Metsa suurus, ligipääs, puuliigid, lisainfo..." />
                <button className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700">
                  Saada päring
                </button>
                <p className="text-center text-xs text-slate-500">Kõik andmed on konfidentsiaalsed. Päring ei ole siduv.</p>
              </div>
            </motion.form>
          </div>

          {/* soft decorations */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
