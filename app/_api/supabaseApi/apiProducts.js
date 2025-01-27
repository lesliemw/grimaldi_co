import { supabase } from "../../_utils/supabase";

export async function fetchProducts() {
  const { data: products, error } = await supabase
    .from("master_product_table")
    .select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return null;
  }

  return products;
}

export async function filterProducts(category_id, parent_product_category_id) {
  try {
    let query = supabase.from("master_product_table").select("*");

    if (category_id) {
      query = query.eq("product_category_id", category_id);
    }
    if (parent_product_category_id) {
      query = query.eq(
        "parent_product_category_id",
        parent_product_category_id
      );
    }

    const { data: filteredProducts, error } = await query;

    if (error) {
      console.error("Error fetching filtered products:", error);
      return null;
    }

    return filteredProducts;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}
