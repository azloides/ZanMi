import { RootState } from "../config/store";

export const getIndex = (state: RootState) => state.counter.index;
