import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Põllumaa müük - maksame kuni 8000 eurot hektari eest",
  description:
    "Põllumaa müük lihtsalt ja arusaadavalt. Maksame turu kõrgeimat hinda hektari eest. Ostame ka võsastunud põllumaid ja rohumaid. Küsige pakkumist.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoPollumaaMuukSection from "@/components/sections/SeoPollumaaMuukSection";

export default function Page() {
  return (
    <div className="bg-agri-wheat">
      <Hero
        title="Põllumaa müük tehtud lihtsaks"
        subtitle="Põllumaa müük - maksame kuni 8000 eurot hektari eest. Küsige põllumaa müügi hinda ning alustame koostööd juba täna."
        formTitle="Arvuta põllumaa hind"
        hideFormBgImage
      />
      <SeoPollumaaMuukSection />
      <ReviewsSection />
      <CompanyInfoSection />
    </div>
  );
}



