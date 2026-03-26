import { apiClient } from "./apiClient";

export async function getProducts() {
  const data = await apiClient("/products");
  return data.products;
}

export async function getProductById(id: number) {
  const data = await apiClient(`/products/${id}`);
  return data;
}

export async function getProductByCategories(category: string) {
  const data = await apiClient(`/products/category/${category}`);
  return data.products;
}
