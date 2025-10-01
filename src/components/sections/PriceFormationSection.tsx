"use client";

import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";

export default function PriceFormationSection() {
  return (
    <Section size="lg">
      <Container>
        <div className="mx-auto w-full max-w-[1200px] text-center">
          <HeadingBadge label="Metsa hindamine ja müük" />
          <SectionH2>Metsa hindamine ja müük</SectionH2>
          <SectionSubheading>
            Lühike ülevaade teguritest, mis mõjutavad teie metsamaa väärtust ning kuidas me hinnangu koostame.
          </SectionSubheading>
        </div>

        {/* Two-card layout: left sticky list and right content */}
        <div className="mx-auto mt-2 grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-[25%_75%]">
          {/* Left: sticky bullets card */}
          <aside className="rounded-xl border border-emerald-100 bg-white/80 p-6 sm:p-8 shadow-sm md:sticky md:top-4 self-start">
            <ul className="space-y-3.5 text-left text-sm text-emerald-900">
              {[
                "Kinnistu suurus",
                "Kinnistu asukoht",
                "Ligipääsetavus",
                "Boniteet",
                "Looduskaitselised piirangud",
                "Liigiline koosseis",
                "Puistu vanus",
                "Puiduturu hinnad",
                "Üldine turuseis",
                "Puistu tervis",
              ].map((title) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span className="font-semibold leading-6">{title}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right: explanatory copy card */}
          <article className="rounded-xl border border-emerald-100 bg-white/80 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-900">Metsa hinna kujunemine...</h3>
            <div className="mt-3 space-y-4 text-[15px] leading-7 text-emerald-900/90">
              <p>
                Metsakinnistu hindamine on mitmeastmeline protsess, kus me ühendame nii objektiivseid andmeid
                kui ka turuolukorra analüüsi. Meie eesmärk on selgitada välja kinnistu tegelik väärtus, arvestades
                sealset metsaressurssi, asukohta ning muid olulisi tegureid. Alustame tavaliselt olemasoleva
                metsakava analüüsiga ja vajadusel jätkame kohapealse kontrolli ning mõõtmistöödega. Järgnevalt
                selgitame, kuidas protsess välja näeb ja millistele põhimõtetele me tugineme.
              </p>

              <h4 className="mt-4 text-base font-semibold text-emerald-900">Hindamise alused ja mõjutegurid</h4>
              <p>
                Metsamaa väärtust mõjutavad mitmed tegurid (nt kinnistu suurus ja asukoht, ligipääsuteed,
                boniteet, looduskaitselised piirangud, liigiline koosseis, puistu vanus ja tervis, samuti
                puiduturu hinnad ja üldine turuseis). Lisaks arvestame kinnistu majandamispotentsiaali,
                infrastruktuuri olemasolu ning õiguslikke piiranguid. Need tegurid koos annavad tervikliku pildi
                kinnistu majanduslikust väärtusest.
              </p>

              <h4 className="mt-4 text-base font-semibold text-emerald-900">Hindamise protsess</h4>
              <p>
                Alustame hindamist enamasti olemasoleva metsakava põhjal. Metsakava annab ülevaate kinnistu
                koosseisust, puistute vanusest, liigilisest jaotusest, boniteedist ning võimalikest raiemahtudest.
                See dokument võimaldab teha esialgse hinnangu metsa väärtuse kohta. Kui metsakava on ajakohane ja
                piisava täpsusega, saame selle alusel anda esialgse hinnangu. Kui metsakava on aegunud või puudulik,
                teeme kohapealse ülevaatuse. Kohapealsel hindamisel teeme proovitükke, mõõdame puude kõrgusi ja
                diameetreid ning hindame metsa seisundit ja juurdepääsetavust. Vajadusel kasutame
                metsakorraldustöödeks spetsiaalseid mõõteseadmeid ja töövõtteid, et saada võimalikult täpne pilt
                metsa seisust ja potentsiaalsest majanduslikust väärtusest.
              </p>

              <h4 className="mt-4 text-base font-semibold text-emerald-900">Tehingu ettevalmistamine ja läbiviimine</h4>
              <p>
                Kui hindamise tulemusena kujunenud hinnavahemik sobib mõlemale poolele, alustame tehingu
                ettevalmistamist. See hõlmab järgmisi samme:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li><span className="font-medium">Kokkulepe hinna osas</span> – lepime kokku lõpliku ostu‑müügihinna.</li>
                <li><span className="font-medium">Lepingu koostamine</span> – koostame ostu‑müügilepingu koos oluliste tingimustega (hind, piirid, piirangud, eritingimused).</li>
                <li><span className="font-medium">Lepingu tutvustamine</span> – enne notarisse minekut tutvustame lepingut ja teeme vajadusel täpsustusi.</li>
                <li><span className="font-medium">Notariaalne tehing</span> – tehing viiakse läbi notari juures; notar kontrollib omandiõiguse ja andmed kinnistusraamatust.</li>
                <li><span className="font-medium">Omandiõiguse üleminek</span> – pärast tehingut kantakse uus omanik kinnistusraamatusse.</li>
              </ul>

              <h4 className="mt-4 text-base font-semibold text-emerald-900">Kokkuvõte</h4>
              <p>
                Metsakinnistu hindamine on kompleksne ja põhjalik protsess, mis tugineb metsakavale, vajadusel
                kohapealsetele mõõtmistöödetele ning turuanalüüsile. Arvestame erinevaid tegureid – kinnistu
                omadusi, juurdepääsetavust, majandamisvõimalusi ja hetke turuolukorda. Kui hinnavahemik sobib,
                valmistame ette vajalikud dokumendid ja viime tehingu lõpule notaribüroos. Selline lähenemine
                tagab õiguspärase ja läbipaistva tulemuse nii müüjale kui ostjale.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}


