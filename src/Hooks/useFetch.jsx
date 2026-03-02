import { useEffect, useState } from "react";
import { getProducts } from "../Service/productService";

export default function UseFetch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getProducts();
      setProducts(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  return {
    products,
    loading,
  };
}
