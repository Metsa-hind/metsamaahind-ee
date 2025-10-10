"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Building2, MapPin, Phone, Mail, Leaf, ShieldCheck, Timer, CheckCircle2, ChevronDown } from "lucide-react";
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
    email: "info@metsamaahind.ee",
    telephone: "+372 5846 6110",
  };
  return (
    <section aria-labelledby="company-info" className="mt-[150px] pb-[60px]">
      <div className="mx-auto w-full px-[10px]">
        {/* Intro Card (optimized - removed heavy animations/blur) */}
        <div
          className="relative mx-auto mb-6 w-full max-w-[1200px] overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/85 shadow-sm ring-1 ring-emerald-900/5"
        >
          {/* Background image + subtle gradient overlay */}
          <div className="pointer-events-none absolute inset-0 -z-20">
            <Image
              src="/metsa-hind-ou-ettevotte-tutvustus-taustapilt.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover opacity-30"
              priority={false}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(16,185,129,0.08),transparent_55%)]" />

          {/* Two-zone layout: Left content, Right horizontal tiles */}
          <div className="relative grid min-h-[324px] grid-cols-1 gap-6 p-4 md:min-h-[340px] md:grid-cols-12 md:gap-8 md:p-8">
            {/* Left: Headline, refined copy, bullets */}
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950 sm:text-3xl">Jätkusuutlik metsamajandus</h2>
              <div className="mt-3 max-w-[60ch] text-[15px] leading-7 text-emerald-900/90">
                <p className="mb-[15px]">
                  Meie fookus on tegeleda kogu metsamajanduse tsükliga, alates metsa istutamisest kuni materjali realiseerimiseni. Oleme partneriks rohkem kui 1000-le maaomanikule üle Eesti.
                </p>
              </div>
              <ul className="mt-[15px] pt-[15px] grid max-w-[60ch] gap-2 text-[14px] text-black">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-black" aria-hidden /> <span className="italic">Vastutustundlik, andmetel põhinev otsustamine</span></li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-black" aria-hidden /> <span className="italic">Selge hinnastamine ja läbipaistev protsess</span></li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-black" aria-hidden /> <span className="italic">Isikupärastatud lahendused eri olukordadele</span></li>
              </ul>
              <div className="mt-[30px] flex flex-wrap gap-3">
                <Link href="/kontakt/" className="mt-[10px] inline-flex items-center justify-center rounded-lg border-[0.5px] border-emerald-700 bg-emerald-600/10 px-[38px] py-[6.8px] text-[15px] font-semibold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Arvuta metsamaa hind</Link>
              </div>
              {/* CTA removed per request */}
            </div>

            {/* Right: Three horizontal tiles (match visual rhythm of 3 cards below) */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="flex h-full flex-col justify-between rounded-xl border border-emerald-900/10 bg-white/80 bg-woodgrain p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Leaf strokeWidth={1.5} className="h-5 w-5 text-emerald-700" aria-hidden />
                    <p className="text-[15px] font-medium text-emerald-950">Pikaajaline kogemus</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-emerald-900/85">Üle 15-aasta praktilist kogemust metsa ostu, hoolduse ja väärtuse tõstmise lahendustes.</p>
                </div>
                <div className="flex h-full flex-col justify-between rounded-xl border border-emerald-900/10 bg-white/80 bg-woodgrain p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    {/* Award icon for pricing fairness */}
                    <svg className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"/>
                      <path d="M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0Z"/>
                    </svg>
                    <p className="text-[15px] font-medium text-emerald-950">Õiglased hinnad</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-emerald-900/85">Hindame teie kinnistu kiirelt ning pakume teie kinnistu eest alati turu kõrgeimat hinda.</p>
                </div>
                <div className="flex h-full flex-col justify-between rounded-xl border border-emerald-900/10 bg-white/80 bg-woodgrain p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    {/* Blocks icon for modular/individual solutions */}
                    <svg className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="14" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                    </svg>
                    <p className="text-[15px] font-medium text-emerald-950">Individuaalsus</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-emerald-900/85">Läheneme igale projektile individuaalselt ning leiame teiega koostöös väljakutsetele lahendused.</p>
                </div>
              </div>

              {/* Stretching card beneath tiles to utilize remaining whitespace */}
              <div className="mt-4 rounded-xl border border-emerald-900/10 bg-white/85 bg-woodgrain px-4 py-[26px] shadow-sm md:px-5 md:py-[30px]">
                {/* Two-column layout: left logo (10–15%), right copy with two stacked rows */}
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12">
                  {/* Left column: logo spanning the block height */}
                  <div className="md:col-span-2 md:self-stretch">
                    <div className="flex h-full items-center justify-center m-0 p-0">
                      <Image src="/metsa-hind-ikoon.png" alt="Metsa Hind" width={72} height={72} className="block m-0 p-0 h-[72px] w-[72px] object-contain sm:h-[80px] sm:w-[80px]" priority={false} />
                    </div>
                  </div>
                  {/* Right column: description row + bullets row */}
                  <div className="md:col-span-10">
                    <div className="grid grid-rows-[auto_auto] gap-3">
                      {/* Row 1: description (two lines) */}
                      <p className="max-w-[70ch] text-[15px] leading-6 text-emerald-900/85 font-normal italic mb-0">
                        Selged kokkulepped ja korrektne asjaajamine tagavad meie klientidele ja partneritele murevaba teenuse kogu metsamajanduse tsüklis.
                      </p>
                      {/* Row 2: bullets */}
                      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:flex-nowrap mb-0 mt-[5px]">
                        <li className="flex items-start gap-2 whitespace-nowrap text-[13px] text-emerald-900/90">
                          <span className="mt-[6px] h-2 w-2 rounded-full bg-emerald-600" aria-hidden />
                          Kokkulepetest kinnipidamine
                        </li>
                        <li className="flex items-start gap-2 whitespace-nowrap text-[13px] text-emerald-900/90">
                          <span className="mt-[6px] h-2 w-2 rounded-full bg-emerald-600" aria-hidden />
                          Korrektne asjaajamine
                        </li>
                        <li className="flex items-start gap-2 whitespace-nowrap text-[13px] text-emerald-900/90">
                          <span className="mt-[6px] h-2 w-2 rounded-full bg-emerald-600" aria-hidden />
                          Erilahendused
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="company-info-board"
          className="group relative mx-auto w-full max-w-[1200px] rounded-2xl border border-emerald-900/10 bg-white shadow-sm ring-1 ring-emerald-900/5 bg-woodgrain"
        >
          {/* Removed heavy background image to speed up paint */}
          <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="grid grid-cols-1 md:[grid-template-columns:300px_0.595fr_0.405fr] gap-4 sm:gap-6 p-4 sm:p-6">
            {/* Left column: Static image (300x300) instead of iframe */}
            <div className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
              <div className="relative h-[260px] md:h-[300px]">
                <Image
                  src="/metsa-hind-ou-metsa-mootmistood.png"
                  alt="Metsa Hind mõõtmistööd"
                  fill
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-black/5" />
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
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-black/5" />
              </div>
            </div>

            {/* Rightmost column: Company info card (static, no hover) */}
            <div className="rounded-[10px] bg-white min-h-[220px] md:min-h-[300px] flex items-center justify-center">
              <div className="w-full max-w-[560px] px-6 py-4">
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
                  <Link
                    href="/kontakt/"
                    className="mx-auto mt-[15px] mb-2 inline-flex items-center justify-center rounded-lg border border-emerald-300/60 bg-transparent px-[38px] py-[6.8px] text-[15px] font-semibold text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                  >
                    Kontakt
                  </Link>
                  <div className="mx-auto flex items-center gap-2">
                    <MapPin strokeWidth={0.5} className="h-[18px] w-[18px] text-emerald-700" />
                    <span className="text-gray-600">Hobujaama tn 4, Tallinn</span>
                  </div>
                  <div className="mx-auto flex items-center gap-2">
                    <Mail strokeWidth={0.5} className="h-[18px] w-[18px] text-emerald-700" />
                    <a href="mailto:info@metsamaahind.ee" className="text-emerald-700 hover:underline">info@metsamaahind.ee</a>
                  </div>
                  <div className="mx-auto flex items-center gap-2">
                    <Phone strokeWidth={0.5} className="h-[18px] w-[18px] text-emerald-700" />
                    <a href="tel:+37251234567" className="text-emerald-700 hover:underline">+372 5846 6110</a>
                  </div>
                  <p className="mx-auto mt-1 text-[12px] text-gray-600">Metsa Hind OÜ</p>
                </div>
              </div>
            </div>
          </div>
          <Script id="org-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
      </div>
    </section>
  );
}


