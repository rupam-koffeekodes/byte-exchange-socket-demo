import { configureStore } from "@reduxjs/toolkit";
import websocketReducer from "./websocketSlice";
import dataStoreReducer from "./dataStoreSlice";

export const store = configureStore({
  reducer: {
    ws: websocketReducer,
    DS: dataStoreReducer,
  },
});
