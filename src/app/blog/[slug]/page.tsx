import { blogPosts } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-8">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-purple-light"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-purple-primary/10 px-3 py-1 text-xs font-medium text-purple-light">
              {post.category}
            </span>
            <span className="text-xs text-text-muted">{post.date}</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="text-lg text-text-muted">{post.excerpt}</p>
        </div>

        {/* Featured image */}
        <div className="relative mb-10 h-64 w-full overflow-hidden rounded-xl border border-purple-primary/10 md:h-80">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose-custom">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("- ")) {
              return (
                <li key={i} className="ml-6 list-disc text-base leading-relaxed text-text-muted">
                  {trimmed.replace("- ", "")}
                </li>
              );
            }
            if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
              return (
                <p key={i} className="mt-6 text-sm italic text-text-muted/70">
                  {trimmed.replace(/\*/g, "")}
                </p>
              );
            }
            return (
              <p key={i} className="mb-4 text-base leading-relaxed text-text-muted">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Bottom nav */}
        <div className="mt-16 border-t border-purple-primary/10 pt-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 rounded-full border border-purple-primary/40 px-5 py-2 text-sm font-medium text-purple-light transition-all hover:border-purple-primary hover:bg-purple-primary/10"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            All Posts
          </Link>
        </div>
      </article>
    </div>
  );
}
