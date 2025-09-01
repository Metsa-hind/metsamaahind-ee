"use client";
import { motion } from "framer-motion";

export default function SeoReadSection() {
  return (
    <section className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Sticky banner / CTA */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="rounded-2xl bg-emerald-700 p-5 text-white shadow-lg"
            >
              <h3 className="font-adcreative text-xl">Tasuta metsa hinnang</h3>
              <p className="mt-1 text-emerald-50/90 text-sm">
                Saa täpne hinnang oma metsa väärtuse kohta. Vastame kiiresti.
              </p>
              <form className="mt-4 space-y-3">
                <input placeholder="Nimi" className="h-10 w-full rounded-lg border-0 bg-white/10 px-3 text-white placeholder:text-emerald-100/80 focus:outline-none focus:ring-2 focus:ring-emerald-300/60" />
                <input placeholder="E-mail" type="email" className="h-10 w-full rounded-lg border-0 bg-white/10 px-3 text-white placeholder:text-emerald-100/80 focus:outline-none focus:ring-2 focus:ring-emerald-300/60" />
                <button className="w-full rounded-lg bg-white px-3 py-2 font-semibold text-emerald-800 hover:bg-emerald-50">Saada päring</button>
              </form>
              <ul className="mt-3 text-xs text-emerald-100/90">
                <li>• Vastus 24h jooksul</li>
                <li>• 15+ aastat kogemust</li>
              </ul>
            </motion.aside>
          </div>

          {/* Rich SEO content */}
          <div>
            <article className="rounded-2xl border border-emerald-100 bg-white/80 p-6 leading-relaxed text-slate-800 shadow-sm backdrop-blur">
              <header>
                <h2 className="font-adcreative text-3xl text-slate-900">Kuidas metsa hind kujuneb Eestis?</h2>
                <p className="mt-2 text-slate-600">
                  Metsa hind kujuneb puuliikide, ligipääsu, asukoha, vanuse ja kinnistu suuruse koosmõjust.
                  Allpool on kokkuvõte peamistest teguritest ja näitlik statistika.
                </p>
              </header>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <section className="rounded-xl bg-emerald-50/60 p-4">
                  <h3 className="font-semibold text-emerald-900">Peamised mõjutajad</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Puuliik ja kvaliteet: kuusik/männik kõrgema väärtusega.</li>
                    <li>• Ligipääs ja maastik: parem ligipääs tõstab hinda.</li>
                    <li>• Asukoht: linnalähedane kinnistu on tavaliselt kallim.</li>
                    <li>• Vanus ja tagavara: vanem mets suurema tagavaraga on väärtuslikum.</li>
                  </ul>
                </section>
                <section className="rounded-xl bg-emerald-50/60 p-4">
                  <h3 className="font-semibold text-emerald-900">Statistika 2024–2025</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• Kuusik: 6,1–9,4k €/ha</li>
                    <li>• Männik: 5,4–8,1k €/ha</li>
                    <li>• Kaasik: 4,1–6,7k €/ha</li>
                  </ul>
                </section>
              </div>

              <section className="mt-6">
                <h3 className="font-semibold text-slate-900">Regionaalne pilt</h3>
                <p className="mt-2">
                  Harjumaal ja Tartumaal on hinnad tihti kõrgemad; põhjaosas keskmiselt 15–20% kõrgemad
                  kui lõunapoolses Eestis. Saarte hinnad on mõnevõrra madalamad kui mandril.
                </p>
              </section>

              <section className="mt-6 rounded-xl border border-emerald-100 bg-white/60 p-4">
                <h3 className="font-semibold text-slate-900">Investeerimisvaade</h3>
                <p className="mt-1 text-slate-700">
                  Metsakinnistud on pakkunud stabiilset tootlust pikaajaliselt. Tootlus tuleb puidu
                  kasvust ja hinnatasemest ning metsamaa üldisest väärtuse hoidmisest.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

