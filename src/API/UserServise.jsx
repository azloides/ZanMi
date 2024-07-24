import axios from "axios";

export default class UserService {
  static async getAll() {
    const responce = await axios.get("http://localhost:3000/users");
    return responce;
  }
}
