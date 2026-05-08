import { projects } from "@/data/projects";
import { ProjectGrid } from "@/workspace/components/ProjectGrid";
import { WorkspaceShell } from "@/workspace/components/WorkspaceShell";
import type { WorkspaceModule } from "@/workspace/modules";

interface ModuleProjectListPageProps {
  module: WorkspaceModule;
}

export function ModuleProjectListPage({ module }: ModuleProjectListPageProps) {
  return (
    <WorkspaceShell title={module.name} subtitle={module.description}>
      <p className="mt-2 text-zinc-400">
        Shared project registry view for {module.name.toLowerCase()}.
      </p>
      <ProjectGrid projects={projects} detailPath={module.detailPath} />
    </WorkspaceShell>
  );
}
