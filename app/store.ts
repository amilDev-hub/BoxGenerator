import { configureStore } from "@reduxjs/toolkit";
import { boxSlice } from "./BoxGenerator/slice/boxSlice";
import { tailwindBoxSlice } from "./BoxGeneratorTailwindCss/slice/tailwindBoxSlice";


export const store = configureStore({
  reducer: {
    card: boxSlice.reducer,
    tailwindCards : tailwindBoxSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;