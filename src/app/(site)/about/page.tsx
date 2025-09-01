import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Prose } from "@/components/primitives/Prose";
import { getPageBySlug } from "@/lib/mdx";

export default function AboutPage() {
  const content = getPageBySlug("about");
  const title = "Meist";
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl font-semibold">{title}</h1>
        </Container>
      </Section>
      <Section size="md">
        <Container>
          <Prose>
            <pre>{content.slice(0, 600)}…</pre>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
