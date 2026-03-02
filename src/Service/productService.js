import { apiClient } from "./apiClient";

export async function getProducts() {
  const data = await apiClient("/products");
  return data.products;
}
