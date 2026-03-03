import { useParams } from "react-router-dom";
import UseProductDetail from "../../Hooks/useProductDetail";
export default function ProductDetail() {
  const { id } = useParams();
  const { product, loading } = UseProductDetail(id);

  if (loading) {
    return <p className="mt-5 text-center font-semibold">Loading...</p>;
  } else if (!product) {
    return <p className="mt-5 text-center font-semibold">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-2">Rating: ⭐{product.rating}</p>
          <p className="text-xl font-bold text-orange-600 mb-4">
            ${product.price}
          </p>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-lg">
            {product.availabilityStatus === "Low Stock" ? (
              <span className="text-red-500 font-bold">Low Stock</span>
            ) : (
              <span className="text-green-500 font-bold">In Stock</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
