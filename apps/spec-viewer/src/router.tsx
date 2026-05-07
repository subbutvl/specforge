import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import ProjectPage from "@/pages/ProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/project/:projectId",
    element: <ProjectPage />,
  },
]);
