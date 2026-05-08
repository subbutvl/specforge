export interface WorkspaceModule {
  id: "idea-validator" | "spec-viewer" | "design-tokens" | "poc-builder";
  name: string;
  description: string;
  listPath: string;
  detailPath: (projectId: string) => string;
}

export const workspaceModules: WorkspaceModule[] = [
  {
    id: "idea-validator",
    name: "Idea Validator",
    description:
      "Evaluate idea readiness, risks, open questions, and scope complexity.",
    listPath: "/idea-validator",
    detailPath: (projectId) => `/idea-validator/${projectId}`,
  },
  {
    id: "spec-viewer",
    name: "Spec Viewer",
    description: "Browse generated specs with markdown preview and raw modes.",
    listPath: "/spec-viewer",
    detailPath: (projectId) => `/spec-viewer/${projectId}`,
  },
  {
    id: "design-tokens",
    name: "Design Token Generator",
    description:
      "Organize and inspect design token definitions and theme strategy.",
    listPath: "/design-tokens",
    detailPath: (projectId) => `/design-tokens/${projectId}`,
  },
  {
    id: "poc-builder",
    name: "POC Builder",
    description:
      "Define mock/demo requirements and structure for future POC generation.",
    listPath: "/poc-builder",
    detailPath: (projectId) => `/poc-builder/${projectId}`,
  },
];

export function getModuleById(moduleId?: string) {
  if (!moduleId) {
    return undefined;
  }

  return workspaceModules.find((module) => module.id === moduleId);
}
