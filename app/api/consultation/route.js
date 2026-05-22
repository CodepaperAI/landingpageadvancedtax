import { Resend } from "resend";

const requiredFields = ["name", "phone", "email", "businessType", "service"];

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(data) {
  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Business type", data.businessType],
    ["Service", data.service],
    ["Message", data.message || "No message provided"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #15181b; line-height: 1.6; background: #fbfaf6; padding: 28px;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e4dfd2; border-radius: 8px; overflow: hidden;">
        <div style="background: #0f1f2e; color: #ffffff; padding: 24px 28px;">
          <p style="margin: 0 0 6px; color: #c9a961; font-weight: 700; text-transform: uppercase; font-size: 12px;">AdvancedTax consultation enquiry</p>
          <h1 style="margin: 0; font-size: 24px; line-height: 1.2;">New small business accounting lead</h1>
        </div>
        <div style="padding: 24px 28px;">
          ${rows
            .map(
              ([label, value]) => `
                <div style="padding: 14px 0; border-bottom: 1px solid #eee8dc;">
                  <strong style="display: block; color: #0f1f2e; font-size: 13px;">${label}</strong>
                  <span style="display: block; margin-top: 4px; color: #3d4852;">${escapeHtml(value).replaceAll("\n", "<br />")}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function buildEmailText(data) {
  return [
    "New AdvancedTax consultation enquiry",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Business type: ${data.businessType}`,
    `Service: ${data.service}`,
    `Message: ${data.message || "No message provided"}`,
  ].join("\n");
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const data = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    businessType: clean(body.businessType),
    service: clean(body.service),
    message: clean(body.message),
  };

  const missingField = requiredFields.find((field) => !data[field]);

  if (missingField) {
    return Response.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(data.email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { message: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM_EMAIL || "AdvancedTax <consultation@updates.advancedtax.com.au>";
  const to = process.env.RESEND_TO_EMAIL || "info@advancedtax.com.au";

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New consultation enquiry from ${data.name}`,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      {
        message:
          error?.message || "Unable to send your enquiry right now. Please try again.",
      },
      { status: 502 }
    );
  }
}
