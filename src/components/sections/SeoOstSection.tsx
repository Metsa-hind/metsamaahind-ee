import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { absUrl } from "@/lib/routes";
import Link from "next/link";

export default function SeoOstSection() {
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

          {/* Content area in a big styled card */}
          <div className="rounded-2xl border border-emerald-100 bg-white/85 shadow-sm ring-1 ring-emerald-900/5 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 opacity-70" />
            <div className="p-6 md:p-8">
              <h2 className="font-adcreative text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-emerald-950">
                Metsa ost – professionaalne ja usaldusväärne partner metsamaa müügil
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Kui otsid võimalust oma metsamaa või metsakinnistu müügiks, on meie eesmärk pakkuda sulle lihtsat, kiiret ja ausat protsessi. Me ostame metsamaad igas suuruses ja asukohas üle kogu Eesti – alates väiksematest metsatükkidest kuni suurte majandusmetsadeni. Meile pakuvad huvi ka hüpoteegiga koormatud kinnistud, raiesmikud ning maad, mis ootavad uut metsa istutamist. Meie jaoks ei ole oluline, kas kinnistu on praegu majandusmets, lageraielank või noorendik – hindame ja ostame kõiki tüüpi kinnistuid.
                </p>
                <p>
                  Meil on üle 15 aasta kogemust metsanduses ja kinnistute haldamises. Me ei otsi lühiajalist kasu, vaid investeerime metsamaasse pika perspektiiviga. Meie tegevus hõlmab kogu metsamajanduslikku ringi – alustame metsauuendusest ja istutamisest, hooldame ja majandame metsa kestlikult ning viime lõpuks majanduslikult küpsed metsad turule. Tänu sellele saame pakkuda müüjale kindlustunnet, et tema metsa eest makstakse õiglane ja konkurentsivõimeline hind.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks valida meid metsamaa müügiks</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Kõrgeim turu hind</strong> – Maksame metsa eest alati võimalikult kõrget turuväärtust, arvestades hetke puiduturu hindu ja kinnistu majandamisvõimalusi. Meie eesmärk on pakkuda müüjale ausat ja läbipaistvat tehingut.
                  </li>
                  <li>
                    <strong>Kiire ja professionaalne hindamine</strong> – Hindame kinnistuid selgelt ja põhjendatult. Kui soovid rohkem teada, kuidas metsakinnistute väärtust arvutame, saad lugeda lähemalt <Link href={absUrl("/metsa-hind")} className="text-emerald-700 underline underline-offset-4 hover:text-emerald-800">metsa hindamise</Link> kohta.
                  </li>
                  <li>
                    <strong>Ostame igas seisukorras kinnistuid</strong> – Meie jaoks ei ole probleem, kui kinnistu on koormatud hüpoteegiga, vajab uut istutust või sisaldab juba raiutud alasid.
                  </li>
                  <li>
                    <strong>Pikaajaline kogemus ja usaldusväärsus</strong> – Meie meeskonnal on üle 15 aasta kogemust metsanduse ja kinnisvara valdkonnas. Me teame täpselt, kuidas metsa majandada ja väärtustada.
                  </li>
                  <li>
                    <strong>Isiklik ja paindlik lähenemine</strong> – Me ei paku ühte universaalset lahendust, vaid arvestame iga müüja olukorda ning vajadusi eraldi.
                  </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsa ostu protsess – samm‑sammuline ülevaade</h3>
                <p>
                  Meie eesmärk on muuta müügiprotsess võimalikult mugavaks ja arusaadavaks. Siin on ülevaade, kuidas metsa ost meiega koostöös välja näeb:
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Päringu esitamine</h4>
                <p>
                  Kõik algab sellest, et võtad meiega ühendust. Saad esitada päringu kas meie kodulehe vormi kaudu või otse meiega ühendust võttes. Kui sul on olemas metsakava, lisa see kohe päringule – see aitab meil hinnata kinnistut kiiremini ja täpsemalt. Kui metsakava puudub või on aegunud, saame selle tellida või teostada vajaliku hindamise ise.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Kinnistu hindamine</h4>
                <p>
                  Kui oleme saanud vajalikud andmed, hindame sinu kinnistu väärtust. Esmalt analüüsime olemasolevat metsakava ja turuolukorda. Vajadusel teeme kohapealse ülevaatuse, kus mõõdame proovitükke, hindame metsa seisundit, ligipääsetavust ja majandamisvõimalusi. Hindamine on alati läbipaistev – selgitame, kuidas hinnang kujunes ja milliseid tegureid arvestasime.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Hinnapakkumise esitamine</h4>
                <p>
                  Pärast hindamist teeme sulle konkreetse hinnapakkumise. Meie põhimõte on pakkuda õiglast ja võimalikult kõrget turuhinda, arvestades hetke puiduturu hindu ja kinnistu eripära. Kui sul on mitmeid pakkumisi, saame koos arutada, mis teeb meie pakkumise konkurentsivõimeliseks.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Lepingute ettevalmistamine ja tutvustamine</h4>
                <p>
                  Kui hinnapakkumine sobib, valmistame ette vajalikud lepingud. Enne allkirjastamist tutvustame dokumente põhjalikult, et mõlemad pooled mõistaksid kokkuleppe sisu ning kõik tingimused oleksid selged. Vajadusel selgitame juriidilisi aspekte lihtsas keeles, et müüja tunneks end turvaliselt.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Notariaalne tehing</h4>
                <p>
                  Lõplik tehing viiakse läbi notaribüroos. Notar kontrollib kinnistu omandiõiguse ja kõik juriidilised andmed ning tagab, et müük vastab seadustele. Pärast allkirjastamist kantakse uus omanik kinnistusraamatusse. Kui kinnistul on hüpoteek või muid koormisi, aitame need tehingu käigus lahendada või eemaldada.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Täiendavad eelised meiega koostöös</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Raha kiiresti kätte</strong> – Kui soovid kiiret tehingut, saame kokkulepitud hinna maksta välja kiiresti pärast notariaalset kinnitamist.</li>
                  <li><strong>Abi dokumentide ja formaalsustega</strong> – Aitame vajalike dokumentide hankimisel ja juhendame kogu protsessi vältel, et müüjal oleks võimalikult vähe muret.</li>
                  <li><strong>Professionaalne nõustamine</strong> – Kui oled kahtlev, kas müüa praegu või oodata paremat turuhetke, saame jagada infot hetke turuseisu ja hindade trendide kohta.</li>
                  <li><strong>Paindlik lähenemine</strong> – Kui kinnistul on eritingimused või keeruline olukord (näiteks kaasomanikud või jagamata kinnistu), leiame koos lahenduse.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Läbipaistev ja kindel koostöö</h3>
                <p>
                  Metsamaa müük võib tunduda keeruline, kuid meie eesmärk on muuta see müüjale lihtsaks ja arusaadavaks. Selgitame iga sammu ja anname põhjaliku ülevaate sellest, kuidas hind kujunes. Tänu meie pikaajalisele kogemusele ja laiale metsandusalasele teadmisele võid olla kindel, et saad oma kinnistu eest maksimaalse väärtuse.
                </p>
                <p>
                  Lisaks ei tähenda müük meie jaoks ainult tehingut – näeme metsandust kui pikaajalist vastutust. Hoolitseme selle eest, et mets, mille omandame, majandatakse jätkusuutlikult ja loodussõbralikult. Istutame uusi puid, hooldame noorendikke ja tagame, et mets jääb tulevikuski väärtuslikuks.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kes peaks metsa ostu puhul meie poole pöörduma</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Soovid müüa oma metsakinnistut kiirelt ja turu parima hinnaga.</li>
                  <li>Sul on kinnistu, mis vajab hooldust või uuendust, ning sa ei soovi ise sellega tegeleda.</li>
                  <li>Sinu kinnistul on hüpoteek või muud koormised, kuid soovid selle müügist hoolimata tehingu lõpuni viia.</li>
                  <li>Oled pärinud või saanud kinkena metsamaa, mille majandamisega ei soovi ise tegeleda.</li>
                  <li>Soovid vältida keerulisi protsesse ja eelistad, et professionaalne ostja juhendaks kogu müügiteekonda.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsa ost kiirelt ja murevabalt</h3>
                <p>
                  Metsa ostmine on meie põhitegevus – me oleme usaldusväärne partner, kes ostab metsamaad igas suuruses ja seisukorras üle kogu Eesti. Meil on tugev kogemus metsanduses, pakume läbipaistvat hindamist ja maksame alati kõrgeimat turu hinda. Kui soovid oma metsamaa müüki alustada, võta meiega ühendust ja alusta protsessi juba täna. Loe lisaks metsa väärtuse määramisest <Link href={absUrl("/metsa-hind")} className="text-emerald-700 underline underline-offset-4 hover:text-emerald-800">metsa hindamise</Link> lehelt ja saa kindlustunne, et sinu kinnistu saab õiglaselt hinnatud ja müüdud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


