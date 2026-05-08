import { Link, NavLink } from "react-router-dom";

import { workspaceModules } from "@/workspace/modules";

interface WorkspaceShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function WorkspaceShell({
  title,
  subtitle,
  children,
}: WorkspaceShellProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link to="/" className="text-xl font-semibold tracking-tight">
              SpecForge Workspace
            </Link>
            {subtitle ? (
              <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>
            ) : null}
          </div>

          <nav className="flex flex-wrap gap-2">
            {workspaceModules.map((module) => (
              <NavLink
                key={module.id}
                to={module.listPath}
                className={({ isActive }) =>
                  `rounded-md border px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                      : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700"
                  }`
                }
              >
                {module.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="px-6 py-6">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {children}
      </main>
    </div>
  );
}
