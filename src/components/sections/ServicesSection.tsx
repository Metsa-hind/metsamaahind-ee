"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

type Service = {
  title: string;
  description: string;
  img: string;
};

const SERVICES: Service[] = [
  { title: "Metsa müük", description: "Kiire ja turvaline tehing, õiglane hind.", img: "/window.svg" },
  { title: "Metsa ost", description: "Ostame metsakinnistuid üle Eesti.", img: "/globe.svg" },
  { title: "Raieõiguse müük", description: "Professionaalne planeerimine ja teostus.", img: "/file.svg" },
  { title: "Raieõiguse ost", description: "Hinnang ja ost vastavalt mahule.", img: "/next.svg" },
  { title: "Metsa inventeerimine", description: "Täpsed andmed otsuste tegemiseks.", img: "/window.svg" },
  { title: "Metsa istutamine", description: "Kestlik hool ja taastamine.", img: "/globe.svg" },
  { title: "Metsakava", description: "Dokumentatsioon ja strateegia.", img: "/file.svg" },
  { title: "Metsateatis", description: "Kiire vormistus ja esitus.", img: "/next.svg" },
];

function TiltCard({ s }: { s: Service }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-1, 1], [8, -8]);
  const rotateY = useTransform(mx, [-1, 1], [-8, 8]);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    mx.set(x * 2 - 1);
    my.set(y * 2 - 1);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" as const }}
      className="group relative min-h-[320px] rounded-3xl border border-emerald-100 bg-white/70 p-0 shadow-sm backdrop-blur will-change-transform"
    >
      <div className="relative h-40 w-full overflow-hidden rounded-t-3xl">
        <Image src={s.img} alt="" fill className="object-contain p-6" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/40 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="relative space-y-2 p-6" style={{ transform: "translateZ(20px)" }}>
        <h3 className="font-semibold text-slate-900 text-lg">{s.title}</h3>
        <p className="text-sm text-slate-600">{s.description}</p>
        <div className="pt-2 text-sm font-medium text-emerald-700">
          Vaata lähemalt <span aria-hidden className="inline-block transition group-hover:translate-x-1">→</span>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-300/30 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative py-14 sm:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-medium text-emerald-900">
            Teenused
          </p>
          <h2 className="mt-3 font-adcreative text-2xl text-slate-900 sm:text-3xl">
            Aitame igas metsaeluetapis
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => (
            <TiltCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
