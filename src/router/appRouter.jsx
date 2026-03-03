import HomePages from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "../Components/product/ProductDetail";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
