import { Link } from "react-router-dom";
import { UseCart } from "../../context/CartContext";
export default function Navbar() {
  const { cart } = UseCart();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">Dibelanjain</h1>
        </Link>
        <div className="flex gap-5 items-center">
          <Link to="/cart" className="relative">
            <img
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition"
              src="/assets/keranjang.jpg"
              alt="keranjang"
            />

            {cart.length >= 0 && (
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
