import { rtkApi } from "../../API/rtkApi";
import { IUser } from "../../types/types";

const usersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUser[], null>({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});

export const useUsers = usersApi.useGetUsersQuery;
