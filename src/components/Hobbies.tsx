"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { hobbies } from "@/data/portfolio";

export default function Hobbies() {
  const [selected, setSelected] = useState<(typeof hobbies)[number] | null>(null);

  return (
    <section id="hobbies" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-purple-light">
          Beyond Work
        </h2>
        <h3 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          <span className="text-gradient-purple">Hobbies</span>
        </h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <button
              key={hobby.title}
              onClick={() => setSelected(hobby)}
              className="card-glow group overflow-hidden rounded-xl border border-purple-primary/10 bg-surface text-left"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-lg font-semibold text-foreground">
                    {hobby.title}
                  </h4>
                  <p className="mt-1 text-sm text-text-muted">
                    {hobby.description}
                  </p>
                </div>
                {/* Click hint */}
                <div className="absolute right-3 top-3 rounded-full bg-purple-primary/20 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <svg className="h-4 w-4 text-purple-light" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-purple-primary/20 bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-text-muted transition-colors hover:text-foreground"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-72 w-full md:h-96">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div className="p-6">
                <h4 className="mb-2 text-xl font-bold text-foreground">
                  {selected.title}
                </h4>
                <p className="text-base leading-relaxed text-text-muted">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
