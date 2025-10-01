import Hero from "@/components/hero/Hero";
import MarketAveragesSection from "@/components/sections/MarketAveragesSection";
import SpeciesPricesSection from "@/components/sections/SpeciesPricesSection";
import ProcessStepsSection from "@/components/sections/ProcessStepsSection";
import PriceDriversSection from "@/components/sections/PriceDriversSection";
import AveragePricesSection from "@/components/sections/AveragePricesSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import UploadCard from "@/components/sections-special/UploadCard";
import ReviewsSection from "@/components/sections/ReviewsSection";
import PriceFormationSection from "@/components/sections/PriceFormationSection";
import CtaContactSection from "@/components/sections/CtaContactSection";
import FaqSection from "@/components/sections/FaqSection";
 

export const metadata = {
  title: "Metsamaa Hind kuni 35 000 eurot hektari eest",
  description:
    "Arvutage metsa ja metsamaa hind täpselt ja murevabalt. Tutvuge metsa hinnastatistikaga ning saage teada oma metsakinnistu hind.",
  verification: {
    google: "KkfEbqfJwVmf8qQiENZswmq6vD-u0pmDh1yGFG51IOo",
  },
};

export default function Page() {
  return (
    <>
      <Hero
        title="Saa teada oma metsa hind"
        titleHighlight="metsa hind"
        subtitle="Kui soovite teada, mis on teie metsamaa hind, olete õiges kohas. Saatke meile päring või tutvuge metsa hinnastatistikaga. Metsakava üleslaadimisel saame teha väga täpse hindamise kiirelt ja teie jaoks tasuta."
        // Homepage overrides: hide first CTA and retarget the second
        hidePrimaryCta
        secondaryHref="https://metsamaahind.ee/#hinnastatistika"
      />
      {/* Company info second */}
      <div className="my-[60px]">
        <CompanyInfoSection />
      </div>
      <ProcessStepsSection />
      {/* Price drivers moved directly after steps */}
      <PriceDriversSection />
      
      <MarketAveragesSection />
      <SpeciesPricesSection />
      <CtaContactSection />
      <AveragePricesSection />
      <FaqSection />
      <ReviewsSection />
      <PriceFormationSection />
      <UploadCard />
    </>
  );
}
