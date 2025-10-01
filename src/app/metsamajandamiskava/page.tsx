import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Metsamajandamiskava",
  description:
    "Mis dokument on metsamajandamiskava ja kuidas seda tellida saab. Lugege lähemalt metsakava vajalikkusest meie lühikokkuvõttest.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoMetsamajandamiskavaSection from "@/components/sections/SeoMetsamajandamiskavaSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Metsamajandamiskava"
        subtitle="Siit leiate vastused küsimustele, mis dokument on metsamajandamiskava, miks see vajalik ning kasulik on ja kuidas seda tellida saab."
      />
      <SeoMetsamajandamiskavaSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}



