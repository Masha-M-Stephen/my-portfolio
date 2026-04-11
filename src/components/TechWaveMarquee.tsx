"use client";

import { useEffect, useRef, useState } from "react";
import { techs } from "@/data/portfolio";

export default function TechWaveMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const WAVE_AMPLITUDE = 25;
    const WAVE_FREQUENCY = 0.04;

    function animate() {
      offsetRef.current += 0.02;
      const icons = trackRef.current?.querySelectorAll<HTMLElement>(".wave-icon");
      icons?.forEach((el, i) => {
        const y = Math.sin(i * WAVE_FREQUENCY * 10 + offsetRef.current) * WAVE_AMPLITUDE;
        el.style.transform = `translateY(${y}px)`;
      });
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-purple-primary/10 bg-surface py-16">
      {/* Decorative wave SVG in background — client-only to avoid hydration mismatch */}
      {mounted && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1200 160"
        >
          {[0, 1, 2, 3, 4].map((lineIdx) => {
            const amp = 30 + lineIdx * 6;
            const yOff = 80 + lineIdx * 4;
            let d = `M 0 ${yOff}`;
            for (let x = 0; x <= 1200; x += 5) {
              const y = yOff + Math.sin(x * 0.005 + lineIdx * 0.8) * amp;
              d += ` L ${x} ${y}`;
            }
            return (
              <path
                key={lineIdx}
                d={d}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
            );
          })}
        </svg>
      )}

      <div className="relative z-10">
        <h3 className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-text-muted">
          Technologies & Tools
        </h3>
        <div className="overflow-hidden py-10">
          <div
            ref={trackRef}
            className="animate-marquee flex w-max"
          >
            {/* First copy */}
            <div className="flex items-center gap-16 pr-16">
              {techs.map((tech, i) => (
                <div
                  key={`a-${tech.name}-${i}`}
                  className="wave-icon flex shrink-0 flex-col items-center gap-2 transition-transform"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
                  />
                  <span className="text-xs text-text-muted">{tech.name}</span>
                </div>
              ))}
            </div>
            {/* Second copy (identical for seamless loop) */}
            <div className="flex items-center gap-16 pr-16">
              {techs.map((tech, i) => (
                <div
                  key={`b-${tech.name}-${i}`}
                  className="wave-icon flex shrink-0 flex-col items-center gap-2 transition-transform"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
                  />
                  <span className="text-xs text-text-muted">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
