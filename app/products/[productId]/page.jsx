"use client";

import ProductDetails from "@components/products/ProductDetails";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductIdPage({ params: { productId } }) {
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchedProduct() {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchedProduct();
  }, [productId]);
  return <ProductDetails product={product} />;
}

export default ProductIdPage;
