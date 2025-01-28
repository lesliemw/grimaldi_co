import ProductsMap from "../../_components/*Products/ProductsMap";

function page() {
  const parent_product_category_id = 15;
  return (
    <div className="grid grid-cols-1">
      <h1 className="mt-20 pl-6 font-themeFont text-lg ">Women's Fashion</h1>
      <ProductsMap parent_product_category_id={parent_product_category_id} />
    </div>
  );
}

export default page;
