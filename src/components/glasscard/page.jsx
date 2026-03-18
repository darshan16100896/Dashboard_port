export default function GlassCard({
  title = "UI/UX Case Study",
  description = "A brief description of the project, focusing on user-centered design, usability improvements, and visual aesthetics.",
  image = "/card-image.jpg",
}) {
  return (
    <div className="dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition rounded-2xl overflow-hidden">
      {/* Image */}
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Glass shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
    </div>
  );
}
