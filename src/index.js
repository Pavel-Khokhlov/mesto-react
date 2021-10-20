import React from 'react';
import { StrictMode } from "react";
import { render } from "react-dom";
import "./pages/index.css";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import store from "./store";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
