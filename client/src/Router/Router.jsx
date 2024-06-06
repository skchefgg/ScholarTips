import {
    BrowserRouter,
    RouterProvider,
    Route,
    Routes,
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";
import Contact from "../Pages/Contact";
import Signup from "../Pages/Signup";
import Private from "../Pages/Private";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/post-job", element: <CreateJob /> },
            // { path: "/my-job", element: <MyJobs /> },
            { path: "/salary", element: <SalaryPage /> },
            { path: "/edit-job/:id", element: <UpdateJob />, loader: ({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`) }
        ],
    },
    {
        path: "/login",
        element: <App />,
        children: [
            {
                path: "/login", element: <Login />
            }
        ]
    },
    {
        path: "job/:id",
        element: <App />,
        children: [
            {
                path: "/job/:id", element: <JobDetails />
            }
        ]
    },
    {
        path: "/contact",
        element: <App />,
        children: [
            {
                path: "/contact", element: <Contact />
            }
        ]
    },
    {
        path: "/sign-up",
        element: <App />,
        children: [
            {
                path: "/sign-up", element: <Signup />
            }
        ]
    },
    {
        path: "/my-job", element: <MyJobs />
    }




]);
export default router;