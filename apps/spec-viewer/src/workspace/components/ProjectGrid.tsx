import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getReadinessColor, getStatusColor } from "@/lib/project-status";
import type { ProjectData } from "@/types/project";

interface ProjectGridProps {
  projects: ProjectData[];
  detailPath: (projectId: string) => string;
  emptyText?: string;
}

export function ProjectGrid({
  projects,
  detailPath,
  emptyText = "No projects found.",
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900 p-8 text-zinc-400">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Link key={project.metadata.id} to={detailPath(project.metadata.id)}>
          <Card className="h-full border-zinc-800 bg-zinc-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/80">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-zinc-100">
                {project.metadata.title}
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                {project.metadata.description}
              </p>

              <p className="mt-3 text-xs text-zinc-500">
                {project.specs.length} spec
                {project.specs.length === 1 ? "" : "s"}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className={getStatusColor(project.metadata.status)}>
                  {project.metadata.status}
                </Badge>
                <Badge
                  className={getReadinessColor(project.metadata.readiness)}
                >
                  {project.metadata.readiness}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
