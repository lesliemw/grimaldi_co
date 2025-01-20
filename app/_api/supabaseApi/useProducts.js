const { supabase } = require("../../_utils/supabase");

export async function useProducts() {
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
