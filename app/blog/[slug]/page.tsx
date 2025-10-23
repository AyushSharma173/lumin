import { notFound } from "next/navigation";
import { getPostBySlug, listPostSlugs } from "@/lib/mdx";
import { MDXContent } from "@/components/MDXContent";

export function generateStaticParams() {
  return listPostSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const entry = getPostBySlug(params.slug);
  if (!entry) return notFound();

  return (
    <article>
      <header className="mb-8">
        <div className="text-sm text-zinc-500">{new Date(entry.meta.date).toLocaleDateString()}</div>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight">{entry.meta.title}</h1>
      </header>
      <MDXContent content={entry.content} />
    </article>
  );
}


