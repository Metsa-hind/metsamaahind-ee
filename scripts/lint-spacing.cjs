const fs = require("fs");
const path = require("path");
const IGNORED = new Set(["node_modules", ".next", ".git", "content"]);

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts|jsx|js)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const files = walk(process.cwd());
let errors = 0;

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const bad =
    /(className\s*=\s*{?["'][^"']*\b(m[bt])-\d+/m.test(src) ||
    /\bmargin(?:Top|Bottom)\s*:/.test(src);
  if (bad) {
    console.error(Spacing rule violation in: );
    errors++;
  }
}

if (errors) process.exit(1);
console.log("Spacing lint passed.");
