export const metadata = {
  title: "Metsa müük – täpne hinnang ja pakkumine",
  description: "Saa teada oma metsa hind kiiresti ja professionaalselt.",
  icons: {
    icon: [{ url: "/metsa-hind-ikoon.png?v=2", type: "image/png", sizes: "any" }],
    shortcut: [{ url: "/metsa-hind-ikoon.png?v=2" }],
    apple: [{ url: "/metsa-hind-ikoon.png?v=2" }],
  },
};

import "./globals.css";
import { Sora } from "next/font/google";
import SiteBackground from "@/components/backgrounds/SiteBackground";
import Header from "@/components/Header";
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
      <head>
        <script
          src="https://www.google.com/recaptcha/api.js?render=6Lc9OOIrAAAAABtQtpV7Fbkck2fu81QxfbHFFZ1F"
          async
          defer
        />
      </head>
      <body className="antialiased bg-white text-slate-900 overflow-x-hidden">
        <SiteBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
