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
