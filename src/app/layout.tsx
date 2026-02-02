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
  title: "Andrade Marinho - Invista na melhor vista",
  description:
    "Andrade marinho é uma construtora focada em construir empreendimentos com um alto nível de acabamento e qualidade",
  icons: {
    icon: "/icon-page.svg",
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
            maxDuration: 3000,
          }}
        >
          <CustomCursor />
          {children}
        </SplashProvider>
      </body>
    </html>
  );
}
