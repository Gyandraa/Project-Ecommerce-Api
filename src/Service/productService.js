import { apiClient } from "./apiClient";

export async function getAllProducts() {
  const data = await apiClient("/products");
  return data.products;
}

export async function getRekomendProduct(limit = 12) {
  const data = await apiClient("/products");

  const shuffled = data.products.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, limit);
}
