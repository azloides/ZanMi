import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterSchema } from "../config/types";
import { getFromLocal, saveToLocal } from "../../lib/localStorage";

const initialState: CounterSchema = {
  index: 0,
};

export const counterSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    increment: (state) => {
      state.index += 1;
      saveToLocal(state.index, "count");
    },
    decrement: (state) => {
      state.index -= 1;
      saveToLocal(state.index, "count");
    },
    saveIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
      saveToLocal(state.index, "count");
    },
  },
});

export const { increment, decrement, saveIndex } = counterSlice.actions;

export default counterSlice.reducer;
