import { UseCart } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import type { WishItem } from "../../type/wishlist";

type Props = {
  wishList: WishItem[];
  deleteWishList: (id: number) => void;
};
export default function WishListItem({ wishList, deleteWishList }: Props) {
  const { addProduct } = UseCart();

  if (wishList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-32 text-gray-500">
        <p className="text-xl font-semibold">Wishlist kosong 💔</p>
        <p className="text-sm mt-2">Yuk tambahkan produk favoritmu</p>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 mb-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
        My Wishlist ❤️
      </h1>

      <div className="flex flex-col gap-5">
        {wishList.map((item) => (
          <div
            key={item.id}
            className="
              bg-white rounded-2xl p-4 sm:p-5
              shadow-sm hover:shadow-lg
              transition-all duration-300
              flex flex-col sm:flex-row items-center gap-4 sm:gap-6
            "
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="flex flex-col flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-lg sm:text-xl font-bold text-pink-600 mt-2">
                ${item.price}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  addProduct(item);
                  toast.success("Success add to cart");
                }}
                className="
                  border border-gray-300
                  px-4 py-2 rounded-lg text-sm
                  hover:bg-gray-100 transition
                "
              >
                Add to Cart
              </button>

              <button
                onClick={() => deleteWishList(item.id)}
                className="
                  bg-red-500 hover:bg-red-600
                  text-white px-4 py-2 rounded-lg text-sm
                  transition
                "
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
