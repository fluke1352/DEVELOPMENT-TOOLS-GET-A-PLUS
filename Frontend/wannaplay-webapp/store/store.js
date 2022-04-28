import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameReducer";
import inputReducer from "./usernameReducer";

export const store = configureStore({
  reducer: {
    get_username: inputReducer,
    game_selecting: gameReducer,
  },
});
