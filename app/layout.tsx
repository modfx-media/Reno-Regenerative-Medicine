import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import JsonLd from "./components/JsonLd";
import { buildMedicalBusinessSchema } from "./lib/jsonLd";

const sans = Inter({
  variable: "--font-sans-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serif = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.renoregen.com"),
  title: {
    default: "Integrative Medicine Clinic in Reno, NV | Reno Regenerative Medicine",
    template: "%s | Reno Regenerative Medicine",
  },
  description:
    "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "UhwRSp8OCcneNgyrb44d76TSDrDNYhYCnwREeVkHmiU",
  },
  icons: {
    icon: [
      { url: "/images/fevicon.jpg", type: "image/jpeg" },
    ],
    shortcut: "/images/fevicon.jpg",
    apple: "/images/fevicon.jpg",
  },
  openGraph: {
    siteName: "Reno Regenerative Medicine",
    locale: "en_US",
    type: "website",
    url: "https://www.renoregen.com/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PFQEPHKT3B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PFQEPHKT3B');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yj6muwc7nz");
          `}
        </Script>
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-ink"
        suppressHydrationWarning
      >
        <JsonLd schema={buildMedicalBusinessSchema()} />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
