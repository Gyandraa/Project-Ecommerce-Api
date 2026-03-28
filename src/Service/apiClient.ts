import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function apiClient(endpoint: string) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);

    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("API CLIENT ERROR:", error);
    return null;
  }
}
