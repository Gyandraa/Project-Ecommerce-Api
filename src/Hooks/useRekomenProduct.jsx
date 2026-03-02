export default function UseRekomendasiProduct(products) {
  const rekomendasiProducts = products.filter(
    (product) => product.rating >= 4.44,
  );

  return rekomendasiProducts;
}
