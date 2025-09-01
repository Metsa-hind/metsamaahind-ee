// app/(site)/[slug]/page.tsx
import { getPageBySlug } from "@/src/lib/mdx";
// If you render MDX, you’ll later feed the returned string to your MDX renderer.

export default async function Page({ params }: { params: { slug: string } }) {
  const source = getPageBySlug(params.slug); // string of MDX
  return (
    <main className="prose mx-auto p-6">
      <pre>{source.slice(0, 400)}…</pre>
      {/* Replace with your actual MDX component once ready */}
    </main>
  );
}
