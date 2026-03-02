import { useEffect, useState } from "react";
import { getProducts } from "../Service/productService";

export default function UseFetch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rekomendasi, setRekomendasi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getProducts();
      setProducts(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  const rekomendasiProducts = products.filter((product) => product.rating >= 4);
  useEffect(() => {
    setRekomendasi(rekomendasiProducts);
  }, [products]);

  return {
    products,
    loading,
    rekomendasi,
  };
}
