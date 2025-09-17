import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { color } from "framer-motion";

type Card = {
  id: number;
  width: number;
  height: number;
  shadow: { offsetX: number; offsetY: number; blur: number; color: string };
  background: string;
  active: boolean;
  rounded: number;
};

type boxState = { cards: Card[] };

export const boxSlice = createSlice({
  name: "boxSlice",
  initialState: {
    cards: [
      {
        id: 1,
        width: 300,
        height: 300,
        shadow: { offsetX: 2, offsetY: 2, blur: 5, color: "#000000" },
        background: "#f70000",
        active: false,
        rounded: 5,
      },
      {
        id: 2,
        width: 100,
        height: 100,
        shadow: { offsetX: 2, offsetY: 2, blur: 5, color: "#000000" },
        background: "#000000",
        active: true,
        rounded: 0,
      },
      {
        id: 3,
        width: 100,
        height: 100,
        shadow: { offsetX: 2, offsetY: 2, blur: 5, color: "#000000" },
        background: "#700c69",
        active: false,
        rounded: 5,
      },
    ],
  } as boxState,
  reducers: {
    WIDTH_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; width: number }>
    ) => {
      const card = state.cards.find((c) => c.id === action.payload.id);
      if (card) {
        card.width = action.payload.width;
      }
    },
    HEIGHT_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; height: number }>
    ) => {
      const card = state.cards.find((c) => c.id == action.payload.id);
      if (card) {
        card.height = action.payload.height;
      }
    },
    ROUNDED_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; rounded: number }>
    ) => {
      const card = state.cards.find((c) => c.id == action.payload.id);
      if (card) {
        card.rounded = action.payload.rounded;
      }
    },
    ACTIVE_CHANGER: (state, action: PayloadAction<{ id: number }>) => {
      state.cards.forEach((item) => {
        if (item.id == action.payload.id) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
    BACKGROUND_COLOR_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; color: any }>
    ) => {
      const card = state.cards.find((c) => c.id == action.payload.id);
      if (card) {
        card.background = action.payload.color;
      }
    },
    SHADOW_X_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; x: number }>
    ) => {
      const card = state.cards.find((c) => c.id == action.payload.id);
      if (card?.shadow) card.shadow.offsetX = action.payload.x;
    },
    SHADOW_Y_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; y: number }>
    ) => {
      const card = state.cards.find((c) => c.id == action.payload.id);
      if (card?.shadow) card.shadow.offsetY = action.payload.y;
    },
    SHADOW_BLUR_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; blur: number }>
    ) => {
      const card = state.cards.find((c) => c.id == action.payload.id);
      if (card?.shadow) {
        card.shadow.blur = action.payload.blur;
      }
    },
    SHADOW_COLOR_CHANGER: (
      state,
      action: PayloadAction<{ id: number | undefined; color: any }>
    ) => {
      const card = state.cards.find((c) => c.id == action.payload.id);
      if (card?.shadow) {
        card.shadow.color = action.payload.color;
      }
    },
    DELET_CARD: (state, action: PayloadAction<{ id: number | undefined }>) => {
      const cardId = state.cards.findIndex((c) => c.id == action.payload.id);
      if (cardId != -1) {
        state.cards.splice(cardId, 1);
        const randomIndex = Math.floor(Math.random() * state.cards.length);
        console.log(cardId);
        state.cards[randomIndex].active = true;
      }
    },
    ADD_CARD: (state) => {
      const cards = state.cards;
      const ids = cards.map((item) => {
        return item.id;
      });
      const bignumber = Math.max(...ids);
      cards.push({
        id: bignumber+1,
        width: 300,
        height: 300,
        shadow: { offsetX: 2, offsetY: 2, blur: 5, color: "#000000" },
        background: "#f70000",
        active: false,
        rounded: 5,
      });
    },
  },
});

export default boxSlice.reducer;
export const {
  WIDTH_CHANGER,
  HEIGHT_CHANGER,
  ROUNDED_CHANGER,
  ACTIVE_CHANGER,
  BACKGROUND_COLOR_CHANGER,
  SHADOW_X_CHANGER,
  SHADOW_Y_CHANGER,
  SHADOW_BLUR_CHANGER,
  SHADOW_COLOR_CHANGER,
  DELET_CARD,
  ADD_CARD,
} = boxSlice.actions;
