import PropTypes from "prop-types";
import Button from "../../components/ui/Button";
import { mdiCartPlus } from "@mdi/js";
import { useCart } from "../cart/CartContext.jsx";

function CartButton({ width, product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Button
      iconPath={mdiCartPlus}
      title="Add to Cart"
      width={width}
      onClick={handleAddToCart}
    />
  );
}

CartButton.propTypes = {
  product: PropTypes.object.isRequired,
  width: PropTypes.string
};

export default CartButton;
