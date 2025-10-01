import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Metsa ost kuni 35 000 eurot hektari eest",
  description:
    "Metsa ost Eestis: maksame kuni 35 000 € hektari eest. Saatke päring ja anname kiire, läbipaistva hinnangu ning konkreetse pakkumise teie metsakinnistu ostuks.",
};
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";
import { HeadingBadge, SectionH2, SectionSubheading } from "@/components/globals/GlobalComponents";
import UploadCard from "@/components/sections-special/UploadCard";
import SeoOstSection from "@/components/sections/SeoOstSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Metsa ost turu kõrgeima hinnaga"
        subtitle="Ostame teie metsakinnistu makstes kuni 35 000 eurot hektari eest. Saatke meile metsa ostu päring ning vastame teile kiirelt esimesel võimalusel."
      />
      <SeoOstSection />
      <ReviewsSection />
      <CompanyInfoSection />
      <UploadCard />
    </>
  );
}


