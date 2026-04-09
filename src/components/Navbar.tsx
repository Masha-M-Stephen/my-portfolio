"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // Track which section is in view
    const sectionIds = [...navLinks.map((l) => l.href.replace("#", "")), "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-purple-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-purple-primary/30">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-lg font-bold text-gradient-purple">
            {personalInfo.name.split(" ")[0]}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-purple-primary font-medium"
                    : "text-text-muted hover:text-purple-light"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className={`ml-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeSection === "contact"
                ? "bg-purple-primary text-white shadow-lg shadow-purple-primary/25"
                : "border border-purple-primary/40 text-purple-light hover:border-purple-primary hover:bg-purple-primary/10"
            }`}
          >
            Let&apos;s Connect
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-purple-primary/10 bg-[#0a0a0f]/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-purple-primary font-medium"
                      : "text-text-muted hover:text-purple-light"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className={`mt-2 inline-block rounded-full px-5 py-2 text-center text-sm font-medium transition-all ${
                activeSection === "contact"
                  ? "bg-purple-primary text-white shadow-lg shadow-purple-primary/25"
                  : "border border-purple-primary/40 text-purple-light hover:border-purple-primary hover:bg-purple-primary/10"
              }`}
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
