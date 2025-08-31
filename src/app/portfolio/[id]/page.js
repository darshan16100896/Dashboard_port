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
    <div className="w-full py-16 flex justify-center">
      <div className="w-full lg:max-w-[1000px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Multiple Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {project.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Behance
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
