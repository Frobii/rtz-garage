import { useParams } from "react-router-dom";

import ProductList from "../../features/product/ProductList";

function ShopCategory() {
  const { category } = useParams();

  return (
    <>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ProductList category={category} />
    </>
  );
}

export default ShopCategory;
