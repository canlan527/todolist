import React from "react";
import ReactDOM from "react-dom/client";
import TodoAntd from "./TodoAntd";
import store from "./store";
import { Provider } from "react-redux";

const App = (
  <Provider store={store}>
    <TodoAntd />
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
