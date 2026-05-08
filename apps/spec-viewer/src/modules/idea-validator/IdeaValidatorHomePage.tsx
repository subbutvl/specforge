import { ModuleProjectListPage } from "@/modules/shared/ModuleProjectListPage";
import { getModuleById } from "@/workspace/modules";

const moduleDefinition = getModuleById("idea-validator");

export default function IdeaValidatorHomePage() {
  if (!moduleDefinition) {
    return null;
  }

  return <ModuleProjectListPage module={moduleDefinition} />;
}
