import { useContext } from "react";
import Cart from "../components/cart/Cart";
import { cartContext } from "../context/cartContext";

const CartPage = () => {
  const { cart } = useContext(cartContext);
  return <Cart data={cart} />;
};

export default CartPage;
