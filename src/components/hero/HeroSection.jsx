"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    // blink cursor
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => {
      clearTimeout(t);
      clearInterval(blink);
    };
  }, []);

  const line = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden "
      id="hero"
    >
      {/* ── Fine grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-0 right-0 w-150 h-150 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(99,102,241,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* ── Eyebrow ── */}
        <div style={line(0.05)} className="mb-6 sm:mb-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] backdrop-blur-sm px-3.5 py-1.5">
            {/* Pulsing availability dot */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45">
              Senior UX / UI Designer · Available for work
            </span>
          </div>
        </div>

        {/* ── Main heading ── */}
        <div className="mb-8 sm:mb-10 text-center">
          <h1
            className="font-heading font-bold uppercase leading-[0.9] tracking-tight text-gray-900 dark:text-white "
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Designing Products
          </h1>

          <h1
            className="font-heading font-bold uppercase leading-[0.9] tracking-tight "
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              backgroundImage: "linear-gradient(135deg, #3b82f6, #6366f1)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            That Feel Effortless.
          </h1>
        </div>

        {/* ── Bottom row ── */}
        <div
          style={line(0.52)}
          className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-6 sm:px-8"
        >
          {/* Description */}
          <p
            className="mb-2 max-w-2xl text-base sm:text-[1.05rem] leading-relaxed text-black dark:text-white/42"
            style={line(0.4)}
          >
            <strong className="text-blue-500 dark:text-white/65 font-medium">
              6+ years
            </strong>{" "}
            designing user-centered digital products for startups and scaling
            brands. Specialized in{" "}
            <strong className="text-blue-500 dark:text-white/65 font-medium">
              SaaS and web apps
            </strong>
            , with expertise in AI-powered UX research, prototyping, and modern
            design systems.
          </p>

          {/* CTA group */}
          <div className="flex items-center gap-3 mb-4" style={line(0.5)}>
            {/* PRIMARY — gradient filled, glowing on hover */}
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                boxShadow: "0 0 0 0 rgba(99,102,241,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(99,102,241,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(99,102,241,0)";
              }}
            >
              View Work
              {/* Arrow in a small pill — moves on hover */}
              <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/20 transition-transform duration-200 group-hover:translate-x-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            {/* SECONDARY — ghost, clearly lighter */}
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/12 bg-black/[0.03] dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-black/60 dark:text-white/55 transition-all duration-200 hover:border-black/20 dark:hover:border-white/25 hover:bg-black/[0.05] dark:hover:bg-white/[0.07] hover:text-black/85 dark:hover:text-white/85"
            >
              Let&apos;s Talk
            </Link>
          </div>
          <div
            className="flex w-full flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-6 pt-6 sm:pt-7"
            style={{
              borderTop: "0.5px solid rgba(120,120,120,0.18)",
              ...line(0.6),
            }}
          >
            {/* Client avatars */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"].map((bg, i) => (
                  <div
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white dark:border-[#0a0a0f] text-[10px] font-bold text-white"
                    style={{
                      background: bg,
                      marginLeft: i === 0 ? 0 : "-8px",
                    }}
                  >
                    {["M", "R", "S", "K"][i]}
                  </div>
                ))}
              </div>

              <span className="text-left text-xs leading-tight text-black/45 dark:text-white/38">
                <span className="font-semibold text-black/75 dark:text-white/65">
                  20+ happy clients
                </span>
                <br />
                across Fintech, EdTech & SaaS
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-black/10 dark:bg-white/10" />

            {/* Avg lift */}
            <div className="text-center">
              <div className="text-base font-bold text-zinc-900 dark:text-white">
                28%
              </div>

              <div className="text-[10px] uppercase tracking-wide text-black/35 dark:text-white/35">
                avg. lift
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-black/10 dark:bg-white/10" />

            {/* Products shipped */}
            <div className="text-center">
              <div className="text-base font-bold text-zinc-900 dark:text-white">
                50+
              </div>

              <div className="text-[10px] uppercase tracking-wide text-black/35 dark:text-white/35">
                products shipped
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
