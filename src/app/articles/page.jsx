"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ─── Helpers ───────────────────────────────────────────────────────────────────

function extractDriveId(url) {
  if (!url) return null;
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

function getDriveThumb(url) {
  const id = extractDriveId(url);
  if (!id) return url || "";
  return `https://lh3.googleusercontent.com/d/${id}`;
}

function parseDate(str) {
  if (!str) return null;
  // supports dd-mm-yyyy or dd/mm/yyyy
  const parts = str.split(/[-/]/);
  if (parts.length !== 3) return null;
  const [d, m, y] = parts.map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(str) {
  const d = parseDate(str);
  if (!d) return str;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ─── Robust CSV parser using PapaParse ────────────────────────────────────────

async function loadArticles() {
  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR48A-IofFyHBPGGj_4t9NEKYkuy_3og_vkE2llP8K3Tp4ojaBGYS5_GGodE5esyRb9Lqk8xhVyKEGj/pub?output=csv";

  const res = await fetch(SHEET_URL);
  const text = await res.text();

  // Manual robust CSV parse (no external dep needed)
  const lines = text.trim().split("\n");
  const headers = lines[0]
    .split(",")
    .map((h) => h.trim().replace(/^"|"$/g, ""));

  const rows = lines.slice(1).map((line) => {
    // Handle quoted fields with commas inside
    const cols = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
        continue;
      }
      if (ch === "," && !inQuotes) {
        cols.push(current.trim());
        current = "";
        continue;
      }
      current += ch;
    }
    cols.push(current.trim());

    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = cols[i] || "";
    });

    return {
      title: obj["Article Title"] || "",
      date: obj["Article Date"] || "",
      image: obj["Article Image URL"] || "",
      description: obj["Article Description"] || "",
      url: obj["Article URL"] || "",
    };
  });

  return rows
    .filter((r) => r.title)
    .sort((a, b) => {
      const da = parseDate(a.date);
      const db = parseDate(b.date);
      if (!da || !db) return 0;
      return db - da;
    });
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function Skeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-black/6 dark:border-white/6 bg-white/60 dark:bg-white/3 animate-pulse">
      <div className="h-44 bg-gray-100 dark:bg-white/5" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 w-20 rounded-full bg-gray-100 dark:bg-white/5" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-white/5" />
        <div className="h-4 w-3/4 rounded-full bg-gray-100 dark:bg-white/5" />
        <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-white/8" />
        <div className="h-3 w-5/6 rounded-full bg-gray-100 dark:bg-white/8" />
      </div>
    </div>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article, index }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const thumb = getDriveThumb(article.image);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 70);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <Link
      href={article.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className="relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300"
        style={{
          background: "var(--tw-card-bg, rgba(255,255,255,0.7))",
          borderColor: hovered ? "rgba(59,130,246,0.35)" : "rgba(0,0,0,0.07)",
          boxShadow: hovered
            ? "0 20px 50px -12px rgba(59,130,246,0.18), 0 4px 16px -4px rgba(0,0,0,0.08)"
            : "0 1px 4px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {thumb && !imgError ? (
            <img
              src={thumb}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-600"
              style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/20">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="text-blue-300 dark:text-blue-700"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                  fill="currentColor"
                />
              </svg>
            </div>
          )}

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{
              background: "rgba(10,102,194,0.75)",
              opacity: hovered ? 1 : 0,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0A66C2] text-xs font-bold shadow-lg">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
              </svg>
              Read on LinkedIn
            </div>
          </div>

          {/* Index badge */}
          <div
            className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{
              background: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
              opacity: hovered ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 gap-3 bg-white dark:bg-[#0f0f0f]">
          {/* Date */}
          {article.date && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <rect
                  x="1"
                  y="2"
                  width="10"
                  height="9"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M4 1v2M8 1v2M1 5h10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              {formatDate(article.date)}
            </span>
          )}

          {/* Title */}
          <h3
            className="text-sm sm:text-base font-bold leading-snug text-gray-900 dark:text-white line-clamp-2 transition-colors duration-200"
            style={{ color: hovered ? "#0A66C2" : undefined }}
          >
            {article.title || "Untitled"}
          </h3>

          {/* Description */}
          {article.description && (
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed line-clamp-3 flex-1">
              {article.description}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-black/5 dark:border-white/5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500">
                LinkedIn Article
              </span>
            </div>
            <span
              className="text-[10px] font-bold text-blue-500 flex items-center gap-1 transition-all duration-200"
              style={{
                transform: hovered ? "translateX(3px)" : "translateX(0)",
              }}
            >
              Read
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    loadArticles()
      .then(setArticles)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = articles.filter(
    (a) =>
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full min-h-screen">
      {/* Subtle dot bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 my-14 sm:py-20">
        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            Published on LinkedIn
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading uppercase leading-tight tracking-tighter text-gray-900 dark:text-white"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.5s ease 0.07s, transform 0.5s ease 0.07s",
            }}
          >
            Insights &amp; Articles
            {/* <br />
            <span className="text-gray-300 dark:text-white/20">Articles</span> */}
          </h1>

          <p
            className="mt-5 text-sm sm:text-base text-gray-600 dark:text-[#C7D2FE] max-w-md mx-auto leading-relaxed"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease 0.13s, transform 0.5s ease 0.13s",
            }}
          >
            My thoughts on UX, design systems, and digital experiences —
            published on LinkedIn.
          </p>

          {/* Search */}
          <div
            className="mt-8 flex justify-center"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 0.18s, transform 0.5s ease 0.18s",
            }}
          >
            <div className="relative w-full max-w-sm">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-600 pointer-events-none"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.5 10.5l3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-black/8 dark:border-white/8 bg-white/70 dark:bg-white/4 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400 transition"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 1l10 10M11 1L1 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Count ── */}
        {!loading && !error && (
          <p className="text-xs text-gray-300 dark:text-gray-600 uppercase tracking-widest font-medium mb-8 text-center">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {search && ` matching "${search}"`}
          </p>
        )}

        {/* ── Error ── */}
        {error && (
          <div className="text-center py-16">
            <p className="text-sm text-red-400 mb-2">Failed to load articles</p>
            <p className="text-xs text-gray-400">{error}</p>
          </div>
        )}

        {/* ── Loading skeletons ── */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        )}

        {/* ── Grid ── */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((article, i) => (
              <ArticleCard key={i} article={article} index={i} />
            ))}
          </div>
        )}

        {/* ── Empty search state ── */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-sm font-medium text-gray-400">
              No articles match &quot;{search}&quot;
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 text-xs text-blue-500 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ── Footer CTA ── */}
        {!loading && filtered.length > 0 && (
          <div className="mt-16 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              Want more? Follow me on LinkedIn for weekly articles.
            </p>
            <Link
              href="https://www.linkedin.com/in/darshan0makwana/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
              </svg>
              Follow on LinkedIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
