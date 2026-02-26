export default function ProductCard({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
        >
          <div className="w-full h-48 flex items-center justify-center overflow-hidden">
            <img
              className="max-h-full object-contain"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <h2 className="mt-4 text-center font-semibold text-xl line-clamp-2 min-h-[3.5rem]">
            {product.title}
          </h2>
          <p className=" text-center text-lg font-semibold text-red-500">
            ${product.price}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-300 transition duration-300 group">
              <img
                src="/assets/keranjang.jpg"
                alt="keranjang"
                className="w-6 h-6 object-contain transition duration-300 group-hover:scale-130 "
              />
            </button>

            <button className="flex-1 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
