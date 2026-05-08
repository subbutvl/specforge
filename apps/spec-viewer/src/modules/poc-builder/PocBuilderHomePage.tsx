import { ModuleProjectListPage } from "@/modules/shared/ModuleProjectListPage";
import { getModuleById } from "@/workspace/modules";

const moduleDefinition = getModuleById("poc-builder");

export default function PocBuilderHomePage() {
  if (!moduleDefinition) {
    return null;
  }

  return <ModuleProjectListPage module={moduleDefinition} />;
}
