import { Heading, Hr, Link, Section, Text } from "@react-email/components";
import type { ImovelLeadInput } from "@/schemas/imovel-lead.schema";
import { EmailField } from "./components/EmailField";
import { EmailLayout } from "./components/EmailLayout";

interface Props {
  data: ImovelLeadInput;
}

export function ImovelLeadEmail({ data }: Props) {
  const now = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <EmailLayout previewText={`Novo lead — ${data.name}`}>
      <Heading
        style={{
          fontSize: "22px",
          color: "#111827",
          fontWeight: "700",
          margin: "0 0 6px",
        }}
      >
        🏠 Novo Lead — Encontre seu Imóvel
      </Heading>
      <Text style={{ fontSize: "13px", color: "#9ca3af", margin: "0 0 28px" }}>
        {now}
      </Text>

      <Hr style={{ borderColor: "#e5e7eb", margin: "0 0 24px" }} />

      <Section>
        <Text
          style={{
            fontSize: "10px",
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: "700",
            margin: "0 0 16px",
          }}
        >
          Dados do contato
        </Text>
        <EmailField label="Nome" value={data.name} />
        <EmailField label="E-mail" value={data.email} />
        <EmailField label="Telefone" value={data.phone} />
      </Section>

      <Hr style={{ borderColor: "#e5e7eb", margin: "8px 0 24px" }} />

      <Section>
        <Text
          style={{
            fontSize: "10px",
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: "700",
            margin: "0 0 12px",
          }}
        >
          Mensagem
        </Text>
        <Text
          style={{
            fontSize: "15px",
            color: "#374151",
            lineHeight: "1.7",
            backgroundColor: "#f9fafb",
            padding: "16px 20px",
            margin: 0,
            borderLeft: "3px solid #2d3d5a",
          }}
        >
          {data.message}
        </Text>
      </Section>

      <Hr style={{ borderColor: "#e5e7eb", margin: "28px 0 20px" }} />

      <Text style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>
        Para responder ao lead, clique em <strong>Responder</strong> — a
        mensagem irá para{" "}
        <Link
          href={`mailto:${data.email}`}
          style={{ color: "#2d3d5a", textDecoration: "underline" }}
        >
          {data.email}
        </Link>
        .
      </Text>
    </EmailLayout>
  );
}
