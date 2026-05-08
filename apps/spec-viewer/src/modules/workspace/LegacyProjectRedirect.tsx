import { Navigate, useParams } from "react-router-dom";

export default function LegacyProjectRedirect() {
  const { projectId } = useParams();

  if (!projectId) {
    return <Navigate to="/spec-viewer" replace />;
  }

  return <Navigate to={`/spec-viewer/${projectId}`} replace />;
}
