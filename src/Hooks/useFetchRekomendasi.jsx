import { useEffect, useState } from "react";
import { getProductLimit } from "../Service/products.service";
export default function useFetchKategori() {
  const [rekomendasiProduct, setRekomendasiProduct] = useState([]);

  useEffect(() => {
    async function fetchKategori() {
      const result = await getProductLimit();
      setRekomendasiProduct(result);
    }
    fetchKategori();
  }, []);

  return {
    rekomendasiProduct,
  };
}
