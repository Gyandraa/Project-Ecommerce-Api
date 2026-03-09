import { useEffect, useState } from "react";

export default function UseCart() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return {
    cart,
    addProduct,
  };
}
