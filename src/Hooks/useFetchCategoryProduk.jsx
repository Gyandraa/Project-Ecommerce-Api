// import { useEffect, useState } from "react";
// import { getCategory } from "../Service/categoriyService";
// export default function fetchKategoriProduk() {
//   const [kategoriProduk, setKategoriProduk] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     try {
//       async function fetchKategori() {
//         const result = await getCategory();
//         setKategoriProduk(result);
//         setLoading(false);
//         console.log(result);
//       }
//       fetchKategori();
//     } catch (error) {
//       throw new Error("Gagal mengambil data kategori produk: " + error.message);
//     }
//   }, []);

//   return {
//     kategoriProduk,
//     loading,
//   };
// }
