import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { getReadinessColor, getStatusColor } from "@/lib/project-status";
import type { ProjectData } from "@/types/project";

interface ProjectDetailLayoutProps {
  project: ProjectData;
  backPath: string;
  backLabel: string;
  sidebarContent?: React.ReactNode;
  children: React.ReactNode;
}

export function ProjectDetailLayout({
  project,
  backPath,
  backLabel,
  sidebarContent,
  children,
}: ProjectDetailLayoutProps) {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-100 flex">
      <aside className="w-80 overflow-auto border-r border-zinc-800 p-4">
        <Link
          to={backPath}
          className="mb-6 inline-flex items-center text-sm text-zinc-500 transition-colors hover:text-zinc-200"
        >
          ← {backLabel}
        </Link>

        <div className="mb-6">
          <h2 className="text-lg font-semibold">{project.metadata.title}</h2>
          <p className="mt-1 text-xs text-zinc-500">
            {project.metadata.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className={getStatusColor(project.metadata.status)}>
              {project.metadata.status}
            </Badge>
            <Badge className={getReadinessColor(project.metadata.readiness)}>
              {project.metadata.readiness}
            </Badge>
          </div>
        </div>

        {sidebarContent}

        <div className="mt-8 space-y-2 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          <div>Updated: {project.metadata.updatedAt}</div>
          <div>Project ID: {project.metadata.id}</div>
        </div>
      </aside>

      <main className="flex-1 min-h-0">{children}</main>
    </div>
  );
}
