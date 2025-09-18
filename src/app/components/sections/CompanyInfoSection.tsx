"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Building2, Hash, MapPin, Phone, Mail, Leaf, ShieldCheck, Timer, CheckCircle2, ChevronDown } from "lucide-react";
import { absUrl } from "@/lib/routes";

export default function CompanyInfoSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metsa hind OÜ",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hobujaama tn 4",
      addressLocality: "Tallinn",
      addressCountry: "EE",
    },
    email: "info@metsahind.com",
    telephone: "+372 5123 4567",
  };
  return (
    <section aria-labelledby="company-info" className="pb-[60px]">
      <div className="mx-auto w-full">
        {/* Intro Card (new) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mb-6 w-full max-w-[1200px] overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-emerald-900/5 backdrop-blur-sm"
        >
          {/* Elevated background, subtle gradient only */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(16,185,129,0.08),transparent_55%)]" />

          {/* Two-zone layout: Left content, Right horizontal tiles */}
          <div className="relative grid min-h-[324px] grid-cols-1 gap-8 p-6 md:min-h-[340px] md:grid-cols-12 md:p-8">
            {/* Left: Headline, refined copy, bullets */}
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950 sm:text-3xl">Jätkusuutlik metsamajandus</h2>
              <div className="mt-3 max-w-[60ch] text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Meie fookus on pikaajalisel metsa tervisel ja maaomaniku huvil. Hindame õiglaselt, teostame kiiresti ning hoiame suhtluse selge ja professionaalse.
                </p>
              </div>
              <ul className="mt-4 grid max-w-[60ch] gap-2 text-[14px] text-emerald-900/90">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" aria-hidden /> Vastutustundlik, andmetel põhinev otsustamine</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" aria-hidden /> Selge hinnastamine ja läbipaistev protsess</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" aria-hidden /> Isikupärastatud lahendused eri olukordadele</li>
              </ul>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={absUrl("kontakt")}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-[14px] font-medium text-white shadow-sm transition-colors hover:bg-emerald-800 focus:outline-none focus-visible:ring focus-visible:ring-emerald-400"
                >
                  Küsi hinnangut
                </a>
                <a href="#company-info-board" className="text-[14px] font-medium text-emerald-800 hover:text-emerald-900">Vaata kaarti</a>
              </div>
            </div>

            {/* Right: Three horizontal tiles (match visual rhythm of 3 cards below) */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div className="flex h-full flex-col justify-between rounded-xl border border-emerald-900/10 bg-white/80 p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-700" aria-hidden />
                    <p className="text-[15px] font-medium text-emerald-950">Kogemus</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-emerald-900/85">Üle kümne aasta praktilist kogemust metsa ostu, hoolduse ja väärtuse tõstmise lahendustes.</p>
                </div>
                <div className="flex h-full flex-col justify-between rounded-xl border border-emerald-900/10 bg-white/80 p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-emerald-700" aria-hidden />
                    <p className="text-[15px] font-medium text-emerald-950">Kiire reageerimine</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-emerald-900/85">Esimene vastus 24 h jooksul. Tehingu ettevalmistus tõhusalt, ilma liigsete sammudeta.</p>
                </div>
                <div className="flex h-full flex-col justify-between rounded-xl border border-emerald-900/10 bg-white/80 p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald-700" aria-hidden />
                    <p className="text-[15px] font-medium text-emerald-950">Kohandatud lahendused</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-emerald-900/85">Läheneme igale kinnistule eraldi: eesmärgid, piirangud ja potentsiaal arvesse võetud.</p>
                </div>
              </div>

              {/* Stretching card beneath tiles to utilize remaining whitespace */}
              <div className="mt-4 rounded-xl border border-emerald-900/10 bg-white/85 p-4 shadow-sm md:p-5">
                {/* Two-column layout: left logo (10–15%), right copy with two stacked rows */}
                <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
                  {/* Left column: logo spanning the block height */}
                  <div className="md:col-span-2 md:self-stretch">
                    <div className="flex h-full items-center justify-center">
                      <Image src="/metsa-hind-ikoon.png" alt="Metsa Hind" width={36} height={36} className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
                    </div>
                  </div>
                  {/* Right column: description row + bullets row */}
                  <div className="md:col-span-10">
                    <div className="grid grid-rows-2 gap-3">
                      {/* Row 1: description (two lines) */}
                      <p className="max-w-[70ch] text-[13px] leading-6 text-emerald-900/85">
                        Selged kokkulepped ja korrektne asjaajamine loovad rahuliku protsessi. Tegutseme täpselt ja asjatundlikult, arvestades iga kinnistu eripära.
                      </p>
                      {/* Row 2: bullets */}
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                        <li className="flex items-start gap-2 text-[13px] text-emerald-900/90"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" aria-hidden /> Kokkulepetest kinnipidamine</li>
                        <li className="flex items-start gap-2 text-[13px] text-emerald-900/90"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" aria-hidden /> Korrektne asjaajamine</li>
                        <li className="flex items-start gap-2 text-[13px] text-emerald-900/90"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" aria-hidden /> Asjatundlik lähenemine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          id="company-info-board"
          className="group relative mx-auto w-full max-w-[1200px] rounded-2xl border border-emerald-900/10 bg-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-emerald-900/5 transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            <Image src="/metsa-hind-taust.png" alt="Taust" fill priority className="object-cover opacity-70" />
          </div>
          <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="grid grid-cols-1 md:[grid-template-columns:300px_0.595fr_0.405fr] gap-4 sm:gap-6 p-4 sm:p-6">
            {/* Left column card */}
            <div className="rounded-[10px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.26)] transition-shadow min-h-[220px] md:min-h-[300px] flex items-center justify-center">
              <div className="w-full max-w-[560px] px-6 py-4">
                {/* Logo wrapper - replaced with new higher fidelity image block */}
                <div className="flex items-center justify-center mb-4">
                  <div className="-mt-[10px]">
                    <Image
                      src="/metsa-hind-ikoon.png"
                      alt="Metsa Hind ikoon"
                      width={64}
                      height={64}
                      className="h-[56px] w-[56px] object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="-mt-[10px] grid gap-2 text-[16px] text-gray-700">
                  <div className="mx-auto flex items-center gap-2">
                    <Building2 className="h-[18px] w-[18px] text-emerald-700" />
                    <span className="font-medium text-gray-800">Metsa Hind OÜ</span>
                  </div>
                  <div className="mx-auto flex items-center gap-2">
                    <Hash className="h-[18px] w-[18px] text-emerald-700" />
                    <span className="text-gray-600">Registrikood:</span>
                    <span className="font-medium text-gray-800">17305011</span>
                  </div>
                  <div className="mx-auto flex items-center gap-2">
                    <MapPin className="h-[18px] w-[18px] text-emerald-700" />
                    <span className="text-gray-600">Hobujaama tn 4, Tallinn</span>
                  </div>
                  <div className="mx-auto flex items-center gap-2">
                    <Mail className="h-[18px] w-[18px] text-emerald-700" />
                    <a href="mailto:info@metsahind.com" className="text-emerald-700 hover:underline">info@metsahind.com</a>
                  </div>
                  <div className="mx-auto flex items-center gap-2">
                    <Phone className="h-[18px] w-[18px] text-emerald-700" />
                    <a href="tel:+37251234567" className="text-emerald-700 hover:underline">+372 5123 4567</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle column card with image (70% of remaining space) */}
            <div className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
              <div className="relative h-[260px] md:h-[300px]">
                <Image
                  src="/metsa-hind-ou-1.png"
                  alt="Metsa Hind OÜ kontor"
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-black/5" />
              </div>
            </div>

            {/* Rightmost small column card (30% of remaining space) with Google Map iframe */}
            <div className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
              <div className="relative h-[260px] md:h-[300px]">
                <iframe
                  title="Hobujaama tn 4, Tallinn — Google Maps"
                  aria-label="Asukoht: Hobujaama tn 4, Tallinn"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={
                    "https://www.google.com/maps?q=" +
                    encodeURIComponent("Hobujaama tn 4, Tallinn") +
                    "&output=embed"
                  }
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-black/5" />
              </div>
            </div>
          </div>
          <Script id="org-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </motion.div>
      </div>
    </section>
  );
}


