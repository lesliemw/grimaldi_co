import ProductsMap from "../../_components/*Products/ProductsMap";

function page() {
  const parent_product_category_id = 15;
  return (
    <ProductsMap parent_product_category_id={parent_product_category_id} />
  );
}

export default page;
