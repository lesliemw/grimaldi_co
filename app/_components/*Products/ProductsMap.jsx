"use client";

import { memo, useMemo, useState } from "react";
import { useFilterProductsByCategory } from "../../_api/supabaseApi/useFilterProducts";
import Loading from "../../loading";
import ProductDetails from "../../_components/*Products/ProductDetails"; // Import the ProductDetails component
import Modal from "../UI/Modal"; // Import the Modal component
import Image from "next/image";
import ProductDetailsButton from "../UI/ProductDetailsButton";

function ProductsMap({ category_id, parent_product_category_id }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    filteredProductsByCategory = [],
    isLoading = false,
    error = null,
  } = useFilterProductsByCategory(category_id, parent_product_category_id) ||
  {};

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
  function toggleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  // Handle product click to show details in modal
  function handleProductClick(product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  return (
    <div className="bg-white font-themeFont">
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
        <div className="grid grid-cols-1 mx-auto gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-24">
          {products.map((product, i) => (
            <div
              key={product.product_id || i} // Use product_id as key
              className="grid grid-cols-1 items-center cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="col-span-1 mx-auto">
                <Image
                  src={product.image_filename || "/brandingOpaque.png"}
                  alt={product.product_name || "Product Image"}
                  width={500}
                  height={500}
                  className="max-h-96 object-scale-down rounded-lg transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="col-span-1 mt-4">
                <h3 className="text-2xl font-bold">{product.product_name}</h3>
                <p className="text-gray-500 mt-2">
                  {product.product_description}
                </p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-2xl font-semibold mt-4">
                  €{product.sale_price || product.original_price || "N/A"}
                </p>
                <div className="flex gap-6">
                  <ProductDetailsButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Product Details */}
      {isModalOpen && (
        <Modal open={isModalOpen} setOpen={toggleModalOpen}>
          <ProductDetails product={selectedProduct} setOpen={toggleModalOpen} />
        </Modal>
      )}
    </div>
  );
}

export default memo(
  ProductsMap,
  (prevProps, nextProps) => prevProps.category_id === nextProps.category_id
);
