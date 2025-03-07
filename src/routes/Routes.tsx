import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "@features/Layout";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Demo } from "@pages/Demo";
import { NotFound } from "@pages/NotFound";
import { routes } from "./routes";
import { Episode } from "@pages/Episode";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.episode} element={<Episode />} />
          <Route path="/demo" element={<Demo />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
