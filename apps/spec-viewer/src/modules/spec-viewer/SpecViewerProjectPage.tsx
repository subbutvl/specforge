import { useState } from "react";
import { useParams } from "react-router-dom";

import { MarkdownPane } from "@/workspace/components/MarkdownPane";
import { ProjectDetailLayout } from "@/workspace/components/ProjectDetailLayout";
import { getProjectById } from "@/workspace/registry/project-registry";
import { getMarkdownBySpecSlug } from "@/workspace/registry/spec-selectors";

export default function SpecViewerProjectPage() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  const [activeSpecId, setActiveSpecId] = useState(project?.specs[0]?.id ?? "");

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        Project not found
      </div>
    );
  }

  const activeSpec = project.specs.find((spec) => spec.id === activeSpecId);
  const markdown = activeSpec
    ? getMarkdownBySpecSlug(project, activeSpec.id)
    : "# No spec selected";

  return (
    <ProjectDetailLayout
      project={project}
      backPath="/spec-viewer"
      backLabel="Back to Spec Viewer"
      sidebarContent={
        <div className="space-y-2">
          {project.specs.map((spec) => {
            const isActive = spec.id === activeSpecId;

            return (
              <button
                key={spec.id}
                onClick={() => setActiveSpecId(spec.id)}
                className={`w-full rounded-lg border px-3 py-3 text-left text-sm transition-colors ${
                  isActive
                    ? "border-zinc-700 bg-zinc-800"
                    : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                }`}
              >
                {spec.title}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="h-full p-5">
        <MarkdownPane title={activeSpec?.title ?? "Spec"} markdown={markdown} />
      </div>
    </ProjectDetailLayout>
  );
}
