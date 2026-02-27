export async function getProductLimit() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=12");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
