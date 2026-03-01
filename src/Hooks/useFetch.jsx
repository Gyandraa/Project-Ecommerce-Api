import { useEffect, useState } from "react";
import { getProduct } from "../Service/api";
export default function UseFetch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getProduct();
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
