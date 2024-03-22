import { configureStore } from "@reduxjs/toolkit";
import tracklistReducer from "./tracklistSlice";
import playerReducer from "./playerSlice";

export const store = configureStore({
  reducer: {
    tracklist: tracklistReducer,
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;