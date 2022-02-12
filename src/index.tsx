import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import configureStore from "./store/store";
import { startServiceWorker } from "./helpers/startServiceWorker";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, 
    document.getElementById("root")
);

startServiceWorker();
