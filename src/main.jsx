import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ProductProvider } from "./features/product/ProductContext.jsx";
import { CartProvider } from "./features/cart/CartContext.jsx";
import "./index.css";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
);
