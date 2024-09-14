import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";
import { saveArrayToLocal } from "../../lib/localStorage";

export interface UserState {
  users: IUser[];
}

const initialState: UserState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersData: (state, action: PayloadAction<IUser[]>) => {
      const usersData = action.payload;
      saveArrayToLocal(usersData, "users");
      state.users = usersData;
    },
  },
});

export const { setUsersData } = usersSlice.actions;

export default usersSlice.reducer;
