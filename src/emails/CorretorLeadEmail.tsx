import { Heading, Hr, Link, Section, Text } from "react-email";
import type { CorretorLeadInput } from "@/schemas/corretor-lead.schema";
import { EmailField } from "./components/EmailField";
import { EmailLayout } from "./components/EmailLayout";

interface Props {
  data: CorretorLeadInput;
}

export function CorretorLeadEmail({ data }: Props) {
  const now = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <EmailLayout previewText={`Novo corretor — ${data.name}`}>
      <Heading
        style={{
          fontSize: "22px",
          color: "#111827",
          fontWeight: "700",
          margin: "0 0 6px",
        }}
      >
        🤝 Novo Cadastro — Portal do Corretor
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
          Dados do corretor
        </Text>
        <EmailField label="Nome" value={data.name} />
        <EmailField label="E-mail" value={data.email} />
        <EmailField label="Telefone" value={data.phone} />
        <EmailField label="CPF" value={data.cpf} />
        <EmailField label="CRECI" value={data.creci} />
      </Section>

      <Hr style={{ borderColor: "#e5e7eb", margin: "8px 0 20px" }} />

      <Text style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>
        Para responder ao corretor, clique em <strong>Responder</strong> — a
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
