import { NextResponse } from "next/server";
import { ImovelLeadConfirmationEmail } from "@/emails/ImovelLeadConfirmationEmail";
import { ImovelLeadEmail } from "@/emails/ImovelLeadEmail";
import { resend } from "@/lib/resend";
import { imovelLeadSchema } from "@/schemas/imovel-lead.schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = imovelLeadSchema.safeParse(body);

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
        subject: `🏠 Novo lead — ${data.name}`,
        react: ImovelLeadEmail({ data }),
      }),
      resend.emails.send({
        from: process.env.CONTACT_EMAIL_FROM as string,
        to: [data.email],
        subject: "Recebemos seu interesse — Andrade Marinho",
        react: ImovelLeadConfirmationEmail({ data }),
      }),
    ]);

    if (internalResult.status === "rejected") {
      console.error(
        "[lead-imovel] internal email failed:",
        internalResult.reason,
      );
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    if (internalResult.value.error) {
      console.error("[lead-imovel] resend error:", internalResult.value.error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    if (
      confirmationResult.status === "rejected" ||
      (confirmationResult.status === "fulfilled" &&
        confirmationResult.value.error)
    ) {
      console.warn("[lead-imovel] confirmation email failed — skipping");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead-imovel] unexpected error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
