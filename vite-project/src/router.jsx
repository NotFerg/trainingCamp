import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import CompaniesPage from "./pages/CompaniesPage/CompaniesPage.jsx";

const routes = [
    {
    path: "/",
    element: <App />,
    children:[
        {path: "/404", element: <ErrorPage />},
        {path: "", element :<Home/>},
        {path: "resources", element :<ResourcesPage/>},
        {path: "projects", element :<ProjectsPage/>},
        {path: "companies", element :<CompaniesPage/>},
    ]
},
    {path: "*", element:<Navigate to= "/404" replace/>}
];


const router = createBrowserRouter(routes);
export default router;