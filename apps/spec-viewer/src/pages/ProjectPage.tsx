import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { projects } from "@/data/projects";
import { specContent } from "@/content/specs";

import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

import { getReadinessColor, getStatusColor } from "@/lib/project-status";

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.metadata.id === projectId);

  const [activeSpecId, setActiveSpecId] = useState(project?.specs[0]?.id ?? "");
  const [rawMode, setRawMode] = useState(false);

  if (!project) {
    return (
      <div className="p-8 text-zinc-100 bg-zinc-950 min-h-screen">
        Project not found
      </div>
    );
  }

  const activeSpec = project.specs.find((spec) => spec.id === activeSpecId);

  const markdown = activeSpec
    ? (specContent[`${project.metadata.id}/${activeSpec.id}`] ??
      "# Spec not found")
    : "# No spec selected";

  return (
    <div className="h-screen bg-zinc-950 text-zinc-100 flex">
      <aside className="w-72 border-r border-zinc-800 p-4 overflow-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-200 transition-colors mb-6"
        >
          ← Back to workspace
        </Link>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">{project.metadata.title}</h2>

          <p className="text-xs text-zinc-500 mt-1">
            {project.metadata.description}
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge className={getStatusColor(project.metadata.status)}>
              {project.metadata.status}
            </Badge>

            <Badge className={getReadinessColor(project.metadata.readiness)}>
              {project.metadata.readiness}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          {project.specs.map((spec) => {
            const isActive = spec.id === activeSpecId;

            return (
              <button
                key={spec.id}
                onClick={() => setActiveSpecId(spec.id)}
                className={`w-full text-left rounded-lg px-3 py-3 text-sm border transition-colors ${
                  isActive
                    ? "bg-zinc-800 border-zinc-700"
                    : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {spec.title}
              </button>
            );
          })}
        </div>
        <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-500 space-y-2">
          <div>Updated: {project.metadata.updatedAt}</div>

          <div>Project ID: {project.metadata.id}</div>
        </div>
      </aside>

      <main className="flex-1 min-h-0 flex flex-col">
        <div className="shrink-0 border-b border-zinc-800 bg-zinc-950 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">{activeSpec?.title}</h1>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className={!rawMode ? "text-white" : "text-zinc-500"}>
              Preview
            </span>

            <Switch checked={rawMode} onCheckedChange={setRawMode} />

            <span className={rawMode ? "text-white" : "text-zinc-500"}>
              Raw
            </span>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-auto p-5">
          {rawMode ? (
            <pre className="bg-zinc-900 border border-zinc-800 rounded-md p-6 overflow-auto text-sm leading-7 whitespace-pre-wrap max-h-full">
              {markdown}
            </pre>
          ) : (
            <div className="markdown-body bg-zinc-950 max-w-5xl mx-auto">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
