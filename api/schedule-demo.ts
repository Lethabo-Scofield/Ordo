import { Resend } from "resend";

interface DemoRequestBody {
  name?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  useCase?: string;
  message?: string;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CAREERS_TO_EMAIL;

  if (!apiKey || !to) {
    res.status(503).json({
      ok: false,
      error:
        "Demo requests aren't wired up yet. Please email us directly while we get this hooked up.",
    });
    return;
  }

  let body: DemoRequestBody = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    res.status(400).json({ ok: false, error: "Invalid JSON body" });
    return;
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const company = (body.company ?? "").toString().trim();
  const teamSize = (body.teamSize ?? "").toString().trim();
  const useCase = (body.useCase ?? "").toString().trim();
  const message = (body.message ?? "").toString().trim();

  if (!name || !email || !company) {
    res.status(400).json({ ok: false, error: "Name, email and company are required." });
    return;
  }

  if (!isEmail(email)) {
    res.status(400).json({ ok: false, error: "Please enter a valid email address." });
    return;
  }

  if (name.length > 120 || company.length > 200 || message.length > 4000) {
    res.status(400).json({ ok: false, error: "One of the fields is too long." });
    return;
  }

  const resend = new Resend(apiKey);
  const subject = `New Ordo demo request - ${name} (${company})`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Helvetica, Arial, sans-serif; color:#0a0a0a; line-height:1.55; max-width:560px;">
      <h2 style="margin:0 0 16px; font-size:20px;">New demo request</h2>
      <table style="border-collapse:collapse; width:100%; font-size:14px;">
        <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Name</td><td style="padding:6px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Company</td><td style="padding:6px 0;">${escapeHtml(company)}</td></tr>
        ${teamSize ? `<tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Team size</td><td style="padding:6px 0;">${escapeHtml(teamSize)}</td></tr>` : ""}
        ${useCase ? `<tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Use case</td><td style="padding:6px 0;">${escapeHtml(useCase)}</td></tr>` : ""}
      </table>
      ${message ? `<div style="margin-top:18px;"><div style="color:#6b7280; font-size:14px; margin-bottom:6px;">Message</div><div style="white-space:pre-wrap; padding:12px 14px; background:#f5f5f4; border-radius:10px; font-size:14px;">${escapeHtml(message)}</div></div>` : ""}
      <p style="margin-top:24px; color:#9ca3af; font-size:12px;">Sent from the Ordo website demo form.</p>
    </div>
  `;
  const text = [
    `New Ordo demo request`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    teamSize ? `Team size: ${teamSize}` : null,
    useCase ? `Use case: ${useCase}` : null,
    message ? `\nMessage:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Ordo Demo <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(502).json({ ok: false, error: "Could not send your request. Please try again." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("schedule-demo error:", err);
    res.status(500).json({ ok: false, error: "Unexpected error. Please try again." });
  }
}
