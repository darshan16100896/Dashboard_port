"use client";
import { useState } from "react";
import Link from "next/link";
import projects from "../Data/projects";
import Image from "next/image";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  // Auto categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="w-full py-10 sm:py-14 flex justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold uppercase leading-tight">
            My Work
          </h1>
        </div>

        {/* Tabs */}
        <div className="relative mb-6 sm:mb-10">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-sm sm:text-base rounded-full whitespace-nowrap transition flex-shrink-0 ${
                  activeTab === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-white/5 border border-white/10 hover:bg-gray-300 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length === 0 ? (
          <p className="text-center py-16 text-gray-400 text-base sm:text-lg">
            Nothing here yet 👀
          </p>
        ) : (
          <div
            className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-4 sm:gap-6
          "
          >
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group block"
              >
                <div
                  className="
                  rounded-2xl 
                  overflow-hidden 
                  border border-white/10 
                  bg-white/5 
                  backdrop-blur-md 
                  transition duration-300 
                  flex flex-col h-full
                  hover:shadow-xl 
                  active:scale-[0.98] 
                  sm:hover:scale-[1.02]
                "
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="
                        w-full 
                        h-44 sm:h-48 lg:h-52 
                        object-cover 
                        transition duration-300 
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 text-left">
                    {/* Category */}
                    <span
                      className="
                      text-[11px] sm:text-xs 
                      mb-2 
                      inline-block 
                      px-2 py-1 
                      bg-white/10 
                      rounded-full 
                      w-fit
                    "
                    >
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                      text-base sm:text-lg 
                      font-semibold 
                      leading-snug 
                      mb-1
                    "
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    {project.shortDescription && (
                      <p
                        className="
                        text-xs sm:text-sm 
                        text-gray-400 
                        mb-3
                      "
                      >
                        {project.shortDescription}
                      </p>
                    )}

                    {/* CTA */}
                    <div
                      className="
                      mt-auto 
                      text-sm 
                      font-medium 
                      text-blue-500 
                      group-hover:underline
                    "
                    >
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
