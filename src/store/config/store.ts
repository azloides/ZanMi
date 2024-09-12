import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { rtkApi } from "../../API/rtkApi";
import { counterSlice } from "../slices/indexSlice";
import { StateSchema } from "./stateSchema";
import usersReducer from "../slices/usersSlice";

const rootRedusers: ReducersMapObject<StateSchema> = {
  counter: counterSlice.reducer,
  users: usersReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
};

export const store = configureStore({
  reducer: rootRedusers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
