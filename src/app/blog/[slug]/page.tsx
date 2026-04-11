import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// Custom components for MDX rendering with proper styling
const mdxComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="mb-6 mt-10 text-3xl font-bold text-foreground" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-foreground" {...props} />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <h4 className="mb-2 mt-6 text-lg font-semibold text-foreground" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-4 text-base leading-relaxed text-text-muted" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-4 ml-6 list-disc space-y-1" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="text-base leading-relaxed text-text-muted" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-purple-light underline hover:text-purple-primary" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="my-4 border-l-4 border-purple-primary/40 pl-4 italic text-text-muted/80" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="italic text-text-muted/80" {...props} />
  ),
  img: (props: React.ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 w-full h-auto rounded-xl border border-purple-primary/10" alt={props.alt ?? ""} {...props} />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm text-text-muted" {...props} />
    </div>
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="border border-purple-primary/20 bg-surface px-4 py-2 text-left font-semibold text-foreground" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="border border-purple-primary/10 px-4 py-2" {...props} />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
        <div className="relative mb-10 w-full overflow-hidden rounded-xl border border-purple-primary/10">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content — rendered from markdown */}
        <div className="prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
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
