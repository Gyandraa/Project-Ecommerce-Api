// import fetchKategoriProduk from "../../Hooks/useFetchCategoryProduk";
// export default function ProdukKategori() {
//   const { kategoriProduk, loading } = fetchKategoriProduk();

//   if (loading) {
//     return (
//       <div className="mt-10 font-bold text-center text-2xl">Loading...</div>
//     );
//   } else if (!kategoriProduk) {
//     return (
//       <div className="mt-10 font-bold text-center text-2xl">
//         No data available
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* {kategoriProduk.map((kategori, index) => (
//         <li key={index} className="list-none bg-gray-100 rounded-lg p-4 mb-4">
//           <h1 className="text-center text-lg font-medium">{kategori.slug}</h1>
//           <h1>{kategori.name}</h1>
//           <img
//             src={kategori.url_image}
//             alt={kategori.name}
//             className="w-full h-auto mt-2"
//           />
//         </li>
//       ))} */}
//     </div>
//   );
// }
