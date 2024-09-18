import { createSelector } from "@reduxjs/toolkit";
import { getIndex } from "./indexSelector";
import { getUsers } from "./users";
import { IUser } from "../../types/types";

export const getProgileByIndex = createSelector(
  [getIndex, getUsers],
  (index, users): IUser | undefined => users[index]
);
