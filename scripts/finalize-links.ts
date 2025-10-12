import fs from "fs";
import path from "path";

const base = (process.env.NEXT_PUBLIC_BASE_URL || "https://metsamaahind.ee/").replace(/\/$/, "");
const contentRoot = path.join(process.cwd(), "content");

function walk(dir: string, acc: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, acc);
    else if (p.endsWith(".mdx")) acc.push(p);
  }
  return acc;
}

const files = walk(contentRoot);
let changes = 0;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const before = src;
  src = src.replace(/href=["'](\/[a-z0-9\-\/]+)["']/gi, (m, p1) => href="");
  src = src.replace(/\((\/[a-z0-9\-\/]+)\)/gi, (m, p1) => ());
  if (src !== before) {
    fs.writeFileSync(file, src, "utf8");
    console.log("Updated links:", file);
    changes++;
  }
}
console.log(Done. Files updated: );
