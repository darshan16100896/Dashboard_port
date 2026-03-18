function SkillCard({ image, title }) {
  return (
    <div className="relative group">
      {/* Card */}
      <div
        className="aspect-square rounded-xl overflow-hidden
        dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02]
        flex items-center justify-center
        transition-transform duration-300 group-hover:scale-105"
      >
        <img src={image} alt={title} className="w-20 h-20 object-contain" />
      </div>

      {/* Tooltip */}
      <div
        className="absolute -top-14 left-1/2 -translate-x-1/2
        opacity-0 scale-95 translate-y-2
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
        transition-all duration-300
        bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg
        whitespace-nowrap z-10"
      >
        {title}
        <span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2
          w-3 h-3 bg-black rotate-45"
        ></span>
      </div>
    </div>
  );
}
export { SkillCard };
