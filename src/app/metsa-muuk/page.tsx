import Hero from "@/components/hero/Hero";
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoSellingSection from "@/components/sections/SeoSellingSection";

export default function Page() {
  return (
    <>
      <Hero />
      <SeoSellingSection />
      <ReviewsSection />
      <CompanyInfoSection />
      
      <UploadCard />
    </>
  );
}


