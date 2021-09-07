import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import generateStore from "./redux/store";

// Router
import { BrowserRouter as Router } from "react-router-dom";

const store = generateStore();

const WithRouter = () => (
  <Router>
    <App />
  </Router>
);

const WithRedux = () => (
  <Provider store={store}>
    <WithRouter></WithRouter>
  </Provider>
);


ReactDOM.render(
  <React.StrictMode>
    <WithRedux />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
