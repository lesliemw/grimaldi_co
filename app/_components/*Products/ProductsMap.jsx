"use client";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@app/GlobalRedux/features/products/productsSlice";

function ProductsMap() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-white  font-themeFont">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Featured Products
        </h2>
        <div className="grid grid-rows-1 w-auto  content-center p-3 ">
          <div className="mt-6 grid grid-cols-1 gap-x-16  gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
            {products?.map((product, i) => (
              <ProductCard
                key={product._id || i}
                productId={product._id}
                description={product.description}
                alt={product.alt}
                name={product.name}
                price={product.price}
                src={product.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsMap;
