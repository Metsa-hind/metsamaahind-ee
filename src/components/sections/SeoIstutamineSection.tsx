import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function SeoIstutamineSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Küsi nõu metsa istutamise, puuliikide valiku või hoolduse osas.</p>
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
                Metsa istutamine – ülevaade metsa istutamisest Eesti tingimustes
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Metsa istutamine on üks olulisemaid metsamajanduse etappe, mille eesmärk on tagada uue metsapõlvkonna kasv ja säilitada metsamaa tootlikkus. Eestis on metsa istutamine traditsiooniliselt kevadine tegevus, kuid sobivaid aknaid leidub ka sügisel, kui ilmastikuolud seda võimaldavad. Istutamise edukus sõltub nii sobivate puuliikide valikust, maapinna ettevalmistusest, kvaliteetsest istutusmaterjalist kui ka järelhooldusest.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks metsa istutamine on oluline</h3>
                <p>
                  <strong>Metsamaa tootlikkuse säilitamine:</strong> pärast lageraiet või looduslikke kahjustusi (torm, põleng, üraskikahjustused) tuleb tagada uue metsapõlvkonna kasv. Kui uuenemine jääb juhuse hooleks, võib mets muutuda hõredaks, aeglase kasvuga või kaotada majandusliku väärtuse.
                </p>
                <p>
                  <strong>Ökosüsteemi taastamine:</strong> istutatud metsad pakuvad elupaiku, hoiavad mullastikku ja toetavad veerežiimi. Liigilise koosseisu läbimõeldud valik aitab vältida monokultuure ning suurendab metsade vastupidavust haigustele ja kliimamuutustele.
                </p>
                <p>
                  <strong>Majanduslik väärtus:</strong> õigel ajal ja õigete liikidega istutatud mets võib anda tulevikus kõrgemat tulu, sest kvaliteetse palgipuidu osakaal suureneb.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Milliseid puuliike Eestis istutatakse</h3>
                <p>
                  Puuliigi valik sõltub kasvukoha tingimustest, mullastikust, niiskusest ja piirkonna kliimast. Levinumad liigid on:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kuusk:</strong> eelistab viljakat ja parasniisket mulda. Sobib hästi varjutaluvuse tõttu ka pärast osalist raiet või turberaiet.</li>
                  <li><strong>Mänd:</strong> talub kuivemaid ja liivakamaid muldasid, kuid ei armasta liigset varju. Sobib hästi liivastele või nõrgalt viljakatele kasvukohtadele.</li>
                  <li><strong>Kask:</strong> kiirekasvuline pioneerliik, sobib hästi raiesmikele ja segapuistutesse. Hea valik tormikahjustustega aladele.</li>
                  <li><strong>Haab ja lepp:</strong> kasutatakse sageli mitmekesisuse suurendamiseks ja sobivad niiskematele või madalamatele aladele.</li>
                </ul>
                <p>
                  Metsauuenduses on oluline lähtuda kasvukohatüübist ja kohalikust kogemusest – liigne eksperimenteerimine võib viia ebaõnnestunud kultuurideni.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Maapinna ettevalmistus</h3>
                <p>Enne istutamist tuleb raiesmik ette valmistada. Tavapärased võtted on:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kraavitamine ja kuivendussüsteemide hooldus:</strong> niisketel aladel parandab vee äravoolu ja aitab juurtel paremini areneda.</li>
                  <li><strong>Hooldustööde teostamine:</strong> järelraie, võsaraie ja vajadusel kännulõikus, et vähendada konkurentsi uutele taimedele.</li>
                  <li><strong>Mulla kobestamine või mineraliseerimine:</strong> parandab seemikute juurdumist, eriti viljakal, aga umbrohust ja samblast tihedal pinnal.</li>
                </ul>
                <p>
                  Oluline on arvestada pinnase kandvust ja ligipääsetavust. Raske tehnikaga liigne sõitmine võib tekitada kahjustusi, mis hiljem raskendavad istutust ja noore metsa arengut.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Istutusmaterjali valik ja kvaliteet</h3>
                <p>Istikute kvaliteet on edu alus. Eestis kasutatakse peamiselt:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Potitaimi (P+1 või P+2):</strong> seemik kasvatatakse potis ja istutatakse koos juurepalliga. Need juurduvad kiiresti ja on vastupidavamad põuale.</li>
                  <li><strong>Paljasjuurseid taimi:</strong> odavam lahendus, kuid vajavad istutamisel rohkem hoolt ja niiskust.</li>
                </ul>
                <p>
                  Oluline on valida usaldusväärne taimla ja jälgida, et istikud oleksid terved, hästi arenenud juurestikuga ja sobiva kõrgusega (enamasti 15–40 cm olenevalt liigist).
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Millal istutada</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kevadine istutamine (aprill–mai):</strong> kõige levinum aeg, sest muld on niiske ja temperatuurid sobivad juurdumiseks.</li>
                  <li><strong>Sügisene istutamine (september–oktoober):</strong> sobib eriti potitaimedele, kui sügisel on piisavalt niiskust ja maapind ei külmu liiga vara.</li>
                </ul>
                <p>
                  Liiga kuiva või kuuma ilmaga istutamine võib vähendada taime ellujäämise tõenäosust. Samuti tuleks vältida istutust, kui pinnas on külmunud või liigselt vettinud.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Istutustihedus ja paigutus</h3>
                <p>Istutustihedus sõltub liigist ja majanduslikust eesmärgist. Levinud soovitused:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kuusk:</strong> 1600–2500 taime hektari kohta</li>
                  <li><strong>Mänd:</strong> 2000–3000 taime hektari kohta</li>
                  <li><strong>Kask:</strong> 1200–2000 taime hektari kohta</li>
                </ul>
                <p>
                  Tihedam istutus võib anda sirgemaid ja kvaliteetsemaid tüvesid, kuid suurendab hooldusvajadust. Harvem istutades kasvavad puud kiiremini jämedaks, kuid võivad areneda kõveraks ja oksaseks.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Hooldus pärast istutamist</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Võsaraie ja rohustuse kontroll:</strong> eriti kaskede ja kuuskede puhul on oluline, et taimed ei jääks rohu või võsa alla. Esimestel aastatel võib vaja minna korduvat hooldust.</li>
                  <li><strong>Kaitsevahendid ulukikahjustuste vastu:</strong> heina- ja jänesekahjustuste ennetamiseks kasutatakse võrke või maitse- ja lõhnatõrjevahendeid.</li>
                  <li><strong>Täiendistutamine:</strong> kui osa taimedest hukub, tuleks tühikud täita juba paari aasta jooksul.</li>
                </ul>
                <p>
                  Regulaarne järelhooldus on üks kriitilisemaid tegureid, mis määrab, kas istutus kujuneb hiljem tugevaks metsaks või vajab pidevalt taastamist.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Looduskaitselised ja õiguslikud aspektid</h3>
                <p>
                  Metsa istutamisel tuleb arvestada olemasolevate looduskaitseliste piirangutega, näiteks kaitsealad, püsielupaigad või veekaitsevööndid. Samuti on oluline järgida metsa uuendamise kohustust, mis on sätestatud metsaseaduses. Kui raiesmik ei ole viie aasta jooksul pärast lageraiet piisavalt uuenenud, võib Keskkonnaamet nõuda täiendavat istutust.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Levinud vead metsa istutamisel</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Vale puuliigi valik:</strong> istutatakse liike, mis ei sobi kasvukohale, mis võib viia aeglase kasvu ja suurenenud kahjustusriski tekkeni.</li>
                  <li><strong>Ebapiisav hooldus:</strong> uue metsa hooldamata jätmine võib põhjustada taimekonkurentsi ja madala ellujäämise määra.</li>
                  <li><strong>Halva kvaliteediga istikud:</strong> kahjustatud juurte või haigustunnustega taimede kasutamine vähendab istutuse edukust.</li>
                  <li><strong>Liiga hiline täiendistutamine:</strong> kui tühikud jäävad pikalt täitmata, tekivad ebaühtlased puistud ja väheneb metsamaa väärtus.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Näited praktikas</h3>
                <p>
                  <strong>Näide 1:</strong> Pärast lageraiet Harjumaal otsustas omanik istutada kuusetaimi potitaimedena. Kevadine istutus koos mullapinna kobestamisega andis kiire juurdumise ning noor mets oli juba paari aasta pärast tugev ja ühtlane.
                </p>
                <p>
                  <strong>Näide 2:</strong> Lõuna-Eestis rajati männik kuivale liivasele pinnasele, kuid jäeti hooldustööd tegemata. Viie aasta pärast oli kultuur hõredaks jäänud ja rohi surus paljud taimed välja. Täiendistutus ja hooldus tõid küll osa pindalast tagasi, kuid lisakulud olid suured.
                </p>

                <p>
                  Metsa istutamine on oluline samm, mis määrab suurel määral metsa tuleviku väärtuse ja elujõulisuse. Hästi kavandatud ja hoolikalt teostatud istutus tagab, et mets uueneb kiiresti, on mitmekesine ja suudab taluda nii kliimamuutusi kui ka haigusi. Õigete liikide valik, kvaliteetsed istikud, korralik maapinna ettevalmistus ja järgnevad hooldustööd aitavad saavutada kestliku ja väärtusliku metsa.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsa istutamise konsultatsioon</h3>
                <p>
                  Kui teil on küsimusi metsa istutamise, puuliikide valiku või hooldustööde kohta, võtke meiega ühendust. Aitame teil teha teadlikke otsuseid ja planeerida istutust nii, et teie mets kasvaks tugevaks ja väärtuslikuks tulevastele põlvkondadele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


