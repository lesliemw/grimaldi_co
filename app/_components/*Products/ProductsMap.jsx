"use client";
import { useFilterProductsByCategory } from "../../_api/supabaseApi/useFilterProducts";
import Loading from "../../loading";
import HeartButton from "../UI/HeartButton";
import AddToCartButton from "../UI/AddToCartButton";

function ProductsMap({ category_id }) {
  const { filteredProductsByCategory, isLoading, error } =
    useFilterProductsByCategory(category_id) || {};

  if (error) {
    return <p>Failed to load products. Please try again later.</p>;
  }

  if (!filteredProductsByCategory || filteredProductsByCategory.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="bg-white font-themeFont">
      <div className=" px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-rows-1 p-3 ">
          <div className=" grid grid-cols-1 mx-auto gap-x-16 gap-y-20 lg:grid-cols-3 xl:gap-x-24 ">
            {isLoading ? (
              <Loading />
            ) : (
              filteredProductsByCategory?.map((product, i) => (
                <div
                  key={product.product_id || i}
                  className=" grid grid-cols-1 items-center"
                >
                  <div className="col-span-1">
                    <img
                      src={product.product_image?.[0]?.image_filename}
                      alt={product.product_name}
                      className="w-full h-96 object-scale-down rounded-lg "
                    />
                  </div>

                  <div className="flex flex-row col-span-1 mt-2 items-center ">
                    {product.product_image?.slice(1).map((image, index) => (
                      <img
                        key={image.image_id || index}
                        src={image.image_filename}
                        alt={`${product.product_name || "Color option"} ${
                          index + 1
                        }`}
                        className="w-28 h-20 object-cover rounded-md cursor-pointer border"
                      />
                    ))}
                  </div>
                  <div className=" col-span-1 mt-4">
                    <h3 className="text-2xl font-bold">
                      {product.product_name}
                    </h3>
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
                        <HeartButton />
                        <AddToCartButton />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsMap;
