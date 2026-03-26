import { Link } from "react-router-dom";
import type { Product } from "../../type/products";

type Props = {
  products: Product[];
};

export default function ProductCard({ products }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 sm:mx-10 lg:mx-20 gap-5 sm:gap-6 mt-10">
      {products.map((product) => (
        <div key={product.id}>
          <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full">
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col h-full"
            >
              <div className="h-52 w-full flex items-center justify-center overflow-hidden mb-2">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain hover:scale-110 transition"
                />
              </div>

              <h2 className="text-2xl text-center font-semibold line-clamp-2">
                {product.title}
              </h2>

              <p className="text-lg text-center">⭐{product.rating}</p>

              <p className="text-xl text-center font-bold text-orange-600 mt-2">
                ${product.price}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
