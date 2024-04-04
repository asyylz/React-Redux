import classes from "./Counter.module.css";
import { UseSelector, useSelector } from "react-redux";

const Counter = () => {
  // NOTES
  // When you use use selector, React Redux will automatically set up a subscription to the Redux store for this component.

  // If you ever would unmount this component if it would be removed from the DOM for whatever reason, React Redux would also automatically clear the subscription for you. So it manages that subscription for you behind the scenes.

  const counter = useSelector((state) => state.counter); // this function will be executed for us by React Redux.

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
