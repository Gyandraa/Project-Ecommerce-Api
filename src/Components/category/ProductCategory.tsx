import { useParams, Link } from "react-router-dom";
import useProdukCategories from "../../Hooks/useProductCategories";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  availabilityStatus: string;
};

export default function ProductCategory() {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return (
      <p className="mt-20 text-2xl text-center font-semibold">
        Category not found
      </p>
    );
  }

  const { productByCategory, isPending, isError } =
    useProdukCategories(category);

  if (isPending) {
    return (
      <p className="mt-20 text-2xl text-center font-semibold">Loading...</p>
    );
  }

  if (isError) {
    return <p className="mt-20 text-2xl text-center font-semibold">Error...</p>;
  }

  if (!productByCategory || productByCategory.length === 0) {
    return (
      <p className="mt-20 text-2xl text-center font-semibold">
        Product not found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20 gap-6 mt-40">
      {productByCategory.map((product: Product) => (
        <div key={product.id}>
          <div
            className="
              bg-white rounded-2xl p-4
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-2
              cursor-pointer
              flex flex-col h-full
            "
          >
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col h-full"
            >
              <div className="h-52 w-full flex items-center justify-center overflow-hidden mb-2">
                <img
                  src={product.thumbnail}
                  loading="lazy"
                  decoding="async"
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h2 className="text-2xl text-center font-semibold text-gray-800 line-clamp-2 min-h-[55px]">
                {product.title}
              </h2>

              <p className="text-lg text-center font-semibold">
                ⭐ {product.rating}
              </p>

              <p className="text-xl text-center font-bold text-orange-600 mt-2">
                ${product.price}
              </p>

              <p className="text-lg mt-2 text-center">
                {product.availabilityStatus === "Low Stock" ? (
                  <span className="text-red-500 font-bold">Low Stock</span>
                ) : (
                  <span className="text-green-500 font-bold">In Stock</span>
                )}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
