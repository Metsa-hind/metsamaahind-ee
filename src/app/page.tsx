import Hero from "@/components/hero/Hero";
import MarketAveragesSection from "@/components/sections/MarketAveragesSection";
import SpeciesPricesSection from "@/components/sections/SpeciesPricesSection";
import ValuationBreakdownSection from "@/components/sections/ValuationBreakdownSection";
import ParallaxFeatureSection from "@/components/sections/ParallaxFeatureSection";
import SeoReadSection from "@/components/sections/SeoReadSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalContactSection from "@/components/sections/FinalContactSection";
import TallServicesCarousel from "@/components/sections/TallServicesCarousel";
import CTABand from "@/components/sections/cta/CTABand";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ProcessStepsSection from "@/components/sections/ProcessStepsSection";
import PriceDriversSection from "@/components/sections/PriceDriversSection";
import AveragePricesSection from "@/components/sections/AveragePricesSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import UploadCard from "@/components/sections-special/UploadCard";

export default function Page() {
  return (
    <>
      <Hero />
      {/* Company info second */}
      <div className="my-[60px]">
        <CompanyInfoSection />
      </div>
      <ProcessStepsSection />
      {/* Price drivers moved directly after steps */}
      <PriceDriversSection />
      <MarketAveragesSection />
      <SpeciesPricesSection />
      <AveragePricesSection />
      <UploadCard />
      <ValuationBreakdownSection />
      <ParallaxFeatureSection />
      <SeoReadSection />
      <FAQSection />
      <ReviewsSection />
      <FinalContactSection />
      <TallServicesCarousel />
      <CTABand />
    </>
  );
}
