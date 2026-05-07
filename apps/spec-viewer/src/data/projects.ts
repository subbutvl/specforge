import type { ProjectData } from "@/types/project";

export const projects: ProjectData[] = [
  {
    metadata: {
      id: "subscription-management",
      title: "Subscription Management",
      description: "Track recurring subscriptions, renewals, and expenses.",
      status: "draft",
      tags: ["finance", "subscriptions"],
      updatedAt: "2026-05-07",
      readiness: "idea",
    },

    specs: [
      {
        id: "problem-brief",
        title: "Problem Brief",
        path: "/projects/subscription-management/specs/01-problem-brief.md",
      },
    ],
  },
];
