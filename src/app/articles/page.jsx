"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Papa from "papaparse";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vR48A-IofFyHBPGGj_4t9NEKYkuy_3og_vkE2llP8K3Tp4ojaBGYS5_GGodE5esyRb9Lqk8xhVyKEGj/pub?output=csv"
      );
      const text = await res.text();

      // Convert CSV → Array of objects
      const rows = text
        .trim()
        .split("\n")
        .map((row) => row.split(","));

      const headers = rows[0].map((h) => h.trim().replace(/"/g, ""));

      const data = rows.slice(1).map((row) => {
        const obj = Object.fromEntries(
          row.map((val, i) => [headers[i], val.trim()])
        );

        return {
          title: obj["Article Title"] || "",
          date: obj["Article Date"] || "",
          image: obj["Article Image URL"] || "",
          description: obj["Article Description"] || "",
          url: obj["Article URL"] || "",
        };
      });

      // Sort by date (dd-mm-yyyy)
      const sorted = data.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        const [dayA, monthA, yearA] = a.date.split("-").map(Number);
        const [dayB, monthB, yearB] = b.date.split("-").map(Number);
        return (
          new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA)
        );
      });

      setArticles(sorted);
    }

    fetchArticles();
  }, []);

  function convertDriveUrl(driveUrl, size = "w2000") {
    if (!driveUrl) return "";

    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (!match) return driveUrl; // fallback for non-drive images

    const fileId = match[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
  }

  return (
    <div className="w-full py-30 px-6 lg:px-12">
      <div className="mx-auto">
        <div className="w-full items-center text-center mx-auto px-4 py-8">
          <h1 className="text-9xl font-heading uppercase font-bold fade-in">
            my articles
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 fade-in">
          {articles.map((article, i) => (
            <Link key={i} href={article.url} target="_blank">
              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br  hover:scale-[1.02] dark:bg-white/2 dark:hover:bg-white/5  border border-white/10 shadow-lg transition-all duration-300 cursor-pointer">
                <div className="rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 p-4 flex flex-col h-full">
                  {article.image ? (
                    <img
                      src={convertDriveUrl(article.image)}
                      alt={article.title}
                      className="rounded-lg mb-4 h-48 md:h-40 lg:h-50 w-full object-cover"
                    />
                  ) : (
                    <div className="h-40 flex items-center justify-center bg-gray-700 rounded-lg text-gray-400">
                      No Image
                    </div>
                  )}

                  {/* Date Badge */}
                  <div className="mt-3 px-4 py-1 self-start inline-block rounded-full bg-blue-600 shadow-md">
                    <p className="text-xs text-white">{article.date}</p>
                  </div>

                  {/* Title (max 2 lines) */}
                  <h3 className="mt-4 text-lg font-semibold text-white transition line-clamp-2">
                    {article.title || "Untitled"}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
