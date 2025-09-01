import { DefaultSeoProps } from "next-seo";
import { BASE_URL } from "./routes";

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | Brand",
  defaultTitle: "Brand",
  description: "High-performance SEO site.",
  openGraph: { type: "website", siteName: "Brand", url: BASE_URL },
  twitter: { cardType: "summary_large_image" },
  additionalLinkTags: [{ rel: "canonical", href: BASE_URL }],
};
