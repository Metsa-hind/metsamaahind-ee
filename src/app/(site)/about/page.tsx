import { notFound } from "next/navigation";
import { SEO } from "@/components/seo/SEO";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Prose } from "@/components/primitives/Prose";
import { getPageBySlug, mdxOptions } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function AboutPage() {
  const { data, content } = getPageBySlug("about");
  if (!data?.title) return notFound();
  return (
    <>
      <SEO />
      <Section>
        <Container>
          <h1 className="text-h1 font-semibold">{data.title}</h1>
          {data.description && <p className="text-body mt-4">{data.description}</p>}
        </Container>
      </Section>
      <Section size="md">
        <Container>
          <Prose>
            <MDXRemote source={content} options={mdxOptions} />
          </Prose>
        </Container>
      </Section>
    </>
  );
}
