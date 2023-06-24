import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app/App";
import store from "./app/store";
//test
const rootElement = createRoot(document.getElementById("root"));

rootElement.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
