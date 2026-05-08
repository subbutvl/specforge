import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

import { Badge } from "@/components/ui/badge";
import { getReadinessColor, getStatusColor } from "@/lib/project-status";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">SpecForge</h1>

        <p className="text-zinc-400 mt-2">
          AI-native idea incubation and specification workspace
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.metadata.id}
            to={`/project/${project.metadata.id}`}
          >
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-200 hover:-translate-y-0.5">
              <CardContent className="p-6">
                <h2 className="text-xl text-zinc-100 font-semibold">
                  {project.metadata.title}
                </h2>

                <p className="text-zinc-400 mt-2 text-sm">
                  {project.metadata.description}
                </p>

                <div className="flex gap-2 mt-4 flex-wrap">
                  {/* badges for status and readiness */}
                  <Badge className={getStatusColor(project.metadata.status)}>
                    {project.metadata.status}
                  </Badge>

                  <Badge
                    className={getReadinessColor(project.metadata.readiness)}
                  >
                    {project.metadata.readiness}
                  </Badge>
                  {/* badges for status and readiness */}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
