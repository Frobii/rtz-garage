import ProductList from "../../features/product/ProductList";

function ShopLanding() {

  return (
    <>
      <h1>All Products</h1>
      <ProductList category={"all"}/>
    </>
  );
}

export default ShopLanding;
