"use client";
import { memo, useMemo } from "react";
import { useFilterProductsByCategory } from "../../_api/supabaseApi/useFilterProducts";
import Loading from "../../loading";
import ProductDetailsButton from "../UI/ProductDetailsButton";
import Image from "next/image";

function ProductsMap({ category_id }) {
  const {
    filteredProductsByCategory = [],
    isLoading = false,
    error = null,
  } = useFilterProductsByCategory(category_id) || {};

  // Memoize the filtered products to avoid unnecessary re-renders
  const products = useMemo(
    () => filteredProductsByCategory,
    [filteredProductsByCategory]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Failed to load products. Please try again later.</p>;
  }

  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="bg-white font-themeFont">
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
        <div className="grid grid-rows-1 p-3">
          <div className="grid grid-cols-1 mx-auto gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-24">
            {products.map((product, i) => (
              <div
                key={product.product_id || i}
                className="grid grid-cols-1 items-center"
              >
                <div className="col-span-1 mx-auto">
                  <Image
                    src={
                      product.product_image?.[0]?.image_filename ||
                      "brandingOpaque.png"
                    }
                    alt={product.product_name || "Product Image"}
                    width={500}
                    height={500}
                    className="max-h-96 object-scale-down rounded-lg"
                    priority
                  />
                </div>

                <div className="flex flex-row col-span-1 mx-auto mt-2 items-center">
                  {product.product_image?.slice(1).map((image, index) => (
                    <Image
                      key={`${product.product_id}-${image.image_id || index}`}
                      src={image.image_filename}
                      alt={`${product.product_name || "Color option"} ${
                        index + 1
                      }`}
                      width={100}
                      height={100}
                      className="w-28 h-20 object-cover rounded-md cursor-pointer border"
                    />
                  ))}
                </div>
                <div className="col-span-1 mt-4">
                  <h3 className="text-2xl font-bold">{product.product_name}</h3>
                  <p className="text-gray-500 mt-2">
                    {product.product_description}
                  </p>
                  <div className="flex justify-between mt-6 items-center">
                    <div>
                      <p className="text-2xl font-semibold">
                        €
                        {product.product_item?.[0]?.sale_price ||
                          product.product_item?.[0]?.original_price ||
                          "N/A"}
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <ProductDetailsButton />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(
  ProductsMap,
  (prevProps, nextProps) => prevProps.category_id === nextProps.category_id
);
