import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { absUrl } from "@/lib/routes";
import Link from "next/link";

export default function SeoRaieoiguseHindSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Vajate nõu raieõiguse hinna osas? Võtke ühendust – vastame kiiresti.</p>
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
                Kuidas kujuneb Raieõiguse hind?
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Raieõiguse hind on metsaomaniku jaoks üks olulisemaid näitajaid, sest see määrab otseselt, kui palju tulu saab metsamaa kasutamisest ilma kinnistut müümata. Raieõiguse müük tähendab õiguse andmist ostjale raiuda kokkulepitud alal kasvavat metsa, säilitades samal ajal kinnistu omandi. Hind ei ole kunagi juhuslik – see kujuneb paljudest teguritest ning võib oluliselt erineda sõltuvalt puistu omadustest, turuolukorrast ja raietööde keerukusest.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Raieõiguse hind moodustub peamiselt nende muutujate põhjal</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Puuliikide koosseis ja sortiment</strong> – Kõige väärtuslikumad on tavaliselt okaspuud (kuusk ja mänd), eriti palgipuit, mis on sae- ja ehitustööstuses kõrgelt hinnatud. Kui puistus on palju kvaliteetset palki, on hind kõrgem. Vastupidi – kui valdav osa puidust on madalama väärtusega paberipuit või energiapuit, on hind märgatavalt madalam.
                  </li>
                  <li>
                    <strong>Raiemahu suurus ja ühtlus</strong> – Suur, ühtlane lank on ostjale kuluefektiivne, sest raietööde ja transpordi kulud jaotuvad suurema mahu peale. Väikesed killustatud eraldised võivad hinda vähendada, sest iga väikese ala ülestöötamine nõuab lisakulutusi.
                  </li>
                  <li>
                    <strong>Ligipääs ja teede seisukord</strong> – Hea ligipääs teede kaudu võimaldab kasutada tõhusat metsatöötehnikat ja vähendab väljaveokulusid. Kui tuleb rajada ajutisi teid või tugevdatakse pinnast pehme maa tõttu, kajastub see otseselt hinnas.
                  </li>
                  <li>
                    <strong>Maa reljeef ja niiskus</strong> – Kuival ja tasasel maal on raietööd kiiremad ja odavamad. Märgadel või raskesti läbitavatel aladel vajatakse spetsiaalset tehnikat ja pinnasekaitset, mis suurendab kulusid ning vähendab ostja pakutavat hinda.
                  </li>
                  <li>
                    <strong>Looduskaitselised piirangud ja raiemeetod</strong> – Kui osa alast on kaitse all või tuleb kasutada keerukamaid raiemeetodeid (näiteks harvendusraie lageraie asemel), võib raiemaht väheneda ja tulusus kahaneda.
                  </li>
                  <li>
                    <strong>Puiduturu hetkeolukord</strong> – Puiduhinnad kõiguvad vastavalt nõudlusele ja pakkumisele. Kui sae- ja energiapuidu hinnad on kõrged, saavad metsaomanikud tavaliselt paremaid pakkumisi. Kui hinnad on languses, võivad ka raieõiguse pakkumised olla tagasihoidlikumad.
                  </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kaasnevad kulud ja nende mõju raieõiguse hinnale</h3>
                <p>
                  Raieõiguse hind sisaldab sageli ka ostja poolt kaetavaid kulusid. Näiteks teede rajamine või parendamine, pinnase tugevdamine, väljaveoteede korrastamine ja vajadusel kuivenduskraavide puhastamine. Kui raietööd on keerukad ja vajavad täiendavaid investeeringuid, kajastub see pakkumises.
                </p>
                <p>
                  Metsaomanikul tasub arvestada ka sellega, et pärast raiet jääb sageli metsauuenduse kohustus omaniku kanda. See tähendab uue metsa istutamist või loodusliku uuenemise soodustamist. Kuigi raietööd ja väljavedu teeb ostja, võib vajadus uue metsa rajamiseks mõjutada müügistrateegiat ja tulude planeerimist.
                </p>
                <p>
                  Praktiline näide: kui teie kinnistul on kuiv, hästi ligipääsetav kuusik, kus kasvab palju kvaliteetset palki, võib raieõiguse hind olla märkimisväärselt kõrgem kui näiteks märjal lehtpuualal, kuhu peab rajama teid ja kasutama spetsiaalset tehnikat.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Raieõiguse müügi hind sõltub ka müügi meetodist</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Fikseeritud hinnaga raieõiguse müük</strong> – Hind lepitakse kokku juba lepingu sõlmimisel. Metsaomanik teab täpselt, kui palju tulu saab, ja ei pea muretsema turuhindade või raiemahu muutumise pärast. See on stabiilne ja riskivaba lahendus.
                  </li>
                  <li>
                    <strong>Väljatuleku alusel müük</strong> – Lõplik tasu selgub pärast raietööde lõppu, sõltudes tegelikust raiemahust ja puiduhinnast. Võib anda suuremat tulu, kui hinnad tõusevad või raiemaht on prognoositust suurem, kuid sisaldab riski, kui hinnad langevad või raiemaht osutub väiksemaks.
                  </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas saada õiglane raieõiguse hind</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Koguge mitu pakkumist.</strong> Ärge rahulduge esimese hinnapakkumisega – konkurents aitab saada paremat hinda.</li>
                  <li><strong>Hoidke metsadokumentatsioon korras.</strong> Kehtiv metsakava ja täpsed andmed puistu kohta muudavad hindamise usaldusväärsemaks ja kiirendavad protsessi.</li>
                  <li><strong>Konsulteerige spetsialistidega.</strong> Kui turuteadmised puuduvad, võib professionaalne hindamine tagada, et te ei müü raieõigust alla väärtuse.</li>
                  <li><strong>Jälgige puiduturu trende.</strong> Kui hinnad on tõusuteel, võib olla kasulik müügiga veidi oodata.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Raieõiguse müük usaldage eksperdile</h3>
                <p>
                  Pakume metsaomanikele ausat ja läbipaistvat hinnastamist, lähtudes kõigist olulistest teguritest. Meie 15+ aastane kogemus metsanduses aitab teha realistlikke ja konkurentsivõimelisi pakkumisi. Tegeleme kogu protsessiga alates metsamaa hindamisest ja metsateatise vormistamisest kuni raietööde läbiviimise ja teede korrastamiseni.
                </p>
                <p>
                  Kui soovite teada, milline on teie kinnistu tegelik raieõiguse hind, võtke meiega ühendust. Anname selge ja põhjendatud pakkumise, aitame mõista hinnakujundust ja tagame, et teie jaoks oleks tehing turvaline, lihtne ja kasumlik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


