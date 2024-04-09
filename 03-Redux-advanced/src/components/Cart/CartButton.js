import classes from "./CartButton.module.css";
import { amountActions } from "../../store/amount";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(amountActions.toggleCounter());
  };

  return (
    <button className={classes.button}>
      <span onClick={handleToggle}>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
