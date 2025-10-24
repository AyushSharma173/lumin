import { notFound } from "next/navigation";
import { getPostBySlug, listPostSlugs } from "@/lib/mdx";
import { MDXContent } from "@/components/MDXContent";

export function generateStaticParams() {
  return listPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getPostBySlug(slug);
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


