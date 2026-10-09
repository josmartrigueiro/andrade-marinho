import { Heading, Hr, Section, Text } from "react-email";
import type { CorretorLeadInput } from "@/schemas/corretor-lead.schema";
import { EmailLayout } from "./components/EmailLayout";

interface Props {
  data: CorretorLeadInput;
}

export function CorretorLeadConfirmationEmail({ data }: Props) {
  const firstName = data.name.split(" ")[0];

  return (
    <EmailLayout previewText="Cadastro recebido — Portal do Corretor | Andrade Marinho">
      <Heading
        style={{
          fontSize: "22px",
          color: "#111827",
          fontWeight: "700",
          margin: "0 0 20px",
        }}
      >
        Olá, {firstName}!
      </Heading>

      <Text
        style={{
          fontSize: "15px",
          color: "#374151",
          lineHeight: "1.75",
          margin: "0 0 16px",
        }}
      >
        Recebemos o seu cadastro no Portal do Corretor da Andrade Marinho.
        Estamos animados em ter você como parceiro!
      </Text>

      <Text
        style={{
          fontSize: "15px",
          color: "#374151",
          lineHeight: "1.75",
          margin: "0 0 32px",
        }}
      >
        Nossa equipe comercial entrará em contato em{" "}
        <strong>até 1 dia útil</strong> com as próximas etapas do processo de
        parceria.
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
            margin: "0 0 12px",
          }}
        >
          Dados do seu cadastro
        </Text>
        <Text
          style={{
            fontSize: "14px",
            color: "#374151",
            lineHeight: "2",
            backgroundColor: "#f9fafb",
            padding: "16px 20px",
            margin: 0,
          }}
        >
          <strong>Nome:</strong> {data.name}
          <br />
          <strong>CPF:</strong> {data.cpf}
          <br />
          <strong>CRECI:</strong> {data.creci}
          <br />
          <strong>Telefone:</strong> {data.phone}
        </Text>
      </Section>

      <Hr style={{ borderColor: "#e5e7eb", margin: "28px 0 20px" }} />

      <Text
        style={{
          fontSize: "13px",
          color: "#9ca3af",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        Dúvidas? Entre em contato pelo <strong>(84) 98833-0213</strong> ou pelo
        telefone <strong>(84) 3231-8338</strong>.
      </Text>
    </EmailLayout>
  );
}
