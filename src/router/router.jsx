import HomePages from "../Pages/Home";
import BuyProducts from "../Pages/BuyProduct";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        {/* <Route path="/detailpages" element={<ProductDetail />} /> */}
      </Routes>
    </>
  );
}
