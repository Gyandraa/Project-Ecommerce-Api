import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product) => {
    setCart((prev) => {
      const findProduct = prev.find((item) => item.id === product.id);

      if (findProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const addQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      }),
    );
  };

  const deleteQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        return item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item;
      }),
    );
  };

  const deleteProduct = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        deleteProduct,
        addQuantity,
        deleteQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function UseCart() {
  return useContext(CartContext);
}
