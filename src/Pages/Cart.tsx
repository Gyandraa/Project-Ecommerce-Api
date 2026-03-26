import CartItem from "../Components/cart/cartItem.js";
import { UseCart } from "../context/CartContext.js";
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
