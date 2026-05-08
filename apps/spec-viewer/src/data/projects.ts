import type { ProjectData } from "@/types/project";

type ProjectMetadataFile = ProjectData["metadata"];

const metadataModules = import.meta.glob(
  "../../../../projects/*/metadata.json",
  { eager: true, import: "default" },
) as Record<string, ProjectMetadataFile>;

const specModules = import.meta.glob("../../../../projects/*/specs/*.md", {
  eager: true,
  as: "raw",
}) as Record<string, string>;

function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}

function getProjectIdFromPath(path: string) {
  const normalizedPath = normalizePath(path);
  const match = normalizedPath.match(/projects\/([^/]+)\/metadata\.json$/);
  return match ? match[1] : null;
}

function getSpecFileInfoFromPath(path: string) {
  const normalizedPath = normalizePath(path);
  const match = normalizedPath.match(
    /projects\/([^/]+)\/specs\/(\d+)-(.+)\.md$/,
  );

  if (!match) {
    return null;
  }

  const [, projectId, orderText, slug] = match;
  const order = Number(orderText);
  const id = slug.toLowerCase();
  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return {
    projectId,
    order,
    id,
    title,
  };
}

export const projects: ProjectData[] = Object.entries(metadataModules)
  .map(([path, metadata]) => {
    const projectId = getProjectIdFromPath(path);

    if (!projectId) {
      return null;
    }

    const specs = Object.keys(specModules)
      .map((specPath) => getSpecFileInfoFromPath(specPath))
      .filter(
        (specInfo): specInfo is NonNullable<typeof specInfo> =>
          Boolean(specInfo) && specInfo.projectId === projectId,
      )
      .sort((left, right) => left.order - right.order)
      .map(({ id, title }) => ({
        id,
        title,
        path: `${projectId}/${id}`,
      }));

    return {
      metadata,
      specs,
    };
  })
  .filter((project): project is ProjectData => Boolean(project))
  .sort((left, right) =>
    left.metadata.title.localeCompare(right.metadata.title),
  );
