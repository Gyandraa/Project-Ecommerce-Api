import type { Product } from "../type/products";

export default function UseRekomendasiProduct(products: Product[] = []) {
  const rekomendasiProducts = products.filter(
    (product) => product.rating >= 4.35,
  );

  return rekomendasiProducts;
}
