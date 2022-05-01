import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameReducer";
import usernameReducer from "./usernameReducer";

export const store = configureStore({
  reducer: {
    get_username: usernameReducer,
    game_selecting: gameReducer,
  },
});
