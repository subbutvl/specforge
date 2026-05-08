const specModules = import.meta.glob("../../../../projects/*/specs/*.md", {
  eager: true,
  as: "raw",
}) as Record<string, string>;

function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}

function getContentKeyFromPath(path: string) {
  const normalizedPath = normalizePath(path);
  const match = normalizedPath.match(/projects\/([^/]+)\/specs\/\d+-(.+)\.md$/);

  if (!match) {
    return null;
  }

  const [, projectId, specSlug] = match;
  return `${projectId}/${specSlug.toLowerCase()}`;
}

export const specContent: Record<string, string> = Object.entries(specModules)
  .map(([path, markdown]) => {
    const key = getContentKeyFromPath(path);

    if (!key) {
      return null;
    }

    return [key, markdown] as const;
  })
  .filter((entry): entry is readonly [string, string] => Boolean(entry))
  .reduce<Record<string, string>>((acc, [key, markdown]) => {
    acc[key] = markdown;
    return acc;
  }, {});
