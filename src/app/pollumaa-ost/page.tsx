import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Põllumaa ost kuni 8000 eurot hektari eest",
  description:
    "Põllumaa ost, maksame kuni 8000 eurot hektari eest kätte. Ostame kõiki tüüpi kinnistuid üle terve Eesti. Küsi pakkumist juba täna.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoPollumaaSection from "@/components/sections/SeoPollumaaSection";

export default function Page() {
  return (
    <div className="bg-agri-wheat">
      <Hero
        title="Põllumaa ost kuni 8000 eurot hektar"
        subtitle="Põllumaa ost üle Eesti, ostame igas suuruses kinnistuid, ka hüpoteegi- või kehtiva rendilepinguga. Küsige põllumaa ostu hinnapakkumist kasutades selleks kontaktivormi."
        formTitle="Arvuta põllumaa hind"
        hideFormBgImage
      />
      <SeoPollumaaSection />
      <ReviewsSection />
      <CompanyInfoSection />
    </div>
  );
}



