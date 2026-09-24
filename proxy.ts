import { NextResponse, type NextRequest } from "next/server";

// Only "/" is unprefixed: send English-first browsers to /en, everyone else to /es.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const lang = accept.trim().toLowerCase().startsWith("en") ? "en" : "es";
  return NextResponse.redirect(new URL(`/${lang}`, request.url));
}

export const config = { matcher: "/" };
