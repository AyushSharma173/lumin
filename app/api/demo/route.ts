import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, useCase, message, website } = body || {};

    if (website) {
      // honeypot triggered
      return NextResponse.json({ ok: true });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const to = process.env.DEMO_TO_EMAIL || "";
    if (!to) {
      return NextResponse.json({ error: "DEMO_TO_EMAIL not configured" }, { status: 500 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return NextResponse.json({ error: "SMTP not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Demo request — ${name} (${company || "no company"})`;
    const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || ""}\nUse case: ${useCase || ""}\n\nMessage:\n${message || ""}`;
    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.6">
        <h2>New demo request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "")}</p>
        <p><strong>Use case:</strong> ${escapeHtml(useCase || "")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message || "").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await transporter.sendMail({ from: user, to, subject, text, html });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Internal error" }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


