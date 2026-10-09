import { Heading, Hr, Section, Text } from "@react-email/components";
import type { ImovelLeadInput } from "@/schemas/imovel-lead.schema";
import { EmailLayout } from "./components/EmailLayout";

interface Props {
  data: ImovelLeadInput;
}

export function ImovelLeadConfirmationEmail({ data }: Props) {
  const firstName = data.name.split(" ")[0];

  return (
    <EmailLayout previewText="Recebemos seu interesse — Andrade Marinho">
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
        Recebemos o seu interesse e ficamos muito felizes em poder ajudar você a
        encontrar o imóvel ideal.
      </Text>

      <Text
        style={{
          fontSize: "15px",
          color: "#374151",
          lineHeight: "1.75",
          margin: "0 0 32px",
        }}
      >
        Nossa equipe de especialistas entrará em contato em{" "}
        <strong>até 1 dia útil</strong> para entender melhor o seu perfil e
        apresentar as melhores opções disponíveis.
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
          Resumo do seu contato
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
          <strong>Telefone:</strong> {data.phone}
          <br />
          <strong>Mensagem:</strong> {data.message}
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
        Se preferir, entre em contato direto pelo{" "}
        <strong>(84) 98833-0213</strong> ou pelo telefone{" "}
        <strong>(84) 3231-8338</strong>.
      </Text>
    </EmailLayout>
  );
}
