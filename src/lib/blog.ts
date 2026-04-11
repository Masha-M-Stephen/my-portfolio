import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPostMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

/**
 * Get all blog post metadata (for listing pages).
 * Reads frontmatter from every .md file in the blog content directory.
 */
export function getAllBlogPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_CONTENT_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      title: data.title ?? "",
      slug: data.slug ?? file.replace(/\.md$/, ""),
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Uncategorized",
      image: data.image ?? "/images/project-placeholder.svg",
    } satisfies BlogPostMeta;
  });

  // Sort by date descending (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug, including its raw markdown content.
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: data.title ?? "",
    slug: data.slug ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "Uncategorized",
    image: data.image ?? "/images/project-placeholder.svg",
    content,
  };
}

/**
 * Get all unique categories from blog posts (with "All" prepended).
 */
export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set(posts.map((p) => p.category));
  return ["All", ...Array.from(categories).sort()];
}

/**
 * Get all slugs (for generateStaticParams).
 */
export function getAllBlogSlugs(): string[] {
  const files = fs.readdirSync(BLOG_CONTENT_DIR).filter((f) => f.endsWith(".md"));
  return files.map((f) => f.replace(/\.md$/, ""));
}
