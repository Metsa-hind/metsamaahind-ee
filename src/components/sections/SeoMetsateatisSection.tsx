import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import Link from "next/link";
import { absUrl } from "@/lib/routes";

export default function SeoMetsateatisSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-[1200px] grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Sticky contact banner */}
          <aside className="md:sticky md:top-[30px] self-start pt-[30px]">
            <div className="rounded-xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-emerald-900">Kontakt</div>
              <p className="mt-2 text-[14px] leading-6 text-emerald-900/85">Küsi nõu metsateatise esitamise või metsanduse dokumentide osas.</p>
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
                Metsateatis ja selle esitamise juhend
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-emerald-900/90">
                <p>
                  Metsateatis on ametlik dokument, millega metsaomanik teavitab Keskkonnaametit kavandatavast raiest või muudest metsamajandustöödest. Metsateatise eesmärk on tagada, et raietööd toimuvad kooskõlas seadustega, arvestades looduskaitselisi piiranguid ja säästva metsamajandamise põhimõtteid. Metsateatis on kohustuslik enamikul juhtudel, kui plaanitakse metsa raiuda, välja arvatud väiksemad erandid (näiteks küttepuude varumine koduseks tarbeks väikestes kogustes).
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Millal on metsateatis vajalik</h3>
                <p>Metsateatis tuleb esitada enne:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Uuendusraiet (lageraie või turberaie);</li>
                  <li>Harvendusraiet või muid hooldusraieid, kui raiutakse oluliselt rohkem kui koduseks kütteks;</li>
                  <li>Sanitaarraiet, kui raiutakse kahjustatud või haiged puud suuremas mahus;</li>
                  <li>Biomassi või energiapuidu varumist, kui see ületab koduse vajaduse.</li>
                </ul>
                <p>
                  Kui on kahtlus, kas teie plaanitud tööd vajavad metsateatist, on mõistlik enne alustamist konsulteerida metsanduse spetsialisti või Keskkonnaametiga.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Metsateatise esitamise sammud</h3>
                <h4 className="mt-4 text-lg font-semibold text-emerald-900">1. Kontrollige metsakava olemasolu</h4>
                <p>
                  Metsateatise aluseks on kehtiv metsamajandamiskava. See dokument kirjeldab teie metsamaa puistuid, raiemahtusid ja metsamajandamise soovitusi. Kui kava on aegunud või puudub, tuleb see enne metsateatise esitamist koostada või uuendada.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">2. Koguge vajalikud andmed kinnistu kohta</h4>
                <p>Te vajate:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Kinnistu katastritunnust;</li>
                  <li>Puistute infot (puuliigid, vanus, boniteet, raiemahu hinnang);</li>
                  <li>Raietööde iseloomu (millist raiet plaanite: uuendus-, harvendus-, sanitaarraie jne);</li>
                  <li>Raiutava ala pindala ja asukoha koordinaate (vajadusel metsakava kaardilt).</li>
                </ul>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">3. Sisenemine Metsaregistri e-teenusesse</h4>
                <p>
                  Metsateatis esitatakse tavaliselt Metsaregistri portaalis (register.metsad.ee). Sisenemiseks on vaja ID-kaarti, Mobiil-ID-d või Smart-ID-d. Kui teil puudub võimalus ise esitada, võib seda teha volitatud esindaja või metsakonsulent.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">4. Uue metsateatise loomine</h4>
                <p>Portaalis valige „Uus metsateatis“ ja sisestage:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Kinnistu andmed (katastritunnus, omanik);</li>
                  <li>Raie iseloom ja eesmärk;</li>
                  <li>Raiutava ala täpsed piirid ja pindala (vajadusel kaardirakenduse abil);</li>
                  <li>Raiemahu ja puuliikide prognoos.</li>
                </ul>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">5. Vajadusel lisage lisadokumendid</h4>
                <p>
                  Kui kavas on erisusi (nt eritingimused kaitsealadel, keskkonnamõjude hinnangud), võib olla vaja lisada täiendavaid dokumente. Portaal juhendab, kui midagi on puudu.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">6. Kinnitamine ja esitamine</h4>
                <p>
                  Kontrollige, et kõik andmed oleksid õiged. Seejärel kinnitage ja esitage metsateatis digitaalselt. Pärast esitust saab Keskkonnaamet teate kätte ning alustab menetlust.
                </p>

                <h4 className="mt-4 text-lg font-semibold text-emerald-900">7. Keskkonnaameti vastus ja otsus</h4>
                <p>
                  Tavaliselt võtab menetlus aega kuni 15 tööpäeva. Keskkonnaamet võib anda loa raietöödeks, paluda täiendavaid andmeid või keelduda loa andmisest, kui tööd ei vasta seadustele või kahjustavad kaitstavaid loodusväärtusi.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Praktilised soovitused metsateatise esitamisel</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Veenduge andmete täpsuses. Vale pindala või puuliikide info võib põhjustada viivitusi või keeldumise.</li>
                  <li>Kontrollige looduskaitselisi piiranguid. Kui kinnistul on kaitsealad või piiranguvööndid, tuleb neid arvesse võtta.</li>
                  <li>Kasutage spetsialisti abi. Kui te pole kindel, kuidas metsateatist korrektselt esitada, võib metsakonsulent või metsa hindaja aidata vältida vigasid.</li>
                  <li>Esitage teatis varakult. Kui plaanite raiet kevadel või suvel, alustage menetlust juba talvel, et vältida tööde hilinemist.</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-emerald-900">Miks metsateatis oluline on?</h3>
                <p>
                  Metsateatis kaitseb nii metsaomaniku huve kui ka keskkonda. See aitab vältida ebaseaduslikke raieid, tagab säästva metsamajandamise ja loob selguse, millised tööd on lubatud. Korrektselt esitatud teatis annab kindlustunde, et raietööd on seaduslikud ja keskkonnaamet on nendega arvestanud.
                </p>
                <p>
                  Korralikult vormistatud metsateatis lihtsustab ka tulevasi tehinguid, näiteks raieõiguse müüki, sest ostjad eelistavad kinnistuid, millel on selge dokumentatsioon ja kehtivad load.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


