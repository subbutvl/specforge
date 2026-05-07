import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">IdeaVault</h1>

        <p className="text-zinc-400 mt-2">AI-native specification workspace</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.metadata.id}
            to={`/project/${project.metadata.id}`}
          >
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <h2 className="text-xl text-zinc-100 font-semibold">
                  {project.metadata.title}
                </h2>

                <p className="text-zinc-400 mt-2 text-sm">
                  {project.metadata.description}
                </p>

                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
