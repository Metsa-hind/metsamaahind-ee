import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Hooldusraied",
  description:
    "Hooldusraied: valgustus-, harvendus- ja sanitaarraie eesmärgid, ajastus ja teostus. Uuri, kuidas hooldusraied parandavad metsa tervist ja väärtust.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoHooldusraiedSection from "@/components/sections/SeoHooldusraiedSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Hooldusraied"
        subtitle="Tutvuge lühikokkuvõttega, millised on levinuimad hooldusraiete liigid ja kuidas neid teostatakse."
      />
      <SeoHooldusraiedSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}



