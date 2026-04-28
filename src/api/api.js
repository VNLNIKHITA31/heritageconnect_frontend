import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-url.com", // 🔥 paste your deployed backend link
});

export default API;