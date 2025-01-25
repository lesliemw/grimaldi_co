"use client";
import ProductCard from "./ProductCard";
import { useFilterProductsByCategory } from "../../_api/supabaseApi/useFilterProducts";

function ProductsMap({ category_id }) {
  const { filteredProductsByCategory, isLoading, error } =
    useFilterProductsByCategory(category_id) || {};

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to load products. Please try again later.</p>;
  }

  if (!filteredProductsByCategory || filteredProductsByCategory.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="bg-white  font-themeFont">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {filteredProductsByCategory.category_name}
        </h2>
        <div className="grid grid-rows-1 w-auto  content-center p-3 ">
          <div className="mt-6 grid grid-cols-1 gap-x-16  gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
            {filteredProductsByCategory?.map((product, i) => (
              <div
                key={product.product_id || i}
                className="product-card-container"
              >
                {/* Main Product Info */}
                <ProductCard
                  productId={product.product_id}
                  description={product.product_description}
                  alt={product.product_name || "Product"}
                  name={product.product_name}
                  price={
                    product.product_item?.[0]?.sale_price ||
                    product.product_item?.[0]?.original_price
                  }
                  src={product.product_image?.[0]?.image_filename} // Display the first image as the main image
                />

                {/* Additional Product Images */}
                {product.product_image?.length > 1 && (
                  <div className="mt-4 flex space-x-2">
                    {product.product_image.map((image, index) => (
                      <img
                        key={image.image_id || index}
                        src={image.image_filename}
                        alt={`${product.product_name || "Product"} image ${
                          index + 1
                        }`}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsMap;
