import type {
  ProjectData,
  ProjectMetadata,
  ProjectSpecFile,
} from "@/types/project";

type ProjectMetadataFile = ProjectMetadata;

const projectMetadataModules = import.meta.glob(
  "../../../../../projects/*/metadata.json",
  { eager: true, import: "default" },
) as Record<string, ProjectMetadataFile>;

const projectSpecModules = import.meta.glob(
  "../../../../../projects/*/specs/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
) as Record<string, string>;

const metadataModules: Record<string, ProjectMetadataFile> = {
  ...projectMetadataModules,
};

const specModules: Record<string, string> = {
  ...projectSpecModules,
};

export interface RegistrySpecFile extends ProjectSpecFile {
  order: number;
  fileName: string;
  contentKey: string;
}

export interface RegistryProjectData extends Omit<ProjectData, "specs"> {
  specs: RegistrySpecFile[];
}

function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}

function toTitle(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getProjectIdFromMetadataPath(path: string) {
  const normalizedPath = normalizePath(path);

  const projectMatch = normalizedPath.match(
    /projects\/([^/]+)\/metadata\.json$/,
  );
  if (projectMatch) {
    return projectMatch[1];
  }

  return null;
}

function getSpecInfoFromPath(path: string) {
  const normalizedPath = normalizePath(path);

  const projectMatch = normalizedPath.match(
    /projects\/([^/]+)\/specs\/(\d+)-(.+)\.md$/,
  );

  if (projectMatch) {
    const [, projectId, orderText, slug] = projectMatch;
    const order = Number(orderText);
    const id = slug.toLowerCase();
    const fileName = `${orderText}-${slug}.md`;
    const contentKey = `${projectId}/${id}`;

    return {
      projectId,
      order,
      id,
      title: toTitle(slug),
      fileName,
      contentKey,
    };
  }

  return null;
}

const registryProjects: RegistryProjectData[] = Object.entries(metadataModules)
  .map(([metadataPath, metadata]) => {
    const projectId = getProjectIdFromMetadataPath(metadataPath);

    if (!projectId) {
      return null;
    }

    const specs = Object.keys(specModules)
      .map((specPath) => getSpecInfoFromPath(specPath))
      .filter(
        (specInfo): specInfo is NonNullable<typeof specInfo> =>
          Boolean(specInfo) && specInfo.projectId === projectId,
      )
      .sort((left, right) => left.order - right.order)
      .map(({ id, title, order, fileName, contentKey }) => ({
        id,
        title,
        order,
        fileName,
        contentKey,
        path: `${projectId}/${id}`,
      }));

    return {
      metadata,
      specs,
    };
  })
  .filter((project): project is RegistryProjectData => Boolean(project))
  .sort((left, right) =>
    left.metadata.title.localeCompare(right.metadata.title),
  );

const registrySpecContent: Record<string, string> = Object.entries(specModules)
  .map(([specPath, content]) => {
    const specInfo = getSpecInfoFromPath(specPath);

    if (!specInfo) {
      return null;
    }

    return [specInfo.contentKey, content] as const;
  })
  .filter((entry): entry is readonly [string, string] => Boolean(entry))
  .reduce<Record<string, string>>((acc, [key, markdown]) => {
    acc[key] = markdown;
    return acc;
  }, {});

export function getAllProjects(): RegistryProjectData[] {
  return registryProjects;
}

export function getProjectById(projectId?: string) {
  if (!projectId) {
    return undefined;
  }

  return registryProjects.find((project) => project.metadata.id === projectId);
}

export function getSpecContent(projectId: string, specId: string) {
  return registrySpecContent[`${projectId}/${specId}`];
}

export function getProjectSpecContent(project: RegistryProjectData) {
  return project.specs.reduce<Record<string, string>>((acc, spec) => {
    acc[spec.id] = getSpecContent(project.metadata.id, spec.id) ?? "";
    return acc;
  }, {});
}

export const projectRegistry = {
  projects: registryProjects,
  specContent: registrySpecContent,
};
