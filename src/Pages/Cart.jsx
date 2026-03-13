import CartItem from "../Components/cart/cartItem";
import { UseCart } from "../context/CartContext";
export default function CartPages() {
  const { cart, deleteProduct, addQuantity, deleteQuantity, totalPrice } =
    UseCart();
  return (
    <div>
      <h2 className="mt-30 font-semibold font-mono text-2xl text-center">
        Cart Pages
      </h2>
      <CartItem
        cart={cart}
        deleteProduct={deleteProduct}
        addQuantity={addQuantity}
        deleteQuantity={deleteQuantity}
        totalPrice={totalPrice}
      />
    </div>
  );
}
