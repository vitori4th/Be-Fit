import { AxiosInstance } from "axios";
import api from "../utils/api";
import { IRequestLogin } from "../models/IRequestLogin";

export default class UserService {
  constructor(private axios: AxiosInstance) {}

  async login(dataLogin: IRequestLogin) {
    const { data } = await this.axios.post("/login/", dataLogin);
    if (data) {
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("userId", data.user.id);
      console.log(data);
      return true;
    }
    return;
  }

  async logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
  }


}
