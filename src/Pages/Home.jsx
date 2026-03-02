import ProductCard from "../Components/product/ProductCard";
import ProductSlider from "../Components/product/ProductSlider";
// import CategoryList from "../Components/category/CategoryList";
// import ProdukKategori from "../Components/category/CategoryItem";
import UseFetchRekomendasi from "../Hooks/useFetchRekomendasi";
import UseFetch from "../Hooks/useFetch";
export default function HomePages() {
  const { products, loading } = UseFetch();

  const rekomendasiProduct = UseFetchRekomendasi(products);

  if (loading) {
    return <h1 className="mt-10 text-center font-bold text-2xl">Loading...</h1>;
  } else if (!products) {
    return (
      <h1 className="mt-10 text-center font-bold text-2xl">No data found.</h1>
    );
  }

  return (
    <>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <div className="h-[600px] rounded-xl overflow-hidden">
            <img
              src="/assets/Banner1.png"
              alt="poster"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-semibold text-2xl text-center">Kategori Produk</h1>
        {/* <CategoryList />
        <ProdukKategori /> */}
      </div>
      <div className="mt-10 bg-">
        <h1 className="font-semibold text-2xl text-center font-sans">
          Rekomendasi
        </h1>
        <ProductSlider products={rekomendasiProduct} />
      </div>
      <div className="bg-gray-100">
        <h1 className="pt-10 mt-10 text-center font-bold font-mono text-2xl">
          List Products
        </h1>
        <ProductCard products={products} />
      </div>
    </>
  );
}
