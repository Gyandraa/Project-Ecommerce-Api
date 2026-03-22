import { Link } from "react-router-dom";
import UseProduct from "../../Hooks/useProducts";
export default function ProductCard() {
  const { products, isPending, isError } = UseProduct();

  if (isPending) {
    return <p className="text-center font-bold mt-40 text-xl">Loading...</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20 gap-6 mt-10">
      {products.map((product) => (
        <div key={product.id} className="">
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

              <h2 className="text-2xl  text-center font-semibold text-gray-800 line-clamp-2 min-h-[55px]">
                {product.title}
              </h2>

              <p className=" text-lg  text-center font-semibold">
                ⭐{product.rating}
              </p>

              <p className="text-xl  text-center font-bold text-orange-600 mt-2">
                ${product.price}
              </p>
              <p className="text-base mt-2">
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
