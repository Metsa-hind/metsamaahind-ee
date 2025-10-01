import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { absUrl } from "@/lib/routes";
import Link from "next/link";

export default function SeoRaieoiguseMuukSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Vajate nõu raieõiguse müügil? Võtke ühendust – vastame kiiresti.</p>
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
                Raieõiguse müük Ast - Zni
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Kui teie mets on raieküps ja soovite sellest tulu teenida, kuid ei taha ise raiet korraldada, tehnikat rentida ega keerulise paberimajandusega tegeleda, on raieõiguse müük parim lahendus. See tähendab, et annate lepinguga õiguse meie ettevõttele või muule ostjale teie kinnistul metsaraie korraldada, samal ajal jääte endiselt metsamaa omanikuks. Nii saate oma puistu majandusliku väärtuse kiiresti rahaks muuta, ilma et peaksite tegelema raietööde korraldamise või metsateatise vormistamisega.
                </p>
                <p>
                  Praktiline näide: kui teil on metsaeraldis, kus puud on majanduslikult küpsed, aga te ei soovi hakata otsima raiemeeskondi ega vastutama tööde kvaliteedi eest, saate raieõiguse lihtsalt meile müüa. Meie korraldame raietööd, toome välja metsamaterjali ja maksame teile kokkulepitud hinna.
                </p>
                <p>
                  Teine näide: kui teie kinnistul on keeruline ligipääs või peate tegema kooskõlastusi Keskkonnaametiga, siis võtame need kohustused enda kanda. Teie ei pea tegelema seadusandlust puudutavate nüanssidega ega otsima tööjõudu – me lahendame kõik vajalikud sammud teie eest.
                </p>
                <p>
                  Raieõiguse müük annab teile võimaluse realiseerida metsamaa väärtus kohe, säilitades samas omandiõiguse ja võimaluse tulevikus uut metsa kasvatada või kinnistut edasi arendada.
                </p>
                <p>
                  Kui teil on mets, mis on saanud või saamas raieküpseks, võite kaaluda raieõiguse müüki. See on lihtne ja mugav viis oma metsast tulu teenida, ilma et peaksite ise raiet korraldama, tehnikat rentima või keeruliste juriidiliste protsessidega tegelema.
                </p>
                <p>
                  Meie ettevõte ostab raieõigust metsakinnistutele üle kogu Eesti ning pakub metsaomanikele läbipaistvat ja professionaalset teenust. Oleme metsanduses tegutsenud üle 15 aasta, tunneme turgu ja seadusandlust ning maksame alati turu kõrgeimat hinda.
                </p>
                <p>
                  Müü oma raieõigus meile – tagame ausa hinnastamise, kiire protsessi ja korrektse raietöö. Meie eesmärk on, et teie jaoks oleks kogu raieõiguse müümise protsess murevaba ja kasumlik.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Mis on raieõiguse müük?</h3>
                <p>
                  Raieõiguse müük tähendab, et metsaomanik annab lepinguga õiguse raiuda oma metsast kokkulepitud mahus puitu. Metsa omanikuks jääte endiselt teie ehk raieõiguse müüja, kuid raietööd ja metsamaterjali väljavedu korraldab raieõiguse ostja ehk meie. Selline lahendus on hea valik, kui soovite metsa majanduslikku potentsiaali kasutada, kuid ei taha tegeleda raiete planeerimise, metsateatise vormistamise või logistiliste küsimustega.
                </p>
                <p>
                  Oluline on mõista, et raieõiguse müümine erineb kinnistu müügist – te ei müü maad, vaid ainult õiguse puitu raiuda. See tähendab, et pärast raiet jääte endiselt kinnistu omanikuks ja saate tulevikus metsa uuesti majandada või uue metsa kasvatada.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks valida meid oma raieõiguse müügi partneriks?</h3>
                <p>
                  Raieõiguse müümine on metsaomaniku jaoks suur otsus. Meie eesmärk on muuta see otsus lihtsaks, turvaliseks ja kasumlikuks. Meiega saate kindlustunde, et kogu protsess on professionaalne ja läbipaistev ning et saate oma kinnistu eest parima võimaliku hinna.
                </p>
                <p>
                  Me ei paku lihtsalt hinda – pakume terviklikku lahendust alates metsamaa hindamisest kuni raietööde kvaliteetse lõpetamiseni. Tänu meie pikaajalisele kogemusele teame, kuidas vältida ootamatuid kulusid, kuidas korraldada töö nii, et maapind jääks heasse seisukorda ja kuidas hoida teid kogu protsessi vältel kursis.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Meie tugevused, mis teevad raieõiguse müügi meiega lihtsaks:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kõrgeim ja aus turuhind</strong> – analüüsime puistut, selle ligipääsetavust, puuliike ja puiduturu olukorda, et pakkuda õiglast ja konkurentsivõimelist hinda.</li>
                  <li><strong>Pikaajaline kogemus</strong> – üle 15 aasta metsanduses annab meile oskuse hinnata kinnistut realistlikult ja korraldada tööd seaduslikult ja säästvalt.</li>
                  <li><strong>Täisteenus algusest lõpuni</strong> – aitame dokumentidega, vormistame metsateatise, planeerime ja viime läbi raietööd. Teie jaoks on kogu protsess lihtne ja murevaba.</li>
                  <li><strong>Kvaliteetne raietöö ja looduse hoidmine</strong> – viime raietööd läbi kaasaegse tehnikaga ning jätame metsamaa korras ja valmis uue metsa kasvuks.</li>
                  <li><strong>Selgus igas sammus</strong> – selgitame, kuidas hind kujuneb, millised on tähtajad ja mida igas etapis oodata.</li>
                </ul>
                <p>
                  Meiega töötades ei pea te muretsema ootamatute kulude, keeruliste paberimajanduse protsesside või raietööde kvaliteedi pärast – hoolitseme kõige eest ja hoiame teid kogu protsessi jooksul kursis.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Raieõiguse müük samm-sammult</h3>
                <p>
                  Oleme loonud selge ja arusaadava protsessi, et metsamaa omanik saaks oma raieõiguse müüa turvaliselt, mugavalt ja parima hinnaga. Meiega tegutsedes teate täpselt, mis igas etapis juhtub, ning võite kindel olla, et kõik toimub professionaalselt ja keskkonda säästvalt.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Päringu esitamine</h4>
                <p>
                  Saadate meile oma kinnistu andmed või katastritunnuse ning võimalusel metsakava. Kui metsakava puudub või on aegunud, aitame selle koostamisel või uuendamisel, et hinnata teie puistu seisundit täpselt ja seaduslikult.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Metsa ja turu hindamine</h4>
                <p>
                  Uurime puistu koosseisu, raiemahu suurust, puiduliike ja nende kvaliteeti. Kontrollime ligipääsu- ja metsateede seisukorda ning vajadusel käime metsamaal kohapeal, et teha mõõtmised ja hinnata tööde teostatavust. Võrdleme tulemusi puiduturu hetkehindade ja majandusolukorraga, et pakkuda realistlik ja aus hind.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Hinnapakkumise tegemine</h4>
                <p>
                  Koostame selge hinnapakkumise ja selgitame, kuidas see kujuneb. Näitame, kuidas arvestame raiemahu, puiduliikide, väljaveokulude ja võimalike lisakuludega (näiteks teede rajamine või pinnase tugevdamine). Meie eesmärk on, et mõistaksite pakkumist ja teaksite, miks just see hind on õige.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Lepingu sõlmimine</h4>
                <p>
                  Kui pakkumine sobib, sõlmime raieõiguse müügilepingu. Tegemist on lihtsa võlaõigusliku lepinguga, mis ei vaja notariaalset kinnitamist. Vajadusel vormistame ka metsateatise ning kõik vajalikud kooskõlastused Keskkonnaametiga.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Raietööde läbiviimine professionaalselt ja keskkonda säästvalt</h4>
                <p>
                  Meie kogenud raiemeeskond kasutab kaasaegset tehnikat, töötab vastutustundlikult ning järgib säästva metsamajandamise põhimõtteid. Hoiame maapinda võimalikult kahjustamata, korrastame raielangi ning tagame, et ligipääsuteed jääksid kasutuskõlblikuks. Kui vajalik, rajame ajutisi teid või taastame kahjustatud lõigud, et teie metsamaa jääks heasse seisukorda.
                </p>
                <h4 className="mt-4 text-base font-semibold text-emerald-900">Arveldamine ja protsessi lõpetamine</h4>
                <p>
                  Maksame kokkulepitud hinna vastavalt lepingule. Fikseeritud hinnaga müügi korral saate raha ette või tööde käigus osade kaupa. Kui müük toimub väljatuleku alusel, maksame pärast raiet vastavalt tegelikule raiemahule ja puiduturu hinnale. Nii on teil selge ülevaade kogu protsessist ja kindlustunne, et tehing on õiglane ja läbipaistev.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Raieõiguse müügi erinevad võimalused</h3>
                <p>
                  Raieõigust saab müüa peamiselt kahel viisil:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Fikseeritud hinnaga raieõiguse müük</strong> – Lepime hinna kokku juba lepingu sõlmimisel. See on riskivaba lahendus, sest teate täpselt, kui palju raha saate. Turuhinna või raiemahu muutused teid ei mõjuta.</li>
                  <li><strong>Väljatuleku alusel raieõiguse müük</strong> – Lõplik hind selgub pärast raietööde lõppu, arvestades tegelikku raiemahtu ja puiduhindu müügi hetkel. See võib anda suurema tulu, kui hinnad tõusevad või raiemaht on prognoositust suurem, kuid sisaldab ka riske, kui hinnad langevad või maht osutub väiksemaks.</li>
                </ul>
                <p>
                  Meie soovitus enamikele metsaomanikele on fikseeritud hinnaga müük, sest see annab kindlustunde ja võimaldab tulu täpselt planeerida. Kuid kui olete valmis tururiskidega arvestama, võib väljatuleku alusel müük anda potentsiaalselt kõrgema tulu.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Mis mõjutab raieõiguse hinda</h3>
                <p>
                  Raieõiguse hind kujuneb mitmest tegurist, mis kõik mõjutavad lõplikku pakkumist ja seda, kui palju metsaomanik oma kinnistu eest tulu teenib. Hinna arvutamisel ei vaadata ainult raiemahu suurust, vaid ka kvaliteeti, väljaveo keerukust ja turuolukorda. Hea on mõista iga tegurit eraldi, et saaksite pakkumisest selgelt aru ja oskaksite hinnata, kas see on õiglane.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Puuliikide koosseis ja sortiment</strong> – Kõige väärtuslikum on enamasti okaspalk (kuusk ja mänd), mille hind on stabiilselt kõrgem kui paberipuidul või energiapuidul. Kui puistus on palju kvaliteetset palki, on raieõiguse hind märksa kõrgem. Näiteks võib kuusepalk tuua mitu korda rohkem tulu kui küttepuuks sobiv lehtpuit.
                  </li>
                  <li><strong>Raiemahu suurus ja ühtlus</strong> – Suure ühtlase puidukogusega lank on ostjale soodsam töödelda ja transpordikulud jaotuvad suuremale mahule. Väikesed killustunud eraldised võivad vähendada hinda, sest iga väikese ala ülestöötamine on kallim.
                  </li>
                  <li><strong>Ligipääs ja metsatee seisukord</strong> – Kui metsamaale viivad korralikud teed ja väljavedu on lihtne, on raietööde hind madalam ning see võimaldab maksta kõrgemat hinda. Kui aga teed on kehvad või puuduvad ja tuleb rajada ajutisi teid, arvestatakse see kuludesse ning pakkumine võib olla madalam.
                  </li>
                  <li><strong>Maa reljeef ja niiskus</strong> – Siledal ja kuival pinnasel saab tööd teha kiiresti ja odavamalt. Kui tegemist on märgade aladega, kus vajatakse pinnasekaitseid või ajutisi rajatisi, suureneb raietööde kulu ja see mõjutab lõpphinda.
                  </li>
                  <li><strong>Puiduturu hetkeolukord</strong> – Kui saematerjali või energiapuidu hinnad on kõrged, saavad metsaomanikud kõrgema pakkumise. Turul on hinnad kõikuvad ning meie hindamisel arvestame alati viimaseid turuandmeid ja prognoose.
                  </li>
                  <li><strong>Looduskaitselised piirangud ja raiemeetod</strong> – Kui osad alad on kaitse all või tuleb kasutada keerulisemaid raiemeetodeid (näiteks harvendusraiet lageraie asemel), võib see vähendada raietööde mahtu ja tulusust.
                  </li>
                </ul>
                <p>
                  Lisaks tuleb arvestada kaasnevate kuludega, mis ostjal tuleb tööde käigus katta. Nende hulka kuuluvad metsateede rajamine või parendamine, vajadusel pinnase tugevdamine ja väljaveoteede korrastamine. Kui näiteks tuleb rajada uus juurdepääsutee või kasutada spetsiaalset tehnikat pehme pinnase tõttu, kajastub see otseselt lõplikus pakkumises.
                </p>
                <p>
                  Samuti võivad hinda mõjutada tulevased kohustused, nagu metsauuendus pärast raiet. Kuigi raietööde korraldamine ja väljavedu on ostja kanda, jääb metsamaa uuendamise kohustus sageli omanikule. Kui me teame, et pärast raiet tuleb langile teha ulatuslik metsauuendus või kuivenduskraavide korrastus, arvestatakse see ka üldises majanduslikus pildis.
                </p>
                <p>
                  Näide: kuivale ja hästi ligipääsetavale kuusikule, kus on ühtlane palkide varu ja heas korras metsatee, tehakse tavaliselt väga hea pakkumine. Samas kui tegemist on väikeste lehtpuualadega, kuhu viib kehv tee ja kus vaja teha eritehnikaga töid, võib pakkumine olla madalam, sest töö on keerukam ja kulukam.
                </p>
                <p>
                  Sellest teadlik olles saab metsaomanik paremini hinnata, kas talle pakutud hind on realistlik ja õiglane, ning mõista, miks eri kinnistute hinnad võivad väga palju erineda.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Teenused pärast raiet</h3>
                <p>
                  Meie teenus ei piirdu ainult raieõiguse ostmise ja raietööde läbiviimisega. Soovi korral pakume ka:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Metsauuendus ja istutamine</strong> – aitame valida sobivad puuliigid ja korraldada istutustööd.</li>
                  <li><strong>Pinnase ettevalmistus</strong> – vajadusel teeme maapinna ettevalmistuse uue metsa kasvuks.</li>
                  <li><strong>Noorendike hooldus</strong> – juhendame ja aitame noorte metsade hooldamisel.</li>
                  <li><strong>Toetuste nõustamine</strong> – anname infot metsauuenduse toetuste kohta ja aitame taotlemisel.</li>
                </ul>
                <p>
                  Need lisateenused tagavad, et teie metsamaa säilitab oma väärtuse ja uue metsa kasv saab tugeva alguse.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks müüa raieõigus meile</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pakume ausat ja turu kõrgeimat hinda.</li>
                  <li>Meil on pikk kogemus ja professionaalne meeskond.</li>
                  <li>Hoolitseme kogu protsessi eest, alates dokumentidest kuni raietööde lõpuni.</li>
                  <li>Teeme raiet säästvalt ja jätame maa heasse seisukorda.</li>
                  <li>Selgitame kõik sammud arusaadavas keeles ja hoiame teid kursis.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Vali raieõiguse müügiks usaldusväärne partner</h3>
                <p>
                  Raieõiguse müük on metsaomanikule lihtne viis saada oma metsast õiglast tulu. Meie pakume läbipaistvat ja professionaalset teenust: hindame teie metsa, teeme parima hinnapakkumise, korraldame kogu protsessi ja tagame kvaliteetsed raietööd. Te ei pea muretsema dokumentide, logistika ega tehnika pärast – meie hoolitseme kõige eest.
                </p>
                <p>
                  Kui soovite raieõiguse müümist alustada või otsite parimat pakkumist, võtke meiega ühendust. Meie kogemus ja teadmised tagavad, et saate oma metsa eest ausa tasu ning kogu protsess on sujuv, turvaline ja mugav.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


