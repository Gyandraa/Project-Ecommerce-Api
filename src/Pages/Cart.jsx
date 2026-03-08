import CartItem from "../Components/cart/cartItem";
import UseCart from "../Hooks/useCart";
export default function CartPages() {
  const { cart } = UseCart();
  return (
    <div>
      <h2 className="mt-30 font-semibold font-mono text-2xl text-center">
        Cart Pages
      </h2>
      <CartItem cart={cart} />
    </div>
  );
}
