import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <div className="mt-8 grid gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 dark:bg-black/40">
            <div className="text-sm text-zinc-500">{new Date(p.date).toLocaleDateString()}</div>
            <h2 className="mt-1 text-xl font-semibold group-hover:underline group-hover:underline-offset-4">{p.title}</h2>
            {p.excerpt && <p className="mt-2 text-zinc-500">{p.excerpt}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}


