import ProductsMap from "../../_components/*Products/ProductsMap";

function page() {
  const category_id = 2;
  return (
    <div>
      <ProductsMap category_id={category_id} />
    </div>
  );
}

export default page;
