import CardGrid from "@/components/cardGrids/cadgrid";
export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center">
        <div className="w-full lg:max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-32 text-center">
          {/* TOP TAG */}
          <div
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block mb-4 sm:mb-6 
      bg-blue/5 backdrop-blur-md border border-blue/20 shadow-lg fade-in"
          >
            <h5
              className="text-xs sm:text-sm md:text-base uppercase bg-gradient-to-r from-blue-500 to-purple-500 
    bg-clip-text text-transparent"
            >
              UX Designer crafting intuitive experiences
            </h5>
          </div>

          {/* MAIN HEADING */}
          <h1
            className="
      font-heading uppercase font-bold fade-in 
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
      leading-tight tracking-tight
      text-gray-900 dark:text-[#F9FAFB]
      max-w-4xl mx-auto
      drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]
    "
          >
            Designing products that feel effortless
          </h1>

          {/* SUBTEXT */}
          <p
            className="
      mt-4 sm:mt-6 
      text-sm sm:text-base md:text-lg lg:text-xl
      fade-in text-gray-600 dark:text-[#C7D2FE]
      max-w-xl sm:max-w-2xl mx-auto
      leading-relaxed
    "
          >
            I design user-centered digital experiences that solve real-world
            problems and drive impact.
          </p>

          {/* SCROLL INDICATOR */}
          <a
            href="#next-section"
            className="mt-10 sm:mt-14 inline-block cursor-pointer"
          >
            <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
              <span className="w-1 h-2 bg-gray-400 rounded-full absolute top-2 animate-bounce"></span>
            </div>
          </a>
        </div>
      </div>

      {/* Card Grid Section */}
      <CardGrid />
    </>
  );
}
