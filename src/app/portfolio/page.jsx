"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "../Data/projects";

// ─── useInView ─────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── useMagnet ─────────────────────────────────────────────────────────────────
function useMagnet(strength = 0.35) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
      });
    },
    [strength],
  );

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return { ref, offset, onMove, onLeave };
}

// ─── Category pill ─────────────────────────────────────────────────────────────
const CAT_COLORS = {
  "UX Design": {
    text: "#7F77DD",
    bg: "rgba(127,119,221,0.10)",
    border: "rgba(127,119,221,0.25)",
  },
  "UI Design": {
    text: "#1D9E75",
    bg: "rgba(29,158,117,0.10)",
    border: "rgba(29,158,117,0.25)",
  },
  Branding: {
    text: "#EF9F27",
    bg: "rgba(239,159,39,0.10)",
    border: "rgba(239,159,39,0.25)",
  },
  Mobile: {
    text: "#D4537E",
    bg: "rgba(212,83,126,0.10)",
    border: "rgba(212,83,126,0.25)",
  },
  "Web Design": {
    text: "#378ADD",
    bg: "rgba(55,138,221,0.10)",
    border: "rgba(55,138,221,0.25)",
  },
  Research: {
    text: "#D85A30",
    bg: "rgba(216,90,48,0.10)",
    border: "rgba(216,90,48,0.25)",
  },
  default: {
    text: "#888",
    bg: "rgba(136,136,136,0.08)",
    border: "rgba(136,136,136,0.20)",
  },
};

function getCatStyle(cat) {
  return CAT_COLORS[cat] || CAT_COLORS.default;
}

// ─── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const cs = getCatStyle(project.category);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Stagger by column (mod 3 for lg grid)
  const delay = (index % 3) * 0.08 + Math.floor(index / 3) * 0.04;

  return (
    <Link href={`/portfolio/${project.id}`} className="group block">
      <div
        ref={cardRef}
        className="relative rounded-2xl overflow-hidden flex flex-col h-full border transition-all duration-500"
        style={{
          background: "var(--card-bg, rgba(255,255,255,0.6))",
          borderColor: hovered ? cs.border : "rgba(0,0,0,0.07)",
          boxShadow: hovered
            ? `0 20px 60px -12px ${cs.text}30, 0 4px 16px -4px rgba(0,0,0,0.08)`
            : "0 1px 3px rgba(0,0,0,0.04)",
          transform: visible
            ? hovered
              ? "translateY(-6px) scale(1.01)"
              : "translateY(0) scale(1)"
            : "translateY(32px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: `
            opacity 0.55s ease ${delay}s,
            transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s,
            box-shadow 0.3s ease,
            border-color 0.3s ease
          `,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight glow that follows cursor */}
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(280px circle at ${cursorPos.x}px ${cursorPos.y}px, ${cs.text}14 0%, transparent 70%)`,
          }}
        />

        {/* Thumbnail */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/10" }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Dark overlay on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{
              background: `linear-gradient(to bottom, transparent 30%, ${cs.text}55 100%)`,
              opacity: hovered ? 1 : 0,
            }}
          />

          {/* "View Project" pill that appears on hover */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300 whitespace-nowrap"
            style={{
              background: cs.text,
              opacity: hovered ? 1 : 0,
              transform: hovered
                ? "translateY(0) translateX(-50%)"
                : "translateY(8px) translateX(-50%)",
              boxShadow: `0 4px 20px ${cs.text}66`,
            }}
          >
            View Project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Index number top-right */}
          <div
            className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-opacity duration-300"
            style={{
              background: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(6px)",
              opacity: hovered ? 0 : 0.6,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Category */}
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
            style={{
              background: cs.bg,
              color: cs.text,
              border: `1px solid ${cs.border}`,
            }}
          >
            {project.category}
          </span>

          {/* Title */}
          <h3
            className="text-base sm:text-lg font-bold leading-snug text-gray-900 dark:text-white transition-colors duration-200"
            style={{ color: hovered ? cs.text : undefined }}
          >
            {project.title}
          </h3>

          {/* Description */}
          {project.shortDescription && (
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          )}

          {/* Tools tags */}
          {project.tools && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-black/5 dark:border-white/5">
              {project.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5">
                  +{project.tools.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

// ─── Featured Card (first/hero project) ───────────────────────────────────────
function FeaturedCard({ project, visible }) {
  const [hovered, setHovered] = useState(false);
  const cs = getCatStyle(project.category);

  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="group block col-span-1 sm:col-span-2 lg:col-span-2"
    >
      <div
        className="relative rounded-2xl overflow-hidden border transition-all duration-500"
        style={{
          aspectRatio: "16/8",
          borderColor: hovered ? cs.border : "rgba(0,0,0,0.07)",
          boxShadow: hovered
            ? `0 30px 80px -16px ${cs.text}40, 0 4px 20px -4px rgba(0,0,0,0.1)`
            : "0 1px 3px rgba(0,0,0,0.04)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.6s ease 0s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0s, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: `linear-gradient(135deg, transparent 30%, ${cs.text}80 100%)`,
            opacity: hovered ? 1 : 0.5,
          }}
        />

        {/* Bottom content */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
          }}
        >
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 inline-block"
            style={{
              background: cs.bg,
              color: cs.text,
              border: `1px solid ${cs.border}`,
              backdropFilter: "blur(8px)",
            }}
          >
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
            {project.title}
          </h3>
          {project.shortDescription && (
            <p className="text-sm text-white/60 max-w-md line-clamp-2 mb-4">
              {project.shortDescription}
            </p>
          )}
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(6px)",
            }}
          >
            View Case Study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Featured badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
          style={{ background: cs.text, boxShadow: `0 4px 16px ${cs.text}55` }}
        >
          Featured
        </div>
      </div>
    </Link>
  );
}

// ─── Filter Button ─────────────────────────────────────────────────────────────
function FilterBtn({ label, active, count, onClick }) {
  const cs = getCatStyle(label);
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-200 whitespace-nowrap flex-shrink-0"
      style={
        active
          ? {
              background: cs.text,
              color: "#fff",
              borderColor: "transparent",
              boxShadow: `0 4px 16px ${cs.text}44`,
            }
          : {
              background: "transparent",
              color: "var(--muted,#888)",
              borderColor: "rgba(0,0,0,0.10)",
            }
      }
    >
      {label}
      <span
        className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
        style={
          active
            ? { background: "rgba(255,255,255,0.25)", color: "#fff" }
            : { background: "rgba(0,0,0,0.06)", color: "var(--muted,#888)" }
        }
      >
        {count}
      </span>
    </button>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [view, setView] = useState("grid"); // "grid" | "list"
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.05);

  const allCategories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  // Separate featured (first) from rest in grid view
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="w-full min-h-screen">
      {/* ── Subtle dot grid background ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        {/* ── Header ── */}
        <div ref={headerRef} className="mb-14 sm:mb-18">
          {/* Eyebrow */}
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            Selected Work
          </p>

          {/* Title row */}
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease 0.08s, transform 0.5s ease 0.08s",
            }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading uppercase leading-none tracking-tighter text-gray-900 dark:text-white">
              My Work
              <span className="text-gray-200 dark:text-white/10">.</span>
            </h1>

            {/* View toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl border border-black/8 dark:border-white/8 bg-white/50 dark:bg-white/3 backdrop-blur-sm self-start sm:self-auto">
              {["grid", "list"].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                  style={
                    view === v
                      ? { background: "#111", color: "#fff" }
                      : { background: "transparent", color: "#999" }
                  }
                >
                  {v === "grid" ? (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <rect x="0" y="0" width="5" height="5" rx="1" />
                      <rect x="7" y="0" width="5" height="5" rx="1" />
                      <rect x="0" y="7" width="5" height="5" rx="1" />
                      <rect x="7" y="7" width="5" height="5" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <rect x="0" y="1" width="12" height="2" rx="1" />
                      <rect x="0" y="5" width="12" height="2" rx="1" />
                      <rect x="0" y="9" width="12" height="2" rx="1" />
                    </svg>
                  )}
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <p
            className="mt-4 text-sm sm:text-base text-gray-400 dark:text-gray-500 max-w-lg leading-relaxed"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease 0.14s, transform 0.5s ease 0.14s",
            }}
          >
            A collection of UX & product design work — from research to final
            pixel.
          </p>
        </div>

        {/* ── Filters ── */}
        <div
          className="mb-8 sm:mb-10"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {allCategories.map((cat) => (
              <FilterBtn
                key={cat}
                label={cat}
                active={activeTab === cat}
                count={
                  cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length
                }
                onClick={() => setActiveTab(cat)}
              />
            ))}
          </div>
        </div>

        {/* ── Count ── */}
        <p className="text-xs text-gray-300 dark:text-gray-600 uppercase tracking-widest font-medium mb-8">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">👀</p>
            <p className="text-gray-400 font-medium">Nothing here yet</p>
          </div>
        )}

        {/* ── GRID VIEW ── */}
        {view === "grid" && filtered.length > 0 && (
          <div ref={gridRef} className="flex flex-col gap-4 sm:gap-6">
            {/* Featured row */}
            {featured && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <FeaturedCard project={featured} visible={gridVisible} />
                {rest[0] && (
                  <ProjectCard
                    project={rest[0]}
                    index={1}
                    visible={gridVisible}
                  />
                )}
              </div>
            )}

            {/* Remaining grid */}
            {rest.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {rest.slice(1).map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i + 2}
                    visible={gridVisible}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── LIST VIEW ── */}
        {view === "list" && filtered.length > 0 && (
          <div
            ref={gridRef}
            className="flex flex-col divide-y divide-black/5 dark:divide-white/5"
          >
            {filtered.map((project, i) => {
              const cs = getCatStyle(project.category);
              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="group flex items-center gap-5 py-5 transition-all duration-200"
                  style={{
                    opacity: gridVisible ? 1 : 0,
                    transform: gridVisible
                      ? "translateX(0)"
                      : "translateX(-16px)",
                    transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`,
                  }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-14 sm:w-28 sm:h-18 rounded-xl overflow-hidden flex-shrink-0 border border-black/6 dark:border-white/6">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-400 group-hover:scale-105"
                      sizes="112px"
                    />
                  </div>

                  {/* Index */}
                  <span className="text-xs font-bold text-gray-200 dark:text-gray-700 w-6 flex-shrink-0 hidden sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm sm:text-base font-bold text-gray-900 dark:text-white truncate group-hover:text-[var(--accent)] transition-colors"
                      style={{ "--accent": cs.text }}
                    >
                      {project.title}
                    </h3>
                    {project.shortDescription && (
                      <p className="text-xs text-gray-400 mt-0.5 truncate">
                        {project.shortDescription}
                      </p>
                    )}
                  </div>

                  {/* Category */}
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full hidden sm:inline-block flex-shrink-0"
                    style={{
                      background: cs.bg,
                      color: cs.text,
                      border: `1px solid ${cs.border}`,
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Arrow */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: cs.bg, color: cs.text }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* ── Footer CTA ── */}
        {filtered.length > 0 && (
          <div className="mt-20 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              Like what you see? Let&apos;s work together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-80 transition-opacity"
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
