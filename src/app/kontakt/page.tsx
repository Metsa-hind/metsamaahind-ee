import Hero from "@/components/hero/Hero";
export const metadata = {
  title: "Kontakt",
  description: "Võtke meiega ühendust, Metsa Hind OÜ kontaktivorm.",
};
import CompanyInfoSection from "@/app/components/sections/CompanyInfoSection";

export default function Page() {
  return (
    <>
      <Hero
        title="Kontaktivorm"
        subtitle="Jätke meile oma kinnistu andmed või kirjutage meile – vastame esimesel võimalusel."
      />
      <CompanyInfoSection />
    </>
  );
}



