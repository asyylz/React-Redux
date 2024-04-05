
import { createSlice, configureStore } from "@reduxjs/toolkit";


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

/* --------------------- Auth Slice --------------------- */
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice= createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Action payloads are very common and often needed. As you see, it's super easy to add them. It's just an extra property that you add to your action objects.

// behind the scenes configureStore will emerge all those reducers into one big reducer.
const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  });

// we also export  actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// NOTES:
//reducer function always return a brand new snapshot, a brand new state object, which Redux will use to replace its existing state with. So the objects which we return in the reducer will not, and that's super important, be merged with the existing state. They will overwrite the existing state.

//Crucial:
//You should never super important never mutate the state, the existing state.You should never change the existing state.Instead, always override it by returning a brand new state object.
