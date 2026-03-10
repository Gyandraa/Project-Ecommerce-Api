export default function CartItem({ cart, deleteProduct }) {
  if (cart.length === 0) {
    return (
      <p className="text-center mt-5 text-xl font-semibold">Cart Kosong</p>
    );
  }
  return (
    <div className="flex flex-col mx-20 gap-6 mt-20">
      {cart.map((item) => (
        <div
          key={item.id}
          className="
        bg-white rounded-2xl p-4
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-2
        cursor-pointer
        flex items-center gap-6
      "
        >
          {/* Gambar */}
          <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
            <img
              src={item.thumbnail}
              loading="lazy"
              decoding="async"
              alt={item.title}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center flex-1">
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
              {item.title}
            </h2>

            <p className="text-lg font-bold text-pink-600 mt-2">
              ${item.price}
            </p>
          </div>
          <button
            onClick={() => deleteProduct(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
