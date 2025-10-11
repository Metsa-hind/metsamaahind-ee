"use client";

import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { absUrl } from "@/lib/routes";
import Link from "next/link";

export default function CtaContactSection() {
  return (
    <Section size="lg" className="mt-[30px]">
      <Container>
        <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl border border-emerald-200/60 bg-emerald-600 text-white shadow-sm">
          <div className="relative p-8 sm:p-12 text-center">
            <h2 className="font-adcreative text-2xl leading-tight sm:text-3xl md:text-4xl">
              Arvutage metsa hind
            </h2>
            <p className="mx-auto mt-3 max-w-[70ch] text-white/90">
              Jätke meile oma kinnistu andmed või laadige üles metsamajandamiskava ning teeme teile pakkumise juba järgmisel tööpäeval.
            </p>

            <div className="mt-6">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-800 shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 -z-10 scale-75 rounded-full bg-emerald-300/50 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  Saage teada oma metsamaa hind
                </span>
                <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


