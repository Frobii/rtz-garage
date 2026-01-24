import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductList from "../../features/product/ProductList";
import styles from "./Shop.module.css";

function Shop() {
  const { category } = useParams();

  // Determine the title based on the URL param
  const title = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  // Update the tab title every time the title changes
  // TODO: This doesn't help SEO, it's rendered client side
  useEffect(() => {
    document.title = `${title} | RTZ Garage`;

    return () => {
      document.title = "RTZ Garage";
    };
  }, [title]);

  // Display all products when no URL param is passed
  const categoryProp = category || "all";

  return (
    <div className={styles.shopContainer}>
      <h1 className={styles.shopTitle}>{title}</h1>
      <ProductList category={categoryProp} />
    </div>
  );
}

export default Shop;
