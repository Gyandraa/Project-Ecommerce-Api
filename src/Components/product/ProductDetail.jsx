import { useParams } from "react-router-dom";
import UseProductDetail from "../../Hooks/useProductDetail";
import { UseCart } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, isPending, isError, error } = UseProductDetail(id);
  const { addProduct } = UseCart();

  const notify = () => toast("Succes add to cart");

  if (isPending) {
    return <p className="mt-25 text-center font-semibold">Loading...</p>;
  } else if (isError) {
    return (
      <p className="mt-25 text-center font-semibold">Error: {error.message}</p>
    );
  } else if (!product) {
    return (
      <p className="mt-25 text-center font-semibold">Product tidak ditemukan</p>
    );
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

            <p className="text-xl text-orange-500 font-semibold mb-2">
              ⭐{product.rating}
            </p>

            <p className="text-2xl font-bold  text-orange-600 mb-2">
              ${product.price}
            </p>

            {product.availabilityStatus === "Low Stock" ? (
              <span className="text-red-500 text-lg font-semibold">
                Low Stock
              </span>
            ) : (
              <span className="text-green-500 text-lg font-semibold">
                In Stock
              </span>
            )}

            <div className="flex gap-4 flex-wrap mt-3">
              <button className="bg-orange-600 text-white px-17 py-4 rounded-lg hover:bg-orange-700 transition">
                Buy Now
              </button>
              <button
                onClick={() => {
                  console.log(product);
                  addProduct(product);
                  notify();
                }}
                className="border border-gray-700 px-17 py-4 rounded-lg
                  hover:bg-gray-100 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-15 px-6 mb-10">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {product.reviews?.map((review, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {review.reviewerName}
              </h3>

              <p className="text-orange-500 font-medium mb-3">
                ⭐ {review.rating}
              </p>

              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
