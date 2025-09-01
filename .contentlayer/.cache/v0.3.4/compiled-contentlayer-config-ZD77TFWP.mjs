// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var ServicePage = defineDocumentType(() => ({
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
    url: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath.replace(/^services\//, "")}` }
  }
}));
var PageDoc = defineDocumentType(() => ({
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
    url: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath.replace(/^pages\//, "")}` }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [ServicePage, PageDoc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }]
    ]
  }
});
export {
  PageDoc,
  ServicePage,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZD77TFWP.mjs.map
