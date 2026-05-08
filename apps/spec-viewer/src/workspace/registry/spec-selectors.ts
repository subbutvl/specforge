import type { RegistryProjectData } from "@/workspace/registry/project-registry";
import { getSpecContent } from "@/workspace/registry/project-registry";

export function getMarkdownBySpecSlug(
  project: RegistryProjectData,
  slug: string,
): string {
  const spec = project.specs.find((entry) => entry.id === slug);

  if (!spec) {
    return "# Spec not found";
  }

  return getSpecContent(project.metadata.id, spec.id) ?? "# Spec not found";
}

export function getSectionBlock(markdown: string, heading: string): string {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const sectionRegex = new RegExp(
    `(^##\\s+${escapedHeading}[\\s\\S]*?)(?=^##\\s+|\\Z)`,
    "m",
  );
  const match = markdown.match(sectionRegex);
  return match?.[1]?.trim() ?? `## ${heading}\n\nNot available yet.`;
}
