"use client";

import { Container } from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import { Handshake, MapPin, FileCheck2, FileText } from "lucide-react";
import { motion } from "framer-motion";
import * as React from "react";

export default function ProcessStepsSection() {
  const steps: Array<{
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }> = [
    {
      title: "Esmane hindamine",
      description:
        "Teeme esmase pakkumise metsaregistris leitavate andmete põhjal",
      Icon: FileText,
    },
    {
      title: "Põhjalik hindamine",
      description:
        "Käime kinnistul kohapeal ning viime läbi mõõtmistööd",
      Icon: MapPin,
    },
    {
      title: "Tehingu ettevalmistamine",
      description:
        "Koostame teile täpse pakkumise ning tutvustame nüansse",
      Icon: FileCheck2,
    },
    {
      title: "Tehingu sõlmimine",
      description:
        "Sõlmime tehingu teile lähimalasuvas Notaribüroos",
      Icon: Handshake,
    },
  ];

  return (
    <Section className="my-[48px]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">
            Metsa hindamine ja müügiprotsess
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            Hindame teie kinnistu metsakava põhjal ning vajadusel käime kinnistul kohapeal, et teostada põhjalik hindamine, misjärel sõlmime tehingu Notaris
          </p>
        </div>

         <div className="relative mt-[30px] pt-[15px]">
           {/* Background connector line (desktop only) */}
           <div className="pointer-events-none absolute left-[12.5%] top-[43px] hidden h-1 w-[75%] rounded-full bg-emerald-100 md:block" />
           {/* Animated progress bar (plays once from first to last icon) */}
           <motion.div
             className="pointer-events-none absolute left-[12.5%] top-[43px] hidden h-1 w-[0%] rounded-full bg-emerald-500 md:block"
             initial={{ width: "0%" }}
             animate={{ width: "75%" }}
             transition={{ duration: 2.2, ease: "easeInOut" }}
           />

           <ol className="grid grid-cols-1 gap-8 md:grid-cols-4">
             {steps.map(({ title, description, Icon }, index) => (
               <li key={title} className="relative text-center">
                <div className="group mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-600">
                  <Icon className="h-7 w-7 transition-colors duration-200 group-hover:text-black" strokeWidth={1} aria-hidden />
                 </div>
                 <h4 className="mt-4 text-base font-semibold text-emerald-900">
                   {title}
                 </h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}


