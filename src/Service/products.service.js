import { apiClient } from "./apiClient";

export async function getAllProducts() {
  const data = await apiClient("/products");
  return data.products;
}

export async function getProductLimit(limit = 12) {
  const data = await apiClient(`/products?limit=${limit}`);
  return data.products;
}
