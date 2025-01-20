"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useProducts } from "../_api/supabaseApi/useProducts";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const products = useProducts();

  useEffect(() => {
    if (products === null) {
      setIsLoading(true);
    } else if (products.length === 0) {
      setIsLoading(false);
      setError("No products found");
    } else {
      setIsLoading(false);
    }
  }, [products]);

  const contextValue = React.useMemo(
    () => ({ products, isLoading, error }),
    [products, isLoading, error]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
