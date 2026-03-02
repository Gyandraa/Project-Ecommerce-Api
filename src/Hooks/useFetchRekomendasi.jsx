export default function UseFetchRekomendasi(products, limit = 12) {
  if (!Array.isArray(products)) return [];

  return [...products].sort(() => 0.5 - Math.random()).slice(0, limit);
}
