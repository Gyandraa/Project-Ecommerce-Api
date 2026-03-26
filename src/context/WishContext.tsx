import { createContext, useContext, useEffect, useState } from "react";
import type { WishItem } from "../type/wishlist";

type WishContextType = {
  wishList: WishItem[];
  addWishList: (product: WishItem) => void;
  deleteWishList: (id: number) => void;
};

const WishContext = createContext<WishContextType | null>(null);

export function WishProvider({ children }: { children: React.ReactNode }) {
  const [wishList, setWishList] = useState<WishItem[]>(() => {
    const storedWishList = localStorage.getItem("wishlist");
    return storedWishList ? JSON.parse(storedWishList) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const addWishList = (product: WishItem) => {
    setWishList((prev) => {
      const find = prev.find((item) => item.id === product.id);

      if (find) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const deleteWishList = (id: number) => {
    setWishList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishContext.Provider value={{ wishList, addWishList, deleteWishList }}>
      {children}
    </WishContext.Provider>
  );
}

export function UseWishList() {
  const context = useContext(WishContext);

  if (!context) {
    throw new Error("UseWishList must be used within WishProvider");
  }

  return context;
}
