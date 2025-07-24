import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [ 
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> }, 
    ],
  },
]);

export default router;