import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal do Corretor",
  description:
    "Cadastre-se no portal exclusivo para corretores parceiros da Andrade Marinho. Acesse empreendimentos de alto padrão, comissões competitivas e suporte dedicado.",
  alternates: {
    canonical: "/portal-do-corretor",
  },
};

export default function PortalDoCorretorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
