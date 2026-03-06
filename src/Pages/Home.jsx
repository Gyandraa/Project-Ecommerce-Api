import ProductCard from "../Components/product/ProductCard";
import ProductSlider from "../Components/product/ProductSlider";
// import CategoryList from "../Components/category/CategoryList";
// import ProdukKategori from "../Components/category/CategoryItem";
import UseProduct from "../Hooks/useProducts";
import UseRekomendasiProduct from "../Hooks/useRekomenProduct";
import ProductCategoriesList from "../Components/category/ProdukCategoriList";
export default function HomePages() {
  const { products, loading } = UseProduct();
  const rekomendasi = UseRekomendasiProduct(products);

  if (loading) {
    return <h1 className="mt-10 text-center font-bold text-2xl">Loading...</h1>;
  } else if (!products) {
    return (
      <h1 className="mt-10 text-center font-bold text-2xl">No data found.</h1>
    );
  }
  return (
    <>
      <div className="mt-25">
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <div className="h-[600px] rounded-xl overflow-hidden">
            <img
              src="/assets/Banner1.png"
              alt="poster"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center font-bold font-mono text-2xl">
          Kategori Produk
        </h1>
        <ProductCategoriesList />
      </div>
      <div className="mt-15 bg-">
        <ProductSlider products={rekomendasi} />
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
