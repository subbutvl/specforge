import type { ProjectData } from "@/types/project";
import { getAllProjects } from "@/workspace/registry/project-registry";

export const projects: ProjectData[] = getAllProjects();
