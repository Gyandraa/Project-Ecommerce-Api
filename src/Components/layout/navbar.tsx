import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseCart } from "../../context/CartContext";
import { UseWishList } from "../../context/WishContext";
import { FaUser } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { FcLike } from "react-icons/fc";

export default function Navbar() {
  const { cart } = UseCart();
  const { wishList } = UseWishList();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-4">
        <Link to="/" className="shrink-0">
          <h1 className="text-base sm:text-2xl font-bold text-gray-800">
            Dibelanjain
          </h1>
        </Link>

        <form
          onSubmit={handleSearch}
          className="flex flex-[2] sm:flex-1 min-w-0"
        >
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
          w-full px-4 py-3 sm:py-2
          border border-gray-300
          rounded-l-full
          text-base sm:text-base
          focus:outline-none
          focus:ring-2 focus:ring-orange-500
        "
          />

          <button
            type="submit"
            className="
          bg-orange-400 text-white px-4
          rounded-r-full
          hover:bg-orange-500
          transition
          text-base
        "
          >
            🔍
          </button>
        </form>

        <div className="flex gap-3 sm:gap-4 items-center shrink-0">
          <Link to="/wishlist" className="relative">
            <FcLike className="w-7 h-7 sm:w-6 sm:h-6 rounded-xl hover:scale-110 transition" />
            {wishList.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full">
                {wishList.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <IoIosCart className="w-7 h-7 sm:w-6 sm:h-6 rounded-xl hover:scale-110 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <FaUser className="w-7 h-7 sm:w-6 sm:h-6 rounded-xl hover:scale-110 transition" />
        </div>
      </div>
    </nav>
  );
}
