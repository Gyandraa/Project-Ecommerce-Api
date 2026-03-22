import { useParams } from "react-router-dom";
import useProdukCategories from "../../Hooks/useProductCategories";
import { Link } from "react-router-dom";
export default function ProductCategory() {
  const { category } = useParams();
  const { productByCategory, isPending, isError } =
    useProdukCategories(category);

  if (isPending) {
    return (
      <p className="mt-20 text-2xl text-center font-semibold">Loading...</p>
    );
  }
  if (isError) {
    return <p className="mt-20 text-2xl font-semibold">Error...</p>;
  }
  if (!productByCategory) {
    return <p className="mt-20 text-2xl font-semibold">Product not found</p>;
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20 gap-6 mt-40">
        {productByCategory.map((productCategory) => (
          <div key={productCategory.id} className="">
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
                to={`/product/${productCategory.id}`}
                className="flex flex-col h-full"
              >
                <div className="h-52 w-full flex items-center justify-center overflow-hidden mb-2">
                  <img
                    src={productCategory.thumbnail}
                    loading="lazy"
                    decoding="async"
                    alt={productCategory.title}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <h2 className="text-2xl  text-center font-semibold text-gray-800 line-clamp-2 min-h-[55px]">
                  {productCategory.title}
                </h2>

                <p className=" text-lg  text-center font-semibold">
                  ⭐{productCategory.rating}
                </p>

                <p className="text-xl  text-center font-bold text-orange-600 mt-2">
                  ${productCategory.price}
                </p>
                <p className="text-lg mt-2">
                  {productCategory.availabilityStatus === "Low Stock" ? (
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
    </>
  );
}
