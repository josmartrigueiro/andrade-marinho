import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";
import type { ReactNode } from "react";

const PRIMARY = "#2d3d5a";
const BACKGROUND = "#f4f5f7";

interface EmailLayoutProps {
  previewText?: string;
  children: ReactNode;
}

export function EmailLayout({ previewText, children }: EmailLayoutProps) {
  return (
    <Html lang="pt-BR">
      <Head />
      {previewText && <Preview>{previewText}</Preview>}
      <Body
        style={{
          backgroundColor: BACKGROUND,
          fontFamily: "Arial, Helvetica, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Header */}
        <Section style={{ backgroundColor: PRIMARY }}>
          <Container style={{ maxWidth: "600px", padding: "24px 32px" }}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "700",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                margin: 0,
                textAlign: "center",
              }}
            >
              Andrade Marinho
            </Text>
            <Text
              style={{
                color: "#8faabf",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                margin: "4px 0 0",
                textAlign: "center",
              }}
            >
              Construtora
            </Text>
          </Container>
        </Section>

        {/* Content */}
        <Container
          style={{
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            padding: "40px 36px",
          }}
        >
          {children}
        </Container>

        {/* Footer */}
        <Container style={{ maxWidth: "600px", padding: "20px 36px 32px" }}>
          <Text
            style={{
              color: "#9ca3af",
              fontSize: "11px",
              textAlign: "center",
              margin: 0,
              borderTop: "1px solid #e5e7eb",
              paddingTop: "20px",
            }}
          >
            Andrade Marinho Construtora · Natal, RN
          </Text>
          <Text
            style={{
              color: "#9ca3af",
              fontSize: "11px",
              textAlign: "center",
              margin: "4px 0 0",
            }}
          >
            (84) 98833-0213 · (84) 3231-8338
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
