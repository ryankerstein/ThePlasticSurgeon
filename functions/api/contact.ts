// Cloudflare Pages Function: POST /api/contact
// Replaces the Express contact route. Validates the enquiry and emails it
// to Gemma Fowler and Ryan Kerstein via Mailjet. Nothing is stored, and
// enquiry details are never written to the logs.

interface Env {
  MAILJET_API_KEY?: string;
  MAILJET_API_SECRET?: string;
}

interface Context {
  request: Request;
  env: Env;
}

const RECIPIENTS = [
  { Email: "gemma.fowler5@nhs.net", Name: "Gemma Fowler" },
  { Email: "ryan@thesurgeon.io", Name: "Ryan Kerstein" },
];

const LIMITS: Record<string, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  service: 200,
  message: 5000,
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function onRequestPost(context: Context): Promise<Response> {
  const { request, env } = context;

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ success: false, message: "Please check your form and try again." }, 400);
  }

  const inquiry = {
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    email: clean(body.email),
    phone: clean(body.phone),
    service: clean(body.service),
    message: clean(body.message),
  };

  const errors: string[] = [];
  for (const field of ["firstName", "lastName", "email", "message"] as const) {
    if (!inquiry[field]) errors.push(`${field} is required`);
  }
  for (const [field, limit] of Object.entries(LIMITS)) {
    if (inquiry[field as keyof typeof inquiry].length > limit) {
      errors.push(`${field} is too long`);
    }
  }
  if (inquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    errors.push("email is not valid");
  }
  if (errors.length > 0) {
    return json(
      { success: false, message: "Please check your form and try again.", errors },
      400,
    );
  }

  if (!env.MAILJET_API_KEY || !env.MAILJET_API_SECRET) {
    console.error("Mailjet credentials are not configured");
    return json(
      {
        success: false,
        message: "There was an error submitting your inquiry. Please try again.",
      },
      500,
    );
  }

  const received = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const emailContent = `
New Contact Inquiry Received

Patient Details:
- Name: ${inquiry.firstName} ${inquiry.lastName}
- Email: ${inquiry.email}
- Phone: ${inquiry.phone || "Not provided"}
- Service Interest: ${inquiry.service || "General consultation"}

Message:
${inquiry.message}

Inquiry received: ${received}

---
This inquiry was submitted through the Plastic Surgery Specialist website.
  `.trim();

  const response = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${env.MAILJET_API_KEY}:${env.MAILJET_API_SECRET}`)}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: "noreply@theplasticsurgeon.io", Name: "Plastic Surgery Specialist" },
          To: RECIPIENTS,
          ReplyTo: { Email: inquiry.email, Name: `${inquiry.firstName} ${inquiry.lastName}` },
          Subject: `New Patient Inquiry - ${inquiry.firstName} ${inquiry.lastName}`,
          TextPart: emailContent,
        },
      ],
    }),
  });

  if (!response.ok) {
    console.error("Mailjet send failed with status", response.status);
    return json(
      {
        success: false,
        message: "There was an error submitting your inquiry. Please try again.",
      },
      502,
    );
  }

  return json({
    success: true,
    message: "Thank you for your inquiry. Gemma Fowler will contact you shortly.",
  });
}
