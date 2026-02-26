export default async function getCategory() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
