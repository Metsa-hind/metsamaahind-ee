"use client";

import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import Image from "next/image";
import * as React from "react";

type Review = {
  name: string;
  role: string;
  rating: number; // 0-5
  text: string;
  avatarUrl?: string;
};

const REVIEWS: Review[] = [
  {
    name: "Kris",
    role: "Kliendi tagasiside — põllumaa müük",
    rating: 5,
    text:
      "Kiire suhtlus ja selge hinnang. Konsultant käis läbi kõik variandid ning tõi välja ka riskid, mida ma ise ei märganud. Lõpuks sain hinnapakkumise, mis vastas turuseisule ja tehing liikus kiiresti.",
    avatarUrl: "/Kris-kliendi-tagasiside-pollumaa-muuk.png",
  },
  {
    name: "Liia",
    role: "Kliendi tagasiside — metsa müük",
    rating: 5,
    text:
      "Läbipaistev protsess ja korrektne asjaajamine. Kõik küsimused said kiiresti vastused ning paberimajandus oli nende poolt hoolitsetud. Soovitan soojalt.",
    avatarUrl: "/Liia-kliendi-tagasiside-metsa-muuk.png",
  },
  {
    name: "Maria",
    role: "Kliendi tagasiside — metsa hindamine",
    rating: 5,
    text:
      "Professionaalne hinnang ja konkreetsed sammud, kuidas edasi minna. Mulle meeldis, et nad selgitasid inimese keeles, millest väärtus koosneb ja kuidas turuhinnad viimastel kuudel muutunud on. Pärast hindamist saime realistliku plaani, mis vähendas ebakindlust.",
    avatarUrl: "/Maria-kliendi-tagasiside-metsa-hindamine.png",
  },
  {
    name: "Toomas",
    role: "Kliendi tagasiside — metsa hindamine",
    rating: 5,
    text:
      "Täpne analüüs ja ajakohane turuinfo. Hinnang saabus samal päeval ning pärast lühikest läbirääkimist jõudsime kokkuleppele. Tehing läks sujuvalt ja lubadused pidasid.",
    avatarUrl: "/Toomas-kliendi-tagasiside-metsa-hindamine.png",
  },
];

export default function ReviewsSection() {
  const [index, setIndex] = React.useState(0);
  const review = REVIEWS[index];

  function goPrev() {
    setIndex((i) => (i === 0 ? REVIEWS.length - 1 : i - 1));
  }

  function goNext() {
    setIndex((i) => (i === REVIEWS.length - 1 ? 0 : i + 1));
  }

  return (
    <Section size="lg" className="bg-transparent">
      <Container>
        {/* Headline block */}
        <div className="mx-auto max-w-[960px] text-center">
          <HeadingBadge label="Kliendi tagasiside" />
          <SectionH2>Meie kliendid räägivad</SectionH2>
          <SectionSubheading>
            Autentsed kogemused metsaomanikelt. Uuri, kuidas aitasime hinnata ja müüa kinnistut kindlustundega.
          </SectionSubheading>
        </div>
        <div className="mx-auto w-full flex items-center justify-center md:gap-[35px]">
          {/* External arrows (desktop and up) */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous review"
            className="hidden md:flex h-11 w-11 rounded-full bg-white/80 border border-slate-200 shadow items-center justify-center hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Image src="/metsa-hind-ikoon.png" alt="" width={20} height={20} className="-rotate-90 select-none" />
          </button>

          <div
            className="relative w-full max-w-[960px] rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white py-10"
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") goPrev();
              if (e.key === "ArrowRight") goNext();
            }}
          >
            {/* Mobile overlay arrows to avoid overflow */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="md:hidden absolute left-[35px] top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/80 border border-slate-200 shadow flex items-center justify-center hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Image src="/metsa-hind-ikoon.png" alt="" width={20} height={20} className="-rotate-90 select-none" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="md:hidden absolute right-[35px] top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/80 border border-slate-200 shadow flex items-center justify-center hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Image src="/metsa-hind-ikoon.png" alt="" width={20} height={20} className="rotate-90 select-none" />
            </button>

            {/* Slide */}
            <div className="grid grid-cols-1 md:grid-cols-[35%_65%]">
              {/* Left: avatar, name, rating */}
            <div className="p-6 md:p-8 flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={review.avatarUrl ?? "https://picsum.photos/200"}
                  alt="Customer avatar"
                  width={112}
                  height={112}
                  className="h-16 w-16 md:h-24 md:w-24 rounded-full object-cover"
                  priority={false}
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-slate-900 truncate">{review.name}</p>
                <div className="mt-2 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className={`h-5 w-5 ${i < review.rating ? "fill-amber-500" : "fill-slate-200"}`} aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
            </div>
          </div>
            </div>

            {/* Right: review content */}
            <div className="p-6 md:p-10 border-t md:border-t-0 md:border-l border-slate-200">
              <figure className="max-w-prose">
                <blockquote className="text-lg leading-relaxed text-slate-700">“{review.text}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">{review.role}</figcaption>
              </figure>
            </div>
            </div>
          </div>

          {/* External arrows (desktop and up) */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next review"
            className="hidden md:flex h-11 w-11 rounded-full bg-white/80 border border-slate-200 shadow items-center justify-center hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Image src="/metsa-hind-ikoon.png" alt="" width={20} height={20} className="rotate-90 select-none" />
          </button>
        </div>
      </Container>
    </Section>
  );
}


