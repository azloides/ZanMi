import { StateSchema } from "./../config/stateSchema";
import { IUser } from "./../../types/types";
import { RootState } from "../config/store";

export const getIndex = (state: RootState) => state.counter.index;

export const getProfileByIndex = (
  state: StateSchema,
  currentIndex: number
): IUser | undefined => state.users.users[currentIndex];
