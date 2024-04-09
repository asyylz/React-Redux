import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const amount = useSelector((state) => state.amount.amount);
  const show = useSelector((state) => state.amount.showCartItem);

  return (
    <>
      {show && amount > 0 && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{
                title: "Test Item",
                quantity: amount,
                total: amount * 6,
                price: 6,
              }}
            />
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
