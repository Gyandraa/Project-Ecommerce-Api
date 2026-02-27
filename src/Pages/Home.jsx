import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { getProduct } from "../Service/api";
import { useState } from "react";
import ProductRekomendasiCard from "./RekomendasiCardPages";

export default function HomePages() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProduct();
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <div className="h-[500px] rounded-xl overflow-hidden">
            <img
              src="/assets/Banner1.png"
              alt="poster"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 bg-">
        <h1 className="font-semibold text-2xl text-center font-sans">
          Rekomendasi
        </h1>
        <ProductRekomendasiCard />
      </div>
      {/* <div className="mt-10">
        <h1 className="font-semibold text-2xl text-center">Kategori Produk</h1>
      </div> */}
      <div className="bg-gray-100">
        <h1 className="pt-10 mt-10 text-center font-bold font-mono text-2xl">
          List Products
        </h1>
        <ProductCard products={products} />
      </div>
    </>
  );
}
