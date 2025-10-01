import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Metsateatis ja selle esitamine",
  description:
    "Lugege lähemalt, mis dokument on metsateatis ja kuidas selle KKA-le esitamine toimib.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoMetsateatisSection from "@/components/sections/SeoMetsateatisSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Mis dokument on metsateatis?"
        subtitle="Vaadake lühikokkuvõtet, mis dokument on metsateatis ja kuidas seda Keskkonnaametile esitada saab."
      />
      <SeoMetsateatisSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}



