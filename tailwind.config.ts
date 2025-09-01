import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: { extend: {} },
  plugins: []
} satisfies Config;