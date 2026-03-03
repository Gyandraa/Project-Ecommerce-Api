import { BrowserRouter, Routes } from "react-router-dom";
import Router from "./router/appRouter";
import Navbar from "./Components/layout/navbar";
// import Footer from "./Components/layout/Footer";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
