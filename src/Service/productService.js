import { apiClient } from "./apiClient";

export async function getProducts() {
  const data = await apiClient("/products");
  return data.products;
}

export async function getProductById(id) {
  const data = await apiClient(`/products/${id}`);
  return data;
}
