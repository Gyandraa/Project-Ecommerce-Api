import WishListItem from "../Components/wishlist/WishListItem";
import { UseWishList } from "../context/WishContext";
export default function WishPages() {
  const { wishList, deleteWishList } = UseWishList();
  return (
    <div>
      <WishListItem wishList={wishList} deleteWishList={deleteWishList} />
    </div>
  );
}
