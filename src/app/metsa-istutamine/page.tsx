import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Metsa istutamise kiirülevaade",
  description:
    "Loe, mis on metsa istutamise puhul tähtsaimad sammud ning kuidas metsa uue elutsükli alustamine protsessina välja näeb.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoIstutamineSection from "@/components/sections/SeoIstutamineSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Metsa istutamine"
        subtitle="Tutvu lähemalt teemaga: metsa istutamine ning võtke ühendust, kui teil on metsa istutamist puudutavaid küsimusi või vajate konsultatsiooni."
      />
      <SeoIstutamineSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}



