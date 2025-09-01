export const metadata = {
  title: "Metsa hind",
  description: "Saa teada oma metsa hind kiiresti ja professionaalselt.",
};

import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et">
      <body className="antialiased bg-white text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}