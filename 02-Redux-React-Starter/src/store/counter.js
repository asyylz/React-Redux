import { createSlice } from "@reduxjs/toolkit";

/* -------------------- Counter Slice ------------------- */
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// Action payloads are very common and often needed. As you see, it's super easy to add them. It's just an extra property that you add to your action objects.

// behind the scenes configureStore will emerge all those reducers into one big reducer.

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
