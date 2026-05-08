import { ModuleProjectListPage } from "@/modules/shared/ModuleProjectListPage";
import { getModuleById } from "@/workspace/modules";

const moduleDefinition = getModuleById("spec-viewer");

export default function SpecViewerHomePage() {
  if (!moduleDefinition) {
    return null;
  }

  return <ModuleProjectListPage module={moduleDefinition} />;
}
