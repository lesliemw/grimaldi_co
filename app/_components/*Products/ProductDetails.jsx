"use client";
import Image from "next/image";
import AddToCartButton from "../ui/AddToCartButton";
import HeartButton from "../ui/HeartButton";
import QuantityCounter from "../UI/QuantityCounter";
import { useState } from "react";
import { useProducts } from "../../_api/supabaseApi/useProducts";

function ProductDetails() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const firstProduct = products?.[0];

  if (!firstProduct) return <p>No products found.</p>;

  const {
    product_name,
    product_description,
    product_category: { category_name } = {},
    product_image,
    product_item,
  } = firstProduct;

  const price = product_item?.[0]?.sale_price || 0;

  function handleIncrement() {
    setQty(qty + 1);
  }

  function handleDecrement() {
    if (qty > 1) setQty(qty - 1);
  }

  return (
    <section className="text-gray-700 font-themeFont overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt={product_name}
            src={product_image?.[0]?.image_filename}
            height={300}
            width={300}
            className="lg:w-1/2 w-full object-cover object-center"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-20">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {category_name || "No Category"}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product_name}
            </h1>
            <p className="leading-relaxed">{product_description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex w-full justify-between items-center">
                <div>
                  <span className="mr-3">Size</span>
                  <select
                    className="rounded border appearance-none border-gray-200 py-2 focus:outline-none text-base pl-3 pr-10"
                    value={size || "SM"}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="XS">XS</option>
                    <option value="SM">SM</option>
                    <option value="MD">M</option>
                    <option value="LG">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Quantity</span>
                  <div>
                    <QuantityCounter
                      handleIncrement={handleIncrement}
                      handleDecrement={handleDecrement}
                      qty={qty}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                € {price * qty}
              </span>
              <div className="flex gap-4">
                <HeartButton />
                <AddToCartButton product={firstProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
