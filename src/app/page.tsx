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
import IntroFunnelSection from "@/components/sections/IntroFunnelSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Page() {
  return (
    <>
      <Hero />
      <IntroFunnelSection />
      <MarketAveragesSection />
      <SpeciesPricesSection />
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
