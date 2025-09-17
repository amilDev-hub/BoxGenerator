import { configureStore } from "@reduxjs/toolkit";
import { boxSlice } from "./BoxGenerator/slice/boxSlice";


export const store = configureStore({
  reducer: {
    card: boxSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;