import { Routes as ReactRoutes } from "react-router-dom";
import { buildRoute } from "./helpers";
import { routesPortal } from "./entities/portal";

export const Routes = () => {
  return <ReactRoutes>{buildRoute(routesPortal)}</ReactRoutes>;
};
