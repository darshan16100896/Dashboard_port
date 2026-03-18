import projects from "@/app/Data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="w-full py-16 flex justify-center" id="info">
      <div className="w-full lg:max-w-[1000px] text-center mx-auto px-4 pt-15">
        <div className="py-18">
          <h4 className="text-xl font-heading uppercase mb-4">
            {project.category}
          </h4>
          <h1 className="text-6xl font-heading uppercase font-bold fade-in mb-10">
            {project.title}
          </h1>
          {/* Links */}
          <div className="flex gap-4 mx-auto justify-center mt-4 flex-wrap">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Live Project
              </Link>
            )}
            {project.behance && (
              <Link
                href={project.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {/* <fontawesome className="fab fa-behance text-lg"></fontawesome> */}
                Behance
              </Link>
            )}
          </div>
        </div>

        {/* ================= Hero Banner ================= */}
        {project.banner && (
          <div className=" overflow-hidden rounded-2xl border border-white/10 dark:bg-white/5 backdrop-blur-md">
            <Image
              src={project.banner}
              alt={`${project.title} banner`}
              width={2000}
              height={1125}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {project.summary && (
          <div className="mb-20 mt-8 text-gray-700 dark:text-gray-300">
            <p className="text-2xl leading-relaxed mx-auto">
              {project.summary}
            </p>
          </div>
        )}

        {/* ================= Elements Section ================= */}
        <section className="space-y-8 text-left mt-40" id="elements">
          <h2 className="text-xl font-heading uppercase font-light mb-4">
            Elements
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-5xl font-heading uppercase font-bold">
            See the highlights of this website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.elementImages.map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-white/10 dark:bg-white/5 backdrop-blur-md"
              >
                <Image
                  src={img}
                  alt={`${project.title} element ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ================= Tech Stack ================= */}
        <section className="space-y-6 mt-40 text-center" id="tech">
          <h2 className="text-xl font-heading uppercase">
            This website was built with...
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
            {project.tech?.map((item) => (
              <span
                key={item}
                className="px-6 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md text-l cursor-pointer hover:scale-105 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
      {/* ===== Floating Bottom Navigation ===== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="flex items-center gap-2 p-2 rounded-2xl
                  bg-black/60 dark:bg-black/70
                  backdrop-blur-xl border border-white/10
                  shadow-2xl"
        >
          {/* Logo / Icon */}
          <div className="px-4 py-3 rounded-xl bg-black/80 text-white font-bold">
            W.
          </div>

          {/* Links */}
          <a
            href="#info"
            className="px-4 py-3 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            Info
          </a>

          <a
            href="#elements"
            className="px-4 py-3 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            Elements
          </a>

          <a
            href="#tech"
            className="px-4 py-3 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            Tags
          </a>

          {/* Visit Site */}
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              className="ml-2 px-5 py-3 rounded-xl
                   bg-yellow-300 text-black font-semibold
                   hover:bg-yellow-400 transition"
            >
              Visit Site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
