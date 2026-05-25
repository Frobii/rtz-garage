import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "../../features/product/ProductList";
import styles from "./Shop.module.css";
import CategoryMenu from "../../components/ui/CategoryMenu";
import Icon from "@mdi/react";
// import { mdiMenu, mdiCloseThick } from "@mdi/js";
import { mdiMenuClose , mdiMenu  } from "@mdi/js";

function Shop() {
  const { category } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const iconPath = menuOpen ?  mdiMenuClose : mdiMenu;

  return (
    <div className={styles.shopContainer}>
      {
      // TODO: Make the nav menu "position: sticky;"
      //       - Maybe also use this for the cart & shop title?
      }
      <button
        className={styles.titleWrapper}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Icon
          path={iconPath}
          size={2}
          className={styles.menuToggle}
        />
        <h1 className={styles.shopTitle}>{title}</h1>
      </button>
      {menuOpen && <CategoryMenu onSelect={() => setMenuOpen(false)} />}
      <ProductList category={categoryProp} />
    </div>
  );
}

export default Shop;
