import { Link } from "react-router-dom";
import useProdukCategories from "../../Hooks/useProductCategories";

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
    <div className="flex justify-center gap-10 mt-14 flex-wrap">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer w-40"
        >
          <Link
            to={`/product/category/${cat.category}`}
            className="flex flex-col h-full"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-30 h-30 object-cover rounded-full"
            />
            <p className="mt-3 font-semibold text-center text-gray-700">
              {cat.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
