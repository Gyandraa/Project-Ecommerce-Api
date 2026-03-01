import { apiClient } from "./apiClient";

export async function getCategory() {
  return apiClient("/products/categories");
}
