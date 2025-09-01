import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const ServicePage = defineDocumentType(() => ({
  name: "ServicePage",
  filePathPattern: "services/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    canonical: { type: "string" },
    ogImage: { type: "string" },
    faq: { type: "list", of: { type: "json" } },
    related: { type: "list", of: { type: "json" } }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.flattenedPath.replace(/^services\//, "") },
    url:  { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath.replace(/^services\//, "")}` }
  }
}));

export const PageDoc = defineDocumentType(() => ({
  name: "PageDoc",
  filePathPattern: "pages/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    canonical: { type: "string" }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.flattenedPath.replace(/^pages\//, "") },
    url:  { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath.replace(/^pages\//, "")}` }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ServicePage, PageDoc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }]
    ]
  }
});
