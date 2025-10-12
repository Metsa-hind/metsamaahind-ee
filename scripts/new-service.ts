import fs from "fs";
import path from "path";

function slugify(input: string) {
  return input.toLowerCase().trim()
    .replace(/[^a-z0-9äöüõšž\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const [, , rawSlug, rawTitle] = process.argv;
if (!rawSlug || !rawTitle) {
  console.error('Usage: pnpm new:service "slug-or-title" "Title"');
  process.exit(1);
}

const slug = rawSlug.includes(" ") ? slugify(rawSlug) : rawSlug;
const title = rawTitle;

const file = path.join(process.cwd(), "content", "services", ${slug}.mdx);
if (fs.existsSync(file)) {
  console.error("File already exists:", file);
  process.exit(1);
}

const template = ---
title: ""
description: ""
canonical: "https://metsamaahind.ee/"
ogImage: ""
faq: []
related: []
---

<!-- Paste your content here (MDX or raw HTML). -->
;

fs.writeFileSync(file, template, "utf8");
console.log("Created:", file);
