import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { absUrl } from "@/lib/routes";
import { Home, Trees, Tractor, Axe, Info } from "lucide-react";

const rows: { href: string; label: string }[][] = [
  [
    { href: "/", label: "Avaleht" },
    { href: "/metsa-myuk", label: "Metsa müük" },
    { href: "/metsa-ost", label: "Metsa ost" },
    { href: "/metsa-istutamine", label: "Metsa istutamine" },
    { href: "/raieoiguse-myuk", label: "Raieõiguse müük" },
  ],
  [
    { href: "/pollumaa-ost", label: "Põllumaa ost" },
    { href: "/pollumaa-myuk", label: "Põllumaa müük" },
    { href: "/pollumaa-hind", label: "Põllumaa hind" },
    { href: "/raieoiguse-ost", label: "Raieõiguse ost" },
  ],
  [
    { href: "/metsakava", label: "Metsakava" },
    { href: "/metsateatis", label: "Metsateatis" },
    { href: "/about", label: "Ettevõttest" },
    { href: "/kontakt", label: "Kontakt" },
  ],
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-emerald-100/60 bg-transparent">
      <Container className="py-12">
        <div className="grid items-start gap-10 text-center md:text-left md:grid-cols-[1fr_2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image src="/metsa-hind-ikoon.png" alt="Metsa Hind OÜ" width={40} height={40} className="h-10 w-10" />
              <span className="font-adcreative text-xl text-emerald-900">Metsa Hind OÜ</span>
            </div>
            <p className="mt-3 mx-auto md:mx-0 max-w-[46ch] text-sm leading-6 text-emerald-900/85">
              Oleme 100% Eesti kapitalil põhinev kohalik ettevõte ning meie põhitegevusaladeks on kinnistute hindamine, ost/müük ning nende igapäevane majandamine.
            </p>
            <p className="mt-2 text-xs text-emerald-900/60">Hobujaama tn 4, Tallinn · info@metsamaahind.ee · +372 5341 2277</p>
          </div>

          {/* Nav as vertical columns */}
          <nav aria-label="Footer navigation">
            <div className="grid gap-8 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-900/90">
                  <Home className="h-4 w-4 text-emerald-700" />
                  Navigatsioon
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {[{href:"https://metsamaahind.ee",label:"Avaleht"},{href:"https://metsamaahind.ee/about/",label:"Ettevõttest"},{href:"https://metsamaahind.ee/kontakt/",label:"Kontakt"}] .map(i=> (
                    <li key={i.href}>
                      <Link href={i.href} className="text-emerald-900/85 hover:text-emerald-900 hover:underline underline-offset-4">{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-900/90">
                  <Trees className="h-4 w-4 text-emerald-700" />
                  Metsamaa
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {[{href:"https://metsamaahind.ee/metsa-muuk/",label:"Metsa müük"},{href:"https://metsamaahind.ee/metsa-ost/",label:"Metsa ost"},{href:"https://metsamaahind.ee",label:"Metsa hind"},{href:"https://metsamaahind.ee/metsa-istutamine/",label:"Metsa istutamine"}] .map(i=> (
                    <li key={i.href}>
                      <Link href={i.href} className="text-emerald-900/85 hover:text-emerald-900 hover:underline underline-offset-4">{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-900/90">
                  <Tractor className="h-4 w-4 text-emerald-700" />
                  Põllumaa
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {[{href:"https://metsamaahind.ee/pollumaa-ost/",label:"Põllumaa ost"},{href:"https://metsamaahind.ee/pollumaa-muuk/",label:"Põllumaa müük"},{href:"https://metsamaahind.ee/pollumaa-hind/",label:"Põllumaa hind"}] .map(i=> (
                    <li key={i.href}>
                      <Link href={i.href} className="text-emerald-900/85 hover:text-emerald-900 hover:underline underline-offset-4">{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-900/90">
                  <Axe className="h-4 w-4 text-emerald-700" />
                  Metsaraie
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {[{href:"https://metsamaahind.ee/raieoiguse-muuk/",label:"Raieõiguse müük"},{href:"https://metsamaahind.ee/raieoiguse-ost/",label:"Raieõiguse ost"},{href:"https://metsamaahind.ee/raieoiguse-hind/",label:"Raieõiguse hind"},{href:"https://metsamaahind.ee/metsateatis/",label:"Metsateatis"},{href:"https://metsamaahind.ee/hooldusraied/",label:"Hooldusraied"}] .map(i=> (
                    <li key={i.href}>
                      <Link href={i.href} className="text-emerald-900/85 hover:text-emerald-900 hover:underline underline-offset-4">{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-900/90">
                  <Info className="h-4 w-4 text-emerald-700" />
                  Kasulikku
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {[{href:"https://metsamaahind.ee/metsamajandamiskava/",label:"Metsakava"},{href:"https://register.metsad.ee/",label:"Metsaregister"},{href:"https://erametsaliit.ee/puidu-hinnainfo",label:"Puidu hinnad"},{href:"https://riigiteataja.ee/akt/MS",label:"Metsaseadus"}] .map(i=> (
                    <li key={i.href}>
                      <Link href={i.href} className="text-emerald-900/85 hover:text-emerald-900 hover:underline underline-offset-4">{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-emerald-100/60 pt-6 text-xs text-emerald-900/70 sm:flex-row">
          <div>© {new Date().getFullYear()} Metsa Hind OÜ. Kõik õigused kaitstud.</div>
          <div>Rohkem kui 15 aastat metsandusalast kogemust</div>
        </div>
      </Container>
    </footer>
  );
}


