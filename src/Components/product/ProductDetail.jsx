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
    <>
      <div className="max-w-6xl mx-auto px-5 mt-40">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex justify-center md:w-1/2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[380px] object-cover rounded-xl"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>

            <p className=" text-2xl text-gray-950 mb-6">
              {product.description}
            </p>

            <p className="text-2xl font-semibold mb-2">⭐ {product.rating}</p>

            <p className="text-2xl font-bold  text-orange-600 mb-6">
              ${product.price}
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-600 text-white px-17 py-4 rounded-lg hover:bg-orange-700 transition">
                Buy Now
              </button>

              <button className="border border-gray-300 px-17 py-4 rounded-lg hover:bg-gray-100 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
