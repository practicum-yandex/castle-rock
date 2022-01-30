import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import configureStore from "./store/store";

export const store = configureStore();

ReactDOM.render(<App />, document.getElementById("root"));
