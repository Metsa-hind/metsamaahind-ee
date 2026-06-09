import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Raieõiguse ost üle Eesti ja Saaremaal",
  description:
    "Raieõiguse ost turu kõrgeima hinnaga, kiire pakkumine, oma masinapark, kindel kvaliteet.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoRaieoiguseSection from "@/components/sections/SeoRaieoiguseSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Raieõiguse ost üle terve Eesti"
        subtitle="Raieõiguse ost kiirelt ja murevabalt. Pikaajaaline kogemus ja õiglane hind metsamaterjali eest. Kiire vastus ning asjatundlik lähenemine, võtke raieõiguse ostu pakkumine."
        formTitle="Arvuta raieõiguse hind"
      />
      <SeoRaieoiguseSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}



