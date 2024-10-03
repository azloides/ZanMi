import { CounterSchema } from "./types";
import { rtkApi } from "../../API/rtkApi";
import { UsersState } from "../slices/usersSlice";

export interface StateSchema {
  counter: CounterSchema;
  users: UsersState;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
