import { Column, Row, Text } from "@react-email/components";

interface EmailFieldProps {
  label: string;
  value: string;
}

export function EmailField({ label, value }: EmailFieldProps) {
  return (
    <Row style={{ marginBottom: "16px" }}>
      <Column>
        <Text
          style={{
            fontSize: "10px",
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: "700",
            margin: "0 0 3px",
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            fontSize: "15px",
            color: "#111827",
            margin: 0,
            lineHeight: "1.5",
          }}
        >
          {value}
        </Text>
      </Column>
    </Row>
  );
}
