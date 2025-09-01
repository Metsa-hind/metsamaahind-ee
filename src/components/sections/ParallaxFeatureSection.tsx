"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxFeatureSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.03, 0.97]);

  return (
    <section className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <motion.div ref={ref} className="grid items-center gap-8 lg:grid-cols-2" style={{ perspective: 1000 }}>
          {/* Large sideways card */}
          <motion.div
            className="order-2 lg:order-1 rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-sm backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="font-adcreative text-3xl text-slate-900 sm:text-4xl">Kiire ja läbipaistev hinnang</h2>
            <p className="mt-3 text-slate-700">
              Saame esialgse hinnangu 24 tunni jooksul. Meie meeskond ühendab turuanalüüsi,
              metsamajandusplaanid ja ligipääsu hindamise, et anda õiglane vahemik kohe ning
              täpsem pakkumine vestluse järel.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {[
                "Hinnang koos põhjendusega",
                "Võimalik kohapealne vaatlus",
                "Mitme stsenaariumi võrdlus",
                "Selged sammud edasi",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="order-1 lg:order-2 relative h-[360px] rounded-3xl border border-emerald-100 bg-emerald-900/5 overflow-hidden" style={{ y, scale }}>
            <Image src="/hero-forest.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

