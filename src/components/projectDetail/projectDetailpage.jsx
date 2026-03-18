import projects from "@/data/projects";

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return <p className="p-8">Project not found.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-6"
      />
      <p className="text-lg mb-6">{project.description}</p>

      <div className="flex gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Live Site
        </a>
        <a
          href={project.behanceLink}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Behance
        </a>
      </div>
    </div>
  );
}
