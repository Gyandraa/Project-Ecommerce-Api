import { useSearchParams } from "react-router-dom";
import Fuse from "fuse.js";
import UseProducts from "../Hooks/useProducts";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { products, isPending } = UseProducts();

  const categoryMap = {
    kecantikan: "beauty",
    makeup: "beauty",
    parfum: "fragrances",
    perlengkapan: "furniture",
    makanan: "groceries",
  };

  const normalizedQuery =
    categoryMap[query.toLowerCase()] || query.toLowerCase();

  if (isPending) {
    return <p className="mt-20 text-center">Loading...</p>;
  }

  const fuse = new Fuse(products, {
    keys: ["title", "category"],
    threshold: 0.4,
  });

  const result = fuse.search(normalizedQuery);
  const filteredProducts = result.map((item) => item.item);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-28">
      <h1 className="text-2xl font-bold mb-2">Hasil pencarian: "{query}"</h1>

      <p className="text-gray-500 mb-6">
        Ditemukan {filteredProducts.length} produk
      </p>

      {filteredProducts.length === 0 ? (
        <div className="text-center mt-10 text-gray-400">
          <p className="text-xl"> Produk tidak ditemukan</p>
          <p className="text-sm mt-2">Coba gunakan kata lain</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl p-4 hover:shadow-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-contain"
                />

                <h2 className="text-sm font-semibold mt-2 line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-orange-600 font-bold mt-1">
                  ${product.price}
                </p>

                <p className="text-xs text-gray-400 mt-1">{product.category}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
