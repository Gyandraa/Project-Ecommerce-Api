import { BrowserRouter, Routes } from "react-router-dom";
import Router from "./router/appRouter";
import Navbar from "./Components/layout/navbar";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </>
  );
}
