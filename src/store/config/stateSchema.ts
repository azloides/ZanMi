import { CounterSchema } from "./types";
import { rtkApi } from "../../API/rtkApi";
import { UserState } from "../slices/usersSlice";

export interface StateSchema {
  counter: CounterSchema;
  users: UserState;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
