"use client";

import { Container } from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Ruler,
  MapPin,
  Route,
  Sprout,
  ShieldAlert,
  Trees,
  CalendarClock,
  TrendingUp,
  Activity,
  Home,
  Droplets,
  Bug,
} from "lucide-react";

type Driver = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  percent: number; // illustrative share
};

export default function PriceDriversSection() {
  const drivers: Driver[] = [
    {
      icon: Ruler,
      title: "Kinnistu suurus",
      description: "Suurem kinnistu tähendab rohkem metsa ja mahtu.",
      percent: 30,
    },
    {
      icon: MapPin,
      title: "Kinnistu asukoht",
      description: "Piirkond määrab hinna ja nõudluse.",
      percent: 22,
    },
    {
      icon: Route,
      title: "Ligipääsetavus",
      description: "Hea ligipääs vähendab töö- ja transpordikulu.",
      percent: 16,
    },
    {
      icon: Sprout,
      title: "Boniteet",
      description: "Viljakas pinnas annab parema juurdekasvu.",
      percent: 14,
    },
    {
      icon: ShieldAlert,
      title: "Looduskaitselised piirangud",
      description: "Kaitsealad piiravad raiet ja võivad vähendada väärtust.",
      percent: 12,
    },
    {
      icon: Trees,
      title: "Liigiline koosseis",
      description: "Puude sortiment ja kvaliteet mõjutab hinda.",
      percent: 19,
    },
    {
      icon: CalendarClock,
      title: "Puistu vanus",
      description: "Raieküps mets on väärtuslikum kui metsanoorendik.",
      percent: 20,
    },
    {
      icon: TrendingUp,
      title: "Puiduturu hinnad",
      description: "Kõrgemad turuhinnad tõstavad metsa väärtust.",
      percent: 23,
    },
    {
      icon: Activity,
      title: "Üldine turuseis",
      description: "Majanduse olukord mõjutab nõudlust ja hinda.",
      percent: 15,
    },
    {
      icon: Home,
      title: "Muud tegurid",
      description: "Hooned või põllumaa võivad hinda mõjutada.",
      percent: 10,
    },
    {
      icon: Droplets,
      title: "Maaparandussüsteemid",
      description: "Maaparandussüsteemide olemasolu tõstab hinda.",
      percent: 11,
    },
    {
      icon: Bug,
      title: "Puistu tervis",
      description: "Tormikahjustused või kahjurid võivad hinda mõjutada.",
      percent: 13,
    },
  ];

  return (
    <Section className="my-[50px]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">
            Mis on metsa hinna peamised mõjutajad
          </h2>
           <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
             Kogenud metsaomanikud teavad, et õige müügiaeg võib tuua märkimisväärselt rohkem tulu. Samas on oluline mõista, et ükski mets ei kasva väärtuses igavesti – vanemad puistud muutuvad haiguste ja kahjurite suhtes haavatavamaks, mistõttu õigeaegne raie on mõistlik. Metsa hind sõltub eeskätt puiduturu olukorrast ja kokkuostuhindadest. Lisaks mõjutavad metsa hinda ka muud tingimuslikud faktorit, mis on reeglina iga kinnistu puhul erinevad. Tutvuge metsa hinda enim mõjutavate faktoritega.
           </p>
        </div>

        {/* Removed image cards and descriptive paragraph per request */}
        <div className="mx-auto max-w-4xl text-center mt-6">
          <h5 className="mt-6 text-xl font-semibold text-black">
            Metsamaa hind koosneb peamiselt nende asjaolude põhjal:
          </h5>
        </div>

        {/* Chart-like cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drivers.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              {/* hover background image (beneath content) */}
              <div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  backgroundImage: 'url(/metsa-hinda-mojutavad-faktorid-taustapilt.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-hidden
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <d.icon className="h-5 w-5 text-emerald-700" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-emerald-900">{d.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">{d.description}</p>
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-emerald-100" />
                  <motion.div
                    className="-mt-2 h-2 rounded-full bg-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}


