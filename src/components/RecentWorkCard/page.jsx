"use client";

export default function RecentWorkCard({ title, description, link }) {
  return (
    <div className="w-full flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6">
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-gray-900">
          {title}
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 sm:mb-4 dark:text-[#C7D2FE]">
          {description}
        </p>

        {/* TAG */}
        <span
          className="inline-block mt-2 px-2.5 py-1 text-[10px] sm:text-xs 
          rounded-full bg-blue-500/10 text-blue-500 
          border border-blue-500/20"
        >
          Recent Work
        </span>
      </div>

      {/* RIGHT BUTTON */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 px-4 sm:px-5 py-2 rounded-lg 
        text-xs sm:text-sm font-medium 
        bg-gradient-to-r from-blue-500 to-purple-500 
        text-white hover:opacity-90 
        transition-all duration-300"
      >
        View Live →
      </a>
    </div>
  );
}
