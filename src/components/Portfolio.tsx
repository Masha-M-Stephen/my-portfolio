"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import type { PortfolioCategory } from "@/data/portfolio";

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-purple-light">
          My Work
        </h2>
        <h3 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          <span className="text-gradient-purple">Portfolio</span>
        </h3>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-purple-primary text-white shadow-lg shadow-purple-primary/25"
                  : "border border-purple-primary/20 text-text-muted hover:border-purple-primary/40 hover:text-purple-light"
              }`}
            >
              {cat === "Analytics" ? "Analytics (Visualizations)" : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow group overflow-hidden rounded-xl border border-purple-primary/10 bg-surface"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-purple-primary/10 px-3 py-1 text-xs font-medium text-purple-light">
                  {item.category}
                </span>
                <h4 className="mb-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
