import { Container } from "@/components/primitives/Container";

export const metadata = {
  title: "Isikuandmete Kaitse Kord",
  description:
    "Metsa Hind OÜ isikuandmete kaitse kord – milliseid andmeid kogume, miks neid kogume ja kuidas neid töötleme.",
};

type Clause = { n: string; text: React.ReactNode; sub?: Clause[] };
type Section = { heading?: string; clauses: Clause[] };

const sections: Section[] = [
  {
    clauses: [
      {
        n: "1.1.",
        text:
          "Käesolev Isikuandmete Kaitse Kord (edaspidi – Isikuandmete Kaitse Kord) aitab mõista, milliseid andmeid Metsa Hind OÜ (registrikood 17305011) (edaspidi nimetatud MH; koduleht: https://metsamaahind.ee/ (edaspidi koduleht)) kogub, miks MH neid kogub ja mida nendega teeb.",
      },
      {
        n: "1.2.",
        text:
          "Kõik kodulehe külastajad peavad selle Isikuandmete Kaitse Korra tähelepanelikult läbi lugema.",
      },
    ],
  },
  {
    heading:
      "Kogutav teave ja andmed. Isikuandmete kasutamine ja muud töötlemise tingimused",
    clauses: [
      {
        n: "2.1.",
        text:
          "MH võib saada, koguda, talletada, kasutada ja muud moodi töödelda isikuandmeid seoses allpool toodud tegevustega ning järgmistel eesmärkidel:",
        sub: [
          {
            n: "2.1.1.",
            text:
              "Pakkumise tegemisel või kliendilepingu sõlmimisel. MH või MH koostööpartner võib töödelda isikuandmeid seoses kliendilepingu täitmisega (äriühingu kontaktisiku või füüsilisest isikust kliendi täisnimi, isikukood, sünniaeg, aadress, e-posti aadress, telefoninumber, arvelduskonto number jne).",
          },
          {
            n: "2.1.2.",
            text:
              "Toodete või teenuste kättetoimetamisel. MH või MH koostööpartner võib kontrollida toote või teenuse kättetoimetamisel toodet või teenust vastuvõtva isiku isikusamasust, et veenduda, et vastuvõtval isikul on volitus toode või teenust vastu võtta, või protokollida isikut tõendava dokumendi alusel vastuvõtva isiku isikuandmed.",
          },
          {
            n: "2.1.3.",
            text:
              "Liisingute ja pankadega seoses toote või teenuse finantseerimisega. MH võib edastada Kliendi vastaval tahteavaldusel pangale või liisingut pakkuvale teenuse osutajale vajalikud isikuandmed (eelkõige äriühingu kontaktisiku või füüsilisest isikust kliendi täisnimi, isikukood, sünniaeg, aadress, e-posti aadress, telefoninumber, arvelduskonto number).",
          },
          {
            n: "2.1.4.",
            text:
              "Toetuste taotlemine, haldusorganitega suhtlemine. MH võib edastada Kliendi vastava tahteavalduse alusel või iseseisvalt esitada andmeid toetuste saamise, statistilisel või aruandluse eesmärgil toetust jagavatele organisatsioonidele ja haldusorganitele.",
          },
          {
            n: "2.1.5.",
            text:
              "Otsepostituste ja muude teadete saatmisel. MH või MH koostööpartner töötleb Kliendi kontaktisiku või füüsilisest isikust kliendi tööalaseid e-posti aadresse või telefoninumbrit kliendilepinguga, ostetud toodete või teenustega seotud teadete edastamiseks, turunduse eesmärkidel, aruannete ja arvete väljastamiseks kliendile ja kolmandatele isikutele.",
          },
          {
            n: "2.1.6.",
            text:
              "Seoses MH kodulehe külastamisega. MH kodulehte külastades võib MH koguda teavet külastaja seadme kohta. Näiteks võib MH saada teavet kodulehe külastuste kohta, kaasa arvatud külastaja IP-aadress, kodulehel viibimise aeg ja kestus, klikkide arv jms.",
          },
          {
            n: "2.1.7.",
            text:
              "Muu teave seoses MH-ga suhtlemisel. MH võib töödelda isikuandmeid ja muud teavet, mida kodulehe külastaja, klient või muu isik MH-le on esitanud, kasutades MH kodulehte või MH-ga suheldes.",
          },
        ],
      },
      {
        n: "2.2.",
        text:
          "Lisaks eeltoodule võib MH avaldada isikuandmeid, kui MH-l on avaldamiseks kohustus kehtivatest õigusaktidest või lepingutest tulenevalt, MH või kolmanda isiku õiguste või huvide kaitsmiseks (kaasa arvatud andmete esitamine kolmandatele isikutele võlgade väljanõudmiseks) või MH või kolmanda isiku vastu suunatud nõude vaidlustamiseks.",
      },
      {
        n: "2.3.",
        text:
          "Füüsilisest isikust klient või veebilehe külastaja (õigustatud isik) võib isikuandmete töötlemise nõusoleku igal ajal täielikult või osaliselt tühistada. Õigustatud isik võib kasutada oma õigust isikuandmete juurdepääsule, parandamisele, tühistamisele ja vaidlustamisele.",
      },
      {
        n: "2.4.",
        text:
          "MH töötleb andmeid Eestis, kuid teatud juhtudel võib osutuda vajalikuks andmeid edastada teistesse riikidesse. Seda eelkõige seoses kliendilepingu ja ostetud toodete ja teenustega.",
      },
      {
        n: "2.5.",
        text:
          "MH rakendab andmete töötlemisel andmekaitse ning andmete turvalisuse põhimõtteid ning meetmeid. MH tagab, et andmetele on ligipääs vaid selleks õigustatud isikutel.",
      },
      {
        n: "2.6.",
        text: "Isikuandmeid töödeldakse vastavalt kehtivatele õigusaktidele.",
      },
      {
        n: "2.7.",
        text:
          "MH poolt kogutavad isikuandmed on kasutatavad eranditult käesolevas Isikuandmete Kaitse Korras näidatud eesmärkidel.",
      },
    ],
  },
  {
    heading: "Küpsised",
    clauses: [
      {
        n: "3.1.",
        text:
          "Küpsised on teave, mille veebiserver saadab veebilehitsejasse ning mille veebilehitseja salvestab. See teave on saadetav veebiserverisse iga kord, kui veebilehitseja palub avada serveris oleva veebilehe. See võimaldab veebiserveril tunda ära ja jälgida veebilehitsejat.",
      },
      {
        n: "3.2.",
        text:
          "MH võib kasutada oma kodulehel kolmandate osapoolte küpsiseid. Eelkõige on sellisteks küpsisteks näiteks Google Analytics. Küpsiseid kasutatakse eesmärgiga saada statistilisi andmeid kodulehe kasutamise kohta.",
      },
      {
        n: "3.3.",
        text: (
          <>
            Kui külastaja vaatamata sellele ei nõustu küpsiste kasutamisega ja
            (või) soovib enda nõusolekut tühistada, tuleb sellest teavitada
            e-posti teel{" "}
            <a
              href="mailto:info@metsamaahind.ee"
              className="text-emerald-700 hover:underline"
            >
              info@metsamaahind.ee
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    heading: "Isikuandmete töötlemise ohutus",
    clauses: [
      {
        n: "4.1.",
        text:
          "Isikuandmeid töödeldakse, pidades kinni Eesti Vabariigi isikuandmete õiguskaitse seadusest ja muudest õigusaktidega ettenähtud nõuetest. Töödeldes isikuandmeid, rakendab MH korralduslikke ja tehnilisi meetmeid, mis kindlustavad isikuandmete kaitse juhusliku või ebaseadusliku hävitamise, muutmise, avaldamise, samuti igasuguse muu ebaseadusliku töötlemise eest.",
      },
    ],
  },
  {
    heading: "Kolmandate poolte kodulehed",
    clauses: [
      {
        n: "5.1.",
        text:
          "MH kodulehel võivad olla viited ja lingid teistele kodulehtedele. MH ei vastuta kolmandate isikute kodulehtede turvalisuse ja privaatsuspoliitikate eest. MH soovitab tungivalt tutvuda teiste kodulehtede privaatsuspoliitikatega.",
      },
    ],
  },
  {
    heading: "Isikuandmete Kaitse Korra muudatused",
    clauses: [
      {
        n: "6.1.",
        text:
          "MH võib igal ajal uuendada või muuta Isikuandmete Kaitse Korda. MH muudab Isikuandmete Kaitse Korda vastavalt vajadusele, et see oleks kooskõlas õiguslike, tehniliste või ettevõtet puudutavate muudatustega.",
      },
      {
        n: "6.2.",
        text:
          "Uuendatud või muudetud Isikuandmete Kaitse Kord jõustub alates selle väljakuulutamisest MH kodulehel.",
      },
      {
        n: "6.3.",
        text:
          "Kodulehe külastaja või Klient kontrollib MH kodulehte ja veendub, et teda rahuldab kehtiv Isikuandmete Kaitse Kord.",
      },
      {
        n: "6.4.",
        text:
          "Käesolev Isikuandmete Kaitse Kord on koostatud kooskõlas Eesti ja Euroopa Liidu kehtivate õigusaktidega.",
      },
      {
        n: "6.5.",
        text: (
          <>
            Isikul on õigus esitada kaebuse, vihjeid või küsimusi isikuandmete
            töötlemise osas Andmekaitse Inspektsioonile (e-post:{" "}
            <a
              href="mailto:info@aki.ee"
              className="text-emerald-700 hover:underline"
            >
              info@aki.ee
            </a>
            ; postiaadress: Väike-Ameerika 19, Tallinn 10129).
          </>
        ),
      },
    ],
  },
];

function ClauseItem({ clause }: { clause: Clause }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 font-semibold text-emerald-800 tabular-nums">
        {clause.n}
      </span>
      <div className="space-y-3">
        <p>{clause.text}</p>
        {clause.sub && (
          <ul className="space-y-3">
            {clause.sub.map((s) => (
              <ClauseItem key={s.n} clause={s} />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Page() {
  return (
    <main className="pt-[120px] pb-[60px]">
      <Container className="max-w-[860px]">
        <h1 className="font-adcreative text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-950">
          Isikuandmete Kaitse Kord
        </h1>
        <div className="mt-8 space-y-10 text-[15px] leading-7 text-emerald-900/90">
          {sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="mb-4 text-xl font-semibold tracking-tight text-emerald-950">
                  {section.heading}
                </h2>
              )}
              <ul className="space-y-4">
                {section.clauses.map((c) => (
                  <ClauseItem key={c.n} clause={c} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
