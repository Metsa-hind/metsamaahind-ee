"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Review = { name: string; text: string; role: string };
const REVIEWS: Review[] = [
  { name: "Mari K.", role: "Metsaomanik", text: "Hindamine oli lihtne ja läbipaistev. Esmane vastus tuli kiiresti ja lõpplahendus oli õiglane." },
  { name: "Jaan P.", role: "Erametsa omanik", text: "Mulle meeldis, et selgitati samm-sammult, mis mõjutab hinda. Hea kogemus." },
  { name: "Liis T.", role: "Perepärand", text: "Saime selge arusaama kinnistu väärtusest ja edasised sammud olid loogilised." },
  { name: "Andres R.", role: "Investeerija", text: "Professionaalne lähenemine ja kiire teostus. Soovitan!" },
  { name: "Katrin L.", role: "Metsaomanik", text: "Suhtlus oli sõbralik ja tulemus ületas ootusi. Väga hea teenus." },
  { name: "Toomas V.", role: "Erametsa omanik", text: "Hindamine ja pakkumine olid põhjendatud. Tehing sujus probleemideta." },
];

export default function ReviewsSection() {
  return (
    <section className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <h2 className="font-adcreative text-3xl text-slate-900">Klientide kogemused</h2>
        <div className="mt-6 grid gap-4 overflow-x-auto pb-4 [grid-auto-flow:column] [grid-auto-columns:280px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name + i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="relative flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src="/next.svg" alt="" fill className="object-contain p-2" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700">{r.text}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-300/20 blur-2xl" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

