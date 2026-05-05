const DEFAULT_SITE_URL = "https://www.yakircohen.com";

function normalizeSiteUrl(value: string | undefined, fallback = DEFAULT_SITE_URL) {
  if (!value) {
    return fallback;
  }

  const markdownLinkMatch = value.match(/^\[([^\]]+)\]\([^)]+\)$/);
  const cleanValue = markdownLinkMatch?.[1] ?? value;
  const withProtocol = /^https?:\/\//i.test(cleanValue)
    ? cleanValue
    : `https://${cleanValue}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallback;
  }
}

const vercelPreviewUrl =
  process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"
    ? normalizeSiteUrl(process.env.VERCEL_URL)
    : undefined;

export const SITE_URL = normalizeSiteUrl(
  vercelPreviewUrl ?? process.env.NEXT_PUBLIC_SITE_URL
);

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(path, `${SITE_URL}/`).toString();
}
