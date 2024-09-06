import { CounterSchema } from "./types";
import { rtkApi } from "../../API/rtkApi";

export interface StateSchema {
  counter: CounterSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
