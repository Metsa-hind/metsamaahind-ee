import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Põllumaa hind",
  description:
    "Põllumaa hind sõltub kinnistu suurusest, asukohast, viljakusest, kujust ning ligipääsetavusest ning võib ulatuda kuni 8000 euroni hektari eest 2026 aastal.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoPollumaaHindSection from "@/components/sections/SeoPollumaaHindSection";

export default function Page() {
  return (
    <div className="bg-agri-wheat">
      <Hero
        title="Põllumaa hind"
        subtitle="Vaadake, kuidas kujuneb põllumaa hektari hind aastal 2026 ning millised on suurimad põllumaade hinna mõjutajad."
        formTitle="Arvuta põllumaa hind"
        hideFormBgImage
      />
      <SeoPollumaaHindSection />
      <ReviewsSection />
      <CompanyInfoSection />
    </div>
  );
}



