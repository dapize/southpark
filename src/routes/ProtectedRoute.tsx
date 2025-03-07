import { Navigate, Outlet } from "react-router";
import { routes } from "./routes";
import { useUserStore } from "@hooks/user";

export const ProtectedRoute = () => {
  const userData = useUserStore((state) => state.userData);
  if (!userData) {
    return <Navigate to={routes.login} replace />;
  }

  return <Outlet />;
};
