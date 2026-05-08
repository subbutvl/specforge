import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Card, CardContent } from "@/components/ui/card";
import { ProjectDetailLayout } from "@/workspace/components/ProjectDetailLayout";
import { getProjectById } from "@/workspace/registry/project-registry";
import {
  getMarkdownBySpecSlug,
  getSectionBlock,
} from "@/workspace/registry/spec-selectors";

const tokenSections = [
  "Color Tokens",
  "Typography",
  "Spacing",
  "Radius",
  "Shadows",
  "Theme Strategy",
];

export default function DesignTokensProjectPage() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        Project not found
      </div>
    );
  }

  const tokensMarkdown = getMarkdownBySpecSlug(project, "design-tokens");

  return (
    <ProjectDetailLayout
      project={project}
      backPath="/design-tokens"
      backLabel="Back to Design Tokens"
      sidebarContent={
        <div className="space-y-2 text-sm text-zinc-400">
          <p>Token categories</p>
          {tokenSections.map((section) => (
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
          {tokenSections.map((section) => (
            <Card key={section} className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-4">
                <h3 className="mb-2 text-sm font-semibold text-zinc-200">
                  {section}
                </h3>
                <div className="markdown-body text-sm">
                  <ReactMarkdown>
                    {getSectionBlock(tokensMarkdown, section)}
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
