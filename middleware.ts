import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import REDIRECTS from "@/data/redirections.json";

const SEMANTIC_REDIRECTS: Array<{ pattern: RegExp; target: string }> = [
  {
    pattern: /(chupa|chuppa|kupa|חתונה|כלה|חתן|bride|groom|wedding|weddings)/i,
    target: "/weddings/songs",
  },
];

const IGNORE_EXTENSIONS = /\.(?:ico|png|jpg|jpeg|webp|svg|css|js|json|xml|txt)$/i;
const IGNORED_PATHS = ["/search", "/weddings/songs"];

function safeDecode(path: string) {
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

function normalizePath(path: string) {
  return path.toLowerCase().replace(/\/+$/, "");
}

function findRedirect(pathname: string) {
  if (REDIRECTS[pathname]) {
    return REDIRECTS[pathname];
  }

  for (const [key, target] of Object.entries(REDIRECTS)) {
    if (pathname === key || pathname.startsWith(`${key}/`)) {
      return target;
    }
  }

  return null;
}

function extractSearchKeywords(pathname: string) {
  const clean = pathname.replace(/^\//, "");
  if (!clean) return null;

  const words = clean
    .split(/[-_/]+/)
    .map((segment) => segment.replace(/[^\p{L}\p{N}]+/gu, " ").trim())
    .filter(Boolean);

  const stopWords = new Set(["page", "old", "new", "www", "com", "il"]);
  const keywords = words.filter((word) => !stopWords.has(word.toLowerCase()));

  return keywords.length > 0 ? encodeURIComponent(keywords.join(" ")) : null;
}

export function middleware(request: NextRequest) {
  const rawPathname = request.nextUrl.pathname;
  const decodedPathname = safeDecode(rawPathname);
  const pathname = normalizePath(decodedPathname);

  if (IGNORE_EXTENSIONS.test(pathname)) {
    return NextResponse.next();
  }

  if (IGNORED_PATHS.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return NextResponse.next();
  }

  const directTarget = findRedirect(pathname);
  if (directTarget) {
    const url = request.nextUrl.clone();
    url.pathname = directTarget;
    url.searchParams.set("ref", "old_site");
    return NextResponse.redirect(url, 308);
  }

  for (const redirect of SEMANTIC_REDIRECTS) {
    if (redirect.pattern.test(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = redirect.target;
      url.searchParams.set("ref", "old_site");
      return NextResponse.redirect(url, 308);
    }
  }

  /* נתיבי אפליקציה תקינים תחת /studio — לא להפנות לחיפוש רך (אחרת עמודים כמו recording-song-modiin נחטפים) */
  if (pathname === "/studio" || pathname.startsWith("/studio/")) {
    return NextResponse.next();
  }

  const searchKeywords = extractSearchKeywords(pathname);
  if (searchKeywords) {
    const url = request.nextUrl.clone();
    url.pathname = "/search";
    url.search = new URLSearchParams({
      q: decodeURIComponent(searchKeywords),
      soft_redirect: "true",
      ref: "old_site",
    }).toString();
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
