import { StateSchema } from "../config/stateSchema";

export const getUsers = (state: StateSchema) => state.users.users;
