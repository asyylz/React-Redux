// Redux isn't a library restricted to React, you can use Redux in any JavaScript project.

// dispatching an action comes under declarative style of programming.

// essentially dispatching an action to get something done and meanwhile you continue with your other code.

// We don't describe exactly in the component itself how everything should work. Just managing everything in reducer which is directly in touch with store. 

// We are importing redux
const redux = require("redux");

//The reducer has to go of spitting out a new state snapshot whenever an action reaches it.

/* ----------------------- reducer ---------------------- */
// When we run this code for the first time,the reducer will also be executed with a default action, so to say, that should spit out the initial state.

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

/* -------------------- center store -------------------- */

// We are creating  our center store that manages  some data
const store = redux.createStore(counterReducer);

// The store needs to know which reducer is responsible for changing that store. Because keep in mind, it's the reducer that works together with the store.

// Who subscribes to that store, and then we need an action that can be dispatched.

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// we  should make redux aware of  this subscriber  function and tell it that disfunction should be executed whenever our state changes.
store.subscribe(counterSubscriber); // we dont execute counterSubscriber function, we are just pointing

/* ------------------- dispact action ------------------- */
// dispatch is a method which dispatches an action.

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
