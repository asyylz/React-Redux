import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  // Action payloads are very common and often needed. As you see, it's super easy to add them. It's just an extra property that you add to your action objects.
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }


  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }


  return state;
};

const store = createStore(counterReducer);

export default store;