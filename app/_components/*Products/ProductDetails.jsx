"use client";
import Image from "next/image";
import AddToCartButton from "../ui/AddToCartButton";
import HeartButton from "../ui/HeartButton";
import QuantityCounter from "../UI/QuantityCounter";
import { ProductDetailsAccordion } from "../UI/ProductCardAccordion";
import { useState } from "react";
import { useProducts } from "../../_api/supabaseApi/useProducts";

function ProductDetails() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const testProduct = products?.[5];

  if (!testProduct) return <p>No products found.</p>;

  const {
    product_name,
    product_description,
    product_category: { category_name } = {},
    product_image,
    product_item,
    care_instructions,
    about,
  } = testProduct || {};

  const price = product_item?.[0].original_price || 0;

  function handleIncrement() {
    setQty(qty + 1);
    console.log(testProduct);
  }

  function handleDecrement() {
    if (qty > 1) setQty(qty - 1);
  }

  return (
    <section className="text-gray-700 mt-10 font-themeFont overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
          <div className="h-96 mx-auto relative w-96">
            <Image
              alt={product_name}
              src={product_image?.[1]?.image_filename}
              fill
              className="rounded object-cover object-center"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 1024px" //
            />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 items-center">
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
                € {price}
              </span>
              <div className="flex gap-6">
                <HeartButton />
                <AddToCartButton product={testProduct} />
              </div>
            </div>
            <div className="mt-4">
              <ProductDetailsAccordion
                care_instructions={care_instructions}
                about={about}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
