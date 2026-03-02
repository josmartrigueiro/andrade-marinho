import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { SplashProvider } from "@/providers/splash-provider";

const ppmoriSans = localFont({
  variable: "--font-ppmori-sans",
  src: [
    {
      path: "../../public/fonts/PPMori-Extralight.woff2",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/fonts/PPMori-ExtralightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/PPMori-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/PPMori-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Andrade Marinho — Construtora de Alto Padrão em Natal, RN",
    template: "%s | Andrade Marinho",
  },
  description:
    "Empreendimentos residenciais de alto padrão em Natal, RN. Apartamentos com localização estratégica, acabamento premium e solidez construtiva. Conheça Edifício Themis, Miguel Carrilho, Residencial Dunas e Bosque Tirol.",
  metadataBase: new URL("https://andrademarinho.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://andrademarinho.com.br",
    siteName: "Andrade Marinho",
    title: "Andrade Marinho — Construtora de Alto Padrão em Natal, RN",
    description:
      "Apartamentos de alto padrão em Natal, RN. Solidez construtiva, localização estratégica e acabamento premium.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andrade Marinho — Empreendimentos de Alto Padrão em Natal, RN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrade Marinho — Construtora de Alto Padrão em Natal, RN",
    description:
      "Apartamentos de alto padrão em Natal, RN. Conheça nossos empreendimentos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/icon-page.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${ppmoriSans.variable} antialiased bg-background`}>
        <SplashProvider
          showOnMount={true}
          splashProps={{
            backgroundColorLight: "bg-background",
            backgroundColorDark: "bg-primary",
            minDuration: 2000,
            maxDuration: 0,
          }}
        >
          <CustomCursor />
          {children}
        </SplashProvider>
      </body>
    </html>
  );
}
