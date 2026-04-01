"use client";

import { FileText } from "lucide-react";

export default function ArticleCard({ title, description, link }) {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div
        className="h-full flex flex-col justify-between p-4 sm:p-6 rounded-2xl
        bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10
        hover:bg-white/10 transition-all duration-300
        hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
      >
        {/* TOP CONTENT */}
        <div>
          {/* Label */}
          <p
            className="inline-block px-2.5 py-1 text-[10px] tracking-wide text-blue-500 mb-2 sm:text-xs 
          rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            Latest Article
          </p>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-gray-900">
            {title || "No articles yet"}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-[#C7D2FE] mt-2">
            {description ||
              "I occasionally share UX insights and learnings on LinkedIn."}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs sm:text-sm text-blue-500 font-medium flex items-center gap-1">
            {title ? "Read on LinkedIn" : "Visit LinkedIn"}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
