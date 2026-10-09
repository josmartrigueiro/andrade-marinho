import { NextResponse } from "next/server";
import { CorretorLeadConfirmationEmail } from "@/emails/CorretorLeadConfirmationEmail";
import { CorretorLeadEmail } from "@/emails/CorretorLeadEmail";
import { resend } from "@/lib/resend";
import { corretorLeadSchema } from "@/schemas/corretor-lead.schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = corretorLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const data = parsed.data;

    const [internalResult, confirmationResult] = await Promise.allSettled([
      resend.emails.send({
        from: process.env.CONTACT_EMAIL_FROM as string,
        to: [process.env.CONTACT_EMAIL_TO as string],
        replyTo: data.email,
        subject: `🤝 Novo corretor — ${data.name}`,
        react: CorretorLeadEmail({ data }),
      }),
      resend.emails.send({
        from: process.env.CONTACT_EMAIL_FROM as string,
        to: [data.email],
        subject: "Cadastro recebido — Portal do Corretor | Andrade Marinho",
        react: CorretorLeadConfirmationEmail({ data }),
      }),
    ]);

    if (internalResult.status === "rejected") {
      console.error(
        "[lead-corretor] internal email failed:",
        internalResult.reason,
      );
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    if (internalResult.value.error) {
      console.error(
        "[lead-corretor] resend error:",
        internalResult.value.error,
      );
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    if (
      confirmationResult.status === "rejected" ||
      (confirmationResult.status === "fulfilled" &&
        confirmationResult.value.error)
    ) {
      console.warn("[lead-corretor] confirmation email failed — skipping");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead-corretor] unexpected error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
