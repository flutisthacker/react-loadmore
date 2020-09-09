import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

function counterReducer(state = 0, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
}

const store = createStore(
  combineReducers({
    counter: counterReducer
  }),
  applyMiddleware(logger)
);
