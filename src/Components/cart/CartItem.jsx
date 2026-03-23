export default function CartItem({
  cart,
  deleteProduct,
  addQuantity,
  deleteQuantity,
  totalPrice,
}) {
  if (!cart || cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-32 text-gray-500">
        <p className="text-xl font-semibold">Yah Cart Kosong</p>
        <p className="text-sm mt-2">Yuk tambahkan produk kedalam keranjang</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col mx-20 gap-6 mt-20">
        {cart.map((item, index) => (
          <div
            key={index}
            className="
        bg-white rounded-2xl p-4
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-2
        cursor-pointer
        flex items-center gap-6
      "
          >
            <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
              <img
                src={item.thumbnail}
                loading="lazy"
                decoding="async"
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="flex flex-col justify-center flex-1">
              <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-lg font-bold text-pink-600 mt-2">
                ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => deleteQuantity(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-lg transition"
              >
                -
              </button>

              <span className="w-8 text-center font-medium text-gray-900">
                {item.quantity}
              </span>

              <button
                onClick={() => addQuantity(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg transition"
              >
                +
              </button>
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
      <div className="mt-6 p-4 rounded-xl flex justify-end mr-20 items-center ">
        <span className="text-lg font-semibold text-gray-700 mr-2">Total:</span>
        <span className="text-xl font-bold text-pink-600">
          ${totalPrice.toFixed(2)}
        </span>
      </div>
    </>
  );
}
