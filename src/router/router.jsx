import HomePages from "../Pages/Home";
import DetailPages from "../Pages/MovieDetail";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="detailpages" element={<DetailPages />} />
      </Routes>
    </>
  );
}
