import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import ShopLayout from "../components/layout/ShopLayout";
import ShopLanding from "../pages/shop-landing/ShopLanding";
import ShopCategory from "../pages/shop-category/ShopCategory";
import Media from "../pages/media/Media";
import About from "../pages/about/About";
import Checkout from "../pages/checkout/Checkout";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [ 
        { index: true, element: <Home /> },
        {
            path: "shop",
            element: <ShopLayout />,
            children: [
            { index: true, element: <ShopLanding /> },
            { path: ":category", element: <ShopCategory /> },
            //   { path: ":category/:productId", element: <ProductDetail /> },
            ],
        },
        { path: "media", element: <Media /> }, 
        { path: "about", element: <About /> }, 
        { path: "checkout", element: <Checkout /> }, 
    ],
  },
]);

export default router;