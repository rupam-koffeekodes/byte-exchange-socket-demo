import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import "./index.css";
import WebSocketContextProvider from "./context/WebSocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <WebSocketContextProvider>
        <App />
      </WebSocketContextProvider>
    </Provider>
  </React.StrictMode>
);
