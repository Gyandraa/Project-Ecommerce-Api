export default function ProductCategoriesList() {
  const categories = [
    { name: "Beauty", image: "/assets/Lipstik.jpg" },
    { name: "Fragrances", image: "/assets/parfume.jpg" },
    { name: "Furniture", image: "/assets/Sofa.jpg" },
    { name: "Groceries", image: "/assets/bahan-makanan.jpg" },
  ];

  return (
    <div className="flex justify-center gap-10 mt-14 flex-wrap">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer w-40"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-30 h-30 object-cover rounded-full"
          />
          <p className="mt-3 font-semibold text-gray-700">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
