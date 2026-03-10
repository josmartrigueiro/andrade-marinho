import { ArtBoardGrid } from "@/components/art-board-grid";
import { About } from "./_sections/about";
import { CtaPresentation } from "./_sections/cta-presentation";
import { Hero } from "./_sections/hero";
import { Presentation } from "./_sections/presentation";
import { Projects } from "./_sections/projects";
import { Releases } from "./_sections/releases";
import { ScrollText } from "./_sections/scroll-text";
import { Services } from "./_sections/services";
import { Stats } from "./_sections/stats";
import { Contact } from "./_sections/contact";
import { ContactUs } from "./_sections/contact-us";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  name: "Andrade Marinho Empreendimentos",
  url: "https://andrademarinho.com.br",
  logo: "https://andrademarinho.com.br/logotype-blue.svg",
  image: "https://andrademarinho.com.br/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Natal",
    addressRegion: "RN",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -5.7945,
    longitude: -35.211,
  },
  areaServed: {
    "@type": "City",
    name: "Natal",
  },
  priceRange: "$$$$",
  description:
    "Construtora de empreendimentos residenciais de alto padrão em Natal, RN. Apartamentos com localização estratégica, acabamento premium e solidez construtiva.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Andrade Marinho",
  url: "https://andrademarinho.com.br",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://andrademarinho.com.br/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const propertiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Empreendimentos Andrade Marinho em Natal RN",
  description:
    "Lista de empreendimentos residenciais de alto padrão da construtora Andrade Marinho em Natal, RN.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Residence",
        name: "Edifício Themis",
        description:
          "Residencial de alto padrão com apartamentos amplos em Lagoa Nova, Natal, RN.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Natal",
          addressRegion: "RN",
          neighborhood: "Lagoa Nova",
          addressCountry: "BR",
        },
        image: "https://andrademarinho.com.br/ventures/themis-1.jpg",
        url: "https://andrademarinho.com.br/#fale-conosco",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Residence",
        name: "Miguel Carrilho",
        description:
          "Apartamentos de sofisticação e conforto com localização privilegiada em Tirol, Natal, RN.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Natal",
          addressRegion: "RN",
          neighborhood: "Tirol",
          addressCountry: "BR",
        },
        image:
          "https://andrademarinho.com.br/ventures/miguel-carrilho-1.jpg",
        url: "https://andrademarinho.com.br/#fale-conosco",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Residence",
        name: "Residencial Dunas",
        description:
          "Design moderno e acabamento premium em Tirol, Natal, RN.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Natal",
          addressRegion: "RN",
          neighborhood: "Tirol",
          addressCountry: "BR",
        },
        image: "https://andrademarinho.com.br/ventures/dunas-1.jpg",
        url: "https://andrademarinho.com.br/#fale-conosco",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Residence",
        name: "Bosque Tirol",
        description:
          "Qualidade de vida em área nobre da cidade, Tirol, Natal, RN.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Natal",
          addressRegion: "RN",
          neighborhood: "Tirol",
          addressCountry: "BR",
        },
        image: "https://andrademarinho.com.br/ventures/bosque-tirol-1.jpg",
        url: "https://andrademarinho.com.br/#fale-conosco",
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quais são os empreendimentos da Andrade Marinho em Natal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Andrade Marinho possui 4 empreendimentos em Natal, RN: Edifício Themis (Lagoa Nova), Miguel Carrilho (Tirol), Residencial Dunas (Tirol) e Bosque Tirol (Tirol). Todos com alto padrão de acabamento e localização estratégica.",
      },
    },
    {
      "@type": "Question",
      name: "Como entrar em contato com a Andrade Marinho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você pode entrar em contato através do formulário em nosso site em andrademarinho.com.br. Nossa equipe de consultores responde com informações detalhadas sobre os empreendimentos disponíveis.",
      },
    },
    {
      "@type": "Question",
      name: "Em quais bairros de Natal a Andrade Marinho tem empreendimentos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Andrade Marinho atua nos bairros Tirol e Lagoa Nova, regiões nobres de Natal, RN, reconhecidas pela infraestrutura completa, valorização imobiliária e qualidade de vida.",
      },
    },
    {
      "@type": "Question",
      name: "A Andrade Marinho trabalha com apartamentos na planta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, a Andrade Marinho desenvolve projetos residenciais de alto padrão com acompanhamento completo desde o lançamento até a entrega das chaves, garantindo transparência e qualidade em cada etapa.",
      },
    },
    {
      "@type": "Question",
      name: "Quais são os diferenciais dos empreendimentos da Andrade Marinho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os empreendimentos da Andrade Marinho se destacam por localizações privilegiadas em bairros nobres de Natal, acabamento premium, solidez construtiva, design sofisticado e valorização do patrimônio do cliente.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertiesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ===============================
       * HERO
       * =============================== */}
      <Hero />

      {/* ===============================
       * PRESENTATION
       * =============================== */}
      <div className="bg-primary pb-40 md:pb-48 lg:pb-24">
        <Presentation />
      </div>

      {/* ===============================
       * GALLERY
       * =============================== */}
      <div className="-translate-y-50">
        {/* ===============================
         * ART BOARD GRID
         * =============================== */}
        <div className="relative container py-0! md:py-24! px-4 lg:px-12">
          <ArtBoardGrid />
        </div>

        {/* ===============================
         * SERVICES
         * =============================== */}
        <Services />

        {/* ===============================
         * CTA PRESENTATION
         * =============================== */}
        <CtaPresentation />

        {/* ===============================
         * RELEASES
         * =============================== */}
        <Releases />

        {/* ===============================
         * STATS
         * =============================== */}
        <Stats />

        {/* ===============================
         * ABOUT
         * =============================== */}
        <About />

        {/* ===============================
         * PROJECTS
         * =============================== */}
        <Projects />

        {/* ===============================
         * CONTACT
         * =============================== */}
        <Contact />
      </div>

      {/* ===============================
       * SCROLL TEXT
       * =============================== */}
      <ScrollText />

      {/* ===============================
       * CONTACT US (FORM)
       * =============================== */}
      <ContactUs />
    </div>
  );
}
