export default function CartItem({ cart }) {
  if (!cart || cart.length === 0) {
    return <p>Cart kosong</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20 gap-6 mt-40">
      {cart.map((item) => (
        <div key={item.id}>
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
            <div className="h-52 w-full flex items-center justify-center overflow-hidden mb-2">
              <img
                src={item.thumbnail}
                loading="lazy"
                decoding="async"
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>

            <h2 className="text-2xl  text-center font-semibold text-gray-800 line-clamp-2 min-h-[55px]">
              {item.title}
            </h2>
            <h2 className="text-2xl  text-center font-semibold text-gray-800 line-clamp-2 min-h-[55px]">
              {item.price}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
