import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Raieõiguse müük - võta hinnapakkumine",
  description:
    "Raieõiguse müük usalda pikaajalise kogemusega metsafirmale. Kiire pakkumine ning raietööde korrektne läbiviimine, oma masinapark. Küsi hinda",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoRaieoiguseMuukSection from "@/components/sections/SeoRaieoiguseMuukSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Raieõiguse müük õiglase hinnaga murevabalt"
        subtitle="Usalda raieõiguse müük pikaajalise kogemusega ettevõttele. Teostame raietööd õigeagselt ning jätame endast maha korrektse raielangi. Küsi pakkumist."
        formTitle="Arvuta raieõiguse hind"
      />
      <SeoRaieoiguseMuukSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}



