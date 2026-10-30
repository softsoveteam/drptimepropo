import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_COOKIE, isValidAccessToken } from "@/lib/auth";

const PUBLIC_PATHS = ["/access", "/api/access", "/robots.txt", "/sitemap.xml"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(ACCESS_COOKIE)?.value;
  const authed = isValidAccessToken(token);

  if (pathname === "/access" && authed) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`)) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.(?:png|jpg|jpeg|gif|webp|svg|ico|txt|xml)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (authed) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/access";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
