"use client";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import { use } from "react";
import Chart from "./Chart";

export function MDXContent({ content }: { content: string }) {
  const mdxSource = use(
    serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          rehypeKatex,
        ],
      },
    })
  );

  return (
    <div className="prose prose-invert">
      <MDXRemote {...mdxSource} components={{ Chart }} />
    </div>
  );
}

