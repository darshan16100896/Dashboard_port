"use client";
import { useState } from "react";
import Link from "next/link";
import projects from "../Data/projects";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "Web Design",
    "Mobile App Design",
    "Social Media Design",
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="w-full py-16 justify-center">
      <div className="w-full lg:max-w-[1360px] items-center text-center mx-auto px-4 py-8">
        <div className="py-10">
          <h1 className="text-9xl font-heading uppercase font-bold fade-in">
            my work
          </h1>
        </div>
        <div className="p-8 fade-in">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full transition cursor-pointer ${
                  activeTab === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-white/2 backdrop-blur-md border border-white/10 shadow-lg dark:text-white"
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
                className="p-4 rounded-xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl text-left font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 text-left dark:text-gray-400 mb-3">
                  {project.category}
                </p>
                <Link href={`/portfolio/${project.id}`}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
