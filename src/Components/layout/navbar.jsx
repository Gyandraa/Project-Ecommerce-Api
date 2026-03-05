import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold font-sans text-gray-800">
          Dibelanjain
        </h1>

        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <input
            type="text"
            placeholder="Search product..."
            className=" w-100
            
    px-4 py-2
    rounded-full
    border border-gray-300
    focus:outline-none
    focus:ring-2 focus:ring-orange-500
    transition
    shadow-sm
    placeholder:text-gray-400
  "
          />
        </div>

        <div className="flex gap-5">
          <img
            className="w-10 h-10 rounded-full cursor-pointer hover:scale-130 transition duration-300"
            src="/assets/keranjang.jpg"
            alt="keranjang"
          />
          <img
            className="w-10 h-10 rounded-full cursor-pointer hover:scale-130 transition duration-300"
            src="/assets/logo-user.jpg"
            alt="user"
          />
        </div>
      </div>
    </nav>
  );
}
