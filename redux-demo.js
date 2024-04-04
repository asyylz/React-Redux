// We are importing redux
const redux = require("redux");

//The reducer has to go of spitting out a new state snapshot whenever an action reaches it.

/* ----------------------- reducer ---------------------- */
// When we run this code for the first time,the reducer will also be executed with a default action, so to say, that should spit out the initial state.

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
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
store.dispatch({ type: "increment" });
