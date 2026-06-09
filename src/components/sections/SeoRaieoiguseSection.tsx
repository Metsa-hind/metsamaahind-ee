import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { absUrl } from "@/lib/routes";
import Link from "next/link";

export default function SeoRaieoiguseSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Vajate nõu metsa müügil? Võtke ühendust – vastame kiiresti.</p>
              <div className="mt-3 space-y-1 text-sm text-emerald-900/85">
                <div>Hobujaama tn 4, Tallinn</div>
                <div><a href="mailto:info@metsamaahind.ee" className="hover:underline">info@metsamaahind.ee</a></div>
              </div>
              <Link
                href={absUrl("/kontakt")}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                KONTAKT
              </Link>
            </div>
          </aside>

          {/* Content area in a big styled card */}
          <div className="rounded-2xl border border-emerald-100 bg-white/85 shadow-sm ring-1 ring-emerald-900/5 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 opacity-70" />
            <div className="p-6 md:p-8">
              <h2 className="font-adcreative text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-emerald-950">
                Raieõiguse ost läbipaistvalt ja murevabalt
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Kui soovid oma metsast tulu teenida, ilma et peaksid ise raietöid korraldama või metsamajanduse keeruliste detailidega tegelema, on raieõiguse müük ja meie pakutav raieõiguse ost (ehk raieõiguse ostmine) lihtsaim ja turvalisim lahendus. Ostame raieõigust üle kogu Eesti – olenemata kinnistu suurusest või asukohast – ning maksame alati turu kõrgeimat hinda. Meil on pikaajaline kogemus metsanduses, investeerime pikaajalise strateegia alusel ja majandame metsi ise. See annab sulle kindluse, et saad oma metsamaterjali eest õiglase ja konkurentsivõimelise tasu ning et raie teostatakse professionaalselt.
                </p>
                <p>
                  Meie eesmärk on teha kogu protsess müüjale võimalikult lihtsaks ja riskivabaks. Hoolitseme raietööde planeerimise, raiumise ja metsamaterjali väljaveo eest ning tagame, et raielank jääb pärast raiet korrektsesse seisukorda. Vajadusel pakume ka metsa uuendamise ja järelhoolduse lahendusi. Meie lähenemine põhineb läbipaistvusel ja professionaalsusel – selgitame iga sammu ning vastame selgelt kõikidele küsimustele.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks valida meie pakutav raieõiguse ostu teenus</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kõrgeim turu hind</strong> – Maksame raieõiguse eest parimat võimalikku hinda, arvestades metsatagavara, liigikoosseisu, ligipääsu, sortimente, puidu kvaliteeti ja hetke puiduturu hindu.</li>
                  <li><strong>Pikaajaline kogemus ja usaldusväärsus</strong> – Oleme metsanduses tegutsenud pikka aega, tunneme kohalikke tingimusi ja seadusandlust ning järgime metsanduse head tava.</li>
                  <li><strong>Täisteenus alates hindamisest kuni raietööde lõpuni</strong> – Sa ei pea tegelema metsateatise, raiete korraldamise ega logistikaga – teeme kõik sinu eest.</li>
                  <li><strong>Läbipaistev hinnamudel</strong> – Selgitame täpselt, kuidas pakkumine kujuneb. Nii tead, mille eest ja kui palju saad tasu.</li>
                  <li><strong>Korrektne raietöö</strong> – Tagame, et raielank ja väljaveoteed on töö lõppedes heas korras ja valmis edasiseks metsauuenduseks.</li>
                </ul>
                <p>
                  Lisaks hinnale ja teenuse kvaliteedile peavad paljud metsaomanikud oluliseks, et me ei ole vahendajad. Me ise majandame metsi ja investeerime pikaajaliselt – meie huvi ei piirdu üksnes raietöödega, vaid ka metsa jätkusuutliku tuleviku tagamisega.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas raieõiguse ost (raie ost) toimub</h3>
                <p>
                  Oleme loonud selge ja kiire protsessi, et metsaomanik saaks metsa väärtuse rahaks muuta ilma liigse ajakulu või riskideta.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Päringu esitamine</h4>
                <p>
                  Võta meiega ühendust telefoni, e-posti või kodulehe vormi kaudu. Kui sul on kehtiv metsakava, lisa see päringule – see kiirendab esialgset hinnangut. Kui kava puudub või on aegunud, aitame selle uuendada ja vormistada metsateatise. Teeme dokumentide menetlemise sinu jaoks lihtsaks ja arusaadavaks.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Esialgne hindamine</h4>
                <p>
                  Analüüsime sinu metsaandmeid, metsakava ja turuolukorda. Vajadusel teeme kohapealse ülevaatuse: mõõdame puistu parameetrid (kõrgused, rinnasdiameetrid), hindame juurdepääsetavust, võimalikke looduskaitselisi piiranguid ja metsateede seisukorda. Selgitame, kuidas need tegurid mõjutavad raieõiguse müügi ja raieõiguse ostu hinda. Näiteks võib kandev pinnas ja lühike väljaveokaugus tõsta väärtust, samas kui kehv teedevõrk võib vähendada tulusust, sest väljaveokulud kasvavad.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Hinnapakkumine</h4>
                <p>
                  Koostame konkreetse pakkumise, mis võib olla kahte tüüpi:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Raieõiguse ost fikseeritud hinnaga</strong> – Lepime hinna kokku juba lepingu sõlmimisel. See sobib omanikule, kes soovib kindlust ja ei soovi riskida puiduhindade või tegeliku raiemahu kõikumisega. Näiteks kui hindame raiutavat kogust 3000 tm ja lepime kokku hinnaks 50 €/tm, saad 150 000 € sõltumata sellest, kuidas hiljem turuhinnad muutuvad.
                  </li>
                  <li><strong>Raieõiguse ost väljatuleku alusel</strong> – Lõplik tasu kujuneb pärast raiet, arvestades tegelikku raiemahtu ja hinnaolukorda üleandmise hetkel. Võimaldab potentsiaalselt kõrgemat tulu, kuid sisaldab tururiske.
                  </li>
                </ul>
                <p>
                  Meie kogemus näitab, et enamik eelistab fikseeritud hinda, sest see muudab raieõiguse müümise riskivabaks ja tulu planeeritavaks. Kui oled valmis riskiga arvestama, võib väljatuleku alusel raie müük tuua suurema tulemuse.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Lepingu sõlmimine ja dokumendid</h4>
                <p>
                  Kui pakkumine sobib, koostame raieõiguse ostulepingu. See on võlaõiguslik leping (notarit pole tarvis), kus sätestame raiutavad eraldised, raiemahud, tööde kestuse, hindamismeetodi ja maksetingimused. Vajadusel vormistame metsateatise ja vajalikud kooskõlastused Keskkonnaametiga. Selgitame lepingupunktid enne allkirjastamist läbi, et sul oleks täielik kindlustunne.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Raietööd ja väljavedu</h4>
                <p>
                  Meie raiemeeskond teostab tööd vastavalt lepingule ja metsanduse heale tavale, looduse ja ilma eripäradega arvestades. Kasutame kaasaegset tehnikat, vähendame pinnase kahjustusi ning korrastame raielangi ja väljaveoteed. Vajadusel silume rööpad või taastame juurdepääsuteid; pehme pinnase korral rajame ajutised pinnasekaitsed, et vältida lisakahjustusi.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Arveldamine ja lõpetamine</h4>
                <p>
                  Maksmine toimub kokkulepitud graafiku järgi. Fikseeritud hinnaga raie ostu puhul maksame sageli enne raiet või tööde käigus osamaksetena; väljatuleku alusel toimub lõpparvestus pärast raiet ja metsamaterjali realiseerimist. Kirjeldame alati maksetingimused ja tähtajad, et sul oleks täielik ülevaade.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Mis mõjutab raieõiguse hinda</h3>
                <p>
                  Hinnastamisel arvestame peamisi tegureid: liigiline koosseis ja sortimendid (palk, paberipuit, energiapuit), raiemahu suurus ja ühtlus, väljaveokaugus, teede ja kuivenduse seisukord, võimalikud looduskaitselised piirangud ning hetke turuhinnad. Näiteks võib okaspuu palgisortiment anda oluliselt kõrgema tulu kui lehtpuu energiapuit; samas hästi ligipääsetav lank vähendab ülestöötamise ja väljaveo kulu ning tõstab raieõiguse ostmise pakkumist.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Teenused pärast raietöid</h3>
                <p>
                  Meie teenus ei lõpe raietöödega. Pakume metsaomanikule järgnevat täislahendust, et kinnistu väärtus püsiks ja kasvaks:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Taasmetsastamine ja istutus</strong> – Valime sobivad puuliigid, korraldame istutuse ja tagame, et uus mets startiks tugevana.</li>
                  <li><strong>Pinnase ettevalmistamine</strong> – Vajadusel teeme mineraliseerimist ja muud tööd, et tagada uue põlvkonna kiire juurdumine.</li>
                  <li><strong>Noorendike hooldus</strong> – Planeerime hooldustööd, et tulevane mets oleks tihe ja kvaliteetne.</li>
                  <li><strong>Nõu ja toetus</strong> – Aitame toetuste info ja taotlustega, et vähendada omaniku kulusid.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kellele raieõiguse ost või müük sobib?</h3>
                <p>
                  Pöördu meie poole, kui soovid raieõiguse müüki korraldada kiiresti ja läbipaistvalt; kui sul on raieküps mets või eraldis, mis vajab majandamist; kui eelistad professionaalset teostust ja soovid vältida administratiivset koormust. Sobib ka juhul, kui plaanid hiljem kinnistut edasi majandada – korras raielank ja läbimõeldud uuendus kasvatavad maa väärtust.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Raieõiguse ost parima hinnaga</h3>
                <p>
                  Raieõiguse müük meie kaudu on metsaomanikule mugav, turvaline ja kasumlik. Pakume professionaalset hindamist, läbipaistvat hinnastamist ja turu parimat hinda. Meie pikaajaline kogemus ja täisteenus – alates hindamisest ja dokumentidest kuni raietööde ja metsauuenduseni – teevad raieõiguse ostu sinu jaoks lihtsaks.
                </p>
                <p>
                  Kui soovid raieõiguse müümist alustada, võta meiega ühendust juba täna. Leiame sinu metsale parima lahenduse ning tagame, et raieõiguse ostmine oleks sinu jaoks sujuv, selge ja tulus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


