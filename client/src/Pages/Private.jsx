import { lazy } from "react";
import { Navigate } from "react-router-dom";

import MyJobs from "./MyJobs";

export default function privateRoutes() {
    return {
        element: <Layout />,
        children: [
            { path: "/", element: <MyJobs /> },
            { path: "*", element: <Navigate to="/" replace /> },
        ],
    };
}