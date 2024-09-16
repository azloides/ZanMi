import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../config/types";
import { getCountFromLocal, saveCountToLocal } from "../../lib/localStorage";

const isLocalCount = getCountFromLocal("count");

const initialState: CounterSchema = {
  index: isLocalCount,
};

export const counterSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    increment: (state) => {
      saveCountToLocal(state.index, "count");
      state.index += 1;
      saveCountToLocal(state.index, "count");
    },
    decrement: (state) => {
      state.index -= 1;
      saveCountToLocal(state.index, "count");
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
