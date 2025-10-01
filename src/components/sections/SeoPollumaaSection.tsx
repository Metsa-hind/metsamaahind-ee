import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function SeoPollumaaSection() {
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
                Põllumaa ost õiglase hinnaga
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Kui te soovite oma põllumaad müüa, on oluline leida usaldusväärne ostja, kes maksab ausat ja turu kõrgeimat hinda. Meie ostame põllumaad igas suuruses ja asukohas üle kogu Eesti – alates väikestest maatükkidest kuni suurte põllumassiivideni. Ostame nii hüpoteegiga koormatud kinnistuid, kui ka põllumaid koos talude ja hoonetega. Samuti ei ole takistuseks kehtivad rendilepingud – korraldame tehingu nii, et olemasolevad lepingud jäävad kehtima või vajadusel leiame sobiva lahenduse.
                </p>
                <p>
                  Me maksame põllumaa eest kuni 8000 eurot hektari kohta, sõltuvalt maa kvaliteedist ja turuolukorrast. Oleme tegutsenud põllu- ja metsakinnistute majandamisega üle 15 aasta ning teame, kuidas teha protsess teie jaoks lihtsaks, läbipaistvaks ja murevabaks.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Põllumaa ost parima hinnaga</h3>
                <p>
                  Põllumaa müük võib tunduda keeruline, kuid meie teeme kogu protsessi võimalikult lihtsaks ja muretuks. Meiega saad kindlustunde, et tehing toimub õiglaselt ja professionaalselt ning raha jõuab sinuni kiiresti ja turvaliselt.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kõrgeim turuhind</strong> – maksame kuni 8000 € hektari eest, arvestades maa kvaliteeti, asukohta, suurust ja turutrende.</li>
                  <li><strong>Läbipaistev protsess</strong> – selgitame igat sammu ja anname teile selge arusaama, kuidas hind kujuneb ja millised kulud on meie kanda.</li>
                  <li><strong>Asjatundlik asjaajamine</strong> – aitame vormistada vajalikud dokumendid, tegeleme kooskõlastuste ja notaritoimingutega.</li>
                  <li><strong>Kehtivad rendilepingud ei sega</strong> – vajadusel võtame rendilepingud üle või kohandame tehingu vastavalt nendele tingimustele.</li>
                  <li><strong>Turvaline tehing</strong> – kõik toimub notariaalselt, raha liigub läbi notari deposiitkonto ja jõuab turvaliselt teie pangakontole.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas põllumaa ost samm-sammult toimib</h3>
                <p><strong>Hinnapäringu esitamine</strong> – Saadate meile oma kinnistu andmed (katastritunnus, asukoht, pindala, võimalik info rendilepingute kohta). Soovi korral võite lisada ka lisainfot maa kasutuse ja hoonete kohta.</p>
                <p><strong>Esmane hinnapakkumine</strong> – Teeme kiire turuanalüüsi ja saadame teile esmase hinnapakkumise sageli juba mõne päeva jooksul. See annab teile esmase ülevaate kinnistu võimalikust väärtusest.</p>
                <p><strong>Kohapealne hindamine</strong> – Kui olete huvitatud, tuleme kohapeale ja hindame põllumaa seisukorda täpsemalt. Uurime pinnase kvaliteeti (boniteeti), ligipääsetavust, olemasolevaid teid ja hooneid ning vajadusel ka juriidilisi piiranguid (nt looduskaitse või servituudid).</p>
                <p><strong>Lõplik hinnapakkumine</strong> – Pärast põhjalikku hindamist koostame lõpliku pakkumise, arvestades kõiki tegureid – maa kvaliteeti, ligipääsu, pindala ja turuhindu. Selgitame, kuidas hind kujunes, et te teaksite täpselt, mille eest maksame.</p>
                <p><strong>Lepingu ettevalmistamine ja notariaalne tehing</strong> – Kui olete pakkumisega rahul, valmistame ette müügilepingu ja tutvustame selle tingimusi. Tehing toimub alati notari juures, kus kontrollitakse dokumendid ja kinnitatakse tehingu seaduslikkus. Raha liigub notari deposiitkonto kaudu otse teie pangakontole – see on turvaline ja riskivaba.</p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Mis mõjutab põllumaa hinda</h3>
                <p>
                  Põllumaa väärtust määravad mitmed tegurid. Kui mõistate neid, on lihtsam hinnata, kas teile pakutav hind on õiglane ja millest see kujuneb.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Põllumaa suurus</strong> – suuremad kinnistud on atraktiivsemad, sest neid on lihtsam majandada ja põllutöid teha. Väiksemate kinnistute hektari hind võib olla veidi madalam, kui pindala ei võimalda tõhusat harimist.</li>
                  <li><strong>Asukoht</strong> – maa lähedus suurematele teedele ja keskustele mõjutab hinda. Piirkonnad, kus põllumajandus on aktiivne ja nõudlus maa järele suur, võivad pakkuda kõrgemaid hindu.</li>
                  <li><strong>Ligipääsetavus ja teed</strong> – hea juurdepääs vähendab kulusid ja teeb maa ostjale väärtuslikumaks. Kui teid tuleb rajada või parandada, arvestatakse see hinna kujunemisel.</li>
                  <li><strong>Pinnase viljakus (boniteet)</strong> – kõrgema boniteediga maa toodab paremat saaki ja on seetõttu väärtuslikum. Kui maa on madala boniteediga või vajab kuivendamist, võib see hinda vähendada.</li>
                  <li><strong>Hooned ja taristu</strong> – talud, laudad, kuurid või muu taristu võivad suurendada kinnistu väärtust, eriti kui need on heas seisukorras ja kasutatavad.</li>
                  <li><strong>Kehtivad rendilepingud</strong> – rendileping ei ole takistus, kuid selle tingimused võivad mõjutada hinda. Kui rent on soodne ja pikaajaline, võib see ostjale atraktiivne olla; kui tingimused on keerukad, võib see hinda vähendada.</li>
                </ul>
                <p>
                  Näide: kui teie põllumaa on suur, viljakas ja asub hea teedevõrgustikuga piirkonnas, on selle väärtus märgatavalt kõrgem kui väikesel, raskesti ligipääsetaval ja madala viljakusega maal.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks tasub müüa just praegu</h3>
                <p>
                  Viimastel aastatel on põllumaa hinnad Eestis olnud tõusutrendis, eriti hea ligipääsuga ja viljaka pinnasega piirkondades. Kui kaalute müüki, võib praegune aeg olla soodne, sest turul on tugev nõudlus ja hinnad on stabiilselt kõrged.
                </p>
                <p>
                  Lisaks on meie pakkumine läbipaistev ja turvaline: maksame kuni 8000 € hektari eest, aitame kogu asjaajamisega ja tagame kiire tehingu. Te ei pea muretsema hüpoteegiga seotud probleemide, rendilepingute ega keeruliste juriidiliste detailide pärast – meie hoolitseme kõige eest.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Ostame teie põllumaa!</h3>
                <p>
                  Põllumaa ost on üks meie põhitegevustest lisaks metsade majandamisele ning teame, kuidas muuta müügiprotsess maaomaniku jaoks mugavaks, kiireks ja kasumlikuks. Maksame alati konkurentsivõimelist hinda, mis võib 2025/26 aastal kerkida isegi kuni 8000 € hektari kohta, aitame dokumentide ja notaritoimingutega ning tagame, et tehing on turvaline ja läbipaistev.
                </p>
                <p>
                  Kui teil on põllumaa, mida soovite müüa, saatke meile hinnapäring ja saage teada, kui palju teie maa tegelikult väärt on. Meie kogemus ja professionaalne lähenemine tagavad, et teie põllumaa müük toimub ilma stressi ja peidetud kuludeta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


