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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SL4HJRJ6HX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SL4HJRJ6HX');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1376540914300638');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1376540914300638&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MM73ZNPD');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MM73ZNPD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}