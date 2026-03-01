import { useEffect, useState } from "react";
import { getAllProducts } from "../Service/productService";

export default function UseFetch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getAllProducts();
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
