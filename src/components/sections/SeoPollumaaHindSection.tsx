import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function SeoPollumaaHindSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Küsi nõu põllumaa hinnastamise või müügi osas – vastame kiiresti.</p>
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
                Põllumaa hind
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Põllumaa hind on üks olulisemaid tegureid, kui kaalute oma haritava maa müüki või soovite mõista selle tegelikku väärtust. Õigesti määratud hind aitab teha teadlikke otsuseid, planeerida tulevasi investeeringuid või leida sobiv ostja. Põllumaa väärtuse hindamine ei ole ainult hektarite arvu korrutamine turu keskmise hinnaga – see on terviklik analüüs, kus võetakse arvesse mitmeid majanduslikke, agronoomilisi ja juriidilisi tegureid.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Peamised tegurid, mis mõjutavad põllumaa hinda</h3>
                <p>
                  Põllumaa hind kujuneb mitme omavahel seotud asjaolu koosmõjul. Allpool selgitame kõige olulisemaid tegureid.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">1. Kinnistu suurus ja kuju</h4>
                <p>
                  Suuremad põllumaad on tavaliselt majandamiseks soodsamad, sest tööde teostamine on efektiivsem ja transpordikulud hektari kohta väiksemad. Väga killustatud või keeruka kujuga kinnistud võivad aga olla vähem atraktiivsed, kuna raskendavad põllutööde tegemist ja teede rajamist.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">2. Asukoht ja ligipääsetavus</h4>
                <p>
                  Põllumaa väärtus sõltub suuresti piirkonnast. Näiteks võib haritav maa olla kõrgema hinnaga suuremate linnade või tööstuspiirkondade lähedal, kus nõudlus on suurem ja logistika lihtsam. Hea ligipääs avalikele teedele ning tugevad põlluteed tõstavad samuti hinda, sest vähendavad masinate ja saagi transportimise kulusid.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">3. Mullaviljakus ehk boniteet</h4>
                <p>
                  Viljakas muld on üks tähtsamaid hinnamõjutajaid. Kõrge boniteediga maad võimaldavad suuremat saagikust ja seega ka paremat majanduslikku tulu. Kui mullaviljakus on madal, võib hektari hind olla oluliselt soodsam, isegi kui kinnistu on suur.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">4. Varasem kasutus ja hooldus</h4>
                <p>
                  Hästi hooldatud põllud, kus on regulaarselt kasvatatud kultuure ja hoitud umbrohu levikut kontrolli all, on väärtuslikumad kui pikalt hooldamata jäänud või võsastunud alad. Samuti võivad väärtust mõjutada varem kasvatatud kultuurid – näiteks intensiivne teraviljakasvatus võib pinnast ammendada, samas kui heintaimedega külvikord võib mullaviljakust säilitada.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">5. Maaparandussüsteemid ja kuivendus</h4>
                <p>
                  Toimiv drenaaž ja korras kuivenduskraavid suurendavad põllumaa tootlikkust ja atraktiivsust. Kui kuivendussüsteemid on amortiseerunud või puuduvad, võib ostja arvestada taastamistööde kulud ja pakkuda madalamat hinda.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">6. Kehtivad rendilepingud ja juriidilised piirangud</h4>
                <p>
                  Kui kinnistu on renditud, võib see olla nii eelis kui ka puudus. Stabiilne renditulu võib hinda tõsta, kuid väga pika ja omaniku jaoks ebasoodsa lepinguga võib väärtus väheneda. Samuti mõjutavad hinda võimalikud hüpoteegid või muud juriidilised koormised.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">7. Lisahooned või talukoha olemasolu</h4>
                <p>
                  Kui kinnistul asub elamu, tootmishooned või muud rajatised, võib see suurendada kinnistu väärtust. Samas vajavad hooned hooldust ja võivad nõuda lisainvesteeringuid, mida ostja hinnas arvestab.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">7. Põllumaa piirnemine metsakinnistuga</h4>
                <p>
                  Hinda võib mõjutada ka metsakinnistuga piirnevus või puistu kasvamine põllumaa äärealadel või eraldistel. Olenevalt kinnistu omapärast on iga selline juhtum individuaalne.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas põllumaa hind määratakse?</h3>
                <p>
                  Põllumaa hind kujuneb tavaliselt olemasolevate andmete kogumisega: katastritunnus, pindala, boniteedi näitajad, varasem kasutus ja võimalikud piirangud. Seejärel tehakse kohapealne ülevaatus, kus hinnatakse maa seisukorda, ligipääsu ja maaparandussüsteeme. Analüüsitakse turuandmeid ning võrreldakse sarnaste kinnistute tehinguhindu samas piirkonnas. Lõpuks koostab hindaja hinnangulise väärtuse hektari kohta ja kogu kinnistu kohta.
                </p>
                <p>
                  Oluline on mõista, et hinnanguline väärtus ja tegelik põllumaa hind, millega kinnistu müüakse võivad erineda – ostja valmisolek sõltub turu nõudlusest ja konkreetsetest läbirääkimistest.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Turutrendid ja hinnad Eestis</h3>
                <p>
                  Viimastel aastatel on põllumaa hinnad üldjoontes kasvanud. Viljakamate piirkondade, näiteks Harju, Tartu ja Viljandi maakonna haritava maa hinnad on sageli kõrgemad kui äärealade, näiteks Saare või Hiiumaa omad. Hinnad võivad kõikuda mõnest tuhandest eurost hektari kohta kuni 8000 euro või enamani hektari eest, kui kinnistu on suur, viljakas ja heas asukohas. Samas võib väiksema tootlikkusega maa olla oluliselt odavam.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">PRIA toetused ja nende mõju</h3>
                <p>
                  Põllumajandusettevõtjatele ja maaomanikele on kättesaadavad erinevad toetused, mis võivad suurendada maa atraktiivsust ja väärtust. Näiteks PRIA toetused võivad muuta põllumaa majandamise tulusamaks, mis omakorda mõjutab ka turuhinda. Kui kinnistu saab regulaarselt toetusi ja on korrektselt hooldatud, võib see olla ostjate jaoks väärtuslikum.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Soovitused põllumaa müüjatele</h3>
                <p>
                  Kui kaalute põllumaa müüki, tasub enne tehingut läbi mõelda järgmised sammud:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Koguge dokumentatsioon:</strong> katastritunnus, rendilepingud, PRIA toetuste ajalugu ja maaparanduse info.</li>
                  <li><strong>Hinnake ligipääsu ja hooldust:</strong> korras teed ja kuivendussüsteemid suurendavad väärtust.</li>
                  <li><strong>Küsige mitmeid pakkumisi:</strong> võrrelge erinevate ostjate hinnapakkumisi, et saada õiglane turuhind.</li>
                  <li><strong>Kaaluge ajastust:</strong> põllumajandusturg ja saagihinnad mõjutavad nõudlust ning hindu.</li>
                  <li><strong>Kaaluge professionaalset hindamist:</strong> kogenud hindaja annab realistliku pildi teie kinnistu väärtusest.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kuidas müügiprotsess välja näeb</h3>
                <p>
                  Kui olete otsustanud oma põllumaa müüa, on protsess tavaliselt järgmine:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Hinnapäringu esitamine:</strong> edastate kinnistu andmed ja eripärad ostjale või hindajale.</li>
                  <li><strong>Esmane hinnang:</strong> saate kiire vastuse hinnavahemiku kohta.</li>
                  <li><strong>Kohapealne hindamine:</strong> vajadusel käiakse kinnistul, hinnatakse seisukorda ja ligipääsu.</li>
                  <li><strong>Lõplik pakkumine ja läbirääkimised:</strong> määratakse täpne hind ja lepitakse kokku tingimused.</li>
                  <li><strong>Notariaalne tehing:</strong> sõlmitakse ametlik leping ning raha kantakse turvaliselt notarideposiidi kaudu.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Kokkuvõte</h3>
                <p>
                  Põllumaa hind sõltub paljudest teguritest – alates pinnase viljakusest ja asukohast kuni maaparandussüsteemide seisukorra ja rendilepinguteni. Õiglane hindamine aitab vältida alahindamist või ebarealistlikke ootusi. Kui soovite oma kinnistu väärtust teada või kaalute müüki, tasub küsida professionaalset hinnangut ja võrrelda erinevaid pakkumisi. Hästi läbimõeldud müügiprotsess aitab saada teie põllumaa eest turu parima võimaliku hinna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


