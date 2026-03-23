import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseCart } from "../../context/CartContext";
import { UseWishList } from "../../context/WishContext";

export default function Navbar() {
  const { cart } = UseCart();
  const { wishList } = UseWishList();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">Dibelanjain</h1>
        </Link>

        <form onSubmit={handleSearch} className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
      flex-1 px-4 py-2
      border border-gray-300
      rounded-l-full
      focus:outline-none
      focus:ring-2 focus:ring-orange-500
    "
          />

          <button
            type="submit"
            className="
      bg-orange-300 text-white px-4
      rounded-r-full
      hover:bg-orange-400
      transition
    "
          >
            🔍
          </button>
        </form>

        <div className="flex gap-5 items-center">
          <Link to="/wishlist" className="relative">
            <img
              src="/assets/logo-love.jpg"
              alt="logo-love"
              className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition "
            />

            {wishList.length > 0 && (
              <span
                className="
                absolute -top-2 -right-2
                bg-red-500 text-white
                text-xs font-bold
                px-2 py-1
                rounded-full
              "
              >
                {wishList.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative">
            <img
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition"
              src="/assets/keranjang.jpg"
              alt="keranjang"
            />

            {cart.length > 0 && (
              <span
                className="
                absolute -top-2 -right-2
                bg-red-500 text-white
                text-xs font-bold
                px-2 py-1
                rounded-full
              "
              >
                {cart.length}
              </span>
            )}
          </Link>

          <img
            className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition"
            src="/assets/logo-user.jpg"
            alt="user"
          />
        </div>
      </div>
    </nav>
  );
}
