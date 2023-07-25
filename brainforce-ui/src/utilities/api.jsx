import axios from "axios";

class Api {
  constructor() {
    this.url = "http://localhost:3001";
    this.token = localStorage.getItem("token") || null;
    this.tokenName = "token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request(method, path, data) {
    const url = `${this.url}/${path}`;
    const headers = {
      "Content-Type": "application/json"
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const response = await axios({
        method,
        url,
        data,
        headers
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }

  async login(creds) {
    console.log(creds);
    return await this.request("POST", "auth/login", creds);
  }

  async register(creds) {
    return await this.request("POST", "auth/register", creds);
  }

  async user(token) {
    return await this.request("POST", `auth/profile`, token);
  }

  async updatePoints(user) {
    return await this.request("POST", `auth/update`, user);
  }
}
export default new Api();
