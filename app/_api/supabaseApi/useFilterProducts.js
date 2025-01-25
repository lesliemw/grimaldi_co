import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { filterProducts } from "../supabaseApi/apiProducts";

export function useFilterProductsByCategory(category_id) {
  const {
    data: filteredProductsByCategory,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["filteredProductsByCategory", category_id],
    queryFn: () => filterProducts(category_id),
    onError: (err) => {
      console.error("Error fetching products:", err);
      toast.error("Failed to load your products. Please try again.");
    },
  });

  return { filteredProductsByCategory, isLoading, error };
}
