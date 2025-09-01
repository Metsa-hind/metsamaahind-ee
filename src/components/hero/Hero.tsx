"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background image (fill) with a *positioned* parent */}
      <div
        className="absolute inset-0 -z-10"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <Image
          src="/hero-forest.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Readable white gradient over photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:py-28">
        <p className="text-xs font-medium text-emerald-700 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Saadame vastuse 24 tunni jooksul
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Saa teada oma metsa hind
        </h1>

        <p className="mt-3 max-w-2xl text-slate-700">
          Saada taotlus ning anname esialgse hinnangu 24 tunni jooksul. Õiglane turuanalüüs,
          ekspertide nõustamine ja usaldusväärne teenindus üle Eesti.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#kusi-hinnangut"
            className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Küsi hinnangut
          </Link>
          <Link
            href="#metsa-hinnad"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            Vaata näidishindu
          </Link>
        </div>
      </div>
    </section>
  );
}


