"use client";
import { useState } from "react";
import Link from "next/link";
import projects from "@/data/projects";

export const metadata = {
  title: "Portfolio | Darshan Makwana",
  description: "Browse UI/UX, Social Media, and Article projects by Darshan.",
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "UI UX", "Social Media", "Articles", "Images"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="p-8">
      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:scale-[1.02] transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <Link href={`/portfolio/${project.id}`}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
