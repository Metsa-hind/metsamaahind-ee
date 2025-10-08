import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";

export default function HomeHinnastatistikaIntro() {
  return (
    <Section>
      <div id="hinnastatistika">
        <Container>
          <div className="mx-auto w-full max-w-[1200px] text-left">
          <h2 className="mt-0 font-adcreative text-3xl font-semibold text-emerald-950 sm:text-4xl">
            Tehingute hinnastatistika
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-emerald-900/90 sm:grid-cols-3">
            <li className="flex items-start gap-2 text-sm"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" aria-hidden></span> Kvaliteetne metsamaterjal</li>
            <li className="flex items-start gap-2 text-sm"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" aria-hidden></span> Mets on raieküps</li>
            <li className="flex items-start gap-2 text-sm"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" aria-hidden></span> Metsa tagavara vähemalt 300tm</li>
          </ul>
          <p className="mt-4 max-w-[70ch] text-[15px] leading-7 text-emerald-900/90">
            Vaadake statistikat Eestis tehtud metsatehingute kohta vahemikus 06.2023 – 06.2024 või 06.2024 – 06.2025 ning tutvuge hinnastatistikaga lähemalt.
          </p>
          </div>
        </Container>
      </div>
    </Section>
  );
}


