import { AxiosInstance } from "axios";
import { setCookie, destroyCookie } from 'nookies';
import { IRequestLogin } from "../models/IRequestLogin";

export default class UserService {
  constructor(private axios: AxiosInstance) { }

  async signInRequest(dataLogin: IRequestLogin) {
    const { data } = await this.axios.post("/login/", dataLogin);
    if (data) {
      setCookie(undefined, "nextauth.token", data.token, {
        maxAge: 60 * 60 * 1000, // 1 hour
      });
      console.log(data);
      return data;
    }
    return;
  }

  async logout() {
    destroyCookie(undefined, "nextauth.token");
  }

  async recoverUserInformation() {
    try {
      const { data } = await this.axios.get("/profile/");
      console.log("recoverUserInformation:", data);

      return data;
    } catch (error) {
      console.error("Error recovering user information:", error);
      return null;
    }
  }

  async recoverPassword(token: string, password: string, passwordConfirmation: string) {
    try {
      const response = await this.axios.post("/password/reset", {
        token,
        password,
        passwordConfirmation
      });
      return response.data;
    } catch (error) {
      console.error("Error recovering password:", error);
      return null;
    }
  }

  async forgotPassword(email: string) {
    try {
      const response = await this.axios.post("/password/forgot", {
        email
      });
      return response.data;
    } catch (error) {
      console.error("Error sending password reset email:", error);
      return null;
    }
  }

  async updateUserData(name: string, lastname: string, dateBirth: string, cellphone:string) {
    try {
      const response = await this.axios.put("/profile", {
        name,
        lastname,
        dateBirth,
        cellphone
      });
      return response.data;
    } catch (error) {
      console.error("Error updating user data:", error);
      return null;
    }
  }
}
