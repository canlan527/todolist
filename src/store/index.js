import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
: compose;

const enhancer = composeEnhancers(applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
))

const store = createStore(
  reducer,
  enhancer
);

export default store;
