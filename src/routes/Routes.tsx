import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "@features/Layout";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { NotFound } from "@pages/NotFound";
import { routes } from "./routes";
import { Episode } from "@pages/Episode";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path={routes.episode} element={<Episode />} />
          </Route>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
