export const metadata = {
  title: "Metsa hind",
  description: "Saa teada oma metsa hind kiiresti ja professionaalselt.",
};

import "./globals.css";
import { Header } from "@/components/Header";
import { Sora } from "next/font/google";
import SiteBackground from "@/components/backgrounds/SiteBackground";
import Footer from "@/components/Footer";

const adcreative = Sora({
  subsets: ["latin"],
  variable: "--font-adcreative",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et" className={adcreative.variable}>
      <body className="antialiased bg-white text-slate-900">
        <SiteBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
