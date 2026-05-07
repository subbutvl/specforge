export interface ProjectMetadata {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  updatedAt: string;
  readiness: string;
}

export interface ProjectSpecFile {
  id: string;
  title: string;
  path: string;
}

export interface ProjectData {
  metadata: ProjectMetadata;
  specs: ProjectSpecFile[];
}
