"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ─── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "visual", label: "Visual Design" },
  { id: "proto", label: "Prototyping" },
  { id: "research", label: "Research" },
  { id: "handoff", label: "Dev Handoff" },
  { id: "code", label: "Code & Markup" },
  { id: "AI", label: "AI Tools" },
];

const STATS = [
  { value: "6+", label: "Years Experience" },
  { value: "15", label: "Tools Mastered" },
  { value: "3", label: "Design Systems Built" },
  { value: "50+", label: "Products Shipped" },
];

const SKILLS = [
  {
    id: 1,
    title: "Figma",
    image: "/images/figma.webp",
    categories: ["visual", "proto"],
    years: "5 yrs",
    proficiency: 95,
    tier: "Primary",
    useCase: "Design systems, high-fi prototypes, auto-layout, developer specs",
    description: "Primary tool for all UI design and prototyping",
    color: "#7F77DD",
    colorBg: "rgba(127,119,221,0.08)",
  },
  {
    id: 2,
    title: "Adobe Photoshop",
    image: "/images/adobeps.webp",
    categories: ["visual"],
    years: "6 yrs",
    proficiency: 99,
    tier: "Primary",
    useCase: "Marketing visuals, UI mockup assets, brand photography editing",
    description: "Visual assets, photo retouching & compositing",
    color: "#378ADD",
    colorBg: "rgba(55,138,221,0.08)",
  },
  {
    id: 3,
    title: "Adobe Illustrator",
    image: "/images/adobeil.webp",
    categories: ["visual"],
    years: "6 yrs",
    proficiency: 95,
    tier: "Primary",
    useCase: "Custom icon libraries, brand identity, infographics",
    description: "Icon systems, illustrations & vector assets",
    color: "#EF9F27",
    colorBg: "rgba(239,159,39,0.08)",
  },
  {
    id: 4,
    title: "Adobe XD",
    image: "/images/xd.webp",
    categories: ["proto"],
    years: "3 yrs",
    proficiency: 75,
    tier: "Secondary",
    useCase: "Interactive prototypes, stakeholder walkthroughs, voice UI flows",
    description: "Rapid prototyping & client presentations",
    color: "#D4537E",
    colorBg: "rgba(212,83,126,0.08)",
  },
  {
    id: 5,
    title: "InVision",
    image: "/images/invision.webp",
    categories: ["proto"],
    years: "3 yrs",
    proficiency: 70,
    tier: "Secondary",
    useCase: "Click-through prototypes, client feedback, design reviews",
    description: "Collaborative prototyping & feedback",
    color: "#D85A30",
    colorBg: "rgba(216,90,48,0.08)",
  },

  // ── Code & Markup ──────────────────────────────────────
  {
    id: 10,
    title: "HTML5",
    image: "/images/html.webp",
    categories: ["code"],
    years: "6 yrs",
    proficiency: 92,
    tier: "Primary",
    useCase: "Semantic markup, accessibility structure, email templates",
    description: "Semantic structure & web standards",
    color: "#D85A30",
    colorBg: "rgba(216,90,48,0.08)",
  },
  {
    id: 11,
    title: "CSS3",
    image: "/images/css.webp",
    categories: ["code"],
    years: "5 yrs",
    proficiency: 90,
    tier: "Primary",
    useCase: "Animations, responsive layouts, custom properties, dark mode",
    description: "Styling, layout & motion",
    color: "#378ADD",
    colorBg: "rgba(55,138,221,0.08)",
  },
  {
    id: 12,
    title: "JavaScript",
    image: "/images/js.webp",
    categories: ["code"],
    years: "4 yrs",
    proficiency: 75,
    tier: "Primary",
    useCase: "Interaction logic, prototyping in browser, component behaviour",
    description: "Interactivity & browser logic",
    color: "#EF9F27",
    colorBg: "rgba(239,159,39,0.08)",
  },
  {
    id: 13,
    title: "Tailwind CSS",
    image: "/images/tailwind.webp",
    categories: ["code"],
    years: "3 yrs",
    proficiency: 85,
    tier: "Primary",
    useCase: "Utility-first styling, rapid UI builds, consistent design tokens",
    description: "Utility-first CSS framework",
    color: "#1D9E75",
    colorBg: "rgba(29,158,117,0.08)",
  },
  {
    id: 14,
    title: "Styled Components",
    image: "/images/styled.webp",
    categories: ["code"],
    years: "2 yrs",
    proficiency: 70,
    tier: "Secondary",
    useCase: "Component-scoped styles, theming, dynamic styling with props",
    description: "CSS-in-JS component styling",
    color: "#D4537E",
    colorBg: "rgba(212,83,126,0.08)",
  },

  // ── AI Tools ───────────────────────────────────────────
  {
    id: 15,
    title: "Freepik AI",
    image: "/images/freepik-ai.webp",
    categories: ["AI"],
    years: "4 yrs",
    proficiency: 95,
    tier: "Primary",
    useCase: "concept visuals, client presentations, art direction",
    description: "AI image generation for concepts",
    color: "#7F77DD",
    colorBg: "rgba(127,119,221,0.08)",
  },
  {
    id: 16,
    title: "Galileo AI",
    image: "/images/galileo.webp",
    categories: ["AI", "visual"],
    years: "1 yr",
    proficiency: 72,
    tier: "Secondary",
    useCase: "UI generation from text prompts, rapid wireframe ideation",
    description: "AI-powered UI design generation",
    color: "#378ADD",
    colorBg: "rgba(55,138,221,0.08)",
  },
  {
    id: 17,
    title: "ChatGPT",
    image: "/images/chatgpt.webp",
    categories: ["AI"],
    years: "2 yrs",
    proficiency: 90,
    tier: "Primary",
    useCase:
      "UX copy, research synthesis, user persona drafting, brainstorming",
    description: "AI assistant for research & copy",
    color: "#1D9E75",
    colorBg: "rgba(29,158,117,0.08)",
  },
  {
    id: 18,
    title: "Claude",
    image: "/images/claude.webp",
    categories: ["AI"],
    years: "1 yr",
    proficiency: 95,
    tier: "Primary",
    useCase: "UX writing, design critique, accessibility audits, code review",
    description: "AI for design thinking & writing",
    color: "#EF9F27",
    colorBg: "rgba(239,159,39,0.08)",
  },
  {
    id: 19,
    title: "Lovable",
    image: "/images/lovable.webp",
    categories: ["AI"],
    years: "2 yr",
    proficiency: 75,
    tier: "Secondary",
    useCase:
      "Creating and launching simple web apps or landing pages quickly without deep coding knowledge.",
    description: "Creating web apps or landing pages",
    color: "#D4537E",
    colorBg: "rgba(212,83,126,0.08)",
  },
];

// ─── Hooks ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

// ─── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ value, label, index, visible }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl border border-white/10 dark:border-white/5 bg-white/60 dark:bg-white/3 backdrop-blur-sm"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        {value}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
        {label}
      </span>
    </div>
  );
}

// ─── Skill Card ────────────────────────────────────────────────────────────────

function SkillCard({ skill, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-white/10 dark:border-white/5 bg-white/70 dark:bg-white/3 backdrop-blur-sm overflow-hidden cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(24px) scale(0.97)",
        transition: `opacity 0.45s ease ${(index % 4) * 0.07}s, transform 0.45s ease ${(index % 4) * 0.07}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Coloured glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${skill.color}22 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-2 relative z-10">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
          style={{
            background: skill.colorBg,
            border: `1px solid ${skill.color}33`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={skill.image}
            alt={skill.title}
            className="w-6 h-6 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Tier badge */}
        <span
          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
          style={{
            background:
              skill.tier === "Primary" ? `${skill.color}18` : "transparent",
            color:
              skill.tier === "Primary"
                ? skill.color
                : "var(--muted-text, #888)",
            border: `1px solid ${skill.tier === "Primary" ? skill.color + "44" : "transparent"}`,
          }}
        >
          {skill.tier}
        </span>
      </div>

      {/* Title + description */}
      <div className="relative z-10">
        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
          {skill.title}
        </p>
        <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* Proficiency bar */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
            Proficiency
          </span>
          <span
            className="text-[10px] font-semibold"
            style={{ color: skill.color }}
          >
            {skill.proficiency}%
          </span>
        </div>
        <div className="h-1 w-full rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: hovered || visible ? `${skill.proficiency}%` : "0%",
              background: skill.color,
              transitionDelay: hovered ? "0ms" : `${300 + index * 40}ms`,
            }}
          />
        </div>
      </div>

      {/* Years + use case — slides up on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-4 rounded-b-2xl transition-all duration-300 ease-out z-20"
        style={{
          background: `linear-gradient(to bottom, ${skill.color}00 0%, ${skill.color}f0 100%)`,
          transform: hovered ? "translateY(0%)" : "translateY(100%)",
          opacity: hovered ? 1 : 0,
        }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70 mb-1">
          {skill.years} · How I use it
        </p>
        <p className="text-[11px] text-white/90 leading-relaxed">
          {skill.useCase}
        </p>
      </div>
    </div>
  );
}

// ─── Filter Button ─────────────────────────────────────────────────────────────

function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
        border transition-all duration-200
        ${
          active
            ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
            : "bg-transparent text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 hover:text-gray-700 dark:hover:text-white"
        }
      `}
    >
      {label}
    </button>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [statsRef, statsVisible] = useInView();
  const [gridRef, gridVisible] = useInView(0.05);

  const filtered =
    activeFilter === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.categories.includes(activeFilter));

  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-14 sm:py-24">
        {/* ── Header ── */}
        <div className="text-center mb-14 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading uppercase leading-tight tracking-tight text-gray-900 dark:text-white">
            Design &amp; Development
            <br className="hidden sm:block" />
            <span className="text-gray-900 dark:text-white"> Stack</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base text-gray-600 dark:text-[#C7D2FE] max-w-md mx-auto leading-relaxed">
            Tools and technologies I use to design and build modern digital
            experiences from first sketch to final handoff.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20"
        >
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} visible={statsVisible} />
          ))}
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <FilterButton
              key={cat.id}
              label={cat.label}
              active={activeFilter === cat.id}
              onClick={() => setActiveFilter(cat.id)}
            />
          ))}
        </div>

        {/* ── Count label ── */}
        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mb-8 uppercase tracking-widest font-medium">
          {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
          {activeFilter !== "all" &&
            ` in ${CATEGORIES.find((c) => c.id === activeFilter)?.label}`}
        </p>

        {/* ── Skills grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={i}
              visible={gridVisible}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
            Want to see these tools in action?
          </p>
          <Link
            href="/portfolio"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              text-sm font-semibold
              border border-gray-200 dark:border-white/10
              text-gray-700 dark:text-white
              hover:bg-gray-900 hover:text-white hover:border-gray-900
              dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white
              transition-all duration-200
            "
          >
            View Projects
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
      </div>
    </div>
  );
}
