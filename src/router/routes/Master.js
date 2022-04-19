/* eslint-disable semi */
/* eslint-disable comma-dangle */
import { lazy } from "react";

const MasterRoutes = [
  {
    path: "/master/data",
    component: lazy(() => import("../../views/master")),
  },
];

export default MasterRoutes;
