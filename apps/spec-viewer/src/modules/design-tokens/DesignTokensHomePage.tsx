import { ModuleProjectListPage } from "@/modules/shared/ModuleProjectListPage";
import { getModuleById } from "@/workspace/modules";

const moduleDefinition = getModuleById("design-tokens");

export default function DesignTokensHomePage() {
  if (!moduleDefinition) {
    return null;
  }

  return <ModuleProjectListPage module={moduleDefinition} />;
}
