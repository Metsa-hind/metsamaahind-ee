import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function SeoMetsamajandamiskavaSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Küsi nõu metsakava tellimise, uuendamise või metsateatise osas.</p>
              <div className="mt-3 space-y-1 text-sm text-emerald-900/85">
                <div>Hobujaama tn 4, Tallinn</div>
                <div><a href="mailto:info@metsamaahind.ee" className="hover:underline">info@metsamaahind.ee</a></div>
                <div><a href="tel:+37253412277" className="hover:underline">+372 5341 2277</a></div>
              </div>
              <Link
                href={absUrl("/kontakt")}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                KONTAKT
              </Link>
            </div>
          </aside>

          {/* Content area */}
          <div className="rounded-2xl border border-emerald-100 bg-white/85 shadow-sm ring-1 ring-emerald-900/5 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 opacity-70" />
            <div className="p-6 md:p-8">
              <h2 className="font-adcreative text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-emerald-950">
                Metsamajandamiskava – põhjalik juhend metsaomanikule
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Metsamajandamiskava (edaspidi metsakava) on metsaomaniku peamine töövahend, mis näitab, kuidas oma metsamaad pikaajaliselt ja jätkusuutlikult majandada. Metsakava põhineb täpsetel mõõtmistel, kaarditööl ja metsanduse parimatel teadmistel ning on aluseks nii raiete kavandamisel, hooldustööde planeerimisel kui ka metsateatise esitamisel. Hästi koostatud metsakava aitab vältida juhuslikke otsuseid, vähendab riske ja suurendab metsamaa majanduslikku väärtust.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks on metsamajandamiskava oluline?</h3>
                <p><strong>Õiged otsused õigel ajal:</strong> Metsakava annab selge ülevaate puistu seisundist ja arengust. See võimaldab õigesti ajastada hooldusraieid, vältida kahjureid ja tormikahjustusi ning suurendada palkpuidu osakaalu.</p>
                <p><strong>Majanduslik kindlustunne:</strong> Metsakava aitab hinnata, kui palju puitu ja millal saab raiuda, milline on eeldatav tulu ning millised kulud kaasnevad (näiteks teede rajamine või metsauuendus).</p>
                <p><strong>Looduskaitsega arvestamine:</strong> Kava sisaldab infot kaitsealuste liikide, veekaitsevööndite, püsielupaikade ja muude piirangute kohta, mis aitavad vältida seaduserikkumisi ja keskkonnakahju.</p>
                <p><strong>Sujuv asjaajamine:</strong> Metsakava on alusdokument metsateatise esitamisel. Kui metsakava on ajakohane ja korrektselt koostatud, on lubade menetlus kiire ja probleemideta.</p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Mis kuulub metsamajandamiskavasse?</h3>
                <p><strong>Üldandmed ja aluskaart</strong> – Metsakava sisaldab kinnistu katastritunnust, pindala, juurdepääsuteid ja aluskaarte koos eraldiste piiride, maaparandussüsteemide ja looduskaitseliste kihtidega.</p>
                <p><strong>Eraldiste detailne kirjeldus</strong> – Iga eraldise kohta tuuakse välja valdav puuliik, keskmine vanus, boniteet, keskmine kõrgus ja diameeter, tagavara tihumeetrites hektari kohta, tervislik seisund ja hooldusvajadus.</p>
                <p><strong>Tööde soovitused ja ajakava</strong> – Metsakava näitab, millal teha valgustus-, harvendus-, sanitaar- või uuendusraieid ning kuidas planeerida metsauuendust ja hooldusi. Näiteks võib olla kirjas „harvendus 2–4 aasta jooksul“ või „uuendusraie 10 aasta pärast“.</p>
                <p><strong>Prognoosid tulu ja sortimentide kohta</strong> – Arvutatakse hinnanguline sortimentide jaotus (palk, paberipuit, energiapuit) ja võimalik tulu eri aastatel. See on prognoos, mitte siduv hinnakiri, kuid aitab planeerida rahavoogusid.</p>
                <p><strong>Looduskaitselised tingimused</strong> – Märgitakse kaitsealad, veekaitsevööndid, vääriselupaigad ja pesitsusrahu ajad. Selgitatakse, milliseid töid võib teha ja millal tuleb neid edasi lükata.</p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas metsamajandamiskava koostatakse</h3>
                <p><strong>Eeltöö ja andmete kogumine</strong> – Koostaja uurib metsaregistri andmeid, olemasolevaid kaarte, ortofotosid ja varasemaid kavasid.</p>
                <p><strong>Välitööd</strong> – Metsas mõõdetakse puude kõrgus ja rinnasdiameeter, hinnatakse liigiline koosseis, boniteet, tervislik seisund ja piirid. Märgitakse kahjustused, kuivenduskraavid ja ligipääsuteed.</p>
                <p><strong>Andmete analüüs ja arvutused</strong> – Koostatakse tagavara- ja juurdekasvuarvutused, sortimentide prognoos ning tööde ajakava.</p>
                <p><strong>Planeerimine ja soovitused</strong> – Määratakse raieajad, hooldusvajadused, metsauuendusviisid ja tee-ehituse vajadus.</p>
                <p><strong>Lõplik dokument</strong> – Koostatakse kaardid, tekstiline aruanne ja vajadusel tehakse kooskõlastused looduskaitseasutustega.</p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kehtivus ja ajakohastamine</h3>
                <p>
                  Metsakava kehtib tavaliselt 10 aastat, kuid seda tuleks uuendada alati, kui metsas toimuvad suured muutused – näiteks tormikahjustused, üraskikolded, kuivendussüsteemi rikked või uued looduskaitselised piirangud. Ajakohane kava hoiab ära olukorra, kus otsuseid tehakse aegunud info põhjal.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas metsamajandamiskava tellida ja mis see maksab</h3>
                <p>
                  Metsakava tellimine on lihtne. Tavaliselt tuleb võtta ühendust professionaalse metsakonsulendiga või metsandusettevõttega, kes pakub kava koostamise teenust. Töö maksumus sõltub kinnistu suurusest ja keerukusest, kuid keskmiselt jääb hind vahemikku 10–20 eurot hektari kohta. Väikeste kinnistute puhul võib olla miinimumtasu, näiteks 200–300 eurot.
                </p>
                <p>
                  Oluline on teada, et Erametsakeskus pakub toetust metsamajandamiskava koostamiseks. Toetuse abil saab kava maksumuse tihti märgatavalt vähendada. Toetuse taotlemisel abistavad tavaliselt ka kava koostajad, et asjaajamine oleks lihtsam.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Praktilised näited</h3>
                <p><strong>Kuusik liigniiskel maal:</strong> Metsakava soovitab korrastada kuivenduskraavid ja teha harvendus talvisel ajal, et vältida pinnasekahjustusi ning üraskite levikut. Uuendamisel soovitatakse segapuistut (kuusk + kask).</p>
                <p><strong>Tihe kaasik:</strong> Soovitatakse järkjärgulisi harvendusi, et puud saaksid kasvada jämedamaks ja tulevikus rohkem palki anda.</p>
                <p><strong>Tuuleohtlik männik:</strong> Kava juhib tähelepanu tuuleriskile ja soovitab konservatiivset harvendust ning kaitseribade säilitamist.</p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Levinud vead kava puudumisel</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hilinenud harvendus, mis toob kaasa peened ja kõverad tüved ning väiksema tulu.</li>
                  <li>Sanitaarraie viibimine, mille tõttu levivad kahjurid ja tormikahjustused.</li>
                  <li>Ligipääsu alahindamine, mis tõstab raietööde ja väljaveo kulusid.</li>
                  <li>Kaitsepiirangute eiramine, mis võib põhjustada trahve ja tööde peatamist.</li>
                  <li>Metsauuenduse alarahastamine, mis vähendab kinnistu väärtust ja pikeneb järgmise metsapõlvkonna kasvuaeg.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsakava ja metsateatis</h3>
                <p>
                  Metsakava ei anna iseenesest raieluba, kuid on metsateatise esitamisel peamine alusdokument. Kui metsakava on ajakohane, on metsateatise menetlus kiire ja sujuv. Kava annab ametnikele selge ülevaate puistu seisundist ja planeeritavatest töödest.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kulud ja kasu</h3>
                <p>
                  Metsakava koostamine on investeering, mis tasub end ära. Õigel ajal tehtud hooldusraied ja uuendusraied suurendavad puidu väärtust, vähendavad kahjustusi ja hoiavad kokku ülestöötamise kulusid. Lisaks võimaldab hea kava saada täpsemaid hinnapakkumisi, kui plaanite raieõiguse müüki.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kokkuvõte</h3>
                <p>
                  Metsamajandamiskava on metsaomaniku peamine tööriist, mis ühendab mõõdetud andmed, õigusraamistiku ja praktilised soovitused. See aitab teha teadlikke otsuseid, hoida metsa tervena ja majanduslikult kasumlikuna. Kui soovite oma metsa targalt majandada, tellige ajakohane metsakava ja uuendage seda, kui olud muutuvad – nii tagate, et teie mets püsib väärtuslik ja jätkusuutlik ka tulevikus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


