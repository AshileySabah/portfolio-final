import { Routes as ReactRoutes, Route } from "react-router-dom";
import { buildRoute } from "./helpers";
import { routesPortal } from "./entities/portal";
import { BaseLayout } from "@/components/BaseLayout";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="" element={<BaseLayout />}>
        {buildRoute(routesPortal)}
      </Route>
    </ReactRoutes>
  );
};
