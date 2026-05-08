import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Card, CardContent } from "@/components/ui/card";
import { ProjectDetailLayout } from "@/workspace/components/ProjectDetailLayout";
import { getProjectById } from "@/workspace/registry/project-registry";
import {
  getMarkdownBySpecSlug,
  getSectionBlock,
} from "@/workspace/registry/spec-selectors";

const pocSections = [
  "Goal",
  "Demo Scope",
  "Mock Data Requirements",
  "Key Screens",
  "Core Interactions",
  "Fake / Stubbed Areas",
  "POC Constraints",
];

export default function PocBuilderProjectPage() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        Project not found
      </div>
    );
  }

  const pocMarkdown = getMarkdownBySpecSlug(project, "poc-brief");

  return (
    <ProjectDetailLayout
      project={project}
      backPath="/poc-builder"
      backLabel="Back to POC Builder"
      sidebarContent={
        <div className="space-y-2 text-sm text-zinc-400">
          <p>POC planning sections</p>
          {pocSections.map((section) => (
            <p
              key={section}
              className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-300"
            >
              {section}
            </p>
          ))}
        </div>
      }
    >
      <div className="h-full overflow-auto p-5">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {pocSections.map((section) => (
            <Card key={section} className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-4">
                <h3 className="mb-2 text-sm font-semibold text-zinc-200">
                  {section}
                </h3>
                <div className="markdown-body text-sm">
                  <ReactMarkdown>
                    {getSectionBlock(pocMarkdown, section)}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ProjectDetailLayout>
  );
}
