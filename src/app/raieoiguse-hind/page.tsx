import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Raieõiguse hind aastal 2026",
  description:
    "Raieõiguse hind aastal 2026 on tõusvas trendis ning on hea aeg raieküps kinnistu realiseerida, et alustada varsti jälle uue metsamajandusliku tsükliga. Loe lähemalt raie hinnast.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoRaieoiguseHindSection from "@/components/sections/SeoRaieoiguseHindSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Raieõiguse hind aastal 2026"
        subtitle="Tutvu, kuidas moodustub raieõiguse hind aastal 2026 ning küsi raieõiguse täpset hinnapakkumist kasutades paremalolevat kontaktivormi."
        formTitle="Arvuta raieõiguse hind"
      />
      <SeoRaieoiguseHindSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}



