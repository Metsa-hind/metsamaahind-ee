import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { absUrl } from "@/lib/routes";
import Link from "next/link";

export default function SeoSellingSection() {
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
                Metsa müük – kuidas protsess toimib
              </h2>
              <h3 className="mt-2 text-lg sm:text-xl font-medium text-emerald-900/90">
                Praktiline ülevaade sammudest, otsustest ja ajakulust
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
              Metsa müük algab eesmärgi seadmisest. Kas soovite müüa kogu kinnistu, ainult
              raieõiguse või otsite hoopis partnerit metsa majandamiseks? Eesmärk määrab nii
              müügiviisi kui ka ajakava. Järgnevalt on oluline koguda alusandmed: kinnistu
              katastritunnus, asukoht, ligipääs ja võimalusel kehtiv metsamajandamiskava. Kava ei
              ole kohustuslik, kuid see kiirendab hindamist ja vähendab ebakindlust, sest
              sisaldab infot tagavara, kasvukohatüübi, piirangute ja soovituslike raiete kohta.
                </p>
                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsa müük samm‑sammult</h3>
                <p>
                  Eesmärgi ja lähteandmete järel koostame esialgse hinnangu. Seejärel
                  täpsustame andmeid kohapeal, lepime kokku müügiviisi ning vormistame tehingu.
                  Lähenemine on teadlik ja läbipaistev, et <strong>metsa müük</strong> oleks
                  omaniku jaoks lihtne, kiire ja turvaline.
                </p>
                <p>
              Hindamise faasis koondame kättesaadavad andmed ning võrdleme neid viimaste tehingute
              ja turuhindadega. Kui kava puudub või vajab täpsust, teeme kohapealse ülevaatuse:
              valime proovitükid, mõõdame puude diameetreid ja kõrgusi, hindame seisukorda ning
              ligipääsu. Küsimus pole ainult puidu koguses, vaid ka sortimendis. Mida suurem on
              palgipuidu osakaal, seda tugevam on lähtepositsioon, sest palgi hind on stabiilselt
              kõrgem kui peenema sortimendi hind. Samuti mõjutavad hinda boniteet ja tööde
              teostamise kulud – kuiv pinnas ja toimiv teedevõrk tähendavad madalamaid väljaveokulusid.
                </p>
                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsa müümine vs raieõiguse müük</h3>
                <p>
                  <strong>Metsa müümine</strong> kui kinnistu võõrandamine tähendab omandiõiguse
                  üleminekut, sh maad ja sellega seotud õigusi. <strong>Raieõiguse müük</strong>
                  annab ostjale õiguse teha raiet kokkulepitud mahus ja ajavahemikus, kuid maa jääb
                  müüjale. Esimese variandi eelis on lihtsus ja kiire kapitali vabanemine; teise eelis
                  on kontroll maa üle ning paindlik graafik. Valiku teeme koos teiega, arvestades
                  eesmärke, maksustamist ja turuseisu.
                </p>
                <p>
              Kui hindamine on tehtud, paneme kokku läbipaistva pakkumise. Pakkumine kirjeldab
              eeldatava raiemahu, sortimendi ja logistika arvestust ning toob välja olulised
              eeldusepunktid (näiteks ligipääs, hooajalisus ja metsa seisund). Kinnistu müügi
              korral sisaldab pakkumine ka omandiõiguse üleminekuga seotud samme, raieõiguse
              müügi puhul täpsustatakse lubatud raieala, -maht ning tööde ajavahemik. Meie praktika
              on esitada pakkumine kiiresti – sageli 24–48 tunni jooksul pärast vajalike andmete
              kättesaamist.
                </p>
                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas saada <span className="whitespace-nowrap">metsa müügil</span> parim hind</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Esitage võimalikult ajakohased andmed – metsakava või kohapealne mõõdistus.</li>
                  <li>Hoidke väljaveoteed läbitavad; hea ligipääs vähendab kulusid ja tõstab pakkumist.</li>
                  <li>Planeerige hooldusraied aegsasti; korrektne hooldus suurendab palgipuidu osakaalu.</li>
                  <li>Võrrelge pakkumisi samadel eeldustel (maht, sortiment, tööde aeg ja makseviis).</li>
                </ul>
                <p>
              Järgmine samm on tingimuste täpsustamine. Siin lepime kokku müügiviisi (kinnistu vs
              raieõigus), maksegraafiku ja üleandmise ajajoone. Kinnistu müügi puhul toimub tehing
              notari juures. Notar kontrollib omandiõigust, kinnistusraamatu andmeid ning vormistab
              lepingud. Arveldamine käib pangaülekandega või notarideposiidi kaudu, mis kaitseb mõlema
              poole huve. Raieõiguse müügil lisatakse lepingusse tööde kvaliteedinõuded, raieala
              märgistus ja keskkonnatingimused, et töö teostataks korrektselt ja kokkulepitud mahus.
                </p>
                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Millal on metsa müümine mõistlik?</h3>
                <p>
                  Kui plaanite investeeringuid või kinnistu vajab suuremahulisi hooldustöid, võib
                  müük olla otstarbekas. Samuti siis, kui raieküps mets on saavutanud majandusliku
                  tipptaseme ja lisakasv on aeglane. Nõustame teid ajastuse osas, et müük oleks
                  võimalikult kasulik ja riske oleks vähe.
                </p>
                <p>
              Turuajastus on alati teema. Universaalset „parimat hetke” pole – hinnad liiguvad koos
              nõudluse ja ekspordi tsüklitega. Kui sortimendis on ülekaalus palgipuit, tasub jälgida
              just saetööstuse tellimusi. Kui eesmärk on kiire tehing, on tehingukiirus sageli
              olulisem kui absoluutne maksimumhind. Vajadusel aitame tehingu ajastada nii, et tulemus
              oleks võimalikult tugev, arvestades ühtaegu nii turgu kui ka objekti praktilisi
              eripärasid.
                </p>
                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsa müük: dokumendid ja kontrollnimekiri</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Katastritunnus ja kinnistusraamatu väljavõte.</li>
                  <li>Metsamajandamiskava (kui on) või kokkulepe kohapealse mõõdistuse kohta.</li>
                  <li>Piirangute info (kaitsealad, elupaigad, servituudid, teed).</li>
                  <li>Kontaktandmed ja eelistatud tehinguviis (kinnistu müük või raieõigus).</li>
                </ul>
                <p>
              Hea praktika on mõelda müük tervikuna läbi. Kas samal ajal on vaja teha hooldusraiet või
              teede korrastust? Kas kaitsealused alad piiravad raiet ning millised load on vajalikud?
              Aitame need küsimused läbipaistvaks teha. Meie eesmärk ei ole üksnes tehingu
              vormistamine, vaid ka omaniku riskide vähendamine ja metsa väärtuse hoidmine. Kui
              soovite realistlikku hinnangut ja selget plaani, saatke meile metsakava või võtke
              ühendust – koostame kiiresti konkreetse pakkumise ja ajakava.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


