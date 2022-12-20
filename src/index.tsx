import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store, StoreProvider } from "./lib/redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
