"use client";

import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import * as React from "react";

const faqs = [
  {
    q: "Mis määrab metsa hinna ja kui kiiresti see muutub?",
    a: "Hinda kujundavad puistu liigilise koosseisu ja kvaliteedi kõrval ka tagavara (tm/ha), vanus, boniteet ning logistika. Turu nõudluse muutused (ehitus, eksport) kanduvad hindadesse kiiresti – seetõttu võrdleme alati viimase 3–6 kuu tehinguandmeid.",
  },
  {
    q: "Kas saan hinnangu ilma metsakavata?",
    a: "Jah. Alustame olemasolevatest andmetest (kaugtuvastus, aerofotod, varasemad tehingud) ning täpsustame kohapealse ülevaatusega. Metsakava kiirendab protsessi ja vähendab ebakindlust, kuid ei ole kohustuslik.",
  },
  {
    q: "Kuidas erineb raieõiguse müük kinnistu müügist?",
    a: "Kinnistu müügil läheb omandiõigus üle koos maaga. Raieõiguse müük tähendab õigust teha raiet kokkulepitud mahus ja ajavahemikus; maa jääb müüjale. Raieõiguse hinnastamisel on võtmeroll sortimendil ja töömahukusel.",
  },
  {
    q: "Kui kaua hindamine ja tehing kestab?",
    a: "Esialgne hinnang valmib 24–48 tunniga. Kohapealse mõõdistusega 3–7 tööpäeva. Tehingu ettevalmistus (leping, notar) võtab tavaliselt 3–10 päeva, sõltuvalt tingimustest ja dokumentidest.",
  },
  {
    q: "Kuidas kujuneb lõplik ostuhind?",
    a: "Arvesse lähevad raiemaht, sortiment, turuhindade tase, ligipääs ja tööde teostamise kulud. Esitame läbipaistva kalkulatsiooni; notaritasud ja riigilõivud arvestatakse vastavalt kokkuleppele.",
  },
  {
    q: "Kas ligipääs ja boniteet mõjutavad hinda palju?",
    a: "Jah. Hea teedevõrk ja kuiv pinnas vähendavad väljaveokulusid. Kõrgema boniteediga kasvukohad annavad parema juurdekasvu, mis tõstab metsa väärtust nii täna kui ka tulevikus.",
  },
  {
    q: "Millal on müügiks parim aeg?",
    a: "Universaalset õiget hetke pole. Hinda mõjutavad turutsüklid ja hooajalisus. Aitame ajastada tehingu vastavalt sortimendi nõudlusele ja kohapealsetele tingimustele, et tulemus oleks võimalikult hea.",
  },
  {
    q: "Kuidas toimub tasumine ja raha laekumine?",
    a: "Tehing sõlmitakse notari juures. Arveldamine toimub pangaülekandega või notari deposiidi kaudu, et mõlema poole huvid oleksid kaitstud. Raha laekub reeglina samal või järgmisel pangapäeval (sõltub pankadest), omandiõigus kantakse kinnistusraamatusse pärast notaritehingut.",
  },
];

export default function FaqSection() {
  return (
    <Section size="lg">
      <Container>
        <div className="mx-auto w-full max-w-[1200px] text-center">
          <HeadingBadge label="Korduma kippuvad küsimused" />
          <SectionH2>Metsa hinda puudutavad küsimused ja vastused</SectionH2>
          <SectionSubheading>
            Kiired vastused levinumatele küsimustele. Vajadusel kirjutage meile ning täpsustame teie olukorra põhjal.
          </SectionSubheading>
        </div>

        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((item, i) => (
            <details key={i} className="group rounded-xl border border-emerald-100 bg-white/80 p-4 shadow-sm open:shadow-md">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-left">
                <span className="font-semibold text-emerald-900">{item.q}</span>
                <svg className="mt-1 h-5 w-5 text-emerald-700 transition-transform duration-200 group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-6 text-emerald-900/90">{item.a}</p>
            </details>
          ))}
        </div>

        {/* JSON-LD FAQ schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </Container>
    </Section>
  );
}


