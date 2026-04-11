"use client";

import { personalInfo, socials } from "@/data/portfolio";
import ParticleBackground from "@/components/ParticleBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // ✅ IMPORTANT

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <ParticleBackground />

      {/* Glow */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-purple-primary/10 blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center"
      >
        {/* ✅ PROFILE IMAGE */}
        <div className="relative h-40 w-40 md:h-52 md:w-52">
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            className="rounded-full object-cover border-4 border-purple-primary/30 shadow-lg"
            priority
          />
        </div>

        {/* Name */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            <span className="text-gradient-purple">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="text-xl text-purple-light md:text-2xl">
            {personalInfo.title}
          </h2>

          <p className="mx-auto max-w-lg text-base leading-relaxed text-text-muted">
            {personalInfo.tagline}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#portfolio"
            className="rounded-full bg-purple-primary px-7 py-3 text-sm font-medium text-white transition-all hover:bg-purple-dark hover:shadow-lg hover:shadow-purple-primary/25"
          >
            View Portfolio
          </a>

          <a
            href="#contact"
            className="rounded-full border border-purple-primary/40 px-7 py-3 text-sm font-medium text-purple-light transition-all hover:border-purple-primary hover:bg-purple-primary/10"
          >
            Contact Me
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5 pt-2">
          {/* GitHub */}
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-purple-light"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12..." />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-purple-light"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554..." />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-purple-light"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2C4.574 2..." />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}