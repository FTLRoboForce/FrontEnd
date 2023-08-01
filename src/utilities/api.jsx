import axios from "axios";

class Api {
  constructor() {
    this.url = "https://brainforce-api-6474d5ae3ec4.herokuapp.com";
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

  async listUsers() {
    return await this.request("GET", `auth/list`);
  }

  async makeQuiz(quiz) {
    return await this.request("POST", `openai/quiz`, quiz);
  }

  async makeFlashcard(flashcard) {
    return await this.request("POST", `openai/flashcards`, flashcard);
  }

  async challenge(challenge) {
    return await this.request("POST", `openai/challenge`, challenge);
  }

  async addQuiz(quiz) {
    return await this.request("POST", `auth/addquiz`, quiz);
  }

  async listQuiz(user) {
    return await this.request("POST", `auth/listquiz`, user);
  }

  async uploadPhoto(user) { 
    return await this.request("POST", `auth/photo`, user);
  }
}
export default new Api();
