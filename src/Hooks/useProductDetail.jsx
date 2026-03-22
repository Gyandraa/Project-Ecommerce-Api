import { useEffect, useState } from "react";
import { getProductById } from "../Service/productService";
import { useQuery } from "@tanstack/react-query";

export default function UseProductDetail(id) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return {
    product: data ?? null,
    isPending,
    isError,
    error,
  };
}
