import { supabase } from "../../_utils/supabase";

export async function fetchProducts() {
  const { data: products, error } = await supabase.from("product").select(`
        *, 
        product_item(
          *, 
          product_variation(*)
        ), 
       
        product_category(*), 
        product_image(*)
      `);

  if (error) {
    console.error("Error fetching products:", error);
    return null;
  }

  return products;
}

export async function filterProducts(category_id) {
  try {
    const query = supabase
      .from("product")
      .select(
        `
        *, 
        product_item(
          *, 
          product_variation(*)
        ), 
        product_category(*), 
        product_image(*)
      `
      )
      .eq("product_category_id", category_id);

    const { data: filteredProductsByCategory, error } = await query;

    if (error) {
      console.error("Error fetching products by category:", error);
      return null;
    }

    return filteredProductsByCategory;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}
