export function trimTrailingSlash(u: string) {
  return u && u.endsWith("/") ? u.slice(0, -1) : (u || "");
}

export const BASE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_BASE_URL || "https://metsamaahind.ee"
);

export const LinkRegistry: Record<string, { slug: string; title?: string }> = {};

export function absUrl(slugOrPath: string) {
  if (!slugOrPath) return BASE_URL;
  const lower = slugOrPath.toLowerCase();
  if (lower.startsWith("http://") || lower.startsWith("https://")) return slugOrPath;
  const path = slugOrPath.startsWith("/") ? slugOrPath : "/" + slugOrPath;
  return BASE_URL + path;
}
