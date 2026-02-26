import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { getProduct } from "../Service/api";
import { useState } from "react";
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
        <div className=" flex justify-center items-center">
          <img className="w-6xl h-1/2" src="/assets/Poster.jpg" alt="poster" />
        </div>
      </div>
      <ProductCard products={products} />
    </>
  );
}
