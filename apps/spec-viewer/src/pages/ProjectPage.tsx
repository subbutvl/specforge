import { useParams } from "react-router-dom";

import { projects } from "@/data/projects";

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.metadata.id === projectId);

  if (!project) {
    return (
      <div className="p-8 text-zinc-100 bg-zinc-950 min-h-screen">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <aside className="w-72 border-r border-zinc-800 p-4">
        <h2 className="text-lg font-semibold mb-6">{project.metadata.title}</h2>

        <div className="space-y-2">
          {project.specs.map((spec) => (
            <div
              key={spec.id}
              className="bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm"
            >
              {spec.title}
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold">{project.metadata.title}</h1>

        <p className="text-zinc-400 mt-3">
          Markdown preview coming next phase.
        </p>
      </main>
    </div>
  );
}
