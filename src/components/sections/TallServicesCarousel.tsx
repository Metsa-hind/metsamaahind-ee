"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Item = { title: string; tag: string; img: string };

const ITEMS: Item[] = [
  { title: "Metsa müük", tag: "Tehingud", img: "/hero-forest.jpg" },
  { title: "Metsa ost", tag: "Investeering", img: "/hero-forest.jpg" },
  { title: "Raieõiguse müük", tag: "Raie", img: "/hero-forest.jpg" },
  { title: "Raieõiguse ost", tag: "Raie", img: "/hero-forest.jpg" },
  { title: "Metsa inventeerimine", tag: "Analüüs", img: "/hero-forest.jpg" },
  { title: "Metsakava", tag: "Dokumendid", img: "/hero-forest.jpg" },
  { title: "Metsateatis", tag: "Dokumendid", img: "/hero-forest.jpg" },
  { title: "Metsa istutamine", tag: "Hooldus", img: "/hero-forest.jpg" },
  { title: "Põllumaa müük", tag: "Tehingud", img: "/hero-forest.jpg" },
  { title: "Põllumaa ost", tag: "Investeering", img: "/hero-forest.jpg" },
];

export default function TallServicesCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [bounds, setBounds] = useState({ left: 0, right: 0 });

  // Compute drag bounds once layout is ready
  useEffect(() => {
    const el = containerRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const recalc = () => {
      const max = Math.max(0, track.scrollWidth - el.clientWidth);
      setBounds({ left: -max, right: 0 });
      // clamp current x
      const curr = x.get();
      if (curr < -max) x.set(-max);
      if (curr > 0) x.set(0);
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  // subtle tilt on hover based on pointer position
  function Card({ item }: { item: Item }) {
    const localX = useMotionValue(0);
    const localY = useMotionValue(0);
    const rotateX = useTransform(localY, [0, 1], [6, -6]);
    const rotateY = useTransform(localX, [0, 1], [-6, 6]);

    const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      localX.set((e.clientX - rect.left) / rect.width);
      localY.set((e.clientY - rect.top) / rect.height);
    };

    return (
      <motion.div
        onMouseMove={onMove}
        whileHover={{ scale: 1.02 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" as const }}
        className="group relative h-[420px] w-[260px] shrink-0 overflow-hidden rounded-[24px] border border-emerald-100 bg-white/70 shadow-sm backdrop-blur"
      >
        <Image src={item.img} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/55 via-emerald-900/25 to-transparent" />
        <div className="absolute left-0 top-0 rounded-br-2xl bg-emerald-800/90 px-3 py-2 text-xs font-medium text-white">
          {item.tag}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5" style={{ transform: "translateZ(22px)" }}>
          <h3 className="font-adcreative text-xl text-white drop-shadow-md">{item.title}</h3>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white/95">
            Vaata lähemalt <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/25 blur-2xl" />
      </motion.div>
    );
  }

  const gradient = useTransform(x, (v) => `radial-gradient(600px 300px at ${50 - v / 50}% 10%, rgba(16,185,129,0.08), transparent 60%)`);

  return (
    <section className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-medium text-emerald-900">Teenused</p>
            <h2 className="mt-3 font-adcreative text-2xl text-slate-900 sm:text-3xl">Veel teenuseid</h2>
          </div>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            style={{ x, backgroundImage: gradient as any }}
            dragConstraints={bounds}
            dragMomentum={true}
            className="flex gap-4 pb-4"
          >
            {ITEMS.map((it) => (
              <Card key={it.title} item={it} />)
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

