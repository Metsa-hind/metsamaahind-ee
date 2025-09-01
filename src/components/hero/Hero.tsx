"use client";

import Image from "next/image";
import { useId } from "react";

export default function Hero() {
  const formId = useId();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-24 sm:pt-28 min-h-[calc(100vh-80px)]">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 md:[grid-template-columns:1.15fr_0.85fr] h-full">
          {/* Left copy */}
          <div className="text-emerald-950/95">
            <h1 className="mt-4 font-adcreative text-4xl leading-[1.1] sm:text-5xl md:text-6xl text-emerald-950">
              Saa teada oma <span className="text-emerald-700">metsa hind</span>
            </h1>

            <p className="mt-5 max-w-xl text-base/7 text-emerald-900/80 sm:text-lg/8">
              Saada taotluse ning anname esialgse hinnangu <strong>24 tunni</strong> jooksul.
              Õiglane turuanalüüs, ekspertide nõustamine ja usaldusväärne teenindus üle Eesti.
            </p>

            <ul className="mt-6 grid max-w-lg grid-cols-1 gap-3 text-sm text-emerald-900/80 sm:grid-cols-2">
              {[
                "Vastus 24h jooksul",
                "15+ aastat kogemust",
                "Professionaalne meeskond",
                "Keskkonnahoidlik lähenemine",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="mt-[2px] h-5 w-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-3 py-1 text-xs font-medium">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Saadame vastuse 24 tunni jooksul
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#metsa-hinnad"
                className="inline-flex h-11 items-center rounded-lg border border-emerald-300/60 px-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-900/5"
              >
                Vaata näidishindu
              </a>
              <a
                href="#form"
                className="inline-flex h-11 items-center rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Küsi hinnangut
              </a>
            </div>
          </div>

          {/* Right form */}
          <div id="form" className="w-full self-stretch md:self-center md:my-[20px]">
            <form
              aria-labelledby={`${formId}-title`}
              className="rounded-2xl bg-white/95 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur sm:p-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              <h2 id={`${formId}-title`} className="font-adcreative text-xl text-emerald-900">
                Arvuta metsa hind
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Sisesta andmed tasuta esialgse hinnangu saamiseks.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4">
                <Field label="Nimi">
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4"
                    placeholder="Teie nimi"
                  />
                </Field>

                <Field label="E-mail">
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4"
                    placeholder="teie@email.ee"
                  />
                </Field>

                <Field label="Kinnistu katastritunnus">
                  <input
                    name="kataster"
                    className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4"
                    placeholder="nt. 12345:001:0123"
                  />
                </Field>

                <Field label="Telefon (valikuline)">
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="h-11 w-full rounded-lg border border-slate-200 px-3 outline-none ring-emerald-300/40 focus:ring-4"
                    placeholder="+372 5123 4567"
                  />
                </Field>

                <Field label="Lisainfo (valikuline)">
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-300/40 focus:ring-4"
                    placeholder="Metsa suurus, asukoht, puuliigid…"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Saa tasuta metsa hindamine
              </button>

              <p className="mt-3 text-center text-xs text-slate-500">
                Kiire vastus — tavaliselt 24h jooksul.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const id = useId();
  return (
    <label htmlFor={id} className="block text-sm font-medium text-slate-700">
      {label}
      <div className="mt-1" id={id as unknown as string}>
        {children}
      </div>
    </label>
  );
}
