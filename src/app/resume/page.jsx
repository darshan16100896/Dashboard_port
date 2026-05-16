"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: "Senior UX / UI Designer | Frontend Developer",
    company: "Minddeft Technologies",
    period: "2023 - Present",
    type: "Full-time",
    desc: "As a Senior UI/UX Designer, I've delivered end-to-end digital products for 15+ startups across Fintech, EdTech, and E-commerce. I lead a team of 3 to bridge the gap between complex wireframing and high-fidelity web design, ensuring seamless developer handoffs. By managing direct client relationships and high-level design strategy, I transform ambitious ideas into polished, market-ready SaaS solutions.",
    tags: ["Figma", "Design Systems", "SaaS", "User Research", "Web Design"],
  },
  {
    role: "UI/UX Designer",
    company: "Coreway Technologies",
    period: "2021 - 2022",
    type: "Full-time",
    desc: "Led the design of high-impact user interfaces and cohesive brand visuals, while developing and executing social media strategies, user journeys, and cross-platform visual identities. Crafted intuitive application experiences that enhanced user engagement and overall user satisfaction.",
    tags: ["Figma", "Photoshop", "Prototyping", "Branding"],
  },
  {
    role: "Web Graphic Designer & Visual Wizard",
    company: "Digital Science Web Technologies Pvt Ltd.",
    period: "2019 - 2021",
    type: "Full-time",
    desc: "Developed brand identities and web UI for 30+ clients on 99designs, ensuring high-quality marketing and digital assets. I introduced UX thinking to the workflow by running guerrilla usability sessions that directly shaped product decisions. This role established my foundation in blending visual design with user-centric problem-solving.",
    tags: ["Illustrator", "Photoshop", "UI Design", "Branding"],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Instrumentation & Control Engineering",
    school: "Gujarat University",
    period: "2015 — 2019",
    desc: "Leveraged a background in Instrumentation and Control Engineering to build a strong foundation in logic and systems architecture. I bridged the gap between engineering principles and digital design through personal projects, evolving a technical interest into a career in UI/UX.",
  },
];

const SKILLS_GROUPS = [
  {
    label: "Design",
    skills: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
  },
  {
    label: "Research",
    skills: [
      "User Interviews",
      "Usability Testing",
      "Maze",
      "Hotjar",
      "A/B Testing",
    ],
  },
  {
    label: "Code",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React basics"],
  },
  {
    label: "Process",
    skills: ["Design Systems", "Wireframing", "Prototyping"],
  },
];

const CONTACT = [
  {
    icon: "mail",
    label: "darshanmakwana0896@gmail.com",
    href: "mailto:darshanmakwana0896@gmail.com",
  },
  {
    icon: "linkedin",
    label: "linkedin.com/in/darshan0mak",
    href: "https://www.linkedin.com/in/darshan0makwana/",
  },
  {
    icon: "behance",
    label: "behance.net/darshanmakwana",
    href: "https://www.behance.net/darshanmakwana0896",
  },
  { icon: "location", label: "Ahmedabad, India", href: null },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
function Icon({ name, size = 14 }) {
  const s = { width: size, height: size, fill: "none", viewBox: "0 0 16 16" };
  if (name === "mail")
    return (
      <svg {...s}>
        <path
          d="M2 4l6 5 6-5M2 4h12v8H2V4z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
      </svg>
    );
  if (name === "behance")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.051-1.968-5.051-5.021 0-3.106 1.945-5.051 4.999-5.051 3.101 0 4.553 2.08 4.553 5.178l-.002.666h-7.243c.181 2.401 2.412 2.401 3.044 2.401.984 0 1.765-.361 2.126-1.173h2.675zm-7.506-3h4.776c-.081-1.784-1.262-2.017-2.344-2.017-1.14 0-2.274.317-2.432 2.017zm-13.58 6.093v-13.093h6.627c4.773 0 4.333 6.734.489 7.338 4.34.724 4.107 7.755-1.116 7.755h-6zm2.811-2.317h3.327c2.27 0 2.554-3.344.083-3.344h-3.41v3.344zm0-5.316h3.077c1.855 0 2.104-3.044.061-3.044h-3.138v3.044z" />
      </svg>
    );
  if (name === "location")
    return (
      <svg {...s}>
        <path
          d="M8 2a4 4 0 0 1 4 4c0 3-4 8-4 8S4 9 4 6a4 4 0 0 1 4-4z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  if (name === "download")
    return (
      <svg {...s} viewBox="0 0 20 20">
        <path
          d="M10 3v10M6 9l4 4 4-4M4 15h12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "arrow")
    return (
      <svg {...s} viewBox="0 0 16 16">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return null;
}

// ─── Timeline Entry ───────────────────────────────────────────────────────────
function TimelineEntry({ item, index, isLast }) {
  const [ref, inView] = useInView(0.1);
  const isEdu = !!item.degree;

  return (
    <div
      ref={ref}
      className="relative flex gap-5 sm:gap-7"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
      }}
    >
      {/* Timeline spine */}
      <div
        className="flex flex-col items-center flex-shrink-0"
        style={{ width: 20 }}
      >
        {/* Node */}
        <div className="relative flex-shrink-0">
          <div
            className="w-4 h-4 rounded-full border-2 z-10 relative"
            style={{
              borderColor: isEdu ? "#6366f1" : "#3b82f6",
              background: "var(--node-bg, white)",
            }}
          />
          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{
              background: isEdu ? "#6366f1" : "#3b82f6",
              animationDuration: "2.5s",
            }}
          />
        </div>
        {/* Line */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(59,130,246,0.3), rgba(99,102,241,0.1))",
              minHeight: 40,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">
              {isEdu ? item.degree : item.role}
            </h3>
            <p
              className="text-sm font-semibold mt-0.5"
              style={{ color: isEdu ? "#6366f1" : "#3b82f6" }}
            >
              {isEdu ? item.school : item.company}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/6 px-2.5 py-1 rounded-lg border border-black/5 dark:border-white/6">
              {item.period}
            </span>
            {item.type && (
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border"
                style={{
                  color: "#3b82f6",
                  background: "rgba(59,130,246,0.08)",
                  borderColor: "rgba(59,130,246,0.2)",
                }}
              >
                {item.type}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
          {item.desc}
        </p>

        {/* Tags */}
        {item.tags && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md text-gray-500 dark:text-gray-400"
                style={{
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionHeading({ children, accent = "#3b82f6" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="flex items-center gap-3 mb-7"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
    >
      <span
        className="w-1 h-5 rounded-full flex-shrink-0"
        style={{ background: accent }}
      />
      <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
        {children}
      </h2>
      <div className="flex-1 h-px bg-black/5 dark:bg-white/5" />
    </div>
  );
}

// ─── Skill pill ───────────────────────────────────────────────────────────────
function SkillPill({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className="inline-flex text-[11px] font-semibold px-2.5 py-1 rounded-lg cursor-default transition-all duration-200"
      style={{
        background: hovered ? "rgba(59,130,246,0.10)" : "rgba(0,0,0,0.04)",
        border: `1px solid ${hovered ? "rgba(59,130,246,0.3)" : "rgba(0,0,0,0.07)"}`,
        color: hovered ? "#3b82f6" : "inherit",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {skill}
    </span>
  );
}

// ─── Download Button ──────────────────────────────────────────────────────────
function DownloadButton() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
    // Triggers download of /public/resume.pdf
    const a = document.createElement("a");
    a.href = "/DarshanMakwana_Sr.UI-UX_Designer_6_Years.pdf";
    a.download = "DarshanMakwana_Sr.UI-UX_Designer_6_Years.pdf";
    a.click();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative w-full overflow-hidden rounded-2xl py-5 sm:py-6 px-8 transition-all duration-300"
      style={{
        background: clicked
          ? "linear-gradient(135deg, #10b981, #059669)"
          : hovered
            ? "linear-gradient(135deg, #1d4ed8, #4f46e5)"
            : "linear-gradient(135deg, #1e40af, #3730a3)",
        boxShadow: hovered
          ? "0 20px 60px -12px rgba(59,130,246,0.5), 0 0 0 1px rgba(59,130,246,0.2)"
          : "0 8px 30px -8px rgba(59,130,246,0.3)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
          transform: hovered ? "translateX(200%)" : "translateX(-200%)",
          transition: "transform 0.6s ease",
        }}
      />

      <div className="relative z-10 flex items-center justify-center gap-3">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/15 transition-transform duration-300"
          style={{
            transform: clicked
              ? "rotate(180deg) scale(0.9)"
              : hovered
                ? "translateY(2px)"
                : "translateY(0)",
          }}
        >
          {clicked ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M3 8l4 4 6-7"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <Icon name="download" size={16} />
          )}
        </div>

        <div className="text-left">
          <p className="text-white font-bold text-base sm:text-lg leading-tight">
            {clicked ? "Downloading…" : "Download Resume"}
          </p>

          <p className="text-white/60 text-[11px] font-medium">
            {clicked
              ? "Your download will start shortly"
              : `PDF · Updated ${new Date().getFullYear()}`}
          </p>
        </div>

        <div className="ml-auto">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 transition-transform duration-300"
            style={{
              transform:
                hovered && !clicked ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <Icon name="arrow" size={14} />
          </div>
        </div>
      </div>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ResumePage() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay) => ({
    opacity: headerVisible ? 1 : 0,
    transform: headerVisible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.55s ease ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <div className="w-full min-h-screen">
      {/* ── Fine grid bg ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          zIndex: 0,
        }}
      />
      {/* Ambient glow */}
      <div
        className="fixed top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(59,130,246,0.05) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* ── Page header ── */}
        <div className="mb-14 sm:mb-18">
          <div style={fade(0)}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors mb-8 group"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-lg border border-black/8 dark:border-white/8 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M10 6H2M6 2L2 6l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Back
            </Link>
          </div>

          <div style={fade(0.06)}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">
              Curriculum Vitae
            </p>
          </div>

          <div style={fade(0.12)}>
            <h1
              className="font-heading font-bold uppercase leading-none tracking-tight text-gray-900 dark:text-white mb-4"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
            >
              Darshan
              <br />
              <span className="text-gray-200 dark:text-white/12">Makwana</span>
            </h1>
          </div>

          <div style={fade(0.18)} className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider"
              style={{
                background: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.25)",
                color: "#10b981",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-500">·</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Senior UX Designer
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-500">·</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              6+ Years Experience
            </span>
          </div>
        </div>

        {/* ── Two column layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-20">
          {/* ════════ LEFT SIDEBAR ════════ */}
          <div className="w-full lg:w-[260px] xl:w-[300px] flex-shrink-0">
            <div className="lg:sticky lg:top-8 flex flex-col gap-10">
              {/* Contact */}
              <div>
                <SectionHeading accent="#3b82f6">Contact</SectionHeading>
                <div className="flex flex-col gap-3">
                  {CONTACT.map((c) => (
                    <div key={c.label} className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(59,130,246,0.08)",
                          border: "1px solid rgba(59,130,246,0.15)",
                        }}
                      >
                        <span className="text-blue-500">
                          <Icon name={c.icon} size={13} />
                        </span>
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={
                            c.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors truncate"
                        >
                          {c.label}
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {c.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <SectionHeading accent="#6366f1">Skills</SectionHeading>
                <div className="flex flex-col gap-6">
                  {SKILLS_GROUPS.map((g) => (
                    <div key={g.label}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2.5">
                        {g.label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {g.skills.map((s) => (
                          <SkillPill key={s} skill={s} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              {/* <div>
                <SectionHeading accent="#10b981">Languages</SectionHeading>
                <div className="flex flex-col gap-3">
                  {[
                    { lang: "Gujarati", level: "Native", pct: 100 },
                    { lang: "Hindi", level: "Fluent", pct: 95 },
                    { lang: "English", level: "Professional", pct: 88 },
                  ].map(({ lang, level, pct }) => (
                    <div key={lang}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {lang}
                        </span>
                        <span className="text-[10px] font-medium text-gray-400">
                          {level}
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-gray-100 dark:bg-white/6 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background:
                              "linear-gradient(90deg, #3b82f6, #6366f1)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* ════════ RIGHT CONTENT ════════ */}
          <div className="flex-1 min-w-0">
            {/* Experience */}
            <div className="mb-12">
              <SectionHeading accent="#3b82f6">Experience</SectionHeading>
              <div>
                {EXPERIENCE.map((item, i) => (
                  <TimelineEntry
                    key={i}
                    item={item}
                    index={i}
                    isLast={i === EXPERIENCE.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <SectionHeading accent="#6366f1">Education</SectionHeading>
              <div>
                {EDUCATION.map((item, i) => (
                  <TimelineEntry
                    key={i}
                    item={item}
                    index={i}
                    isLast={i === EDUCATION.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-12">
              <SectionHeading accent="#f59e0b">Highlights</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    value: "28%",
                    desc: "Onboarding completion lift via UX redesign",
                  },
                  {
                    value: "50+",
                    desc: "Products shipped across web & mobile",
                  },
                  { value: "3", desc: "Design systems built & maintained" },
                ].map(({ value, desc }, i) => {
                  const [ref, inView] = useInView();
                  return (
                    <div
                      key={i}
                      ref={ref}
                      className="p-5 rounded-2xl border border-black/6 dark:border-white/6 bg-white/60 dark:bg-white/3"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView
                          ? "translateY(0)"
                          : "translateY(16px)",
                        transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                      }}
                    >
                      <p
                        className="font-heading font-bold text-3xl leading-none mb-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #3b82f6, #6366f1)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Download CTA ── */}
        <div className="mt-16 sm:mt-20">
          {/* Divider with label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-black/5 dark:bg-white/5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 dark:text-gray-600">
              Get a copy
            </span>
            <div className="flex-1 h-px bg-black/5 dark:bg-white/5" />
          </div>

          {/* Hint text */}
          <p className="text-center text-sm text-gray-400 dark:text-gray-500 mb-5">
            Want the full picture? Download my resume as a PDF.
          </p>

          <DownloadButton />

          {/* Footer note */}
          <p className="text-center text-[11px] text-gray-300 dark:text-gray-600 mt-4">
            Or reach out directly at{" "}
            <a
              href="mailto:darshanmakwana0896@gmail.com"
              className="text-blue-500 hover:underline"
            >
              darshanmakwana0896@gmail.com
            </a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}
