import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Payload;

  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();

  if (name.length < 2)
    return NextResponse.json({ error: "Name is too short." }, { status: 400 });
  if (!isEmail(email))
    return NextResponse.json({ error: "Email is invalid." }, { status: 400 });
  if (subject.length < 3)
    return NextResponse.json(
      { error: "Subject is too short." },
      { status: 400 },
    );
  if (message.length < 10)
    return NextResponse.json(
      { error: "Message is too short." },
      { status: 400 },
    );

  // TODO: send email / store in DB here
  console.log("[contact] new message:", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
