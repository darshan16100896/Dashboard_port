function SkillCard({ image, title }) {
  return (
    <div className="relative group">
      {/* Glow Background */}
      <div
        className="
        absolute inset-0 rounded-2xl
        opacity-0 group-hover:opacity-100
        transition duration-300
        bg-gradient-to-br from-purple-500/20 to-blue-500/20
        blur-xl
      "
      />

      {/* Card */}
      <div
        className="
        relative aspect-square rounded-2xl
        bg-white/5 dark:bg-white/5
        backdrop-blur-xl
        border border-white/10
        flex flex-col items-center justify-center
        transition-all duration-300
        group-hover:scale-105
        group-hover:border-purple-400/40
        group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
      "
      >
        {/* Icon */}
        <img
          src={image}
          alt={title}
          className="
            w-14 h-14 object-contain
            transition-transform duration-300
            group-hover:scale-110
          "
        />

        {/* Title (NEW - important improvement) */}
        <p
          className="
          mt-3 text-xs sm:text-sm font-medium
          text-gray-600 dark:text-gray-300
          opacity-80 group-hover:opacity-100
        "
        >
          {title}
        </p>
      </div>

      {/* Tooltip (Improved) */}
      <div
        className="
        absolute -top-12 left-1/2 -translate-x-1/2
        opacity-0 scale-95 translate-y-2
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
        transition-all duration-300
        bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md shadow-lg
        whitespace-nowrap z-10
      "
      >
        {title}
        <span
          className="
          absolute -bottom-1 left-1/2 -translate-x-1/2
          w-2 h-2 bg-black/80 rotate-45
        "
        />
      </div>
    </div>
  );
}
export { SkillCard };
