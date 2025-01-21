import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { fetchProducts } from "../supabaseApi/apiProducts";

export function useProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    onError: (err) => {
      console.error("Error fetching products:", err);
      toast.error("Failed to load your products. Please try again.");
    },
  });

  return { products, isLoading, error };
}
