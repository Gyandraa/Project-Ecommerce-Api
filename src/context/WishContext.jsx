import { createContext, useContext, useEffect, useState } from "react";

const WishContext = createContext();

export function WishProvider({ children }) {
  const [wishList, setWishList] = useState(() => {
    const storedWishList = localStorage.getItem("wishlist");
    return storedWishList ? JSON.parse(storedWishList) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const addWishList = (product) => {
    const find = wishList.find((item) => item.id === product.id);

    if (find) {
      setWishList(wishList.filter((item) => item.id !== product.id));
    } else {
      setWishList([...wishList, product]);
    }
  };

  const deleteWishList = (id) => {
    setWishList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishContext.Provider
      value={{
        wishList,
        addWishList,
        deleteWishList,
      }}
    >
      {children}
    </WishContext.Provider>
  );
}

export function UseWishList() {
  return useContext(WishContext);
}
