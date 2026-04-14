import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oxygen Village — Éco-resort de luxe au cœur de l'Atlas, Midelt",
  description:
    "Oxygen Village est un éco-resort niché à 1500m d'altitude entre le Moyen et le Haut Atlas. Chalets, piscine, restaurant, activités de plein air et salles de réunion au cœur de la nature marocaine.",
  keywords: [
    "Oxygen Village",
    "éco-resort Maroc",
    "hôtel Atlas Maroc",
    "lodge Midelt",
    "séjour nature Maroc",
    "hôtel luxe Atlas",
    "vacances Moyen Atlas",
    "Haut Atlas hébergement",
    "chalet montagne Maroc",
    "tourisme Midelt",
    "resort écoresponsable Maroc",
    "randonnée Atlas Maroc",
    "séminaire nature Maroc",
    "team building Maroc",
    "hôtel Midelt Maroc",
    "piscine montagne Maroc",
    "restaurant Atlas Maroc",
    "activités plein air Maroc",
  ],
  authors: [{ name: "Oxygen Village" }],
  creator: "Oxygen Village",
  metadataBase: new URL("https://www.oxygen-village.ma"),
  openGraph: {
    title: "Oxygen Village — Éco-resort de luxe au cœur de l'Atlas",
    description:
      "Un refuge unique à 1500m d'altitude entre le Moyen et le Haut Atlas. Chalets, piscine, restaurant gastronomique et activités de plein air.",
    url: "https://www.oxygen-village.ma",
    siteName: "Oxygen Village",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oxygen Village — Éco-resort au cœur de l'Atlas, Midelt Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxygen Village — Éco-resort de luxe au cœur de l'Atlas",
    description:
      "Un refuge unique à 1500m d'altitude entre le Moyen et le Haut Atlas. Chalets, piscine, restaurant et activités de plein air.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}