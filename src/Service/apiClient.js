const BASE_URL = "https://dummyjson.com";

export async function apiClient(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error("Network response failed");
    }

    return await response.json();
  } catch (error) {
    console.error("API CLIENT ERROR:", error);
    return null;
  }
}
