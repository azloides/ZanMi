import { StateSchema } from "./../config/stateSchema";
import { IUser } from "./../../types/types";
import { RootState } from "../config/store";
import { createSelector } from "@reduxjs/toolkit";

export const getIndex = (state: RootState) => state.counter.index;

export const getUsers = (state: StateSchema) => state.users.users;

// export const getProfileByIndex = (
//   state: StateSchema,
//   currentIndex: number
// ): IUser | undefined => state.users.users[currentIndex];

export const getProfileByIndex = createSelector(
  [getIndex, getUsers],
  (index, users): IUser | undefined => users[index]
);
