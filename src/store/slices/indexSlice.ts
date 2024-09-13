import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../config/types";

const initialState: CounterSchema = {
  index: 0,
};

export const counterSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    increment: (state) => {
      state.index += 1;
    },
    decrement: (state) => {
      state.index -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
