import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function SeoHooldusraiedSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Küsi nõu hooldusraiete ajastuse ja teostuse kohta.</p>
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

          {/* Content area */}
          <div className="rounded-2xl border border-emerald-100 bg-white/85 shadow-sm ring-1 ring-emerald-900/5 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 opacity-70" />
            <div className="p-6 md:p-8">
              <h2 className="font-adcreative text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-emerald-950">
                Hooldusraied – mis need on ja miks need on metsadele olulised
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Hooldusraied on metsakasvatuslikud tööd, mille eesmärk on tagada metsa terve ja tasakaalustatud areng, suurendada puistu kvaliteeti ja väärtust ning vähendada kahjurite ja haiguste leviku riski. Hooldusraiete all mõistetakse mitmeid eri tüüpi raieid, mis tehakse metsa eluea jooksul enne lõppraiet. Need tööd ei ole seotud otsese majandusliku kasu saamisega kohe, vaid aitavad pikas plaanis parandada metsa tervist ja puidu kvaliteeti.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks hooldusraied on vajalikud</h3>
                <p>
                  Looduslikult kasvav mets võib olla tihe ja konkurentsis valguse, vee ning toitainete pärast. Kui noores metsas on puid liiga palju, hakkavad nad üksteist varjutama ja aeglustavad kasvu. Samuti võivad haigused ja kahjurid levida kergemini. Hooldusraied aitavad seda vältida, eemaldades liigse ja ebasobiva kasvuga puud ning suunates metsa arengut soovitud suunas.
                </p>
                <p>
                  Korralikult hooldatud mets kasvab kiiremini, on tervem ja annab tulevikus kvaliteetsemat puitu. Lisaks väheneb tormikahjustuste ja haiguste leviku oht, sest metsa struktuur muutub vastupidavamaks.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Hooldusraiete liigid</h3>
                <p>Metsa hooldusraied jagunevad mitmeks erinevaks etapiks, sõltuvalt puistu vanusest ja seisukorrast.</p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">1. Valgustusraie</h4>
                <p>
                  Valgustusraie tehakse väga noores metsas, kui puud on alles noorendikud. Eesmärk on vabastada kõige elujõulisemad ja soovitud liiki kuuluvad puud liigse konkurentsi alt. Valgustusraie aitab kujundada ühtlast ja kvaliteetset puistut, kus domineerivad soovitud liigid, näiteks mänd või kuusk.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">2. Harvendusraie</h4>
                <p>
                  Harvendusraie tehakse vanemas noorendikus või keskealises metsas, kus puud on juba arenenud, kuid konkurents on endiselt suur. Harvendusraie eemaldab kehvema kvaliteediga ja aeglasemalt kasvavad puud, jättes rohkem ruumi tugevatele ja sirgetele puudele. See soodustab nende kiiremat kasvu ning parandab puistu kvaliteeti ja vastupidavust.
                </p>
                <p>
                  Harvendusraiet võib teha mitu korda metsa eluea jooksul, sõltuvalt puistu liigist ja kasvutingimustest.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">3. Sanitaarraie</h4>
                <p>
                  Sanitaarraie on hooldusraie, mille eesmärk on eemaldada kuivanud, tormikahjustusega, haigustesse nakatunud või kahjurite poolt kahjustatud puud. See aitab vältida haiguste ja kahjurite levikut ning hoiab metsa tervena.
                </p>
                <p>
                  Sanitaarraie võib olla vajalik igas vanuses metsas, eriti pärast torme, lume- või putukakahjustusi.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">4. Valikraie hoolduslikel eesmärkidel</h4>
                <p>
                  Mõnikord tehakse valikraieid, et soodustada mitmekesisemat puistu struktuuri või parandada metsa ökoloogilist seisundit. Näiteks võidakse jätta kasvama vanu ja väärtuslikke puid, mis pakuvad elupaika lindudele ja loomadele, samal ajal eemaldades ebasobivad või haiged puud.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Hooldusraiete tegemise ajastus</h3>
                <p>
                  Hooldusraiete ajastus sõltub peamiselt puistu vanusest ja seisukorrast. Valgustusraiet tehakse tavaliselt siis, kui noorendik on tihe ja puud hakkavad üksteist varjutama. Harvendusraiet tehakse tavaliselt puistu vanuses 20–40 aastat, sõltuvalt liigist. Sanitaarraiet võib teha igal ajal, kui metsa tervis on ohus või kui tormid ja kahjurid on teinud kahju.
                </p>
                <p>
                  Oluline on arvestada, et hooldusraied tuleb teha õigeaegselt – liiga hilja tehtud harvendus võib kahjustada puistu kvaliteeti või tekitada liigsuuri lünki, mis muudavad metsa tormidele ja haigustele vastuvõtlikumaks.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas hooldusraied mõjutavad metsa majanduslikku väärtust</h3>
                <p>
                  Kuigi hooldusraied ei too sageli kohest suurt tulu, loovad need pikaajalise väärtuse. Korralikult hooldatud mets annab tulevikus rohkem ja kvaliteetsemat palki, mis on turul hinnatud. Samuti muutub raietööde läbiviimine lõppfaasis lihtsamaks ja odavamaks, kui mets on varem korrektselt hooldatud.
                </p>
                <p>
                  Näiteks: kui noorendik jäetakse harvendamata, kasvavad puud aeglaselt, kõveralt ja neil võib olla väike diameeter. Sellest puidust saab hiljem madalama väärtusega paberipuitu või küttepuitu, mitte hinnalist palgipuitu. Õigeaegne harvendamine muudab puistu sirgemaks ja kiiremini kasvavaks.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Ökoloogiline ja looduskaitseline väärtus</h3>
                <p>
                  Lisaks majanduslikule kasule on hooldusraietel oluline roll ka looduskaitses ja metsa ökosüsteemi tasakaalu hoidmisel. Sanitaarraied aitavad ennetada kahjurite massilist levikut, mis võib ohustada suuri metsaalasid. Valgustus- ja harvendusraied aitavad kujundada mitmekesisemat metsa, kus on erinevas vanuses ja liigiliselt mitmekesised puud, mis toetavad linnustikku, imetajaid ja teisi metsaliike.
                </p>
                <p>
                  Hooldusraiete käigus võib jätta kasvama üksikuid vanu puid või surnud puid (nn. lamapuitu), mis on oluline elupaik putukatele, lindudele ja sammaltele. Nii saab ühendada majanduslikud eesmärgid ja ökoloogilise mitmekesisuse hoidmise.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kokkuvõte</h3>
                <p>
                  Hooldusraied on metsade tervise, kvaliteedi ja majandusliku väärtuse seisukohalt hädavajalikud. Õigeaegne valgustusraie, harvendusraie ja sanitaarraie tagavad, et mets areneb tugevaks, vastupidavaks ja tootlikuks. Lisaks aitavad need hoida metsa ökoloogilist tasakaalu ja ennetada haigusi ning kahjureid.
                </p>
                <p>
                  Kui hooldusraied jäävad tegemata või neid tehakse valel ajal, võib metsa kasv pidurduda, puude kvaliteet langeda ja tulu tulevikus väheneda. Seetõttu on oluline hooldusraiete vajadust jälgida ning planeerida need vastavalt metsa arengule ja metsakasvatuslikele soovitustele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


