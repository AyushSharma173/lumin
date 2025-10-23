import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt?: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

export const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export function listPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || "",
  };
  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  return listPostSlugs()
    .map((slug) => getPostBySlug(slug)!)
    .filter(Boolean)
    .map((p) => p.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}


