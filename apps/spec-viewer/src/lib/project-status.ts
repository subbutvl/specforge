export function getStatusColor(status: string) {
  switch (status) {
    case "draft":
      return "bg-zinc-700 text-zinc-100";

    case "active":
      return "bg-blue-600 text-white";

    case "completed":
      return "bg-green-600 text-white";

    default:
      return "bg-zinc-800 text-zinc-200";
  }
}

export function getReadinessColor(readiness: string) {
  switch (readiness) {
    case "idea":
      return "bg-orange-600 text-white";

    case "spec-ready":
      return "bg-blue-600 text-white";

    case "implementation-ready":
      return "bg-green-600 text-white";

    default:
      return "bg-zinc-700 text-zinc-100";
  }
}
