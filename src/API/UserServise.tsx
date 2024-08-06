import axios from "axios";
import { IUser } from "../types/types";

export default class UserService {
  static async getAll() {
    const responce = await axios.get<IUser[]>("http://localhost:3000/users");

    return responce;
  }
}
