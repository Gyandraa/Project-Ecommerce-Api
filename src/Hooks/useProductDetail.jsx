import { useEffect, useState } from "react";
import { getProductById } from "../Service/productService";

export default function UseProductDetail(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetail() {
      const result = await getProductById(id);
      setProduct(result);
      setLoading(false);
    }
    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  return {
    product,
    loading,
  };
}
