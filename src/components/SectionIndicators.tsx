"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "blog", label: "Blog" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

export default function SectionIndicators() {
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Show indicators only after scrolling past hero
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
          aria-label={`Go to ${label}`}
        >
          {/* Label — shows on hover */}
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 ${
              activeSection === id
                ? "bg-purple-primary/20 text-purple-light"
                : "bg-surface text-text-muted"
            }`}
          >
            {label}
          </span>

          {/* Dot */}
          <span
            className={`block rounded-full transition-all ${
              activeSection === id
                ? "h-3 w-3 bg-purple-primary shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                : "h-2 w-2 bg-text-muted/40 group-hover:bg-purple-light/60"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
