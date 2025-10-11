import ProductList from "../../features/product/ProductList";

function ShopLanding() {

  return (
    <>
      <h3>All Products</h3>
      <ProductList category={"all"}/>
    </>
  );
}

export default ShopLanding;
