import { createBrowserRouter } from "react-router-dom";

import DesignTokensHomePage from "@/modules/design-tokens/DesignTokensHomePage";
import DesignTokensProjectPage from "@/modules/design-tokens/DesignTokensProjectPage";
import IdeaValidatorHomePage from "@/modules/idea-validator/IdeaValidatorHomePage";
import IdeaValidatorProjectPage from "@/modules/idea-validator/IdeaValidatorProjectPage";
import PocBuilderHomePage from "@/modules/poc-builder/PocBuilderHomePage";
import PocBuilderProjectPage from "@/modules/poc-builder/PocBuilderProjectPage";
import SpecViewerHomePage from "@/modules/spec-viewer/SpecViewerHomePage";
import SpecViewerProjectPage from "@/modules/spec-viewer/SpecViewerProjectPage";
import LegacyProjectRedirect from "@/modules/workspace/LegacyProjectRedirect";
import WorkspaceHomePage from "@/modules/workspace/WorkspaceHomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WorkspaceHomePage />,
  },
  {
    path: "/idea-validator",
    element: <IdeaValidatorHomePage />,
  },
  {
    path: "/idea-validator/:projectId",
    element: <IdeaValidatorProjectPage />,
  },
  {
    path: "/spec-viewer",
    element: <SpecViewerHomePage />,
  },
  {
    path: "/spec-viewer/:projectId",
    element: <SpecViewerProjectPage />,
  },
  {
    path: "/design-tokens",
    element: <DesignTokensHomePage />,
  },
  {
    path: "/design-tokens/:projectId",
    element: <DesignTokensProjectPage />,
  },
  {
    path: "/poc-builder",
    element: <PocBuilderHomePage />,
  },
  {
    path: "/poc-builder/:projectId",
    element: <PocBuilderProjectPage />,
  },
  {
    path: "/project/:projectId",
    element: <LegacyProjectRedirect />,
  },
]);
