import { useQuery } from "@tanstack/react-query";
import { getProductByCategories } from "../Service/productService";

export default function useProdukCategories(category: string) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["productbyCategory", category],
    queryFn: () => getProductByCategories(category),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  return {
    productByCategory: data ?? null,
    isPending,
    isError,
  };
}
