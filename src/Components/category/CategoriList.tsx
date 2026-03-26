import { Link } from "react-router-dom";

export default function CategoryList() {
  const categories = [
    { name: "Alat Makeup", image: "/assets/Lipstik.jpg", category: "beauty" },
    { name: "Parfum", image: "/assets/parfume.jpg", category: "fragrances" },
    { name: "Alat Rumah", image: "/assets/Sofa.jpg", category: "furniture" },
    {
      name: "Bahan Makanan",
      image: "/assets/bahan-makanan.jpg",
      category: "groceries",
    },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-8 mt-10 sm:mt-14 flex-wrap px-4">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="
        flex flex-col items-center
        bg-white p-3 sm:p-4
        rounded-xl shadow-md
        hover:shadow-xl hover:-translate-y-1
        transition duration-300 cursor-pointer
        w-35 sm:w-36 md:w-40
      "
        >
          <Link
            to={`/product/category/${cat.category}`}
            className="flex flex-col items-center h-full"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="
            w-16 h-16
            sm:w-20 sm:h-20
            md:w-24 md:h-24
            object-cover rounded-full
          "
            />

            <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-center text-gray-700">
              {cat.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
