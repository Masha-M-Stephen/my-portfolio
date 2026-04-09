"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/portfolio";
import type { BlogCategory } from "@/data/portfolio";

export default function Blog() {
  const [active, setActive] = useState<BlogCategory>("All");

  const filtered =
    active === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === active);

  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-purple-light">
          Insights & Articles
        </h2>
        <h3 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          <span className="text-gradient-purple">Blog</span>
        </h3>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-purple-primary text-white shadow-lg shadow-purple-primary/25"
                  : "border border-purple-primary/20 text-text-muted hover:border-purple-primary/40 hover:text-purple-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="card-glow group overflow-hidden rounded-xl border border-purple-primary/10 bg-surface"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-purple-primary/10 px-3 py-1 text-xs font-medium text-purple-light">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">{post.date}</span>
                </div>
                <h4 className="mb-2 text-base font-semibold text-foreground group-hover:text-purple-light transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-purple-primary">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
