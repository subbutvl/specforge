import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Card, CardContent } from "@/components/ui/card";
import { ProjectDetailLayout } from "@/workspace/components/ProjectDetailLayout";
import { getProjectById } from "@/workspace/registry/project-registry";
import {
  getMarkdownBySpecSlug,
  getSectionBlock,
} from "@/workspace/registry/spec-selectors";

export default function IdeaValidatorProjectPage() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        Project not found
      </div>
    );
  }

  const ideaMarkdown = getMarkdownBySpecSlug(project, "idea");
  const problemBriefMarkdown = getMarkdownBySpecSlug(project, "problem-brief");

  const unknownsBlock = getSectionBlock(ideaMarkdown, "Unknowns");
  const risksBlock = getSectionBlock(problemBriefMarkdown, "Risks");
  const openQuestionsBlock = getSectionBlock(
    problemBriefMarkdown,
    "Open Questions",
  );

  return (
    <ProjectDetailLayout
      project={project}
      backPath="/idea-validator"
      backLabel="Back to Idea Validator"
      sidebarContent={
        <div className="space-y-3 text-sm text-zinc-400">
          <p>Readiness</p>
          <p className="rounded-md border border-zinc-800 bg-zinc-900 p-3 text-zinc-300">
            {project.metadata.readiness}
          </p>
          <p>
            Validation scope is derived from `00-idea` and `01-problem-brief`.
          </p>
        </div>
      }
    >
      <div className="h-full overflow-auto p-5">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardContent className="p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-200">
                Unknowns
              </h3>
              <div className="markdown-body text-sm">
                <ReactMarkdown>{unknownsBlock}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900">
            <CardContent className="p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-200">
                Risks
              </h3>
              <div className="markdown-body text-sm">
                <ReactMarkdown>{risksBlock}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900">
            <CardContent className="p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-200">
                Open Questions
              </h3>
              <div className="markdown-body text-sm">
                <ReactMarkdown>{openQuestionsBlock}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProjectDetailLayout>
  );
}
