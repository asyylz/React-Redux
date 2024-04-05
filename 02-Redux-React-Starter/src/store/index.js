import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter.js";
import authReducer from "./auth.js";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// NOTES:
//reducer function always return a brand new snapshot, a brand new state object, which Redux will use to replace its existing state with. So the objects which we return in the reducer will not, and that's super important, be merged with the existing state. They will overwrite the existing state.

//Crucial:
//You should never super important never mutate the state, the existing state.You should never change the existing state.Instead, always override it by returning a brand new state object.
