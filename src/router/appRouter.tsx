import HomePages from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "../Components/product/ProductDetail";
import ProductCategory from "../Components/category/ProductCategory";
import CartPages from "../Pages/Cart";
import WishPages from "../Pages/WishListPages";
import SearchPage from "../Pages/SearchPages";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/product/category/:category"
          element={<ProductCategory />}
        />
        <Route path="/cart" element={<CartPages />}></Route>
        <Route path="/wishlist" element={<WishPages />}></Route>

        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </>
  );
}
