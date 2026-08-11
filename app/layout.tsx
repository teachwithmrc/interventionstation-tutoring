import type { Metadata } from "next";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const siteUrl = isGitHubPages
  ? "https://teachwithmrc.github.io/intervention-station-tutoring"
  : "https://intervention-station-tutoring.spconnolly7.chatgpt.site";
const assetBase = isGitHubPages ? "/intervention-station-tutoring" : "";
const title = "Intervention Station | 1:1 Reading & Math Intervention";
const description = "Diagnostic-first reading and math tutoring that finds the gap, builds the skill, and shows the growth.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: `${assetBase}/favicon.svg`, shortcut: `${assetBase}/favicon.svg` },
  openGraph: { title, description, type: "website", url: siteUrl, images: [{ url: `${assetBase}/og.png`, width: 1728, height: 909, alt: "Intervention Station — Stop guessing. Start growing." }] },
  twitter: { card: "summary_large_image", title, description, images: [`${assetBase}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
