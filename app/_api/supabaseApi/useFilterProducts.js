import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { filterProducts } from "../supabaseApi/apiProducts"; // Assuming filterProducts is updated to fetch from master_product_table

export function useFilterProductsByCategory(
  category_id,
  parent_product_category_id
) {
  const {
    data: filteredProductsByCategory,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "filteredProductsByCategory",
      category_id,
      parent_product_category_id,
    ],
    queryFn: () => {
      if (!category_id && !parent_product_category_id) {
        console.warn(
          "Both category_id and parent_product_category_id are undefined or null."
        );
        return Promise.resolve([]);
      }

      return filterProducts(category_id, parent_product_category_id);
    },
    enabled: !!category_id || !!parent_product_category_id,
    onError: (err) => {
      console.error("Error fetching products:", err);
      toast.error("Failed to load your products. Please try again.");
    },
  });

  return { filteredProductsByCategory, isLoading, error };
}
