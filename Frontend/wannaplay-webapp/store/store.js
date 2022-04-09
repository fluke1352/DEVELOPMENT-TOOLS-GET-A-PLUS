import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./usernameReducer";

export const store = configureStore({
  reducer: {
    get_username: inputReducer,
  }
});
