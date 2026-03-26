import ProductCard from "../Components/product/ProductCard";
import ProductSlider from "../Components/product/ProductSlider";
import UseProduct from "../Hooks/useProducts";
import UseRekomendasiProduct from "../Hooks/useRekomenProduct";
import CategoryList from "../Components/category/CategoriList";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  category: string;
};

export default function HomePages() {
  const { products, isPending } = UseProduct();

  const rekomendasi: Product[] = UseRekomendasiProduct(products || []);

  if (isPending) {
    return <h1 className="mt-10 text-center font-bold text-2xl">Loading...</h1>;
  }

  if (!products || products.length === 0) {
    return (
      <h1 className="mt-10 text-center font-bold text-2xl">No data found.</h1>
    );
  }

  return (
    <>
      <div className="mt-24">
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <div className="h-[280px] sm:h-[300px] md:h-[450px] lg:h-[600px] rounded-xl overflow-hidden">
            <img
              src="/assets/Banner1.jpg"
              alt="poster"
              width={1200}
              height={600}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-semibold text-2xl mb-10 text-center font-mono">
          Kategori Produk
        </h1>
        <CategoryList />
      </div>

      <div className="mt-16">
        <h1 className="font-semibold pt-8 text-2xl mb-10 text-center font-mono">
          Rekomendasi
        </h1>
        <ProductSlider products={rekomendasi} />
      </div>

      <div className="bg-gray-100 mt-20 pb-10">
        <h1 className="pt-10 text-center font-semibold font-mono text-2xl">
          List Products
        </h1>
        <ProductCard products={products} />
      </div>
    </>
  );
}
