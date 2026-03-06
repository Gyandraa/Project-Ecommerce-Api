import { getProducts } from "../Service/productService";
import { useQuery } from "@tanstack/react-query";

export default function UseProduct() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  return {
    products: data || [],
    isPending,
    isError,
  };
}
