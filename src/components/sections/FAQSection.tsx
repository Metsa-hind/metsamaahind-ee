"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type QA = { q: string; a: string };
const QAS: QA[] = [
  {
    q: "Kui kiiresti saan hinnangu?",
    a: "Tavaliselt saadame esialgse hinnangu 24 tunni jooksul pärast päringu esitamist.",
  },
  {
    q: "Millest sõltub metsa hind?",
    a: "Peamiselt puuliikidest, tagavarast, asukohast, ligipääsust, maastikust ja metsakava andmetest.",
  },
  {
    q: "Kas teete kohapealse vaatuse?",
    a: "Jah, suuremate või keerukamate kinnistute puhul lepime kokku kohapealse ülevaatuse.",
  },
  {
    q: "Kas hinnang on siduv?",
    a: "Näitlik hinnang ei ole pakkumine. Pakkumise vormistame pärast detailide täpsustamist.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <h2 className="font-adcreative text-3xl text-slate-900">KKK — korduma kippuvad küsimused</h2>
        <div className="mt-6 divide-y divide-emerald-100 rounded-2xl border border-emerald-100 bg-white/80 shadow-sm backdrop-blur">
          {QAS.map((qa, i) => {
            const isOpen = open === i;
            return (
              <div key={qa.q} className="p-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-slate-900">{qa.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    className="ml-3 inline-block rounded-full border border-emerald-200 px-2 py-1 text-sm text-emerald-700"
                  >
                    →
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 text-slate-700">{qa.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

