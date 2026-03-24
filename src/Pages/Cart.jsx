import CartItem from "../Components/cart/cartItem.jsx";
import { UseCart } from "../context/CartContext";
export default function CartPages() {
  const { cart, deleteProduct, addQuantity, deleteQuantity, totalPrice } =
    UseCart();
  return (
    <div>
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
