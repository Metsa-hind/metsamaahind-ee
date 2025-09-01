"use client";
import Link from "next/link";

export default function CTABand() {
  return (
    <section className="relative py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm backdrop-blur sm:flex-row sm:p-8">
          <h3 className="font-adcreative text-2xl text-slate-900 sm:text-3xl">Soovite arvutada oma metsamaa hinna?</h3>
          <Link href="#form" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">
            Küsi hinnangut
          </Link>
        </div>
      </div>
    </section>
  );
}

