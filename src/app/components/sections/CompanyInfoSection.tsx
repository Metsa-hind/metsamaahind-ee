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
          className="mx-auto mb-6 w-full max-w-[1200px] overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-emerald-900/5 backdrop-blur-sm"
        >
          <div className="relative grid grid-cols-1 gap-6 p-6 md:grid-cols-12 md:items-center">
            {/* Background gradient + subtle vectors */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_120%_at_0%_0%,rgba(16,185,129,0.10),transparent_60%),radial-gradient(120%_100%_at_100%_100%,rgba(16,185,129,0.08),transparent_55%)]" />

            {/* Left: Headline + subhead (5 cols) */}
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-emerald-950 sm:text-3xl">Jätkusuutlik metsamajandus</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-7 text-emerald-900/90">
                Oleme sõltumatu metsaostu- ja haldusettevõte, kes ühendab vastutustundliku majandamise, ausa hinnastamise ja kiire teostuse. Aitame kinnistul tuua pikaajalist tulu ning hoida metsad elujõulised ka homme.
              </p>
            </div>

            {/* Middle: Value pills (4 cols) */}
            <div className="md:col-span-4">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1">
                <li className="flex items-start gap-3 rounded-xl border border-emerald-900/10 bg-white/70 p-3 shadow-sm">
                  <Leaf className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden />
                  <div>
                    <p className="text-[15px] font-medium text-emerald-950">Kõrgeim metsamaa hind</p>
                    <p className="text-[13px] text-emerald-900/80">Läbipaistev pakkumine ja konkurentsipõhine hindamine.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-emerald-900/10 bg-white/70 p-3 shadow-sm">
                  <Timer className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden />
                  <div>
                    <p className="text-[15px] font-medium text-emerald-950">Kiire protsess</p>
                    <p className="text-[13px] text-emerald-900/80">Pakkumine 24 h, notarini 1–2 nädalaga.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-emerald-900/10 bg-white/70 p-3 shadow-sm">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden />
                  <div>
                    <p className="text-[15px] font-medium text-emerald-950">Usaldusväärsus</p>
                    <p className="text-[13px] text-emerald-900/80">10+ aastat kogemust, 4000+ edukat tehingut.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: KPIs + CTA (3 cols) */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-900/10 bg-white/70 p-3 text-center shadow-sm">
                  <p className="text-xl font-semibold text-emerald-950">10+</p>
                  <p className="text-[12px] text-emerald-900/80">aastat turul</p>
                </div>
                <div className="rounded-xl border border-emerald-900/10 bg-white/70 p-3 text-center shadow-sm">
                  <p className="text-xl font-semibold text-emerald-950">4000+</p>
                  <p className="text-[12px] text-emerald-900/80">edukat tehingut</p>
                </div>
                <div className="rounded-xl border border-emerald-900/10 bg-white/70 p-3 text-center shadow-sm">
                  <p className="text-xl font-semibold text-emerald-950">24 h</p>
                  <p className="text-[12px] text-emerald-900/80">esmane pakkumine</p>
                </div>
                <div className="rounded-xl border border-emerald-900/10 bg-white/70 p-3 text-center shadow-sm">
                  <p className="text-xl font-semibold text-emerald-950">5000+</p>
                  <p className="text-[12px] text-emerald-900/80">rahulolevat klienti</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={absUrl("kontakt")}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-[14px] font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring focus-visible:ring-emerald-400"
                >
                  Küsi hinnangut
                </a>
                <a href="#company-info-board" className="group inline-flex items-center gap-1 text-[14px] font-medium text-emerald-800 hover:text-emerald-900">
                  Vaata kaarti
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
                </a>
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


