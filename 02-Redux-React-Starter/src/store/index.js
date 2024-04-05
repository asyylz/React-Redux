import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.amount;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  // Action payloads are very common and often needed. As you see, it's super easy to add them. It's just an extra property that you add to your action objects.
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

// NOTES:
//reducer function always return a brand new snapshot, a brand new state object, which Redux will use to replace its existing state with. So the objects which we return in the reducer will not, and that's super important, be merged with the existing state. They will overwrite the existing state.

//Crucial:
//You should never super important never mutate the state, the existing state.You should never change the existing state.Instead, always override it by returning a brand new state object.
