import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function SeoPollumaaMuukSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Küsi nõu põllumaa müügi või hindamise osas – vastame kiiresti.</p>
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
                Põllumaa müük
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Kui teil on põllumaa, mille müümist kaalute, on oluline mõista, kuidas põllumaa müük toimib ja kuidas saada oma kinnistu eest õiglane ning konkurentsivõimeline hind. Meie ettevõte ostab põllumaad üle kogu Eesti – olenemata kinnistu suurusest, asukohast või eripäradest. Ostame nii hüpoteegiga koormatud kinnistuid, põllumaid koos taluga, rohumaad kui ka põllumaid, millel on kehtivad rendilepingud. Maksame kuni 8000 eurot hektari eest (olenevalt piirkonnast, boniteedist ja turuolukorrast) ning teeme kogu põllumaa müügiprotsessi teie jaoks selgeks ja arusaadavaks.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Põllumaa müük usaldage meile</h3>
                <p>
                  Põllumaa müük võib tunduda keeruline – eriti kui on vaja arvestada dokumentide, kehtivate rendilepingute või hüpoteekidega. Kui müüte kinnistu professionaalsele põllumaa ostjale, saate:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kiire ja turvalise tehingu</strong> – me korraldame kogu asjaajamise ja suhtluse notariaalselt ning läbipaistvalt.</li>
                  <li><strong>Õiglase ja turupõhise hinna</strong> – hindame teie kinnistu individuaalselt, arvestades nii turu hetkeolukorda kui ka kinnistu eripära.</li>
                  <li><strong>Paindlikud lahendused</strong> – ostame ka kinnistuid, millel on rendilepingud või hüpoteegid, ning lahendame juriidilised nüansid.</li>
                  <li><strong>Kogenud partneri</strong> – meil on pikaajaline kogemus põllu- ja metsakinnistute majandamisel.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Põllumaa müügi protsess samm-sammult</h3>
                <p>
                  Oleme loonud läbipaistva ja lihtsa protsessi, et põllukinnistu müük kulgeks ilma stressi ja liigse bürokraatiata.
                </p>
                <p><strong>1. Päringu esitamine</strong></p>
                <p>
                  Esitage meile oma põllumaa andmed – näiteks katastritunnus, pindala ja lühikirjeldus. Kui kinnistul on eripärasid (hüpoteek, rendilepingud, hooned), märkige ka need. Meie spetsialist vaatab info üle ja võtab teiega ühendust.
                </p>
                <p><strong>2. Esmane hinnapakkumine</strong></p>
                <p>
                  Analüüsime teie kinnistut ja turuolukorda ning teeme esmase pakkumise. Sageli saame esmase hinnangu anda juba mõne tööpäeva jooksul pärast päringu laekumist.
                </p>
                <p><strong>3. Kinnistu hindamine ja detailne analüüs</strong></p>
                <p>
                  Kui esmane pakkumine sobib, teeme vajadusel kohapealse ülevaatuse. Hindame pinnase boniteeti, ligipääsetavust, rendilepinguid, kuivendussüsteeme ja muid tegureid, mis võivad hinda mõjutada.
                </p>
                <p><strong>4. Lõplik hinnapakkumine ja tingimused</strong></p>
                <p>
                  Koostame lõpliku ja põhjendatud hinnapakkumise, arvestades kõiki kogutud andmeid. Selgitame ausalt, kuidas hind kujunes ja mis asjaolud seda mõjutavad.
                </p>
                <p><strong>5. Lepingu sõlmimine ja tehingu lõpuleviimine</strong></p>
                <p>
                  Kui jõuame hinnas kokkuleppele, valmistame ette ostu-müügilepingu ja viime tehingu läbi notari juures. Raha kantakse notarideposiidi kaudu teie arvelduskontole – sularahatehinguid ei toimu, mis tagab täieliku turvalisuse.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Mis mõjutab põllumaa hinda?</h3>
                <p>
                  Põllumaa hind võib piirkonniti ja kinnistuti väga erineda. Hindamine põhineb mitmel teguril:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Pinnase viljakus (boniteet)</strong>: viljakas muld on põllumeeste seas kõrgelt hinnatud ning tõstab kinnistu väärtust.</li>
                  <li><strong>Kinnistu suurus</strong>: suuremad põllumaad on majandamisel efektiivsemad ja seetõttu sageli kõrgema hektari hinnaga.</li>
                  <li><strong>Asukoht ja ligipääs</strong>: maantee või suurema keskuse lähedus vähendab logistikakulusid ja tõstab hinda.</li>
                  <li><strong>Kehtivad rendilepingud</strong>: rendileping võib hinda mõjutada nii positiivselt (stabiilne tulu) kui ka negatiivselt (kui lepingutingimused on ebasoodsad või pikad).</li>
                  <li><strong>Drenaaž ja maaparandussüsteemid</strong>: korras kuivendussüsteem suurendab põllumaa tootlikkust ja väärtust.</li>
                  <li><strong>Turuolukord</strong>: teravilja ja muude põllumajandussaaduste turutrendid ning toetusmeetmed mõjutavad nõudlust ja hindu.</li>
                  <li><strong>Lisahooned või talu</strong>: elamu või tootmishooned võivad suurendada kinnistu atraktiivsust.</li>
                </ul>
                <p>
                  Näide: kui kinnistu on hästi ligipääsetav, suur (üle 50 ha), kõrge boniteediga ja kuivendussüsteemid toimivad, võib hektari hind ulatuda kuni 8000 euroni. Samas väiksem, raskesti ligipääsetav või kehva viljakusega põld võib olla madalama hektari hinnaga.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Rendilepingud ja hüpoteegid ei ole takistuseks</h3>
                <p>
                  Sageli arvavad omanikud, et hüpoteegiga koormatud või rendilepinguga põllumaa müük on keeruline. Tegelikult on võimalik müüa ka selliseid kinnistuid – me aitame vormistada vajaliku dokumentatsiooni ja lahendada juriidilised küsimused, sh hüpoteegi kustutamine või üleviimine. Rendilepingute olemasolu ei takista müüki; hindamisel arvestame nende sisu ja kestust.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Maksimaalne läbipaistvus ja aus hindamine</h3>
                <p>
                  Meie eesmärk on pakkuda põllumaade omanikele ausat ja turupõhist hinda. Selgitame alati, mis tegurid mõjutavad lõpphinda – näiteks ligipääsu seisukord, kuivenduse tase või PRIA toetuste ajalugu. Hindamine ei ole juhuslik – kasutame nii turu võrdlusandmeid kui ka oma pikaajalist kogemust.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks valida meid oma põllumaa müügipartneriks?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kõrgeim võimalik hind:</strong> maksame kuni 8000 €/ha, sõltuvalt kinnistu omadustest ja turuolukorrast.</li>
                  <li><strong>Kogenud spetsialistid:</strong> pikaajaline kogemus põllu- ja metsamaade hindamises ning majandamises.</li>
                  <li><strong>Lihtne ja kiire protsess:</strong> aitame alates hinnapäringust kuni notarini.</li>
                  <li><strong>Turvaline tehing:</strong> raha liigub ainult notarideposiidi kaudu.</li>
                  <li><strong>Paindlikkus:</strong> ostame ka keerulisema juriidilise staatusega kinnistuid.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Soovitused põllumaa müügiks</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Koguge dokumendid:</strong> katastritunnus, rendilepingud, hüpoteegi info ja PRIA toetuste ajalugu.</li>
                  <li><strong>Kontrollige ligipääsu:</strong> veenduge, et teed ja truubid oleksid heas seisus – see võib tõsta hinda.</li>
                  <li><strong>Uurige turgu:</strong> tehke mitu hinnapäringut, et mõista oma kinnistu väärtust.</li>
                  <li><strong>Kaaluge õiget ajastust:</strong> kui teravilja ja piimatoodete hinnad on tõusuteel, võib nõudlus põllumaa järele kasvada.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Küsige põllumaa müügi hinnapakkumine</h3>
                <p>
                  Põllumaa müük võib olla lihtne ja kasumlik, kui valida kogenud ostupartner, kes pakub ausat hindamist ja korraldab kogu asjaajamise. Meie ostame põllumaid üle Eesti, sealhulgas hüpoteegiga või rendilepingutega koormatud kinnistuid, ning maksame kuni 8000 € hektari eest, kui kinnistu omadused ja turuseis seda võimaldavad. Kui soovite oma põllumaad müüa, tasub küsida hinnapakkumine – nii saate selge ülevaate oma kinnistu väärtusest ja turvalise müügiprotsessi algusest lõpuni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


