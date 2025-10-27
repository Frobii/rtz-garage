import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import ImageCarousel from "../../components/ui/ImageCarousel";
import Button from "../../components/ui/Button";
import { mdiCartPlus } from "@mdi/js";
import { useCart } from "../cart/CartContext.jsx";

function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className={styles.productWrapper}>
      <div className={`${styles.productHeader} nonSelectable`}>
        <p>{product.brand} {product.model}</p>
        <p>${product.price}</p>
      </div>
      <ImageCarousel product={product}/>
      <Button
        iconPath={mdiCartPlus}
        title={"Add to Cart"}
        width={"12rem"}
        onClick={handleAddToCart}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
