import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Andrade Marinho",
    short_name: "Andrade Marinho",
    description: "Construtora de empreendimentos de alto padrão em Natal, RN",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/logo-blue.png", sizes: "192x192", type: "image/png" },
      { src: "/logo-blue.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
