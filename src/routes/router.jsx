import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import ShopLayout from "../layouts/ShopLayout";
import Shop from "../pages/shop/Shop";
import ProductLayout from "../layouts/ProductLayout";
import Product from "../pages/product/Product";
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
          { index: true, element: <Shop /> }, // All Products
          {
            path: ":category",
            children: [
              { index: true, element: <Shop /> }, // Category Specific
              { element: <ProductLayout />,
                children: [
                  { path: ":productId", element: <Product /> }
                ]
              },
            ]
          }
        ],
      },
      { path: "media", element: <Media /> },
      { path: "about", element: <About /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

export default router;
