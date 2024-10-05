import { rtkApi } from "../../API/rtkApi";
import { IUser } from "../../types/types";
import {saveToLocal} from '../../lib/localStorage'

const usersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUser[], null>({
      query: () => ({
        url: "/users",
      }),
      async onCacheEntryAdded(arg, {cacheDataLoaded, cacheEntryRemoved}) {
        try {
          const {data} = await cacheDataLoaded
          console.log('data', data)
          saveToLocal(data, 'users')
        } catch (err) {
          console.error('onCacheEntryAdded users', err)
        }

        await cacheEntryRemoved
      }
    }),
  }),
});

export const useUsers = usersApi.useGetUsersQuery;
