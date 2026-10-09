import { Resend } from "resend";

// Read configuration only when handling a submission, never during the build.
export function getEmailService() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_EMAIL_FROM?.trim();
  const to = process.env.CONTACT_EMAIL_TO?.trim();

  if (!apiKey || !from || !to) {
    return null;
  }

  return { client: new Resend(apiKey), from, to };
}
