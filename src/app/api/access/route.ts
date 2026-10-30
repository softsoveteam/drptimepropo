import { NextResponse } from "next/server";
import {
  ACCESS_COOKIE,
  ACCESS_TOKEN,
  SITE_PASSWORD,
} from "@/lib/auth";

export async function POST(request: Request) {
  let password = "";
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as { password?: string };
    password = body.password?.trim() ?? "";
  } else {
    const form = await request.formData();
    password = String(form.get("password") ?? "").trim();
  }

  if (password !== SITE_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Incorrect password" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: ACCESS_TOKEN,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
