// src/lib/mdx.ts
// Minimal MDX helpers: plain Node APIs, no fancy TS features so SWC won't choke.

import fs from "node:fs";
import path from "node:path";

const contentRoot = path.join(process.cwd(), "content");

function readMdx(relPath: string): string {
  const full = path.join(contentRoot, relPath);
  return fs.readFileSync(full, "utf8");
}

export function getServiceBySlug(slug: string): string {
  // reads: /content/services/<slug>.mdx
  return readMdx(path.join("services", `${slug}.mdx`));
}

export function getPageBySlug(slug: string): string {
  // reads: /content/pages/<slug>.mdx
  return readMdx(path.join("pages", `${slug}.mdx`));
}
