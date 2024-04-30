import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import GameDetailPage from "../Pages/GameDetailPage";
import ErrorPage from "../Pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:<ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {path : "games/:id" , element: <GameDetailPage/>}
        ]
    }
]);
export default routes;