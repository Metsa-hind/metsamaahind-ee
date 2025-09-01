"use client";
import { motion } from "framer-motion";
import { Calculator, MapPin, ClipboardCheck } from "lucide-react";

export default function IntroFunnelSection() {
  const items = [
    {
      icon: Calculator,
      title: "Esialgne hinnang 24h",
      text: "Sisesta andmed ja toome välja realistliku hinnavahemiku.",
    },
    {
      icon: MapPin,
      title: "Ligipääsu ja asukoha analüüs",
      text: "Kontrollime kaardil andmeid ja vajadusel teeme kohapealse vaatuse.",
    },
    {
      icon: ClipboardCheck,
      title: "Selge pakkumine",
      text: "Anname põhjendatud pakkumise ja kokkuleppe korral liigume tehinguni.",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm backdrop-blur"
          >
            <h2 className="font-adcreative text-3xl text-slate-900">Kuidas me hinnangu koostame</h2>
            <p className="mt-3 text-slate-700">
              Alustame kiirest esmasest vahemikust, seejärel täpsustame detailid ja esitame
              põhjendatud pakkumise. Allpool olevad sektsioonid näitavad turgu, näidishindu ja
              kalkulaatorit — liigu alla ja proovi.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4"
                >
                  <it.icon className="h-5 w-5 text-emerald-700" />
                  <div className="mt-2 font-medium text-slate-900">{it.title}</div>
                  <div className="text-sm text-slate-600">{it.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm backdrop-blur"
          >
            <h3 className="font-adcreative text-2xl text-slate-900">Miks kliendid meid valivad</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Läbipaistev metoodika ja põhjendus igale hinnangule.</li>
              <li>• Turg + metsakava + ligipääs = realistlik vahemik, mitte juhuslik number.</li>
              <li>• Paindlikkus — vajadusel kiirendame protsessi ja aitame dokumentidega.</li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">
              <a href="#metsa-hinnad">Vaata näidishindu</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

