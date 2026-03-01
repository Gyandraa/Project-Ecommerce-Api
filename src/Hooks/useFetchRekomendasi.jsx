import { useEffect, useState } from "react";
import { getRekomendProduct } from "../Service/productService";
export default function useFetchKategori() {
  const [rekomendasiProduct, setRekomendasiProduct] = useState([]);

  useEffect(() => {
    async function fetchKategori() {
      const result = await getRekomendProduct();
      setRekomendasiProduct(result);
    }
    fetchKategori();
  }, []);

  return {
    rekomendasiProduct,
  };
}
