"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import AvatarStack from "@/components/ui/AvatarStack";
import { useRecaptcha } from "@/hooks/useRecaptcha";

export default function Hero({
  title = "Metsa müük lihtsalt ja murevabalt",
  subtitle = "Metsa müük usaldage oma ala professionaalidele, ostame teie kinnistu makstes metsamaa eest turu kõrgeimat hinda.",
  formTitle = "Arvuta metsa hind",
  hideFormBgImage = false,
  titleHighlight,
  hidePrimaryCta,
  secondaryHref,
}: {
  title?: string;
  subtitle?: string;
  formTitle?: string;
  hideFormBgImage?: boolean;
  titleHighlight?: string;
  hidePrimaryCta?: boolean;
  secondaryHref?: string;
}) {
  const formId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData from form
      const formData = new FormData(e.currentTarget);
      
      // Skip reCAPTCHA for debugging
      // const recaptchaToken = await executeRecaptcha('contact_form');
      // formData.append('recaptcha_token', recaptchaToken);
      
      // Submit to simple PHP endpoint (no reCAPTCHA for debugging)
      const response = await fetch('/api/simple-contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message + (result.debug ? '\n\nDebug: ' + result.debug : ''));
        // Reset form on success
        e.currentTarget.reset();
      } else {
        alert((result.error || 'Vormi saatmisel tekkis viga. Palun proovige uuesti.') + (result.debug ? '\n\nDebug: ' + result.debug : ''));
      }
      
    } catch (error) {
      console.error('Vormi saatmine ebaõnnestus:', error);
      alert('Vormi saatmisel tekkis viga. Palun proovige uuesti.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-6 sm:pt-10 md:pt-24">
        <div className="mt-[25px] grid items-center gap-10 md:grid-cols-2 md:gap-14 md:[grid-template-columns:1.15fr_0.85fr] h-full">
          {/* Left copy */}
          <div className="text-emerald-950/95">
            <div className="-mt-[15px]">
            <h1 className="mt-[60px] md:mt-4 font-adcreative text-4xl leading-[1.1] sm:text-5xl md:text-6xl text-emerald-950">
              {(() => {
                if (titleHighlight && title.includes(titleHighlight)) {
                  const startIndex = title.indexOf(titleHighlight);
                  const before = title.slice(0, startIndex);
                  const match = title.slice(startIndex, startIndex + titleHighlight.length);
                  const after = title.slice(startIndex + titleHighlight.length);
                  return (
                    <>
                      {before}
                      <span className="text-emerald-600">{match}</span>
                      {after}
                    </>
                  );
                }
                return title;
              })()}
            </h1>

            <p className="mt-[21px] pr-0 md:pr-[80px] text-lg font-normal text-emerald-800 sm:text-xl">
              {subtitle}
            </p>

            <ul className="mt-[14px] pt-[10px] grid max-w-lg grid-cols-1 gap-3 text-sm text-emerald-900/80">
              {[
                "Kiire vastus",
                "15+ aastat kogemust",
                "Korrektne asjaajamine",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="mt-[2px] h-5 w-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-[37px] text-[16px] font-medium text-black">
              Tutvuge lähemalt
            </p>

            <div className="mt-3 flex items-center gap-3">
              {!hidePrimaryCta && (
                <Link
                  href="/"
                  className="group inline-flex h-11 items-center rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700 transition-all duration-200"
                >
                  Metsa hind
                  <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
              <Link
                href={secondaryHref || "/#hinnastatistika"}
                className="group inline-flex h-11 items-center rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200/60 px-4 text-sm font-semibold text-emerald-900 hover:from-emerald-100 hover:to-emerald-150 transition-all duration-200"
              >
                Hinnastatistika
                <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <p className="mt-3 text-[14px] text-emerald-700/70">
              *Kinnistu täpse hinna saamiseks saatke päring
            </p>
            </div>

            {/* Movable avatar stack demo (inline element) */}
            <div className="mt-[30px] inline-block">
              <AvatarStack
                files={[
                  "Kris-kliendi-tagasiside-pollumaa-muuk.png",
                  "Liia-kliendi-tagasiside-metsa-muuk.png",
                  "Maria-kliendi-tagasiside-metsa-hindamine.png",
                  "Toomas-kliendi-tagasiside-metsa-hindamine.png",
                ]}
                alts={[
                  "Kris kliendi tagasiside – põllumaa müük",
                  "Liia kliendi tagasiside – metsa müük",
                  "Maria kliendi tagasiside – metsa hindamine",
                  "Toomas kliendi tagasiside – metsa hindamine",
                ]}
                size={36}
                overlap={-11}
                ringClass="ring-2 ring-white/90 dark:ring-neutral-900"
                direction="ltr"
              />
            </div>
          </div>

          {/* Right form */}
          <div id="form" className="w-full self-stretch md:self-center md:my-[20px] mt-[20px]">
            <form
              onSubmit={handleSubmit}
              aria-labelledby={`${formId}-title`}
              className="relative overflow-hidden rounded-2xl bg-white/95 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur sm:p-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              { !hideFormBgImage && (
                <div className="pointer-events-none absolute inset-0 -z-10">
                  <Image
                    src="/metsamaa-hind-taust-kontaktivorm.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 520px, (min-width: 640px) 560px, 100vw"
                    quality={60}
                    className="object-cover"
                  />
                </div>
              )}
              <h2 id={`${formId}-title`} className="font-adcreative text-xl text-emerald-900">
                {formTitle}
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
                disabled={isSubmitting}
                className={`mt-5 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 font-semibold text-white transition ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-500 hover:bg-emerald-600'
                }`}
              >
                {isSubmitting ? 'Saatmine...' : 'Saa tasuta metsa hindamine'}
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
