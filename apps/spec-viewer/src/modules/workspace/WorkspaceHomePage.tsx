import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { WorkspaceShell } from "@/workspace/components/WorkspaceShell";
import { workspaceModules } from "@/workspace/modules";

export default function WorkspaceHomePage() {
  return (
    <WorkspaceShell
      title="Workspace Home"
      subtitle="AI-native product incubation workspace"
    >
      <p className="mt-2 text-zinc-400">
        Select a module to work with shared project data from the filesystem.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {workspaceModules.map((module) => (
          <Link key={module.id} to={module.listPath}>
            <Card className="h-full border-zinc-800 bg-zinc-900 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/80">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-zinc-100">
                  {module.name}
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </WorkspaceShell>
  );
}
